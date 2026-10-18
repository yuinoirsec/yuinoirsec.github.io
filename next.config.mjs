/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a project subpath (e.g. username.github.io/subfolder), set basePath
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
