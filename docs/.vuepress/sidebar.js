var fs = require('fs')
var path = require('path')
var rootPath = path.resolve(__dirname,'..')
var rootDirs = fs.readdirSync(rootPath)
var result = {}
rootDirs.forEach(d => {
  if(d.startsWith('.'))return
  var modulePath = path.resolve(rootPath,d)
  if(fs.statSync(modulePath).isFile()) return
  result[`/${d}/`] = []

  var moduleDirs = fs.readdirSync(modulePath)
  moduleDirs.forEach(m => {
    var obj =     {
      title: m,
      collapsable: true,
      children: [
      ]
    }
    var subPath = path.resolve(modulePath,m)
    if(fs.statSync(subPath).isFile()) return
    var files = fs.readdirSync(subPath)
    files.forEach(_ => {
      var name = _.slice(0,_.indexOf('.'))
      obj.children.push([m+'/'+name, name])
    })
    result[`/${d}/`].push(obj)
  })
})





















module.exports = result

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