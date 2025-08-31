import { CarbonHttpRequestOption, CarbonHttpResponse, Request } from 'carbon-http'

export class ClientConfig {
  private readonly httpRequest: <T>(ur: string, opt: CarbonHttpRequestOption) => Promise<CarbonHttpResponse<T>>

  public constructor(private readonly apiKey: string) {
    this.httpRequest = Request
  }
}
