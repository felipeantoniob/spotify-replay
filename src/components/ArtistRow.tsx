import Image from 'next/image'
import useModal from '../hooks/useModal'
import ArtistModal from './ArtistModal'

const InfoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 16V11M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2Z"
      stroke="#FFFDFD"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.995 8H12.004"
      stroke="#FFFDFD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

type ArtistRowProps = {
  artist: SpotifyApi.ArtistObjectFull
}

const ArtistRow = ({ artist }: ArtistRowProps) => {
  const { isModalShowing, toggleModal } = useModal()

  return (
    <>
      <div className="mb-12 text-center px-4 items-center flex flex-row">
        <Image
          src={artist.images[0] ? artist.images[0].url : ''}
          alt="profile picture"
          draggable="false"
          height={80}
          width={80}
          onClick={toggleModal}
          className="aspect-square cursor-pointer rounded-full object-cover transition-all hover:opacity-50"
        />
        <h3 className="text-white text-base font-bold ml-4">{artist.name}</h3>
        <button
          type="button"
          onClick={toggleModal}
          className="ml-auto px-4 hover:opacity-50 transition-all"
        >
          <InfoIcon />
        </button>
      </div>
      <ArtistModal isVisible={isModalShowing} handleClose={toggleModal} artist={artist} />
    </>
  )
}

export default ArtistRow
