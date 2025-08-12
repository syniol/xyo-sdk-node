import { ClientConfig } from './config';
export declare class Client {
    private readonly clientConfig;
    private readonly httpRequest;
    constructor(clientConfig: ClientConfig);
    health(): Promise<boolean>;
}
//# sourceMappingURL=client.d.ts.map