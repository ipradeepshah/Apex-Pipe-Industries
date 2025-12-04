/**@type {import('next-sitemap').Iconfig} */
module.exports = {
  siteUrl: 'https://www.pradeepshah.com.np',
  generateRobotsTxt: true,  // (optional)
  changefreq: 'daily', // (optional)
  priority: 0.7, // (optional)
  sitemapSize: 7000, // (optional, default to 5000)
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
        { userAgent: 'Bingbot', allow: '/' },
        { userAgent: 'Slurp', allow: '/' },
        { userAgent: 'DuckDuckBot', allow: '/' },
        { userAgent: 'Baiduspider', allow: '/' },
        { userAgent: 'YandexBot', allow: '/' },
        { userAgent: 'Sogou', allow: '/' },
        { userAgent: 'Exabot', allow: '/' },
        { userAgent: 'ia_archiver', allow: '/' },
    ],
    additionalSitemaps: [
        'https://www.pradeepshah.com.np/sitemap-0.xml',
        'https://www.pradeepshah.com.np/sitemap-1.xml',
        'https://www.pradeepshah.com.np/sitemap-2.xml',
        'https://www.pradeepshah.com.np/sitemap-3.xml',
        'https://www.pradeepshah.com.np/sitemap-4.xml',
        ],
    },      

  }

// This configuration file is used to generate a sitemap for the website.
// It is used with the next-sitemap package in a Next.js application.
// The configuration includes options for generating robots.txt, setting the site URL,
// defining change frequency, priority, and sitemap size.
// It also specifies policies for various user agents and includes additional sitemaps.
// It specifies the site URL, robots.txt options, and additional sitemaps.