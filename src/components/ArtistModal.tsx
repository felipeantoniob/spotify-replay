import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

type ArtistModalProps = {
  isVisible: boolean
  handleClose: () => void
  artist: SpotifyApi.ArtistObjectFull
}

const ArtistModal = ({ isVisible, handleClose, artist }: ArtistModalProps) => {
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
          <div className="fixed inset-0 bg-black bg-opacity-75 " />
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
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-lg bg-black text-left align-middle shadow-xl transition-all">
                <button
                  className="btn btn-circle btn-sm absolute right-2 top-2 z-10 cursor-pointer"
                  onClick={handleClose}
                >
                  ✕
                </button>
                <Dialog.Title className="relative mb-4 h-32 ">
                  <h1 className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-center text-xl font-medium leading-6 text-gray-100 hover:text-gray-300">
                    {artist.name}
                  </h1>
                </Dialog.Title>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ArtistModal
