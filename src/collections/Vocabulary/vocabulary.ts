import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'
import { GlobalConfig } from 'payload'
import { slugField } from '@/fields/slug'
import { fileURLToPath } from 'url'
import path from 'path'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Vocabulary: GlobalConfig = {
  slug: 'vocabulary',
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
      name: 'Vocabulary Section',
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
          name: 'Vocabulary Title',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'Vocabulary Terms',
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
    },
  ],
}
