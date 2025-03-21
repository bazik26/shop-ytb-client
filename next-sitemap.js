/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cars-euro.com', // Укажите ваш домен
  generateRobotsTxt: true,
  sitemapSize: 5000,
  trailingSlash: false, // Без слэша в конце URL
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin'], // Исключаемые страницы
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin'], // Исключаемые страницы
      },
    ],
    additionalSitemaps: ['https://cars-euro.com/server-sitemap.xml'],
  },
}
