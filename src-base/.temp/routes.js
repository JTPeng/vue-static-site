const c1 = () => import(/* webpackChunkName: "page--src-pages-user-id-vue" */ "E:\\selfDemo\\Test\\vueTest\\static-site\\vue-static-site\\src\\pages\\user\\[id].vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "E:\\selfDemo\\Test\\vueTest\\static-site\\vue-static-site\\src\\templates\\Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-post1-vue" */ "E:\\selfDemo\\Test\\vueTest\\static-site\\vue-static-site\\src\\pages\\Post1.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-post2-vue" */ "E:\\selfDemo\\Test\\vueTest\\static-site\\vue-static-site\\src\\pages\\Post2.vue")
const c5 = () => import(/* webpackChunkName: "page--src-templates-my-page-vue" */ "E:\\selfDemo\\Test\\vueTest\\static-site\\vue-static-site\\src\\templates\\MyPage.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-foo-vue" */ "E:\\selfDemo\\Test\\vueTest\\static-site\\vue-static-site\\src\\pages\\Foo.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "E:\\selfDemo\\Test\\vueTest\\static-site\\vue-static-site\\src\\pages\\About.vue")
const c8 = () => import(/* webpackChunkName: "page--node-modules-gridsome-0-7-23-gridsome-app-pages-404-vue" */ "E:\\selfDemo\\Test\\vueTest\\static-site\\vue-static-site\\node_modules\\_gridsome@0.7.23@gridsome\\app\\pages\\404.vue")
const c9 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "E:\\selfDemo\\Test\\vueTest\\static-site\\vue-static-site\\src\\pages\\Index.vue")

export default [
  {
    name: "__user_id",
    path: "/user/:id",
    component: c1,
    meta: {
      dataPath: "/user/_id.json",
      dynamic: true
    }
  },
  {
    path: "/posts/:id/",
    component: c2
  },
  {
    path: "/post1/",
    component: c3
  },
  {
    path: "/post2/",
    component: c4
  },
  {
    path: "/my-page/",
    component: c5
  },
  {
    path: "/foo/",
    component: c6
  },
  {
    path: "/about/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
