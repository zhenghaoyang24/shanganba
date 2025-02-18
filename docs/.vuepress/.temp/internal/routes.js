export const redirects = JSON.parse("{\"/notes/choice/%E4%BB%8B%E7%BB%8D.html\":\"/choice/awcrsw15/\",\"/notes/prepare/%E4%B8%BA%E4%BB%80%E4%B9%88.html\":\"/prepare/nag2emfx/\",\"/notes/remember/%E9%AB%98%E9%A2%91%E6%88%90%E8%AF%AD/%E6%88%90%E8%AF%AD%E5%AF%BC%E8%88%AA.html\":\"/choice/cydaohang/\",\"/notes/remember/%E9%AB%98%E9%A2%91%E6%88%90%E8%AF%AD/%E9%AB%98%E9%A2%91%E6%88%90%E8%AF%AD.html\":\"/remember/nageemfx/\",\"/notes/prepare/%E8%A1%8C%E6%B5%8B%E4%B8%8E%E8%81%8C%E6%B5%8B%E7%9A%84%E5%8C%BA%E5%88%AB.html\":\"/prepare/ezyvvrta/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/choice/awcrsw15/", { loader: () => import(/* webpackChunkName: "choice_awcrsw15_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/choice/awcrsw15/index.html.js"), meta: {"title":"介绍"} }],
  ["/prepare/nag2emfx/", { loader: () => import(/* webpackChunkName: "prepare_nag2emfx_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/prepare/nag2emfx/index.html.js"), meta: {"title":"考前须知"} }],
  ["/choice/cydaohang/", { loader: () => import(/* webpackChunkName: "choice_cydaohang_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/choice/cydaohang/index.html.js"), meta: {"title":"成语导航"} }],
  ["/remember/nageemfx/", { loader: () => import(/* webpackChunkName: "remember_nageemfx_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/remember/nageemfx/index.html.js"), meta: {"title":"高频成语"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
  ["/prepare/ezyvvrta/", { loader: () => import(/* webpackChunkName: "prepare_ezyvvrta_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/prepare/ezyvvrta/index.html.js"), meta: {"title":"行测与职测的区别"} }],
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
