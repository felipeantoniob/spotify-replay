import Image from 'next/image'
import { BsPlayFill } from 'react-icons/bs'
import { MdExplicit } from 'react-icons/md'
import { twMerge } from 'tailwind-merge'

import { useBoundStore } from '../../store/index'
import { msToMinutesAndSeconds } from '../../utils'
import { Icon } from '../UI/Icon'

type TrackProps = {
  track: SpotifyApi.TrackObjectFull
  index: number
  showIndex?: boolean
  showDuration?: boolean
  showAlbum?: boolean
}

const Track = ({ track, index, showIndex, showDuration, showAlbum }: TrackProps): JSX.Element => {
  const uri = useBoundStore((state) => state.uri)
  const setUri = useBoundStore((state) => state.setUri)
  const isPlaying = useBoundStore((state) => state.isPlaying)
  const setIsPlaying = useBoundStore((state) => state.setIsPlaying)

  return (
    <div
      className={twMerge(
        'group my-2 flex flex-row rounded-md text-on-primary transition-all duration-75 hover:bg-on-primary-container/25',
        uri === track.id &&
          'bg-on-primary-container text-tertiary-container hover:bg-on-primary-container'
      )}
    >
      {showIndex && (
        <button
          onClick={() => {
            setUri(track.id)
            setIsPlaying(true)
          }}
          className="flex h-full w-10 cursor-pointer items-center justify-center self-center"
        >
          {uri !== track.id && <div className="text-sm group-hover:hidden">{index + 1}</div>}
          {uri !== track.id && <BsPlayFill size="20px" className="hidden group-hover:block" />}
          {uri === track.id && !isPlaying && <BsPlayFill size="20px" />}
          {uri === track.id && isPlaying && <Icon id="playing" width="12" height="14" />}
        </button>
      )}
      <div className={twMerge('flex flex-1 flex-row overflow-hidden transition-all')}>
        <div className="flex shrink-0">
          <Image
            src={track.album.images[0] ? track.album.images[0].url : ''}
            alt="album picture"
            height={80}
            width={80}
          />
        </div>
        <div className={'flex flex-1 flex-col justify-center gap-1 truncate px-4'}>
          <div className="flex flex-row items-center">
            <h2 className="truncate text-left text-sm font-medium ">{track.name}</h2>
          </div>
          <div className="flex items-center truncate text-left ">
            {track.explicit && <MdExplicit size="16px" className="mr-1 h-full shrink-0 " />}
            <h4 className="truncate text-sm font-medium">
              {track.artists
                .map((artist: SpotifyApi.ArtistObjectSimplified) => {
                  return artist.name
                })
                .join(', ')}
            </h4>
          </div>
        </div>
        {showAlbum && (
          <div className="hidden h-full flex-1 flex-col justify-center truncate text-sm md:flex">
            {track.album.name}
          </div>
        )}
        {showDuration && (
          <div className="self-center px-4 text-sm">{msToMinutesAndSeconds(track.duration_ms)}</div>
        )}
      </div>
    </div>
  )
}

export default Track
