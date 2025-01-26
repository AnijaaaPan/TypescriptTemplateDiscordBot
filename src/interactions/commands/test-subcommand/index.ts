import { instance } from '~/interfaces/IDiscord'
import WrapData from '~/lib/WrapData'
import TestSubCommand from './main'
import subcommands from './subcommands'

const testSubcommand = WrapData.toCommandPack({
  data: {
    description: '※テスト用サブコマンドです。', // 説明
    name: 'test-subcommand', // コマンド名
    options: subcommands.map((c) => c.data), // サブコマンドを追加
  },
  instance: instance(TestSubCommand), // インスタンス
})

export default testSubcommand
