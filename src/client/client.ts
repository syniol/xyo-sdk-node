import { ClientConfig } from './config'

import { HttpStatusCode, Request } from 'carbon-http'

export class Client {
  private readonly httpRequest: <Opt, Resp>(ur: string, opt: Opt) => Promise<Resp>

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
