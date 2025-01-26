import errorHandler from '~/handlers/errorHandler'

export default abstract class BaseManager {
  /* === Public 関数 === */

  // 実行
  public async execute(...args: unknown[]) {
    await this.main(...args).catch((error: Error) => {
      this.onError(error)
    })
  }

  /* === Protected 関数 === */

  // メイン処理
  protected abstract main(...args: unknown[]): Promise<void>

  // エラー処理
  protected onError(error: Error) {
    errorHandler(error) // エラーハンドラーを呼び出す
  }
}
