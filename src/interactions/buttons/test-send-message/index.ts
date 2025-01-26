import { instance } from '~/interfaces/IDiscord'
import { CustomIds } from '~/interfaces/IEnum'
import WrapData from '~/lib/WrapData'
import ButtonTestSendMessageButton from './main'

const buttonTestSendMessage = WrapData.toButtonPack({
  id: CustomIds.ButtonTestSendMessage, // カスタムID
  instance: instance(ButtonTestSendMessageButton), // インスタンス
})

export default buttonTestSendMessage
