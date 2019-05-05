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
    sidebar: {
      '/learning/': [
        {
          title: 'linux',
          collapsable: false,
          children: [
           [ 'linux/base','基础知识']
          ]
        },
        {
          collapsable: false,

          title: 'cpp',
          children: [
            ['cpp/a','a']
          ]
        }

      ],

      // '/linux/': [
      //   '',      /* /bar/ */
      //   'a', /* /bar/three.html */
      //   'b'   /* /bar/four.html */
      // ]
    }
  }
}