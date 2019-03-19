import * as path from 'path'
import { GatsbyCreatePages, UrlEntry } from './types'
import routes from './routes'

/**
 * Determines the template file by which an entry should be rendered.
 * Template files are located in `src/templates/${template}/index.tsx`.
 */
const resolveEntryTemplate = ({ entryName }: UrlEntry): string =>
  path.resolve(`src/templates/${entryName}/index.tsx`)

const resolveEntryPath = ({ entryName, slug }: UrlEntry): string => {
  if (path && slug) {
    return `${routes[entryName]}/${slug}`
  }
  return routes[entryName]
}
/**
 * Replace urlEntries to fetch the actual url structure via graphQL or hardcode it directly in.
 */
const urlEntries: UrlEntry[] = [
  {
    entryName: 'home',
    slug: null,
  },
  {
    entryName: 'articlesOverview',
    slug: null,
  },
  {
    entryName: 'articles',
    slug: 'entry-1',
  },
]

const createPages: GatsbyCreatePages = ({ actions: { createPage } }): void =>
  urlEntries.forEach(entry =>
    createPage({
      path: resolveEntryPath(entry),
      component: resolveEntryTemplate(entry),
    }),
  )

export { createPages }
