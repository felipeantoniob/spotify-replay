import Image from 'next/image'
import { MdExplicit } from 'react-icons/md'
import { msToMinutesAndSeconds } from '../utils/msToMinutesAndSeconds'

type TrackProps = {
  track: SpotifyApi.TrackObjectFull
  index: number
}

const Track = ({ track, index }: TrackProps): JSX.Element => {
  return (
    <div className="flex h-16 flex-row items-center rounded-md border border-slate-500 ">
      <h6 className="w-12 text-center text-gray-400">{index + 1}</h6>
      <div className="mr-6 flex">
        <Image
          src={track.album.images[0] ? track.album.images[0].url : ''}
          alt="album picture"
          height={50}
          width={50}
          layout="intrinsic"
        />
      </div>
      <div className="flex  h-full flex-col justify-center">
        <h4 className="text-left text-gray-200">{track.name}</h4>
        <h5 className="text-left text-gray-400">
          {track.explicit && (
            <MdExplicit
              size="20px"
              className="mr-2 inline-flex h-full content-center items-center text-gray-400"
            />
          )}
          {track.artists
            .map((artist: SpotifyApi.ArtistObjectSimplified) => {
              return artist.name
            })
            .join(', ')}
        </h5>
      </div>
      <span className="ml-auto mr-4 block text-sm text-gray-400">
        {msToMinutesAndSeconds(track.duration_ms)}
      </span>
    </div>
  )
}

export default Track
