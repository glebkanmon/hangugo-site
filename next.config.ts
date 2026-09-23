import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
if (basePath !== '' && basePath !== '/hangugo-site') throw new Error('Unsupported deployment base path');
const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
};
export default nextConfig;
