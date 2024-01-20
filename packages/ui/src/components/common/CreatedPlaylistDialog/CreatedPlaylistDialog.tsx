import { Button } from "../../ui/Button/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../ui/Dialog/Dialog";
import { Image } from "../../ui/Image/Image";
import { Skeleton } from "../../ui/Skeleton/Skeleton";

interface CreatedPlaylistDialogProps {
  isVisible: boolean;
  playlistName?: string;
  playlistImage?: string;
  playlistUrl?: string;
  useNextImage?: boolean;
  handleClose: () => void;
}
const CreatedPlaylistDialog = ({
  isVisible,
  playlistName,
  playlistImage,
  playlistUrl,
  useNextImage = false,
  handleClose,
}: CreatedPlaylistDialogProps) => {
  return (
    <Dialog open={isVisible} onOpenChange={handleClose}>
      <DialogContent className="text-center text-on-surface sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center font-sans text-2xl font-semibold">
            Success!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Your new playlist is now available on Spotify.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center">
          {playlistImage ? (
            <Image
              useNextImage={useNextImage}
              src={playlistImage}
              alt={playlistName}
              height={160}
              width={160}
              className="mt-2"
            />
          ) : (
            <Skeleton className="mt-2 h-[160px] w-[160px] bg-gray-500" />
          )}
          {playlistName ? (
            <p className="mt-2 px-4 text-center text-sm font-medium">
              {playlistName}
            </p>
          ) : (
            <Skeleton className="mt-3 h-4 w-64" />
          )}
        </div>
        <DialogFooter className="mt-2 items-center sm:justify-center">
          <Button
            asChild
            disabled={!playlistUrl}
            type="button"
            variant="secondary"
            className="rounded-full bg-spotify-green hover:bg-spotify-green/80"
          >
            <a href={playlistUrl} target="_blank" rel="noreferrer noopener">
              Open on Spotify
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { CreatedPlaylistDialog };
