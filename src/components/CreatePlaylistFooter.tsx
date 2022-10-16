import React from 'react'

type CreatePlaylistFooterProps = {
  isVisibleOnScroll: boolean
  title: string
  description: string
}

const CreatePlaylistFooter = ({
  isVisibleOnScroll,
  title,
  description,
}: CreatePlaylistFooterProps) => {
  return (
    <footer
      className={`footer footer-center fixed bottom-[48px] left-0 right-0 translate-y-40 bg-[#121212] p-4 transition-all duration-500 lg:bottom-[48px] ${
        isVisibleOnScroll && 'translate-y-0'
      }`}
    >
      <div className="flex h-16 w-full justify-between px-4">
        <div className="text-left text-gray-200">
          <h5 className="font-bold">{title}</h5>
          <h6>{description}</h6>
        </div>
        <button className="rounded-full bg-green-800 px-4 py-3 font-bold text-gray-200 transition-all hover:bg-green-700">
          Create Playlist
        </button>
      </div>
    </footer>
  )
}

export default CreatePlaylistFooter
