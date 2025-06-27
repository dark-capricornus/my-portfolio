/** @type {import('next').NextConfig} */
const nextConfig = {
    // No need to modify Webpack for JSON or path aliases
    images:{
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          pathname: '/**'
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          pathname: '/**'
        },
      ]
    }
  };
  
  export default nextConfig;
  