/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix : process.env.NODE_ENV =='production'?'https://avilastyle.com':'http://localhost:3000',
};
export default nextConfig;
