import {
  ApplicationCommandSubCommandData,
  ButtonInteraction,
  ChatInputApplicationCommandData,
  CommandInteraction,
  ModalSubmitInteraction,
} from 'discord.js'
import BaseInteractionManager from '~/managers/bases/BaseInteractionManager'
import { CustomIds } from './IEnum'

// ベースパック
interface BasePack {
  instance: ReturnType<typeof instance>
}

// コマンドパック
export interface CommandPack extends BasePack {
  data: ChatInputApplicationCommandData
}

// サブコマンドパック
export interface SubCommandPack extends BasePack {
  data: ApplicationCommandSubCommandData
}

// ボタンパック
export interface ButtonPack extends BasePack {
  id: CustomIds
}

// モーダルパック
export interface ModalPack extends BasePack {
  id: CustomIds
}

// インタラクション
export type Interactions = CommandInteraction<'cached'> | ButtonInteraction<'cached'> | ModalSubmitInteraction<'cached'>

// インスタンス生成
export function instance<T extends new (...args: any[]) => BaseInteractionManager<Interactions>>(CommandType: T) {
  return (...args: ConstructorParameters<T>) => new CommandType(...args)
}
