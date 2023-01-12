import { Path } from '@athenna/common'
import { Config } from '@athenna/config'
import { Test, UnitTestContext } from '@athenna/test'
import { WelcomeService } from '#app/Services/WelcomeService'

export class WelcomeServiceTest extends Test {
  async beforeAll() {
    await Config.loadAll(Path.config())
  }

  async shouldReturnConcreteWelcomePayloadFromService({ assert }: UnitTestContext) {
    const welcomeService = new WelcomeService()

    const { name, version, description, source } = await welcomeService.findOne()

    assert.equal(name, '@athenna/athenna')
    assert.equal(version, '1.0.0')
    assert.equal(source, 'https://github.com/AthennaIO')
    assert.equal(description, 'Athenna is awesome!')
  }
}
