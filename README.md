実行環境:
- Node Version: v20.11.0
- NPM Version: 10.2.4
- Visual Studio Code

起動手順:
1. プロジェクトをインストール
2. ターミナルを開き`npm ci`で必要なパッケージをインストール
3. `.env`ファイルを作成し、以下の内容を追加
```
TYPE="DEVELOPMENT"
TOKEN=""
LOG_WEBHOOK_URL=""
```
4. TOKENにDiscordのBOTのTokenを設定
5. LOG_WEBHOOK_URLに自分がログの出力先にしたいDiscordチャンネルのWebhookURLを設定
6. ターミナルを開き`npm run dev`で起動する
