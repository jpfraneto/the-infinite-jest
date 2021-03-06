// NOTE This file is auto-generated by Contentlayer

export { isType } from 'contentlayer/client'

// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
import { allHosts } from './Host/_index.mjs'
import { allArticles } from './Article/_index.mjs'

export { allHosts, allArticles }

export const allDocuments = [...allHosts, ...allArticles]
