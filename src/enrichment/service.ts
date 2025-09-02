import { HttpMethod, HttpStatusCode } from 'carbon-http'

import {
  Enrichment,
  EnrichmentCollectionStatus,
  EnrichmentRequest,
  EnrichmentResponse,
  EnrichTransactionCollectionResponse,
  EnrichTransactionCollectionStatusResponse,
} from './enrichment'
import { ClientConfig } from '../client/config'
import { ClientError } from '../client/error'

export class EnrichmentService implements Enrichment {
  public constructor(private clientConfig: ClientConfig) {}

  public async enrichTransaction(
    request: EnrichmentRequest,
  ): Promise<EnrichmentResponse> {
    const resp =
      await this.clientConfig.httpRequest<EnrichmentResponse>(
        `${ClientConfig.BASE_URL}/v1/ai/finance/enrichment/transaction`,
        {
          method: HttpMethod.POST,
          headers: this.clientConfig.requiredHeaders,
          body: JSON.stringify(request),
        },
      )

    if (resp.status !== HttpStatusCode.OK) {
      throw ClientError.NewErrorFromHttpResponse(
        resp.text(),
        resp.status,
      )
    }

    return resp.json()
  }

  public async enrichTransactionCollection(
    request: EnrichmentRequest[],
  ): Promise<EnrichTransactionCollectionResponse> {
    const resp =
      await this.clientConfig.httpRequest<EnrichTransactionCollectionResponse>(
        `${ClientConfig.BASE_URL}/v1/ai/finance/enrichment/transactions`,
        {
          method: HttpMethod.POST,
          headers: this.clientConfig.requiredHeaders,
          body: JSON.stringify(request),
        },
      )

    if (resp.status !== HttpStatusCode.OK) {
      throw ClientError.NewErrorFromHttpResponse(
        resp.text(),
        resp.status,
      )
    }

    return resp.json()
  }

  public async enrichTransactionCollectionStatus(
    id: string,
  ): Promise<EnrichmentCollectionStatus> {
    const resp =
      await this.clientConfig.httpRequest<EnrichTransactionCollectionStatusResponse>(
        `${ClientConfig.BASE_URL}/v1/ai/finance/enrichment/transactions/status/${id}`,
        {
          method: HttpMethod.GET,
          headers: this.clientConfig.requiredHeaders,
        },
      )

    if (resp.status !== HttpStatusCode.OK) {
      throw ClientError.NewErrorFromHttpResponse(
        resp.text(),
        resp.status,
      )
    }

    return resp.json().status
  }
}
