/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.infrastructureLogging = { level: 'verbose' } // Для отладки Webpack
    return config
  },
}

module.exports = nextConfig
