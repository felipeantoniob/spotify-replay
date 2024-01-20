"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { useBoundStore } from "@spotify-replay/store";
import { CreatedPlaylistDialog } from "@spotify-replay/ui/src/components/common/CreatedPlaylistDialog/CreatedPlaylistDialog";
import { FloatingActionButton } from "@spotify-replay/ui/src/components/common/FloatingActionButton/FloatingActionButton";
import { Icon } from "@spotify-replay/ui/src/components/common/Icon/Icon";

import { api } from "../trpc/react";

type TimeRangeType = "long_term" | "medium_term" | "short_term";

const getTimeRangeDescription = (timeRange: TimeRangeType) => {
  switch (timeRange) {
    case "long_term":
      return "(All Time)";
    case "medium_term":
      return "(Last 6 Months)";
    case "short_term":
      return "(Last Month)";
    default:
      return "";
  }
};

const getPlaylistName = (pathname: string, timeRange: TimeRangeType) => {
  switch (pathname) {
    case "/artists":
      return `Top 20 Artists ${getTimeRangeDescription(timeRange)}`;
    case "/tracks":
      return `Top Tracks ${getTimeRangeDescription(timeRange)}`;
    case "/recent":
      return "Recently Played Tracks";
    default:
      return "";
  }
};

const getButtonText = (pathname: string) => {
  switch (pathname) {
    case "/artists":
      return "Create a playlist of your top artists?";
    case "/tracks":
      return "Create a playlist of your top tracks?";
    default:
      return "";
  }
};

const FloatingActionButtonContainer = () => {
  const pathname = usePathname();
  const tracksUriArray = useBoundStore((state) => state.tracksUriArray);
  const timeRange = useBoundStore((state) => state.timeRange);
  const [playlistId, setPlaylistId] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const playlistQuery = api.spotify.getPlaylist.useQuery(
    { playlistId },
    { refetchOnWindowFocus: false, enabled: playlistId.length > 0 },
  );
  const createPlaylist = api.spotify.createPlaylist.useMutation();
  const addTracksToPlaylist = api.spotify.addTracksToPlaylist.useMutation();
  const [isButtonExpanded, setIsButtonExpanded] = useState(false);

  const handleCreatePlaylist = (tracksUriArray: string[]) => {
    if (!tracksUriArray.length) return;
    setIsModalVisible(true);

    createPlaylist.mutate(
      { playlistName: getPlaylistName(pathname, timeRange) },
      {
        onSuccess: (playlistId) => {
          setPlaylistId(playlistId);
          addTracksToPlaylist.mutate(
            { playlistId, tracksUriArray },
            {
              onSuccess: () => {
                void playlistQuery.refetch();
                setIsButtonExpanded(false);
              },
            },
          );
        },
      },
    );
  };

  return (
    <>
      <div className="fixed bottom-4 right-4">
        <FloatingActionButton
          isDisabled={false}
          isExpanded={isButtonExpanded}
          buttonText="Create"
          description={getButtonText(pathname)}
          handleClick={() => handleCreatePlaylist(tracksUriArray)}
          toggleButton={() => setIsButtonExpanded((prev) => !prev)}
          icon={
            <Icon
              className="text-on-tertiary-container"
              id="playlist"
              height="14"
              width="19"
            />
          }
        />
      </div>
      <CreatedPlaylistDialog
        isVisible={isModalVisible}
        handleClose={() => setIsModalVisible(false)}
        playlistImage={
          playlistQuery.data?.images ? playlistQuery.data?.images[0]?.url : ""
        }
        playlistName={playlistQuery.data?.name}
        playlistUrl={playlistQuery.data?.uri}
      />
    </>
  );
};

export default FloatingActionButtonContainer;
