#!/usr/bin/env ts-node

import { Path } from '@athenna/common'
import { Env, Config } from '@athenna/config'
import { Ignite, ProviderHelper } from '@athenna/core'

async function main() {
  process.env.IS_ARTISAN = 'true'
  process.env.IS_TS = import.meta.url.endsWith('.ts') ? 'true' : 'false'
  Path.defaultBeforePath = Env('IS_TS', true) ? '/' : '/build'

  const application = await new Ignite().fire()
  const artisan = await application.bootArtisan()

  await artisan.main('Artisan')

  if (!Config.get('app.protectedCommands').includes(process.argv[2])) {
    await ProviderHelper.shutdownAll(Env('SHUTDOWN_LOGS', false))
  }
}

main().catch()
