/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites(){
    return[
      {
        source:"/api/:path*",
        destination:"https://todo-api-proj.vercel.app/api/:path*"
        //"http://localhost:3001/api/:path*"
      }
    ];
  }
}

module.exports = nextConfig
