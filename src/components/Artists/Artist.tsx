import Image from 'next/image'

import useModal from '../../hooks/useModal'
import ArtistModal from './ArtistModal'

type ArtistProps = {
  artist: SpotifyApi.ArtistObjectFull
}

const Artist = ({ artist }: ArtistProps) => {
  const { isModalShowing, toggleModal } = useModal()

  return (
    <>
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        <Image
          src={artist.images[0]?.url ?? ''}
          alt="profile picture"
          draggable="false"
          height={128}
          width={128}
          onClick={toggleModal}
          className="h-32 w-32 rounded-full object-cover transition-all sm:h-48 sm:w-48"
        />
        <h3 className="text-md font-medium text-white">{artist.name}</h3>
      </div>
      <ArtistModal isVisible={isModalShowing} handleClose={toggleModal} artist={artist} />
    </>
  )
}

export default Artist
