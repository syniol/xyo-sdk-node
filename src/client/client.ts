import { ClientConfig } from './config'

export class Client {
  public constructor(private clientConfig: ClientConfig) {}

  public health(): Error | undefined {
    return undefined
  }
}
