/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
      },
    ],
  },
  redirects: [
    {
      source: '/blog/1',
      destination: '/blog/should-web-developers-learn-wordpress',
      permanent: true,
    },
  ],
};

export default nextConfig;
