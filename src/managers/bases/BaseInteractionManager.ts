import {
  ActionRowBuilder,
  BaseInteraction,
  ButtonBuilder,
  ButtonStyle,
  CommandInteractionOptionResolver,
  InteractionReplyOptions,
  InteractionUpdateOptions,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} from 'discord.js'
import { Interactions } from '~/interfaces/IDiscord'
import { CustomIds } from '~/interfaces/IEnum'
import WrapData from '~/lib/WrapData'
import BaseManager from './BaseManager'

export default class BaseInteractionManager<T extends Interactions> extends BaseManager {
  /* === Protected 変数 === */
  protected guildId: string // サーバーID
  protected channelId: string // チャンネルID
  protected userId: string // ユーザーID
  protected options!: CommandInteractionOptionResolver // オプション

  constructor(protected interaction: T) {
    super()

    this.guildId = interaction.guildId
    this.channelId = interaction.channelId ?? ''
    this.userId = interaction.user.id

    if (interaction.isCommand()) {
      this.options = WrapData.castToType<CommandInteractionOptionResolver>(interaction.options)
    }
  }

  /* === Protected 関数 === */

  // メイン処理
  protected async main(..._: any[]) {}

  // メッセージ送信 (返信済みの場合は更新)
  protected async messageUpdate(options: InteractionReplyOptions, i?: BaseInteraction) {
    if (i?.isAnySelectMenu() || i?.isButton()) {
      await i.update(WrapData.castToType<InteractionUpdateOptions>(options)).catch(() => {})
      return
    }

    if (this.interaction.replied || this.interaction.deferred) {
      await this.interaction.editReply(options).catch(() => {})
      return
    }

    await this.interaction.reply(options).catch(() => {})
  }

  // テストメッセージ送信
  protected async sendTestMessage(content: string) {
    const testSendMessageButton = new ButtonBuilder()
      .setCustomId(CustomIds.ButtonTestSendMessage) // カスタムID
      .setLabel('Send Message') // ラベル
      .setStyle(ButtonStyle.Secondary) // スタイル

    const testShowModalButton = new ButtonBuilder()
      .setCustomId(CustomIds.ButtonTestShowModal) // カスタムID
      .setLabel('Show Modal') // ラベル
      .setStyle(ButtonStyle.Secondary) // スタイル

    await this.messageUpdate({
      components: [new ActionRowBuilder<ButtonBuilder>().setComponents([testSendMessageButton, testShowModalButton])], // ボタン
      content, // コンテンツ
    })
  }

  // テストモーダル表示
  protected async showTestModal() {
    if (this.interaction.isModalSubmit()) return

    // フォーム作成
    const testInput = new TextInputBuilder()
      .setCustomId(CustomIds.ModalInputTest) // カスタムID
      .setLabel('テストラベル') // ラベル
      .setRequired(true) // 必須項目
      .setStyle(TextInputStyle.Short) // スタイル

    const modal = new ModalBuilder()
      .setCustomId(CustomIds.ModalTest) // カスタムID
      .setTitle('テストモーダル') // タイトル
      .setComponents([new ActionRowBuilder<TextInputBuilder>().setComponents([testInput])]) // フォーム

    await this.interaction.showModal(modal)
  }
}
