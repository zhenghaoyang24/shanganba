import comp from "G:/200-Project/shanganba/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"上岸吧\",\"tagline\":\"一个面向公务员考试、事业单位考试备考人群的文档\",\"text\":\"包含考前须知、备考建议、知识点总结等内容。希望你能够通过本项目快速了解考公考编，找到适合自己的考试目标，早日上岸！\",\"actions\":[{\"theme\":\"brand\",\"text\":\"我要上岸！\",\"link\":\"/blog/\"}]}}],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.34,\"words\":102},\"filePathRelative\":\"README.md\",\"categoryList\":[]}")
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
