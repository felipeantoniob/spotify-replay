import type { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";

console.log("AUTH SPOTIFY ID");
console.log(process.env.AUTH_SPOTIFY_ID);

if (!process.env.AUTH_SPOTIFY_ID) {
  throw new Error("Missing AUTH_SPOTIFY_ID");
}

if (!process.env.AUTH_SPOTIFY_SECRET) {
  throw new Error("Missing AUTH_SPOTIFY_SECRET");
}

const spotifyProfile = SpotifyProvider({
  clientId: process.env.AUTH_SPOTIFY_ID,
  clientSecret: process.env.AUTH_SPOTIFY_SECRET,
});

const authURL = new URL("https://accounts.spotify.com/authorize");

const scopes = [
  // "ugc-image-upload",
  "user-read-playback-state",
  "user-modify-playback-state",
  // "user-read-currently-playing",
  "streaming",
  // "app-remote-control",
  "user-read-email",
  "user-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "user-library-modify",
  "user-library-read",
  "user-top-read",
  // "user-read-playback-position",
  "user-read-recently-played",
  "user-follow-read",
  // "user-follow-modify",
];

authURL.searchParams.append("scope", scopes.join(" "));

spotifyProfile.authorization = authURL.toString();

export default spotifyProfile;

export async function refreshAccessToken(token: JWT) {
  try {
    const response = await fetch(authURL, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const refreshedTokens = (await response.json()) as JWT;

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      access_token: refreshedTokens.access_token,
      token_type: refreshedTokens.token_type,
      expires_at: refreshedTokens.expires_at,
      expires_in:
        ((refreshedTokens.expires_at as number) ?? 0) - Date.now() / 1000,
      refresh_token: refreshedTokens.refresh_token ?? token.refresh_token,
      scope: refreshedTokens.scope,
    };
  } catch (error) {
    console.error(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}
