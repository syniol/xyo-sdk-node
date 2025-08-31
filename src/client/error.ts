export class ClientError extends Error {
  public readonly statusCode: number | undefined;

  public constructor(message: string, code?: number) {
    super(message)

    this.statusCode = code;
  }

  public static NewErrorFromHttpResponse(content: string, code: number): ClientError {
    return new ClientError(content, code);
  }
}
