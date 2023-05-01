/** @type {import('next').NextConfig} */
const mapbox_key = require('./config/dev');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapbox_key,
  },
};

module.exports = nextConfig;
