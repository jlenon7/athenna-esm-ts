import { Ignite } from '@athenna/core'
import { Path } from '@athenna/common'

async function main() {
  process.env.IS_ARTISAN = 'false'
  process.env.IS_TS = import.meta.url.endsWith('.ts') ? 'true' : 'false'
  Path.defaultBeforePath = Env('IS_TS', true) ? '/' : '/build'

  const application = await new Ignite().fire()

  await application.bootArtisan()
  await application.bootHttpServer()

  console.log()
}

main().catch()
