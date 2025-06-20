import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'
import { CollectionConfig } from 'payload'
import { GlobalConfig } from 'payload'
import { slugField } from '@/fields/slug'
import { fileURLToPath } from 'url'
import path from 'path'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Overview: GlobalConfig = {
  slug: 'overview',
  access: {
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Pages',
  },
  fields: [
    {
      name: 'Title',
      type: 'text',
    },
    {
      name: 'Topic Overview Section',
      type: 'group',
      fields: [
        {
          name: 'Topics',
          type: 'array',
          admin: {
            components: {
              RowLabel: {
                path: 'src/components/ArrayFieldTitle/ArrayFieldTitle.tsx',
                clientProps: {
                  itemPlaceholder: 'placeholder text',
                },
              },
            },
          },
          fields: [
            {
              name: 'Thumbnail',
              type: 'upload',
              relationTo: 'media',
            },
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
              name: 'caterogy',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                },
                {
                  name: 'relatedPosts',
                  type: 'relationship',
                  hasMany: true,
                  relationTo: 'posts',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Popular Posts Section',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'relatedPosts',
          type: 'relationship',
          hasMany: true,
          relationTo: 'posts',
        },
      ],
    },
    {
      name: 'FAQ Section',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'frequentlyAskedQuestion',
          type: 'array',
          admin: {
            components: {
              RowLabel: {
                path: 'src/components/ArrayFieldTitle/ArrayFieldTitle.tsx',
                clientProps: {
                  itemPlaceholder: 'placeholder text',
                },
              },
            },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'content',
              type: 'richText',
            },
          ],
        },
      ],
    },
  ],
}
