import Image from 'next/image'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

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
    <Transition appear show={isVisible} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-lg  bg-[#121212] align-middle shadow-xl transition-all flex flex-col justify-center items-center">
                <button
                  className="btn btn-circle btn-sm absolute right-2 top-2 z-10 cursor-pointer"
                  onClick={handleClose}
                >
                  ✕
                </button>
                <Dialog.Title className="relative mt-12 text-2xl font-semibold">
                  Success!
                </Dialog.Title>
                <p>Your new Playlist is now available on Spotify.</p>
                {playlistDetails.images[0] && (
                  <Image
                    src={playlistDetails.images[0].url}
                    alt={playlistDetails.name}
                    height={400}
                    width={400}
                    className="mt-4 rounded-lg"
                  />
                )}
                <h6 className="mt-4 text-xl font-bold">{playlistDetails.name}</h6>
                <button className="mt-8 mb-8 rounded-full bg-green-800 px-4 py-3  font-bold text-gray-200 transition-all hover:bg-green-700">
                  Open on Spotify
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default CreatedPlaylistModal
