import { ButtonInteraction } from 'discord.js'
import BaseInteractionManager from '~/managers/bases/BaseInteractionManager'

export default class ButtonTestButton extends BaseInteractionManager<ButtonInteraction<'cached'>> {
  /* === Protected 関数 === */

  protected async main() {
    await this.sendTestMessage('-# **Hello, World! (Button)**') // メッセージを送信する
  }
}
