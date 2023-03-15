import Image from 'next/image'
import Slider, { type Settings } from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export const settings: Settings = {
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 5,
  arrows: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
}

type TracksCarouselProps = {
  tracks: SpotifyApi.TrackObjectFull[]
}

const TracksCarousel = ({ tracks }: TracksCarouselProps) => {
  return (
    <div className="mx-4 mt-16 flex flex-col gap-4">
      <h3 className="text-left font-bold text-white">You&apos;ve been loving these lately</h3>
      <Slider {...settings}>
        {tracks.map((track) => (
          <div key={track.id} className="flex flex-col gap-2 p-2 focus-visible:outline-none">
            <Image
              src={track?.album.images[0]?.url ?? ''}
              alt="image"
              width={80}
              height={80}
              className={`aspect-square w-full object-cover`}
            />
            <p className="truncate text-left text-sm font-bold text-white">{track.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TracksCarousel
