import { instance } from '~/interfaces/IDiscord'
import { CustomIds } from '~/interfaces/IEnum'
import WrapData from '~/lib/WrapData'
import ModalTestModal from './main'

const modalTest = WrapData.toModalPack({
  id: CustomIds.ModalTest, // カスタムID
  instance: instance(ModalTestModal), // インスタンス
})

export default modalTest
