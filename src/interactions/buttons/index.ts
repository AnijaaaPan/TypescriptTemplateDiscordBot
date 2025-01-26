import WrapData from '~/lib/WrapData'
import buttonTestSendMessage from './test-send-message'
import buttonTestShowModal from './test-show-modal'

// ボタンを登録する
const buttons = WrapData.toButtonPacks(buttonTestSendMessage, buttonTestShowModal)
export default buttons
