import { Client, Events, IntentsBitField, Partials } from 'discord.js'
import clientReady from './handlers/clientReady'
import errorHandler from './handlers/errorHandler'
import interactionCreate from './handlers/interactionCreates'
import Env from './lib/Env'
import { Logger } from './lib/Logger'

export const client = new Client({
  intents: [
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMessageReactions,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
})

client.once(Events.ClientReady, clientReady) // クライアントが準備完了したとき
client.on(Events.InteractionCreate, interactionCreate) // インタラクションが作成されたとき

process.on('unhandledRejection', (reason) => Logger.error(`# UnhandledRejection:\n>>> ${reason}`)) // 未処理のPromiseが拒否されたとき
process.on('uncaughtException', errorHandler) // 未処理のエラーが発生したとき

client.login(Env.token) // Botをログインさせる
