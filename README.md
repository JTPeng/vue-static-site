# vue-static-site

基于 Gridsome+Strapi+GraphQL 搭建静态站点

### 起步

- > 官网 https://www.gridsome.cn/
- 安装 Gridsome

```shell
# 使用 yarn
yarn global add @gridsome/cli

# 使用 npm
npm install --global @gridsome/cli


# 查看是否安装成功
gridsome --version

# 创建项目
gridsome create my-gridsome-site
```

### gridsome 项目安装依赖注意事项

- npm i -g node-gyp
- 配置 `node-gyp` 编译环境 https://github.com/nodejs/node-gyp
- 国内环境可能安装失败,所以需要配置 npm 淘宝镜像
  - `npm config set sharp_binary_host "https://npm.taobao.org/mirrors/sharp"`
  - `npm config set sharp_libvips_binary_host "https://npm.taobao.org/mirrors/sharp-libvips"`
- `node-gyp`编译环境仍需支持`python`以及`c++`编译环境，根据不同系统安装不同,具体可参考`https://github.com/nodejs/node-gyp`

### 目录结构

```bash
├── src
│   ├── .temp # build后生成的结果文件
│   ├── components # 公共组件
│   ├── layouts # 布局组件
│   ├── pages # 页面路由组件
│   ├── templates # 模板文件
│   ├── favicon.png # 网站图标
│   └── main.js # 应用入口
├── static # 静态资源存储目录，该目录中的资源不做构建处理
├── README.md
├── gridsome.config.js # 应用配置文件
├── gridsome.server.js # 针对服务端的配置文件
├── package-lock.json
└── package.json
```

### 创建路由页面的方式

- 直接在`pages`创建文件夹
- 通过`gridsome.server`文件的`api`创建

```js
api.createPages(({ createPage }) => {
  createPage({
    path: '/my-page',
    component: './src/templates/MyPage.vue',
  })
})
```

### 动态路由

- 直接在`pages`创建文件夹。如[id].vue，其中 id 就是动态部分
- 通过`gridsome.server`文件的`api`创建

```js
api.createPages(({ createPage }) => {
  createPage({
    path: '/other/:id(\\d+)',
    component: './src/templates/other.vue',
  })
})
```

### Collections 集合

- > 参考集合使用： https://www.gridsome.cn/docs/collections/
- > 参考页面中使用 GraphQL 使用： https://www.gridsome.cn/docs/querying-data/
- 用于`预渲染`动态的数据
- `Api`数据,在`gridsome.server`中直接配置。然后注入到集合,最后页面通过`GraphQL`来获取`Collections`中的数据

### Templates 模板设置
- > 参考: https://www.gridsome.cn/docs/templates/
# Default starter for Gridsome

This is the project you get when you run `gridsome create new-project`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to install default starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌
