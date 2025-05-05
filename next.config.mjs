/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("http://cricketsasa.ca/cricket/assets/teams/**")],
  },
};

export default nextConfig;
