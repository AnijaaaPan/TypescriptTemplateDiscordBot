import WrapData from '~/lib/WrapData'
import testSendMessageSubCommand from './test-send-message'
import testShowModaleSubCommand from './test-show-modal'

// サブコマンドを登録する
const subcommands = WrapData.toSubCommandPacks(testSendMessageSubCommand, testShowModaleSubCommand)
export default subcommands
