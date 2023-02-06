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
    <div className="group flex py-2 flex-row rounded-md px-2 transition-all duration-75 hover:bg-gray-500/25 ">
      {showIndex && (
        <div
          onClick={() => {
            setUri(track.id)
            setIsPlaying(true)
          }}
          className="cursor-pointer"
        >
          <h6 className="flex w-12 items-center justify-center text-white text-sm h-full">
            <div className="group-hover:hidden">{index + 1}</div>
            <BsPlayFill size="20px" className="hidden group-hover:block" />
          </h6>
        </div>
      )}
      <div className="flex shrink-0">
        <Image
          src={track.album.images[0] ? track.album.images[0].url : ''}
          alt="album picture"
          height={80}
          width={80}
        />
      </div>
      <div className="flex flex-1 flex-col justify-evenly truncate px-4 ">
        <div className="flex flex-row items-center">
          <h2 className="truncate text-left text-white font-bold text-sm">{track.name}</h2>
          {showDuration && (
            <p className="text-base font-light ml-auto">
              {msToMinutesAndSeconds(track.duration_ms)}
            </p>
          )}
        </div>
        <div className="flex items-center truncate text-left text-white">
          {track.explicit && <MdExplicit size="16px" className="mr-1 h-full shrink-0 text-white" />}
          <h4 className="truncate text-sm">
            {track.artists
              .map((artist: SpotifyApi.ArtistObjectSimplified) => {
                return artist.name
              })
              .join(', ')}
          </h4>
        </div>
        {showAlbum && <h6 className="text-sm text-white truncate">{track.album.name}</h6>}
      </div>
      {/* {showAlbum && (
        <div className="hidden h-full flex-1 flex-col justify-center truncate text-sm text-white md:flex">
          {track.album.name}
        </div>
      )} */}
      {/* {showDuration && (
        <div className="px-4 text-sm text-white pt-2">
          {msToMinutesAndSeconds(track.duration_ms)}
        </div>
      )} */}
    </div>
  )
}

export default Track
