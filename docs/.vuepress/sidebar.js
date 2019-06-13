module.exports = {
  '/learning/': [
    {
      title: 'linux',
      collapsable: false,
      children: [
        ['linux/base', '基础知识']
      ]
    },
    {
      collapsable: false,
      title: 'cpp',
      children: [
        ['cpp/a', 'a'],
        ['cpp/库函数知识', '库函数知识'],

      ]
    },
    {
      collapsable: false,
      title: 'webpack',
      children: [
        ['webpack/fundamental', '基础']
      ]
    }

  ],

  // '/linux/': [
  //   '',      /* /bar/ */
  //   'a', /* /bar/three.html */
  //   'b'   /* /bar/four.html */
  // ]
}