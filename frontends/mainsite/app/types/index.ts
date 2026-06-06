export * from './graphql'

export type QuerySearch = Partial<{
  q: string
  group: string
  groupBy: 'party' | 'state'
}>
