var { sidebar, nav } = require('./sidebar')
module.exports = {
  base: '/blog/',
  title: '无味咸鱼',
  description: 'Python linux c++ nodejs git 前端',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      ...nav,
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar
  },
  markdown: {
    // lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom']
}