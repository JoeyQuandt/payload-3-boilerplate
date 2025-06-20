'use client'

import type { Data } from 'payload'
import { useRowLabel } from '@payloadcms/ui'

function ArrayFieldTitle({ itemPlaceholder }: { itemPlaceholder?: string }) {
  const { data, rowNumber } = useRowLabel<Data>()
  return <>{`${data?.title}` || `${itemPlaceholder}: ${String(rowNumber).padStart(2, '0')}`}</>
}

export default ArrayFieldTitle
