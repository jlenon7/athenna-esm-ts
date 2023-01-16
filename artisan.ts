#!/usr/bin/env ts-node

import { Ignite } from '@athenna/core'
import { Config } from '@athenna/config'

async function main() {
  const application = await new Ignite().fire(import.meta.url, {
    bootLogs: false,
    beforePath: '/build',
  })
  const artisan = await application.bootArtisan()

  await artisan.main('Artisan')

  if (!Config.get('app.protectedCommands').includes(process.argv[2])) {
    process.exit()
  }
}

main().catch()
