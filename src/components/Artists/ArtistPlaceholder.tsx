const ArtistPlaceholder = () => (
  <div role="status" className="mb-12 flex max-w-sm animate-pulse flex-col items-center">
    <div className="h-32 w-32 rounded-full bg-gray-200 dark:bg-gray-700 sm:h-48 sm:w-48"></div>
    <div className="mt-4 h-4 w-48 max-w-[80px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
    <span className="sr-only">Loading...</span>
  </div>
)

export default ArtistPlaceholder
