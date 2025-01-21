/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://zoan.co.id",
  generateRobotsTxt: true,
  priority: 1,
  changefreq: "daily",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/']
      },
      {
        userAgent: 'Yandex',
        disallow: ['/'],
      },
    ],
    additionalSitemaps: [
      'https://zoan.co.id/sitemap.xml',
      'https://zoan.co.id/sitemap-0.xml',
    ],
  },
};
