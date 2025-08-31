import { ClientConfig } from './config'
import {
  Enrichment,
  EnrichmentCollectionStatus,
  EnrichmentRequest,
  EnrichmentResponse,
  EnrichTransactionCollectionResponse,
} from '../enrichment/enrichment'
import { EnrichmentService } from '../enrichment/service'

export class Client implements Enrichment {
  private readonly enrichment: Enrichment

  public constructor(
    private readonly clientConfig: ClientConfig,
  ) {
    this.enrichment = new EnrichmentService(clientConfig)
  }

  public async enrichTransaction(
    request: EnrichmentRequest,
  ): Promise<EnrichmentResponse> {
    return this.enrichment.enrichTransaction(request)
  }

  public async enrichTransactionCollection(
    request: EnrichmentRequest[],
  ): Promise<EnrichTransactionCollectionResponse> {
    return this.enrichment.enrichTransactionCollection(request)
  }

  public async enrichTransactionCollectionStatus(id: string): Promise<EnrichmentCollectionStatus> {
    return this.enrichment.enrichTransactionCollectionStatus(id)
  }
}
