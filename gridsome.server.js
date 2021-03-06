// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')
module.exports = function(api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    // 使用collection集合实现api数据请求的预渲染
    const collection = addCollection('Post')
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/posts')
    for (const item of data) {
			// 添加节点
      collection.addNode({
        id: item.id,
        title: item.title,
        content: item.body,
      })
    }
  })
  // 通过Api创建路由页面
  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    createPage(
      {
        path: '/my-page',
        component: './src/templates/MyPage.vue',
      },
      {
        path: '/users/:id(\\d+)',
        component: './src/templates/Users.vue',
      }
    )
  })
}
