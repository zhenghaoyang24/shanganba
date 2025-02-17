import comp from "G:/200-Project/shanganba/docs/.vuepress/.temp/pages/prepare/index.html.vue"
const data = JSON.parse("{\"path\":\"/prepare/\",\"title\":\"考前须知\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"考前须知\",\"createTime\":\"2025/02/16 20:45:48\",\"permalink\":\"/prepare/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"notes/prepare/why.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
