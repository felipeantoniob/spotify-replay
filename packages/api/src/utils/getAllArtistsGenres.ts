import type { Artist } from "@spotify/web-api-ts-sdk";

const getAllArtistsGenres = (artists: Artist[]): string[] => {
  let genresArray: string[] = [];

  artists.map((artist) => {
    genresArray = [...genresArray, ...artist.genres];
  });
  return genresArray;
};

export default getAllArtistsGenres;
