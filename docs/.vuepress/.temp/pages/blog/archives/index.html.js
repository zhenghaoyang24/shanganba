import comp from "G:/200-Project/shanganba/docs/.vuepress/.temp/pages/blog/archives/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/archives/\",\"title\":\"归档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"归档\",\"gitInclude\":[],\"draft\":true},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"type\":\"blog-archives\"}")
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
