import { HttpStatusCode, Request, CarbonHttpRequestOption } from 'carbon-http'

import { ClientConfig } from './config'
import { CarbonHttpResponse } from 'carbon-http/dist/types/http/type'


export class Client {
  private readonly httpRequest: <T>(ur: string, opt: CarbonHttpRequestOption) => Promise<CarbonHttpResponse<T>>

  public constructor(
    private readonly clientConfig: ClientConfig,
  ) {
    this.httpRequest = Request
  }

  public async health(): Promise<boolean> {
    const res = await Request('https://api.xyo.financial/healthz')

    return res.status === HttpStatusCode.OK
  }
}
