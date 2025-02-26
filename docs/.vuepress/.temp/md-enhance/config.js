import CodeDemo from "G:/200-Project/shanganba/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.72_markdown-it@14.1.0_markmap-lib@0.18.11_markmap-common@_vqmuoltxr5b7issoai522pqsg4/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "G:/200-Project/shanganba/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.72_markdown-it@14.1.0_markmap-lib@0.18.11_markmap-common@_vqmuoltxr5b7issoai522pqsg4/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import MarkMap from "G:/200-Project/shanganba/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.72_markdown-it@14.1.0_markmap-lib@0.18.11_markmap-common@_vqmuoltxr5b7issoai522pqsg4/node_modules/vuepress-plugin-md-enhance/lib/client/components/MarkMap.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("MarkMap", MarkMap);
  },
};
