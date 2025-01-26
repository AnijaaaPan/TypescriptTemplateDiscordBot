import { codeBlock } from 'discord.js'
import { Logger } from '~/lib/Logger'

export default function errorHandler(error: Error) {
  // エラーログの内容を取得する
  const content = codeBlock('ts', error.stack ?? error.message)

  // エラーログを出力する
  Logger.error(content)
}
