/* eslint-disable no-unused-vars */

// プロジェクトタイプ
export enum ProjectTypes {
  Prod = 'PRODUCT', // 本番
  Dev = 'DEVELOPMENT', // 開発
}

// カスタムID
export enum CustomIds {
  CommandTestSendMessage = 'command_test_send_message', // メッセージ送信コマンド
  CommandTestShowModal = 'command_test_show_modal', // モーダル表示コマンド

  SubCommandTestSendMessage = 'subcommand_test_send_message', // メッセージ送信サブコマンド
  SubCommandTestShowModal = 'subcommand_test_show_modal', // モーダル表示サブコマンド

  ButtonTestSendMessage = 'button_test_send_message', // メッセージ送信ボタン
  ButtonTestShowModal = 'button_test_show_modal', // モーダル表示ボタン

  ModalTest = 'modal_test', // モーダル
  ModalInputTest = 'modal_input_test', // モーダル入力
}
