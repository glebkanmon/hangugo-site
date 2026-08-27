import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/hangugo-site',
  assetPrefix: '/hangugo-site/',
  trailingSlash: true,
};

export default nextConfig;
