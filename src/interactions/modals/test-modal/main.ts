import { ModalSubmitInteraction } from 'discord.js'
import { CustomIds } from '~/interfaces/IEnum'
import BaseInteractionManager from '~/managers/bases/BaseInteractionManager'

export default class ModalTestModal extends BaseInteractionManager<ModalSubmitInteraction<'cached'>> {
  /* === Private 変数 === */
  private _inputTest = this.interaction.fields.getTextInputValue(CustomIds.ModalInputTest) // テキスト入力の値

  /* === Protected 関数 === */

  protected async main() {
    await this.sendTestMessage(`-# **Hello, World! (Modal)**\n> -# **Input:** ${this._inputTest}`) // メッセージを送信する
  }
}
