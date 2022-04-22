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
    },
    image: {
      type: "string"
    }
  }
}));
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string"
    },
    date: {
      type: "string"
    },
    slug: {
      type: "string"
    },
    articleType: {
      type: "string"
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Host, Article]
});
export {
  Article,
  Host,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-5JTAGOO5.mjs.map
