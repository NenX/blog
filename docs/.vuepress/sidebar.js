const fs = require('fs')
const path = require('path')
const rootPath = path.resolve(__dirname, '..')

const sidebar = {}
const nav = []


fs.readdirSync(rootPath)
  .filter(_ => !_.startsWith('.'))
  .map(_ => [_, path.resolve(rootPath, _)])
  .filter(_ => fs.statSync(_[1]).isDirectory())
  .forEach(([text, absPath]) => {
    const link = `/${text}/`
    nav.push({ text, link })
    sidebar[link] = []
    const subDirs =
      fs.readdirSync(absPath)
        .map(_ => [_, path.resolve(absPath, _)])
        .filter(_ => fs.statSync(_[1]).isDirectory());

    subDirs.forEach(([subName, absSubPath]) => {
      const obj = {
        title: subName,
        collapsable: true,
        children: []
      }

      const files = fs.readdirSync(absSubPath)
      files.forEach(_ => {
        const mdName = _.slice(0, _.indexOf('.'))
        obj.children.push([subName + '/' + mdName, mdName])
      })
      sidebar[link].push(obj)
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