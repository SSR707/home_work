export class ErrorException {
  static FORBIDDEN() {
    return { statusCode: 403, message: 'Forbidden' };
  }
  static UNAUHTORIZED() {
    return { statusCode: 401, message: 'UNAUHHORIZED' };
  }
  static NOT_FOUND() {
    return { statusCode: 404, message: 'NOT_FOUND' };
  }
  static BAD_REQUEST() {
    return { statusCode: 400, message: 'BAD_REQUEST' };
  }
  static OK() {
    return { statusCode: 200, message: 'OK' };
  }
  static CREATED() {
    return { statusCode: 201, message: 'CREATED' };
  }
  static CONFLICT() {
    return { statusCode: 409, message: 'CONFLICT' };
  }
  static NO_CONTENT() {
    return { statusCode: 204, message: 'CONFLICT' };
  }
}
