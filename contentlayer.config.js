import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Host = defineDocumentType(() => ({
  name: 'Host',
  filePathPattern: `hosts/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: {
      type: 'string',
    },
    location: {
      type: 'string',
    },
    contact: {
      type: 'string',
    },
    locationName: {
      type: 'string',
    },
    locationSlug: {
      type: 'string',
    },
    workplace: {
      type: 'string',
    },
    workplaceUrl: {
      type: 'string',
    },
    website: {
      type: 'string',
    },
    hostname: {
      type: 'string',
    },
    image: {
      type: 'string',
    },
  },
}));

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `articles/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
    slug: {
      type: 'string',
    },
    articleType: {
      type: 'string',
    },
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Host, Article],
});
