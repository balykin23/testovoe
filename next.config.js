/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router включен по умолчанию в Next.js 13+
  images: {
    // Разрешаем загрузку изображений с внешних доменов
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
