import Image from 'next/image'
import { BsPlayFill } from 'react-icons/bs'
import { MdExplicit } from 'react-icons/md'
import { useBoundStore } from '../store/index'
import { msToMinutesAndSeconds } from '../utils/'

type TrackProps = {
  track: SpotifyApi.TrackObjectFull
  index: number
  showIndex?: boolean
  showDuration?: boolean
  showAlbum?: boolean
}

const Track = ({ track, index, showIndex, showDuration, showAlbum }: TrackProps): JSX.Element => {
  const setUri = useBoundStore((state) => state.setUri)
  const setIsPlaying = useBoundStore((state) => state.setIsPlaying)

  return (
    <div className="group flex h-16 flex-row items-center rounded-md px-2 transition-all duration-75 hover:bg-gray-500/25 ">
      {showIndex && (
        <div
          onClick={() => {
            setUri(track.id)
            setIsPlaying(true)
          }}
          className="cursor-pointer"
        >
          <h6 className="flex w-12 items-center justify-center text-gray-400">
            <div className="group-hover:hidden">{index + 1}</div>
            <BsPlayFill size="20px" className="hidden group-hover:block" />
          </h6>
        </div>
      )}
      <div className="mr-6 flex shrink-0">
        <Image
          src={track.album.images[0] ? track.album.images[0].url : ''}
          alt="album picture"
          height={50}
          width={50}
        />
      </div>
      <div className="flex h-full flex-1 flex-col justify-center truncate pr-4">
        <h4 className="truncate text-left text-gray-200">{track.name}</h4>
        <div className="flex items-center truncate text-left text-gray-400">
          {track.explicit && (
            <MdExplicit size="20px" className="mr-1 h-full shrink-0 text-gray-400" />
          )}
          <h2 className="truncate">
            {track.artists
              .map((artist: SpotifyApi.ArtistObjectSimplified) => {
                return artist.name
              })
              .join(', ')}
          </h2>
        </div>
      </div>
      {showAlbum && (
        <div className="hidden h-full flex-1 flex-col justify-center truncate text-gray-400 md:flex">
          {track.album.name}
        </div>
      )}
      {showDuration && (
        <span className="ml-auto mr-4 block pl-4 text-sm text-gray-400">
          {msToMinutesAndSeconds(track.duration_ms)}
        </span>
      )}
    </div>
  )
}

export default Track
