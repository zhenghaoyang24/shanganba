export const sidebar = {"/":{"/choice/":{"items":"auto","prefix":"/notes/choice/"},"/prepare/":{"items":"auto","prefix":"/notes/prepare/"}},"__auto__":{"/notes/choice/":[{"text":"高频成语","items":[{"text":"成语导航","link":"/choice/cydaohang/"},{"text":"高频成语","link":"/choice/nageemfx/"}],"collapsed":false}],"/notes/prepare/":[{"text":"考前须知","link":"/prepare/nag2emfx/"}]},"__home__":{}}

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
