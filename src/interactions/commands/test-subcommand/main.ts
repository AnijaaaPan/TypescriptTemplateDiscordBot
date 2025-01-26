import { CommandInteraction } from 'discord.js'
import BaseInteractionManager from '~/managers/bases/BaseInteractionManager'
import subcommands from './subcommands'

export default class AdminCommand extends BaseInteractionManager<CommandInteraction<'cached'>> {
  /* === Protected 関数 === */

  protected async main() {
    const subcommandName = this.options.getSubcommand()
    const subcommand = subcommands.find((c) => c.data.name === subcommandName)
    await subcommand?.instance(this.interaction).execute() // サブコマンドを実行する
  }
}
