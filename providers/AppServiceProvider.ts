import { ServiceProvider } from '@athenna/ioc'

export default class AppServiceProvider extends ServiceProvider {
  async register(): Promise<void> {}

  async boot(): Promise<void> {}
}
