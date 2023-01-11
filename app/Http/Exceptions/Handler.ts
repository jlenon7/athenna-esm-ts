import { ErrorContextContract, HttpExceptionHandler } from '@athenna/http'

/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| Athenna will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
*/

export class Handler extends HttpExceptionHandler {
  /**
   * Ignore codes from being reported that are
   * included in this property. Example: ['E_RUNTIME_EXCEPTION']
   *
   * @protected
   */
  get ignoreCodes() {
    return []
  }

  /**
   * Ignore status codes from being reported that
   * are included in this property. Example: [500]
   *
   * @protected
   */
  get ignoreStatuses() {
    return []
  }

  async handle(ctx: ErrorContextContract) {
    return super.handle(ctx)
  }
}
