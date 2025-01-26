import WrapData from '~/lib/WrapData'
import testSendMessageCommand from './test-send-message'
import testSubcommand from './test-subcommand'

// コマンドを登録する
const commands = WrapData.toCommandPacks(testSendMessageCommand, testSubcommand)
export default commands
