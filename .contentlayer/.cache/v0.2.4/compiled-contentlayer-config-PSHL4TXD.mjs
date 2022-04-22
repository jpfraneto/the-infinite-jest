// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Host = defineDocumentType(() => ({
  name: "Host",
  filePathPattern: `hosts/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string"
    },
    location: {
      type: "string"
    },
    contact: {
      type: "string"
    },
    locationName: {
      type: "string"
    },
    locationSlug: {
      type: "string"
    },
    workplace: {
      type: "string"
    },
    workplaceUrl: {
      type: "string"
    },
    website: {
      type: "string"
    },
    hostname: {
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
//# sourceMappingURL=compiled-contentlayer-config-PSHL4TXD.mjs.map
