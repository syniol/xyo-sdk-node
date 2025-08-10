import { ClientConfig } from './config'
import {
  Enrichment,
  EnrichmentCollectionStatus,
  EnrichmentRequest,
  EnrichmentResponse,
  EnrichTransactionCollectionResponse,
} from './enrichment'

export class Client {
  public constructor(
    private readonly clientConfig: ClientConfig,
  ) {
  }

  public health(): Error | undefined {
    return undefined
  }
}
