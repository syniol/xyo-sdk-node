import { ClientConfig } from './config'
import {
  Enrichment,
  EnrichmentCollectionStatus,
  EnrichmentRequest,
  EnrichmentResponse,
  EnrichTransactionCollectionResponse,
} from './enrichment'

export class Client implements Enrichment {
  public constructor(
    private readonly clientConfig: ClientConfig,
  ) {
  }

  public health(): Error | undefined {
    return undefined
  }

  public enrichTransaction(request: EnrichmentRequest): EnrichmentResponse {
    return undefined
  }

  public enrichTransactionCollection(request: EnrichmentRequest[]): EnrichTransactionCollectionResponse {
    return undefined
  }

  public enrichTransactionCollectionStatus(id: string): EnrichmentCollectionStatus {
    return undefined
  }
}
