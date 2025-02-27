/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Отключает серверную оптимизацию изображений
  },
  trailingSlash: true,
};
  
  export default nextConfig;
  