import { ContextContract } from '@athenna/http'
import { WelcomeService } from '#app/Services/WelcomeService'

export class WelcomeController {
  public welcomeService: WelcomeService

  constructor(welcomeService) {
    this.welcomeService = welcomeService
  }

  async show({ response }: ContextContract) {
    const data = await this.welcomeService.findOne()

    return response.status(200).send(data)
  }
}
