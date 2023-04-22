/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    images: {
      remotePatterns: [
        {
          hostname: 'www.datocms-assets.com',
        },
      ],
    },
  },
};

module.exports = nextConfig;
