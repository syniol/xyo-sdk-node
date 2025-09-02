import { describe, suite, test } from 'node:test'
import {
  CarbonHttpResponse,
  HttpStatusCode,
} from 'carbon-http'
import { EnrichmentService } from './service'
import { ClientConfig } from '../client/config'
import {
  EnrichmentCollectionStatus,
  EnrichmentResponse,
  EnrichTransactionCollectionResponse,
  EnrichTransactionCollectionStatusResponse,
} from './enrichment'

void (async () => {
  await suite('Enrichment Suite', async () => {
    await describe('Test enrichTransaction', async () => {
      await test('when status code is 200', async (t) => {
        const mockedEnrichmentResponse: EnrichmentResponse =
          {
            merchant: 'Syniol Limited',
            description:
              'Cloud Software and Platform Consultancy',
            categories: ['Cloud', 'Tech'],
            logo: 'base64/png;eyutuidbavdqgfmfnbamdnsdsadasdfc',
          }

        const mockedClientConfig: ClientConfig = {
          options: {
            apiKey: 'YourApiKeyFromXYO.FinancialDashboard',
          },
          get requiredHeaders(): Record<string, string> {
            return {
              Authorization: `Bearer ${this.options.apiKey}`,
            }
          },
          httpRequest: (): Promise<
            CarbonHttpResponse<EnrichmentResponse>
          > => {
            const mockedHttpRequestResponse = {
              status: HttpStatusCode.OK,
              text(): string {
                return JSON.stringify(
                  mockedEnrichmentResponse,
                )
              },
              json(): EnrichmentResponse {
                return mockedEnrichmentResponse
              },
            } as CarbonHttpResponse<EnrichmentResponse>

            return Promise.resolve(
              mockedHttpRequestResponse,
            )
          },
        }

        const sut = new EnrichmentService(
          mockedClientConfig,
        )
        const actual = await sut.enrichTransaction({
          content: 'Syniol Software Consultancy',
          countryCode: 'GB',
        })

        t.assert.deepEqual(actual, mockedEnrichmentResponse)
      })

      await test('when status code is not 200', async (t) => {
        const mockedClientConfig: ClientConfig = {
          options: {
            apiKey: 'YourApiKeyFromXYO.FinancialDashboard',
          },
          get requiredHeaders(): Record<string, string> {
            return {
              Authorization: `Bearer ${this.options.apiKey}`,
            }
          },
          httpRequest: (): Promise<
            CarbonHttpResponse<EnrichmentResponse>
          > => {
            const mockedHttpRequestResponse = {
              status: HttpStatusCode.BAD_REQUEST,
              text(): string {
                return 'error with the request'
              },
            } as CarbonHttpResponse<EnrichmentResponse>

            return Promise.resolve(
              mockedHttpRequestResponse,
            )
          },
        }

        const sut = new EnrichmentService(
          mockedClientConfig,
        )

        try {
          await sut.enrichTransaction({
            content: 'Syniol Software Consultancy',
            countryCode: 'GB',
          })
        } catch (e) {
          t.assert.equal(
            e.statusCode,
            HttpStatusCode.BAD_REQUEST,
          )
          t.assert.equal(
            e.message,
            'error with the request',
          )
        }
      })
    })

    await describe('Test enrichTransactionCollection', async () => {
      await test('when status code is 200', async (t) => {
        const mockedEnrichmentResponse: EnrichTransactionCollectionResponse =
          {
            id: '411f991f-2b62-4dc9-aaa8-13bf3610152a',
            link: 'ftp://storage.xyo.financial/enrichment/download/411f991f-2b62-4dc9-aaa8-13bf3610152a.tar.gz',
          }

        const mockedClientConfig: ClientConfig = {
          options: {
            apiKey: 'YourApiKeyFromXYO.FinancialDashboard',
          },
          get requiredHeaders(): Record<string, string> {
            return {
              Authorization: `Bearer ${this.options.apiKey}`,
            }
          },
          httpRequest: (): Promise<
            CarbonHttpResponse<EnrichTransactionCollectionResponse>
          > => {
            const mockedHttpRequestResponse = {
              status: HttpStatusCode.OK,
              text(): string {
                return JSON.stringify(
                  mockedEnrichmentResponse,
                )
              },
              json(): EnrichTransactionCollectionResponse {
                return mockedEnrichmentResponse
              },
            } as CarbonHttpResponse<EnrichTransactionCollectionResponse>

            return Promise.resolve(
              mockedHttpRequestResponse,
            )
          },
        }

        const sut = new EnrichmentService(
          mockedClientConfig,
        )
        const actual = await sut.enrichTransaction({
          content: 'Syniol Software Consultancy',
          countryCode: 'GB',
        })

        t.assert.deepEqual(actual, mockedEnrichmentResponse)
      })

      await test('when status code is not 200', async (t) => {
        const mockedClientConfig: ClientConfig = {
          options: {
            apiKey: 'YourApiKeyFromXYO.FinancialDashboard',
          },
          get requiredHeaders(): Record<string, string> {
            return {
              Authorization: `Bearer ${this.options.apiKey}`,
            }
          },
          httpRequest: (): Promise<
            CarbonHttpResponse<EnrichTransactionCollectionResponse>
          > => {
            const mockedHttpRequestResponse = {
              status: HttpStatusCode.BAD_REQUEST,
              text(): string {
                return 'error with the request'
              },
            } as CarbonHttpResponse<EnrichTransactionCollectionResponse>

            return Promise.resolve(
              mockedHttpRequestResponse,
            )
          },
        }

        const sut = new EnrichmentService(
          mockedClientConfig,
        )

        try {
          await sut.enrichTransactionCollection([
            {
              content: 'Syniol Software Consultancy',
              countryCode: 'GB',
            },
          ])
        } catch (e) {
          t.assert.equal(
            e.statusCode,
            HttpStatusCode.BAD_REQUEST,
          )
          t.assert.equal(
            e.message,
            'error with the request',
          )
        }
      })
    })

    await describe('Test enrichTransactionCollectionStatus', async () => {
      await test('when status code is 200', async (t) => {
        const mockedEnrichmentResponse: EnrichTransactionCollectionStatusResponse =
          {
            status:
              EnrichmentCollectionStatus.EnrichmentCollectionStatusReady,
          }

        const mockedClientConfig: ClientConfig = {
          options: {
            apiKey: 'YourApiKeyFromXYO.FinancialDashboard',
          },
          get requiredHeaders(): Record<string, string> {
            return {
              Authorization: `Bearer ${this.options.apiKey}`,
            }
          },
          httpRequest: (): Promise<
            CarbonHttpResponse<EnrichTransactionCollectionStatusResponse>
          > => {
            const mockedHttpRequestResponse = {
              status: HttpStatusCode.OK,
              text(): string {
                return JSON.stringify(
                  mockedEnrichmentResponse,
                )
              },
              json(): EnrichTransactionCollectionStatusResponse {
                return mockedEnrichmentResponse
              },
            } as CarbonHttpResponse<EnrichTransactionCollectionStatusResponse>

            return Promise.resolve(
              mockedHttpRequestResponse,
            )
          },
        }

        const sut = new EnrichmentService(
          mockedClientConfig,
        )
        const actual =
          await sut.enrichTransactionCollectionStatus(
            '6dd29d66-2326-40bb-b3e9-2b45f2dcf517',
          )

        t.assert.deepEqual(
          actual,
          mockedEnrichmentResponse.status,
        )
      })

      await test('when status code is not 200', async (t) => {
        const mockedClientConfig: ClientConfig = {
          options: {
            apiKey: 'YourApiKeyFromXYO.FinancialDashboard',
          },
          get requiredHeaders(): Record<string, string> {
            return {
              Authorization: `Bearer ${this.options.apiKey}`,
            }
          },
          httpRequest: (): Promise<
            CarbonHttpResponse<EnrichTransactionCollectionStatusResponse>
          > => {
            const mockedHttpRequestResponse = {
              status: HttpStatusCode.BAD_REQUEST,
              text(): string {
                return 'error with the request'
              },
            } as CarbonHttpResponse<EnrichTransactionCollectionStatusResponse>

            return Promise.resolve(
              mockedHttpRequestResponse,
            )
          },
        }

        const sut = new EnrichmentService(
          mockedClientConfig,
        )

        try {
          await sut.enrichTransactionCollectionStatus(
            '6dd29d66-2326-40bb-b3e9-2b45f2dcf517',
          )
        } catch (e) {
          t.assert.equal(
            e.statusCode,
            HttpStatusCode.BAD_REQUEST,
          )
          t.assert.equal(
            e.message,
            'error with the request',
          )
        }
      })
    })
  })
})()
