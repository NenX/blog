var fs = require('fs')
var path = require('path')
var rootPath = path.resolve(__dirname, '..')
var rootDirs = fs.readdirSync(rootPath)
var sidebar = {}
const nav = []
rootDirs.forEach(navText => {
  if (navText.startsWith('.')) return
  var absNavPath = path.resolve(rootPath, navText)
  if (fs.statSync(absNavPath).isFile()) return
  const navLink = `/${navText}/`
  sidebar[navLink] = []
  nav.push({ text: navText, link: navLink })
  var moduleDirs = fs.readdirSync(absNavPath)

  moduleDirs.forEach(m => {

    var obj = {
      title: m,
      collapsable: true,
      children: [
      ]
    }
    sidebar[navLink].push(obj)
    var subPath = path.resolve(absNavPath, m)
    if (fs.statSync(subPath).isFile()) return
    var files = fs.readdirSync(subPath)

    files.forEach(_ => {
      if (fs.statSync(path.resolve(subPath, _)).isDirectory()) return
      var name = _.slice(0, _.lastIndexOf('.'))
      obj.children.push([m + '/' + name, name])
    })
    obj.children.sort((a, b) => (parseInt(a[1]) - parseInt(b[1])) || 1)
    // console.log(obj)

  })

})


module.exports = { sidebar, nav }

a = {
  '/fe/': [
    {
      title: 'react',
      collapsable: false,
      children: [
        ['react/1', '1']
      ]
    },
    {
      collapsable: false,
      title: 'webpack',
      children: [
        ['webpack/fundamental', '基础']
      ]
    },
    {
      collapsable: false,
      title: 'nodejs',
      children: [
        ['nodejs/调试', '调试']
      ]
    }

  ],
  '/learning/': [
    {
      title: 'linux',
      collapsable: false,
      children: [
        ['linux/base', '基础知识'],
      ]
    },
    {
      collapsable: false,
      title: 'cpp',
      children: [
        ['cpp/a', 'a'],
        ['cpp/库函数知识', '库函数知识'],

      ]
    }

  ],
  // '/linux/': [
  //   '',      /* /bar/ */
  //   'a', /* /bar/three.html */
  //   'b'   /* /bar/four.html */
  // ]
}