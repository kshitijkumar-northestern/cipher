const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@cipher/shared', 'geist', '@splinetool/react-spline', '@splinetool/runtime'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@cipher/shared': path.resolve(__dirname, '../shared/src'),
      '@splinetool/react-spline/next': path.resolve(__dirname, '../node_modules/@splinetool/react-spline/dist/react-spline-next.js'),
      '@splinetool/react-spline': path.resolve(__dirname, '../node_modules/@splinetool/react-spline/dist/react-spline.js'),
    };
    return config;
  },
};
module.exports = nextConfig;
