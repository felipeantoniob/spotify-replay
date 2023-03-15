import { Dialog } from '@headlessui/react'
import Image from 'next/image'

import { Button } from './Button'
import Modal from './Modal'

const CloseButton = ({ handleClose }: { handleClose: () => void }) => (
  <button
    className="min-h-8 absolute right-2 top-2 z-10 h-8 cursor-pointer rounded-full px-3 text-sm text-on-surface focus-visible:outline-none"
    onClick={handleClose}
  >
    ✕
  </button>
)

type CreatedPlaylistModalProps = {
  isVisible: boolean
  handleClose: () => void
  playlistDetails: SpotifyApi.SinglePlaylistResponse
}

const CreatedPlaylistModal = ({
  isVisible,
  handleClose,
  playlistDetails,
}: CreatedPlaylistModalProps) => {
  return (
    <>
      <Modal isVisible={isVisible} handleClose={handleClose}>
        <Dialog.Panel className="mx-4 flex max-w-xl transform flex-col  items-center justify-center overflow-hidden rounded-lg bg-background pb-8 align-middle shadow-xl transition-all">
          <CloseButton handleClose={handleClose} />
          <Dialog.Title className="relative mt-8 font-sans text-2xl font-semibold text-on-surface">
            Success!
          </Dialog.Title>
          <p className="mt-2 px-4 text-center text-base text-on-surface">
            Your new playlist is now available on Spotify.
          </p>
          <Image
            src={playlistDetails.images[0]?.url ?? ''}
            alt={playlistDetails.name}
            height={160}
            width={160}
            className="mt-2"
          />
          <h6 className="mt-2 px-4 text-center text-sm font-medium text-on-surface">
            {playlistDetails.name}
          </h6>
          <Button intent="spotify" size="large" className="mt-4">
            Open on Spotify
          </Button>
        </Dialog.Panel>
      </Modal>
    </>
  )
}

export default CreatedPlaylistModal
