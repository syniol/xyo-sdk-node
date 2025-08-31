import { CarbonHttpRequestOption, CarbonHttpResponse, HttpMethod, HttpStatusCode, Request } from 'carbon-http'

import { ClientConfig } from './config'
import {
  Enrichment,
  EnrichmentCollectionStatus,
  EnrichmentRequest,
  EnrichmentResponse,
  EnrichTransactionCollectionResponse, EnrichTransactionCollectionStatusResponse,
} from './enrichment'

export class Client implements Enrichment {
  public constructor(
    private readonly clientConfig: ClientConfig,
  ) {
  }

  public async enrichTransaction(request: EnrichmentRequest): Promise<EnrichmentResponse> {
    const resp = await Request<EnrichmentResponse>(
      'https://api.xyo.financial/v1/ai/finance/enrichment/transaction',
      {
        method: HttpMethod.POST,
        headers: this.requiredHeaders,
        body: JSON.stringify(request),
      }
    )

    if (resp.status !== HttpStatusCode.OK) {
      throw new Error('')
    }

    return resp.json()
  }

  public async enrichTransactionCollection(request: EnrichmentRequest[]): Promise<EnrichTransactionCollectionResponse> {
    const resp = await Request<EnrichTransactionCollectionResponse>(
      'https://api.xyo.financial/v1/ai/finance/enrichment/transactions',
      {
        method: HttpMethod.POST,
        headers: this.requiredHeaders,
        body: JSON.stringify(request),
      }
    )

    if (resp.status !== HttpStatusCode.OK) {
      throw new Error('')
    }

    return resp.json()
  }

  public async enrichTransactionCollectionStatus(id: string): Promise<EnrichmentCollectionStatus> {
    const resp = await Request<EnrichTransactionCollectionStatusResponse>(
      `https://api.xyo.financial/v1/ai/finance/enrichment/transactions/status/${id}`,
      {
        method: HttpMethod.GET,
        headers: this.requiredHeaders,
      }
    )

    if (resp.status !== HttpStatusCode.OK) {
      throw new Error('')
    }

    return resp.json().status
  }

  private get requiredHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.clientConfig.APIKey}`
    }
  }
}
