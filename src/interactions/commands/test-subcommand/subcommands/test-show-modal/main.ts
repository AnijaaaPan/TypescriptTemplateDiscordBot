import { CommandInteraction } from 'discord.js'
import BaseInteractionManager from '~/managers/bases/BaseInteractionManager'

export default class TestShowModaleSubCommand extends BaseInteractionManager<CommandInteraction<'cached'>> {
  /* === Protected 関数 === */

  protected async main() {
    await this.showTestModal() // モーダルを表示する
  }
}
