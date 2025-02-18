export const sidebar = {"/":{"/choice/":{"items":"auto","prefix":"/notes/choice/"},"/prepare/":{"items":"auto","prefix":"/notes/prepare/"},"/remember/":{"items":"auto","prefix":"/notes/remember/"}},"__auto__":{"/notes/choice/":[{"text":"介绍","link":"/choice/awcrsw15/"}],"/notes/prepare/":[{"text":"考前须知","link":"/prepare/nag2emfx/"},{"text":"行测与职测的区别","link":"/prepare/ezyvvrta/"}],"/notes/remember/":[{"text":"高频成语","items":[{"text":"成语导航","link":"/choice/cydaohang/"},{"text":"高频成语","link":"/remember/nageemfx/"}],"collapsed":false}]},"__home__":{}}

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
