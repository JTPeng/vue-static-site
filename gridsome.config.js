// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'static-site', // 网页标题
  siteDescription: 'static', // meta content 标签配置  -> seo
  plugins: [], // 插件配置
  templates: {
    Post: [
      {
        path: '/posts/:id',
        component: './src/templates/Post.vue',
      },
    ],
  },
}
