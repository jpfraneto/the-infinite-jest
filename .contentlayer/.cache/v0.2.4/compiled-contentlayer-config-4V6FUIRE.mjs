// ../../contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Host = defineDocumentType(() => ({
  name: "Host",
  filePathPattern: `hosts/*.mdx`,
  contentType: "mdx",
  fields: {
    dbname: {
      type: "string"
    },
    albumtitle: {
      type: "string"
    },
    albumartist: {
      type: "string"
    },
    albumImageUrl: {
      type: "string"
    },
    guest: {
      type: "string"
    },
    episodeUrl: {
      type: "string"
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Host]
});
export {
  Host,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4V6FUIRE.mjs.map
