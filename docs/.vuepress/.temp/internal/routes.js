export const redirects = JSON.parse("{\"/notes/choice/1.%E4%BB%8B%E7%BB%8D.html\":\"/choice/introduce/\",\"/notes/prepare/1.%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E8%BF%9B%E5%85%A5%E4%BD%93%E5%88%B6%E5%86%85.html\":\"/prepare/why/\",\"/notes/prepare/2.%E8%A1%8C%E6%B5%8B%E4%B8%8E%E8%81%8C%E6%B5%8B%E7%9A%84%E5%8C%BA%E5%88%AB.html\":\"/prepare/ezyvvrta/\",\"/notes/choice/2.%E8%A8%80%E8%AF%AD%E7%90%86%E8%A7%A3/%E7%89%87%E6%AE%B5%E9%98%85%E8%AF%BB.html\":\"/choice/y18glm0l/\",\"/notes/remember/%E9%AB%98%E9%A2%91%E6%88%90%E8%AF%AD/1.%E6%88%90%E8%AF%AD%E5%AF%BC%E8%88%AA.html\":\"/remember/cydaohang/\",\"/notes/remember/%E9%AB%98%E9%A2%91%E6%88%90%E8%AF%AD/%E6%96%87%E5%8C%96%E4%B8%8E%E4%BC%A0%E6%89%BF.html\":\"/remember/cyculture/\",\"/notes/remember/%E9%AB%98%E9%A2%91%E6%88%90%E8%AF%AD/%E8%A7%84%E7%9F%A9%E4%B8%8E%E5%88%9B%E6%96%B0.html\":\"/remember/cyinnovate/\",\"/notes/remember/%E9%AB%98%E9%A2%91%E6%88%90%E8%AF%AD/%E5%A4%84%E5%A2%83%E4%B8%8E%E5%9B%B0%E9%9A%BE.html\":\"/remember/cysituation/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/choice/introduce/", { loader: () => import(/* webpackChunkName: "choice_introduce_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/choice/introduce/index.html.js"), meta: {"title":"介绍"} }],
  ["/prepare/why/", { loader: () => import(/* webpackChunkName: "prepare_why_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/prepare/why/index.html.js"), meta: {"title":"为什么要进入体制内"} }],
  ["/prepare/ezyvvrta/", { loader: () => import(/* webpackChunkName: "prepare_ezyvvrta_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/prepare/ezyvvrta/index.html.js"), meta: {"title":"行测与职测的区别"} }],
  ["/choice/y18glm0l/", { loader: () => import(/* webpackChunkName: "choice_y18glm0l_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/choice/y18glm0l/index.html.js"), meta: {"title":"片段阅读"} }],
  ["/remember/cydaohang/", { loader: () => import(/* webpackChunkName: "remember_cydaohang_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/remember/cydaohang/index.html.js"), meta: {"title":"成语导航"} }],
  ["/remember/cyculture/", { loader: () => import(/* webpackChunkName: "remember_cyculture_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/remember/cyculture/index.html.js"), meta: {"title":"文化与传承"} }],
  ["/remember/cyinnovate/", { loader: () => import(/* webpackChunkName: "remember_cyinnovate_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/remember/cyinnovate/index.html.js"), meta: {"title":"规矩与创新"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
  ["/remember/cysituation/", { loader: () => import(/* webpackChunkName: "remember_cysituation_index.html" */"G:/200-Project/shanganba/docs/.vuepress/.temp/pages/remember/cysituation/index.html.js"), meta: {"title":"处境与困难"} }],
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
