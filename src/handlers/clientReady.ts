import commands from '~/interactions/commands'
import { Logger } from '~/lib/Logger'
import { client } from '..'

export default async function clientReady() {
  // ログを出力する
  Logger.info(`Logged in: ${client.user?.tag}`)

  // コマンドを登録する
  await client.application?.commands.set(commands.map((d) => d.data))
}
