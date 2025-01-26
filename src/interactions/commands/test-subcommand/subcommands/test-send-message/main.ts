import { CommandInteraction } from 'discord.js'
import BaseInteractionManager from '~/managers/bases/BaseInteractionManager'

export default class TestSendMessageSubCommand extends BaseInteractionManager<CommandInteraction<'cached'>> {
  /* === Protected 関数 === */

  protected async main() {
    await this.sendTestMessage('-# **Hello, World! (SubCommand)**') // メッセージを送信する
  }
}
