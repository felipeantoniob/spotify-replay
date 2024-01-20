const getTopGenres = (
  genreFrequencyArray: Record<string, number>,
  limit: number,
): string[] => {
  const topGenresArray = Object.entries(genreFrequencyArray)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map((genre) => genre[0]);

  return topGenresArray;
};

export default getTopGenres;
