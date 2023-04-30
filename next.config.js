/** @type {import('next').NextConfig} */
import mapConfig from './config/dev';
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapbox_key: mapConfig,
  },
};

module.exports = nextConfig;
