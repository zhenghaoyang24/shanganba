import comp from "G:/200-Project/shanganba/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"上岸吧！\",\"tagline\":\"一个公考、事考学习文档。\",\"text\":\"长风破浪会有时，直挂云帆济沧海\",\"actions\":[{\"theme\":\"brand\",\"text\":\"我要上岸！\",\"link\":\"/notes/prepare/1.为什么要进入体制内.md\"}]}}],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.21,\"words\":63},\"filePathRelative\":\"README.md\",\"categoryList\":[]}")
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
