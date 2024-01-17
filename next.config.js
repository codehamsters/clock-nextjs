/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/time",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
