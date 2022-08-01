/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapbox_key: 'pk.eyJ1Ijoic3VyYmhpMTUxNiIsImEiOiJjbDZhaXR3dW8wMHh1M2RsNzhtM3ViM2EzIn0.Uj9CHs81WVS9AFszLAOnBA'
  }
}

module.exports = nextConfig
