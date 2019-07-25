var sidebar  = require('./sidebar')
module.exports = {
  base:'/blog/',
  title: 'Hello VuePress',
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