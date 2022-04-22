// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

// export type Image = string
export type { Markdown, MDX }

/** Document types */
export type Article = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Article'
  title?: string | undefined
  date?: string | undefined
  slug?: string | undefined
  articleType?: string | undefined
  /** MDX file body */
  body: MDX

}

export type Host = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Host'
  name?: string | undefined
  location?: string | undefined
  contact?: string | undefined
  locationName?: string | undefined
  locationSlug?: string | undefined
  workplace?: string | undefined
  workplaceUrl?: string | undefined
  website?: string | undefined
  hostname?: string | undefined
  image?: string | undefined
  /** MDX file body */
  body: MDX

}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Article | Host
export type DocumentTypeNames = 'Article' | 'Host'

export type NestedTypes = never
export type NestedTypeNames = never


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Article: Article
  Host: Host
}

export type NestedTypeMap = {

}

 