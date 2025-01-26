import dotenv from 'dotenv'
import { ProjectTypes } from '~/interfaces/IEnum'
dotenv.config()

export default class Env {
  /* === Public 変数 === */

  public static get type(): string {
    return this._getEnv('TYPE') // プロジェクトの種類
  }

  public static get token(): string {
    return this._getEnv('TOKEN') // DiscordのBotトークン
  }

  public static get logWebhookUrl(): string {
    return this._getEnv('LOG_WEBHOOK_URL') // ログ出力用のWebhookURL
  }

  /* === Public 関数 === */

  public static isProd(): boolean {
    return this.type === ProjectTypes.Prod // 本番環境かどうか
  }

  public static isDev(): boolean {
    return this.type === ProjectTypes.Dev // 開発環境かどうか
  }

  /* === Private 変数 === */

  private static _getEnv(value: string): string {
    const getValue = process.env[value] // 環境変数を取得する
    if (!getValue) {
      throw new Error(`- **※.envにて${value}が設定されておりません**`)
    }
    return getValue
  }
}
