import { instance } from '~/interfaces/IDiscord'
import { CustomIds } from '~/interfaces/IEnum'
import WrapData from '~/lib/WrapData'
import ButtonTestShowModalButton from './main'

const buttonTestShowModal = WrapData.toButtonPack({
  id: CustomIds.ButtonTestShowModal, // カスタムID
  instance: instance(ButtonTestShowModalButton), // インスタンス
})

export default buttonTestShowModal
