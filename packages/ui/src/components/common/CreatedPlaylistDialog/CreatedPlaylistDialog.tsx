import { Button } from "../../ui/Button/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/Dialog/Dialog";
import { Image } from "../../ui/Image/Image";

interface CreatedPlaylistDialogProps {
  useNextImage?: boolean;
}
const CreatedPlaylistDialog = ({
  useNextImage = false,
}: CreatedPlaylistDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
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
          <Image
            useNextImage={useNextImage}
            src="https://placehold.co/160"
            alt="test"
            height={160}
            width={160}
            className="mt-2"
          />
          <p className="mt-2 px-4 text-center text-sm font-medium">
            Top Tracks (Last Month) • 2023 December 17
          </p>
        </div>
        <DialogFooter className="mt-4 items-center sm:justify-center">
          <Button
            type="button"
            variant="secondary"
            className="rounded-full bg-spotify-green"
          >
            Open on Spotify
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { CreatedPlaylistDialog };
