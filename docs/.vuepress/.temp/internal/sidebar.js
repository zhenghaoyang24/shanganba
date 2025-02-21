export const sidebar = {"/":{"/choice/":{"items":"auto","prefix":"/notes/choice/"},"/prepare/":{"items":"auto","prefix":"/notes/prepare/"},"/remember/":{"items":"auto","prefix":"/notes/remember/"}},"__auto__":{"/notes/choice/":[{"text":"介绍","link":"/choice/introduce/"},{"text":"言语理解","items":[{"text":"片段阅读","link":"/choice/y18glm0l/"}],"collapsed":false}],"/notes/prepare/":[{"text":"为什么要进入体制内","link":"/prepare/why/"},{"text":"行测与职测的区别","link":"/prepare/ezyvvrta/"}],"/notes/remember/":[{"text":"高频成语","items":[{"text":"成语导航","link":"/remember/cydaohang/"},{"text":"高频成语","link":"/remember/nageemfx/"},{"text":"文化相关","link":"/remember/lkhn79kt/"}],"collapsed":false}]},"__home__":{}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
