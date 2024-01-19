/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@spotify-replay/storybook"],
  images: {
    domains: [
      "i.scdn.co",
      "mosaic.scdn.co",
      "seeded-session-images.scdn.co",
      "blend-playlist-covers.spotifycdn.com",
      "lineup-images.scdn.co",
      "newjams-images.scdn.co",
      "thisis-images.scdn.co",
      "placehold.co",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.scdn.com",
      },
      {
        protocol: "https",
        hostname: "**.spotify.com",
      },
    ],
  },
};
