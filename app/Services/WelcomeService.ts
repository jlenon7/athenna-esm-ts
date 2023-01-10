export class WelcomeService {
  async findOne(): Promise<Record<string, string>> {
    return {
      name: Config.get('app.name'),
      domain: Config.get('http.domain'),
      version: Config.get('app.version'),
      description: Config.get('app.description'),
      source: Config.get('app.source'),
    }
  }
}
