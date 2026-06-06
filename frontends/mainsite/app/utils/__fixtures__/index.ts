import { faker } from '@faker-js/faker'
import type { Politician, GraphQlData, PoliticiansGraphqlData } from '~/types'

export function usePoliticianFixture() {
  const values = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    party: faker.helpers.arrayElement(['RN', 'PS', 'LR', 'LFI', 'EELV', 'MoDem']),
    state: faker.helpers.arrayElement(['Paris', 'Lille', 'Marseille', 'Lyon', 'Toulouse', 'Bordeaux']),
    misUsedFunds: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
      id: faker.number.int(),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      amount: faker.number.int({ min: 1000, max: 1000000 }),
      sources: [
        {
          id: faker.number.int(),
          title: faker.lorem.sentence({ min: 1, max: 2 }),
          documentType: faker.helpers.arrayElement(['NewsArticle', 'Report', 'CourtDocument', 'Other']),
          publicationDate: faker.date.past().toISOString(),
          authors: [
            {
              id: faker.number.int(),
              firstname: faker.person.firstName(),
              lastname: faker.person.lastName(),
              jobTitle: faker.person.jobTitle(),
            }
          ],
          url: faker.internet.url(),
        }
      ],
      date: faker.date.past().toISOString(),
    }))
  } as Politician))

  const graphqlReturnValues = ref<PoliticiansGraphqlData>({
    data: {
      politicians: values
    }
  })

  return graphqlReturnValues
}
