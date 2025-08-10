export interface EnrichmentRequest {
    content: string;
    countryCode: string;
}
export interface EnrichmentResponse {
    merchant: string;
    description: string;
    categories: string[];
    logo: string;
}
export interface EnrichTransactionCollectionResponse {
    id: string;
    link: string;
}
export declare enum EnrichmentCollectionStatus {
    EnrichmentCollectionStatusReady = "READY",
    EnrichmentCollectionStatusFailure = "FAILED",
    EnrichmentCollectionStatusPending = "PENDING"
}
export interface Enrichment {
    enrichTransaction(request: EnrichmentRequest): EnrichmentResponse;
    enrichTransactionCollection(request: EnrichmentRequest[]): EnrichTransactionCollectionResponse;
    enrichTransactionCollectionStatus(id: string): EnrichmentCollectionStatus;
}
//# sourceMappingURL=enrichment.d.ts.map