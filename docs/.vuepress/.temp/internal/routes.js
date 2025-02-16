export const redirects = JSON.parse("{\"/preview/custom-component.example.html\":\"/article/gkj7cw95/\",\"/preview/markdown.html\":\"/article/ercquaji/\",\"/notes/demo/bar.html\":\"/demo/75y6le5g/\",\"/notes/demo/foo.html\":\"/demo/0q45qao8/\",\"/notes/demo/\":\"/demo/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/gkj7cw95/", { loader: () => import(/* webpackChunkName: "article_gkj7cw95_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/article/gkj7cw95/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/ercquaji/", { loader: () => import(/* webpackChunkName: "article_ercquaji_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/article/ercquaji/index.html.js"), meta: {"title":"Markdown"} }],
  ["/demo/75y6le5g/", { loader: () => import(/* webpackChunkName: "demo_75y6le5g_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/demo/75y6le5g/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/0q45qao8/", { loader: () => import(/* webpackChunkName: "demo_0q45qao8_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/demo/0q45qao8/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
