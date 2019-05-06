var sidebar  = require('./sidebar')
module.exports = {
  base:'/blog/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'learning', link: '/learning/' },
      { text: 'about', link: '/about' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar
  }
}