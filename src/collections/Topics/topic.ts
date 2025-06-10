import { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'
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
    {
      name: 'slug',
      type: 'text',
    },
    {
      name: 'content',
      type: 'textarea',
    },
    {
      name: 'caterogy',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
        {
          name: 'Related Content',
          type: 'relationship',
          filterOptions: ({ id }) => {
            return {
              id: {
                not_in: [id],
              },
            }
          },
          hasMany: true,
          relationTo: 'posts',
        },
      ],
    },
  ],
  upload: {
    staticDir: path.resolve(dirname, '../../public/media'),
  },
}
