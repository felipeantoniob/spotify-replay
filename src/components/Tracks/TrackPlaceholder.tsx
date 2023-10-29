import { Icon } from '../UI/Icon'

const TrackPlaceholder = () => {
  return (
    <div className="group my-2 flex animate-pulse flex-row  rounded-md px-2 transition-all duration-75 ">
      <div className="cursor-pointer">
        <h6 className="flex h-full w-12 items-center justify-center text-sm text-white">
          <div className="h-4 w-6 rounded-full bg-gray-500 group-hover:hidden" />
          <Icon id="play" width={20} height={20} className="hidden group-hover:block" />
        </h6>
      </div>
      <div className="flex flex-1 flex-row overflow-hidden transition-all group-hover:rounded-md group-hover:bg-[#895EDB]">
        <div className="flex shrink-0">
          <div className="h-20 w-20 bg-gray-500" />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-1 truncate px-4">
          <div className="flex flex-row items-center">
            <h2 className="w-48 truncate rounded-full bg-gray-500 text-left text-sm font-medium text-gray-500">
              Title
            </h2>
          </div>
          <div className="flex items-center truncate text-left text-white">
            <h4 className="w-32 truncate rounded-full bg-gray-500 text-sm font-medium text-gray-500">
              Artist
            </h4>
          </div>
        </div>
        <div className="hidden flex-1 flex-col justify-center self-center truncate  text-sm md:flex">
          <div className="w-32 rounded-full bg-gray-500 text-gray-500">Album</div>
        </div>
        <div className="self-center rounded-full bg-gray-500 px-4 text-sm text-gray-500 ">0:00</div>
      </div>
    </div>
  )
}

export default TrackPlaceholder
