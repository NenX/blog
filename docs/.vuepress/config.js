var sidebar = require('./sidebar')
module.exports = {
  base: '/blog/',
  title: 'My Blog',
  description: 'Just playing around',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'learning', link: '/learning/' },
      { text: '前端', link: '/fe/' },
      { text: 'about', link: '/about' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar
  },
  markdown: {
    lineNumbers: true
  }
}