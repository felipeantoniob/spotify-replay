import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { settings } from './TracksCarousel'

type ArtistsCarouselProps = {
  artists: SpotifyApi.ArtistObjectFull[]
}

const ArtistsCarousel = ({ artists }: ArtistsCarouselProps) => {
  return (
    <div className="mx-4 mt-16 flex flex-col gap-4">
      <h3 className="text-left font-bold text-white">Artists you come back to</h3>
      <Slider {...settings}>
        {artists.map((artist) => (
          <div key={artist.id} className="flex flex-col gap-2 p-2">
            <Image
              src={artist.images[0]?.url ?? ''}
              alt="image"
              width={80}
              height={80}
              className="aspect-square w-full rounded-full object-cover"
            />
            <p className="truncate text-sm font-bold text-white">{artist.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ArtistsCarousel
