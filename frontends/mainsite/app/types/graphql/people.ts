import type { GraphQlData } from "./utils"

export type Person = {
  firstname: string
  lastname: string
  dateOfBirth: string
}

export enum DocumentType {
  NewsArticle = 'NewsArticle',
  Report = 'Report',
  CourtDocument = 'CourtDocument',
  Other = 'Other'
}

export type DocumentTypeNames = keyof typeof DocumentType

export type SourceAuthor = Person & {
  id: number
  jobTitle: string
}

export type SourceDetails = {
  id: number
  title: string
  documentType: DocumentTypeNames
  publicationDate: string
  authors: SourceAuthor[]
  url: string
}

export type CorruptionCase = {
  id: number
  title: string
  description: string
  amount: number
  sources : SourceDetails[]
  date: string
}

export type PoliticalParty = 'RN' | 'PS' | 'LR' | 'LFI' | 'EELV' | 'MoDem'

export type Politician = Person & {
  id: number | string
  party: PoliticalParty
  state: string
  misUsedFunds: CorruptionCase[]
}

export type PoliticiansGraphqlData = GraphQlData<'politicians', Politician[]>
