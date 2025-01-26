import { ColorResolvable, Colors, EmbedBuilder, WebhookClient } from 'discord.js'
import { client } from '..'
import Env from './Env'

export class Logger {
  /* === Private 変数 === */
  private static _webhook = new WebhookClient({ url: Env.logWebhookUrl }) // ログ出力用のWebhook

  /* === Public 関数 === */

  // ログ出力 (エラー)
  public static error(content: string) {
    this.sendLog(content, Colors.Red, true) // メンションを付ける
    console.error(content)
  }

  // ログ出力 (警告)
  public static warn(content: string) {
    this.sendLog(content, Colors.Yellow)
    console.warn(content)
  }

  // ログ出力 (情報)
  public static info(content: string) {
    this.sendLog(content, Colors.Blue)
    console.info(content)
  }

  // ログ出力 (デバッグ)
  public static debug(content: string) {
    this.sendLog(content, Colors.Grey)
    console.debug(content)
  }

  /* === Private 関数 === */

  // ログ送信
  private static sendLog(content: string, color: ColorResolvable, isMention: boolean = false) {
    const embed = new EmbedBuilder().setDescription(content).setTimestamp().setColor(color)
    const embeds = [embed]

    this._webhook?.send({
      avatarURL: client.user?.avatarURL() ?? undefined, // Botのアイコン
      // content: isMention ? userMention('UserID') or roleMention('RoleID') : undefined, // メンション
      embeds,
      username: client.user?.tag, // Botの名前
    })
  }
}
