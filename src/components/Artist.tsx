import Image from 'next/image'
import useModal from '../hooks/useModal'
import ArtistModal from './ArtistModal'

const Artist = ({ ...artist }: SpotifyApi.ArtistObjectFull) => {
  const { isModalShowing, toggleModal } = useModal()

  return (
    <>
      <div className="mb-12 text-center flex flex-col items-center">
        <Image
          src={artist.images[0] ? artist.images[0].url : ''}
          alt="profile picture"
          draggable="false"
          height={200}
          width={200}
          onClick={toggleModal}
          className="img-artist-profile h-[200px] w-[200px] max-h-[200px] max-w-[200px] cursor-pointer rounded-full object-cover transition-all hover:opacity-50"
        />
        <h3 className="pt-4 text-gray-200">{artist.name}</h3>
      </div>
      <ArtistModal isVisible={isModalShowing} handleClose={toggleModal} artist={artist} />
    </>
  )
}

export default Artist
