/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@spotify-replay/auth",
    "@spotify-replay/api",
    "@spotify-replay/store",
    "@spotify-replay/ui",
  ],
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

export default nextConfig;
