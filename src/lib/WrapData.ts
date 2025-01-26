import { ButtonPack, CommandPack, ModalPack, SubCommandPack } from '~/interfaces/IDiscord'

export default class WrapData {
  /* === Public 関数 === */

  public static castToType<T>(data: any): T {
    return data as T
  }

  public static toCommandPack(data: CommandPack) {
    return data
  }

  public static toCommandPacks(...data: CommandPack[]) {
    return data
  }

  public static toSubCommandPack(data: SubCommandPack) {
    return data
  }

  public static toSubCommandPacks(...data: SubCommandPack[]) {
    return data
  }

  public static toButtonPack(data: ButtonPack) {
    return data
  }

  public static toButtonPacks(...data: ButtonPack[]) {
    return data
  }

  public static toModalPack(data: ModalPack) {
    return data
  }

  public static toModalPacks(...data: ModalPack[]) {
    return data
  }
}
