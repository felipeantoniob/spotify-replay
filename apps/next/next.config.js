/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@spotify-replay/auth",
    "@spotify-replay/api",
    "@spotify-replay/store",
    "@spotify-replay/ui",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.scdn.co",
      },
      {
        protocol: "https",
        hostname: "**.spotify.com",
      },
      {
        protocol: "https",
        hostname: "**.spotifycdn.com",
      },
    ],
  },
};

export default nextConfig;
