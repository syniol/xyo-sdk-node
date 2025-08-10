"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(clientConfig) {
        this.clientConfig = clientConfig;
    }
    Client.prototype.health = function () {
        console.log('Health triggered');
        return undefined;
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map