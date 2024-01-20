import type { Artist } from "@spotify/web-api-ts-sdk";

import getArtistsOfGenre from "./getArtistsOfGenre";

export interface GenreObject {
  genre: string;
  artists: string[];
}

const getGenreChartData = (genresArray: string[], artists: Artist[]) => {
  const genresArtistsArray: GenreObject[] = [];

  genresArray.map((genre) => {
    const artistsArray = getArtistsOfGenre(artists, genre);
    genresArtistsArray.push({ genre: genre, artists: artistsArray });
  });
  return genresArtistsArray;
};

export default getGenreChartData;
