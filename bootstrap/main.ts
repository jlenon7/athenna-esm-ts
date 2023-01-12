import { Ignite } from '@athenna/core'
import { install } from 'source-map-support'

async function main() {
  install()

  process.env.IS_TS = 'true'
  process.env.IS_ARTISAN = 'false'

  const application = await new Ignite().fire()

  await application.bootArtisan()
  await application.bootHttpServer()

  console.log()
}

main().catch()
