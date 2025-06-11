import { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'
import { slugField } from '@/fields/slug'
import { fileURLToPath } from 'url'
import path from 'path'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Topic: CollectionConfig = {
  slug: 'topic',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Topics',
    description: 'This is a a topic collection.',
  },
  defaultSort: ['title'],
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    ...slugField(),
    {
      name: 'content',
      type: 'textarea',
    },
    {
      name: 'categories',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'categories',
    },
  ],
  upload: {
    staticDir: path.resolve(dirname, '../../public/media'),
  },
}
