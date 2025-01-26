import { ApplicationCommandOptionType } from 'discord.js'
import { instance } from '~/interfaces/IDiscord'
import WrapData from '~/lib/WrapData'
import TestSendMessageSubCommand from './main'

const testSendMessageSubCommand = WrapData.toSubCommandPack({
  data: {
    description: '※テスト用サブコマンドです。テストメッセージを送信します。', // 説明
    name: 'test-send-message', // サブコマンド名
    type: ApplicationCommandOptionType.Subcommand, // タイプ
  },
  instance: instance(TestSendMessageSubCommand), // インスタンス
})

export default testSendMessageSubCommand
