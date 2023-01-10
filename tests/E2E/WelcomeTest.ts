import { HttpTestContext, Test } from '@athenna/test'

export class WelcomeTest extends Test {
  async shouldReturnMockedWelcomePayloadFromApi({ request }: HttpTestContext) {
    const response = await request.get('/api/v1')

    response.assertStatusCode(200)
    response.assertBodyContains({ mock: true })
  }
}
