import { instance } from '~/interfaces/IDiscord'
import WrapData from '~/lib/WrapData'
import TestSendMessageCommand from './main'

const testSendMessageCommand = WrapData.toCommandPack({
  data: {
    description: '※テスト用コマンドです。テストメッセージを送信します。', // 説明
    name: 'test-send-message', // コマンド名
  },
  instance: instance(TestSendMessageCommand), // インスタンス
})

export default testSendMessageCommand
