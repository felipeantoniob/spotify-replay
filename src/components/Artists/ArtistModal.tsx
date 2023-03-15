import { Dialog } from '@headlessui/react'

import Modal from '../UI/Modal'

const CloseButton = ({ handleClose }: { handleClose: () => void }) => (
  <button
    className="min-h-8 absolute right-2 top-2 z-10 h-8 cursor-pointer rounded-full px-3 text-sm text-on-primary-container focus-visible:outline-none"
    onClick={handleClose}
  >
    ✕
  </button>
)

type ArtistModalProps = {
  isVisible: boolean
  handleClose: () => void
  artist: SpotifyApi.ArtistObjectFull
}

const ArtistModal = ({ isVisible, handleClose, artist }: ArtistModalProps) => {
  return (
    <Modal isVisible={isVisible} handleClose={handleClose}>
      <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-lg bg-primary-container text-left align-middle shadow-xl transition-all">
        <CloseButton handleClose={handleClose} />
        <Dialog.Title className="relative mb-4 h-32 ">
          <h1 className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-center text-xl font-medium leading-6 text-on-primary-container">
            {artist.name}
          </h1>
        </Dialog.Title>
      </Dialog.Panel>
    </Modal>
  )
}

export default ArtistModal
