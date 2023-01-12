import { parse } from 'node:path'
import { Artisan } from '@athenna/artisan'
import { File, Path } from '@athenna/common'

/*
|--------------------------------------------------------------------------
| Console Commands
|--------------------------------------------------------------------------
|
| Here is where you can register console commands for your application.
| These commands are loaded by the ArtisanProvider.
|
*/

Artisan.command('build', async function () {
  this.info('Starting build process using ({yellow, bold} tsc) compiler.')
  console.log()

  const cpToBuild = async path => {
    const { base } = parse(path)

    return new File(path).copy(path.replace(base, `build/${base}`))
  }

  await this.execCommand('rimraf build')
  await cpToBuild(Path.pwd('package.json'))
  await this.execCommand('tsc', 'Building.')

  console.log()
  this.success('Build process succesfully finished.')
})
  .description('Athenna just says hello.')
  .createHelp()
