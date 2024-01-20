const getGenreFrequency = (genresArray: string[]): Record<string, number> => {
  const genreFrequency: Record<string, number> = {};
  genresArray.map((genre) => {
    genreFrequency[genre] = (genreFrequency[genre] ?? 0) + 1;
  });
  return genreFrequency;
};

export default getGenreFrequency;
