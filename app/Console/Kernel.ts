import { HttpLoader } from '@athenna/http'
import { CoreLoader } from '@athenna/core'
import { Folder, Path } from '@athenna/common'
import { ArtisanLoader, ConsoleKernel } from '@athenna/artisan'

export class Kernel extends ConsoleKernel {
  get commands() {
    return [...this.internalCommands, ...this.testCommands, ...this.appCommands]
  }

  get templates() {
    return [
      ...this.internalTemplates,
      ...this.testTemplates,
      ...this.appTemplates,
    ]
  }

  get appCommands() {
    const path = Path.console('Commands')

    if (!Folder.existsSync(path)) {
      return []
    }

    return new Folder(path)
      .getFilesByPattern(`**/*.${Path.ext()}`, true)
      .map(command => import(command.href))
  }

  get testCommands() {
    return new Folder(Path.nodeModules('@athenna/test/src/Commands'))
      .getFilesByPattern(`**/*.${Path.ext()}`, true)
      .map(command => import(command.href))
  }

  get internalCommands() {
    return [
      ...HttpLoader.loadCommands(),
      ...CoreLoader.loadCommands(),
      ...ArtisanLoader.loadCommands(),
    ]
  }

  get appTemplates() {
    const path = Path.resources('templates')

    if (!Folder.existsSync(path)) {
      return []
    }

    return new Folder(path).getFilesByPattern('**/*.edge', true)
  }

  get testTemplates() {
    return new Folder(
      Path.nodeModules('@athenna/test/templates'),
    ).getFilesByPattern('**/*.edge', true)
  }

  get internalTemplates() {
    return [
      ...CoreLoader.loadTemplates(),
      ...HttpLoader.loadTemplates(),
      ...ArtisanLoader.loadTemplates(),
    ]
  }
}
