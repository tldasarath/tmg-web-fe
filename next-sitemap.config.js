module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yourwebsite.com',
  generateRobotsTxt: true,
  
 
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
    ],
  },
  
  // Don't index error pages
  exclude: ['/404', '/500'],
  
  // Priority for important pages
  transform: async (config, path) => {
    let priority = 0.7;

    if (path === '') priority = 1.0; // Homepage
    else if (path.includes('/freezone-business') || 
             path.includes('/mainland-business') ||
             path.includes('/offshore-company')) priority = 0.9; // Services

    return {
      loc: `${config.siteUrl}${path}`,
      changefreq: 'weekly',
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};




// module.exports = {
//   siteUrl: process.env.SITE_URL || 'https://yourwebsite.com',
//   generateRobotsTxt: true,
//   robotsTxtOptions: {
//     policies: [
//       {
//         userAgent: '*',
//         allow: '/',

//       },
//     ],
//   },
//   exclude: ['/404', '/500', '/api/*'],
// };