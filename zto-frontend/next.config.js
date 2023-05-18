/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com/',
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

// images: {
//   remotePatterns: [
//     {
//       protocol: "https",
//       hostname: "m.media-amazon.com",
//       pathname: "/**",
//     },
//   ],
// },