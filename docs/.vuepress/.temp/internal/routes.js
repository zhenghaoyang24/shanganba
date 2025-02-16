export const redirects = JSON.parse("{\"/preview/custom-component.example.html\":\"/article/xi31zf7t/\",\"/preview/markdown.html\":\"/article/255pkrd3/\",\"/notes/demo/bar.html\":\"/demo/r4myo8jp/\",\"/notes/demo/foo.html\":\"/demo/kaa9yebg/\",\"/notes/demo/\":\"/demo/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/xi31zf7t/", { loader: () => import(/* webpackChunkName: "article_xi31zf7t_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/article/xi31zf7t/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/255pkrd3/", { loader: () => import(/* webpackChunkName: "article_255pkrd3_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/article/255pkrd3/index.html.js"), meta: {"title":"Markdown"} }],
  ["/demo/r4myo8jp/", { loader: () => import(/* webpackChunkName: "demo_r4myo8jp_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/demo/r4myo8jp/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/kaa9yebg/", { loader: () => import(/* webpackChunkName: "demo_kaa9yebg_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/demo/kaa9yebg/index.html.js"), meta: {"title":"foo"} }],
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
