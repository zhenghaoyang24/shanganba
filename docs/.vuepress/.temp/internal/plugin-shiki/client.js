
import { useCopyCode } from 'G:/200-Project/shanganba/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.130_typescript@5.7.3_vue@3.5.13_typescript@5.7.3__vue_g3uceyzxfaiwche5vkbfn2zkze/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from 'G:/200-Project/shanganba/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.130_typescript@5.7.3_vue@3.5.13_typescript@5.7.3__vue_g3uceyzxfaiwche5vkbfn2zkze/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
