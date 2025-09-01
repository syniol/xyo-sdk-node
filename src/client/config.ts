import {
  CarbonHttpRequestOption,
  CarbonHttpResponse,
  Request,
} from 'carbon-http'

export interface ClientConfigOptions {
  apiKey: string
}

export class ClientConfig {
  public static readonly BASE_URL =
    'https://api.xyo.financial'

  public readonly httpRequest: <T>(
    ur: string,
    opt: CarbonHttpRequestOption,
  ) => Promise<CarbonHttpResponse<T>>

  public constructor(
    public readonly options: ClientConfigOptions,
  ) {
    this.httpRequest = Request
  }

  public get requiredHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${this.options.apiKey}`,
    }
  }
}
