import Image from 'next/image'
import { MdExplicit } from 'react-icons/md'
import { msToMinutesAndSeconds } from '../utils/'

type TrackProps = {
  track: SpotifyApi.TrackObjectFull
  index: number
  showIndex?: boolean
  showDuration?: boolean
  showAlbum?: boolean
}

const Track = ({ track, index, showIndex, showDuration, showAlbum }: TrackProps): JSX.Element => {
  return (
    <div className="flex h-16 flex-row items-center rounded-md transition-all duration-75 hover:bg-gray-500/25">
      {showIndex && <h6 className="w-12 text-center text-gray-400">{index + 1}</h6>}
      <div className="mr-6 flex pl-2">
        <Image
          src={track.album.images[0] ? track.album.images[0].url : ''}
          alt="album picture"
          height={50}
          width={50}
          layout="intrinsic"
        />
      </div>
      <div className="flex h-full flex-1 flex-col justify-center truncate">
        <h4 className="truncate text-left text-gray-200">{track.name}</h4>
        <div className="flex items-center text-left text-gray-400">
          {track.explicit && <MdExplicit size="20px" className="mr-1 h-full text-gray-400" />}
          <h5>
            {track.artists
              .map((artist: SpotifyApi.ArtistObjectSimplified) => {
                return artist.name
              })
              .join(', ')}
          </h5>
        </div>
      </div>
      {showAlbum && (
        <div className="hidden h-full flex-1 flex-col justify-center truncate text-gray-400 md:flex">
          {track.album.name}
        </div>
      )}
      {showDuration && (
        <span className="ml-auto mr-4 block text-sm text-gray-400">
          {msToMinutesAndSeconds(track.duration_ms)}
        </span>
      )}
    </div>
  )
}

export default Track
