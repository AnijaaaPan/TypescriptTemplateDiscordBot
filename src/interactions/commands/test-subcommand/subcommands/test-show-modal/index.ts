import { ApplicationCommandOptionType } from 'discord.js'
import { instance } from '~/interfaces/IDiscord'
import WrapData from '~/lib/WrapData'
import TestShowModaleSubCommand from './main'

const testShowModaleSubCommand = WrapData.toSubCommandPack({
  data: {
    description: '※テスト用サブコマンドです。テストモーダルを表示します。', // 説明
    name: 'test-show-modal', // サブコマンド名
    type: ApplicationCommandOptionType.Subcommand, // タイプ
  },
  instance: instance(TestShowModaleSubCommand), // インスタンス
})

export default testShowModaleSubCommand
