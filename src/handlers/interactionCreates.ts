import { Interaction } from 'discord.js'
import buttons from '~/interactions/buttons'
import commands from '~/interactions/commands'
import modals from '~/interactions/modals'

export default async function interactionCreate(interaction: Interaction) {
  // インタラクションがギルド内でない場合、またはギルドが存在しない場合は処理を終了する
  if (!interaction.inCachedGuild() || !interaction.guild) return

  // コマンドの場合
  if (interaction.isCommand()) {
    const getCommand = commands.find((c) => c.data.name === interaction.commandName)
    await getCommand?.instance(interaction).execute() // コマンドを実行する
    return
  }

  // ボタンやモーダルの場合
  if (interaction.isButton() || interaction.isModalSubmit()) {
    const interactionObjects = interaction.isButton() ? buttons : modals
    const getObject = interactionObjects.find((c) => c.id === interaction.customId)
    await getObject?.instance(interaction).execute() // ボタンやモーダルを実行する
  }
}
