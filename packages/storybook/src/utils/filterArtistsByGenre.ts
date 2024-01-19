import type { Artist } from "@spotify/web-api-ts-sdk";

function filterArtistsByGenre(artists: Artist[], genre: string) {
  return artists
    .filter((artist) => artist.genres.includes(genre))
    .map((artist) => artist.name);
}

export default filterArtistsByGenre;
