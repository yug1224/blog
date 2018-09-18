---
id: 5ba10962cd2abc3b5fbed8d4
title: 'Roppongi.js#6参加メモ'
create: '2018-09-18 23:19'
modify: '2018-09-18 23:19'
categories: [Meetup]
image: 'https://blog.yug1224.com/images/2018/09/18/0001.jpg'
image: ''
---

Roppongi.js#6 に参加してきたのでメモ。

<blockquote class="embedly-card" data-card-key="efc9713d77434ae8b88ef22dda0a91e8" data-card-controls="0" data-card-type="article" data-card-align="left"><h4><a href="https://roppongi-js.connpass.com/event/98983/">Roppongi.js #6 (2018/09/18 19:00〜)</a></h4><p>Roppongi.jsって？ Roppongi.jsは六本木周辺に生息するJavaScript loversのJavaScript loversによるJavaScript loversのためのイベントです。 もちろん六本木周辺以外の方でもお気軽にご参加ください。 内容はJavaScriptにまつわることであればOKです。 初心者の方もガチ勢の方も大歓迎です。参加資格はJavaScriptを愛するかどうか。 ぜひぜひ奮ってご参加ください！ # 参加枠 * LT(10分)発表枠 - LT(10分)を発表いただく参加者の枠です * LT(5分)発表枠 - LT(5...</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

<!-- more -->

## SET活動のすすめ by @urahiroshi

<!-- <div style="max-width:500px">
<script async class="speakerdeck-embed" data-id="dc6eee68302845f9bdc35cd814cbaadd" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
</div> -->

- https://speakerdeck.com/urahiroshi/sethuo-dong-falsesusume
- メルカリのWeb Frontend SETについて
  - Security Engineering in Test
- CI・開発プロセスの改善
  - CircleCI
  - GitHubの設定
  - CIで使うnpm package作成
- 外部ツールの導入・検証
  - Sentry
  - Codecov
  - Renovate
- テスト・リファクタリング
  - ユニットテストのセットアップ
    - カバレッジの目標設定
  - 自動E2Eテストの検討
    - UTで担保しきれない部分や手動で毎回確認する部分
  - リファクタリング
- SET活動のメリット
  - エンジニア自身
    - 視点を変えることで異なるアプローチの解決策を考えられるようになる
  - 新しいスキルセットが身につく
    - スケジュール駆動開発
  - 組織的 
    - プロセス改善は組織の強みになる
    - プロセスの問題をすくい上げられる

## WebAssemblyのこれまでとこれから by @fnwiya

<!-- <div style="max-width:500px">
<script async class="speakerdeck-embed" data-id="80c6d723cc6f4cee9006701ca71f7bf6" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>
</div> -->

- https://speakerdeck.com/fnwiya/webassembly-future
- 株式会社ジャパンベンチャーリサーチ
- WASMとは？
- Features to add after the MVP
  - Threads
  - GC
  - ESM integration
  - Host bindings
    - wasm-bindgen
      - WASMからBrowser APIを触ったり
      - JSからWASMを触ったり
- Not: WASM vs JS
  - JSを置き換えるものだったり対立するものではない
- High-Level Goals
  - More integrated with JS
  - Support more non-browser embeddings

## Vue.jsをv0.11.0からv2.5.16にあげようとしている話 by @iidaapp

- 株式会社L is B
- Majar上げるためにビルド環境を整備した話
  - bower → gradle → grunt のフローが複雑すぎてつらい
- bowerの除去
  - bowerでのビルドからgradleでコピーのタスクをnpm scriptに移行
- gruntの移行
  - browserify, vueify, minify, concat, etc. をwebpack4に移行
- Vue.jsのアップデート
  - deprecatedを愚直に置き換え

## TypeScript and immutability by @brn0227

<!-- <div style="max-width:500px">
<script async class="speakerdeck-embed" data-id="e879bc4998574dc0b8cdd9d6d3fe0dcb" data-ratio="1.41436464088398" src="//speakerdeck.com/assets/embed.js"></script>
</div> -->

- https://speakerdeck.com/brn/typescript-and-immutability
- 株式会社サイバーエージェント
- 青野だからブルーノ
- What is Immutability
- is so important?
  - 参照透過性
  - 副作用が起きない
- Immutability in REAL LIFE
  - Immutable.js はTSだと相性が悪い
  - immer はPlainObjectをImmutableにしてくれるので使いやすい
    - classが使えない
  - Writable / Writer
    - 自作のエンティティでもReadOnlyをしたい
  - mutate
- Summary
  - PlainObject最高！

## プロトタイプを越えるReact Native by @timakin

- 株式会社Gunosy
- RN本番運用に対する見方
  - プロトタイプには向いているのでは？とか否定的な意見が多い
- プロトタイプと本番運用の境目
  - メンテナンス性
    - RN自体のバージョン上げはきついが基本問題なし
    - JSとしてのメンテナンスコストはある
  - 技術的な天井
    - リアルタイム通信やARKitなどネイティブとのブリッジが発生する部分はきつい
  - 採用面
    - ネイティブ経験者なら1週間あればできる
- どんな機能で不安になりやすいか
  - 一歩踏み込んだ機能は大変なのでは？という不安があったが問題なかった
  - UIの機微
    - ナビゲーションバーの違い
    - シャドウの調整
    - 画像の非同期読み込み
  - プッシュ通知対応
    - react-native-firebase
  - ディープリンク対応
  - 課金処理
    - react-native-iap
- まとめ
  - だいたい本番で不安になるような機能拡張は実現可能
    - RNがわからんからもたついているのかどうかはっきりと区別しよう

## JavaScriptはコンパイル言語か by @ariaki

<!-- <div style="max-width:500px">
<script async class="speakerdeck-embed" data-id="22f1c345f89449b7aeb81d98b668bee3" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
</div> -->

- https://speakerdeck.com/ariaki/is-javascript-a-compiled-language
- 前提条件
  - コンパイラ型言語
  - インタプリタ型言語
- AST関連ツール
  - parser
  - traverseler
  - code generator
  - linter
- JSの動作の仕組み
  - インタプリタとコンパイラ、両方存在する
    - 投機的に変換する
  - JITコンパイラ
    - Just-In-Timeコンパイラ
    - プログラムの実行時にコンパイル
- まとめ
  - JSエンジンはJITコンパイラをもつ
  - 複数のコンパイラを使って最適化している
  - JSは両方持っているし、どっちでもいいｗ

## Universal package.json by @れこ

<!-- <iframe
  width="500"
  height="375"
  src="https://talks.leko.jp/universal-package.json"
>
</iframe> -->

- https://talks.leko.jp/universal-package.json/#0
- 株式会社キュア・アップ
- `react-native` フィールド
  - RNでのみ反応するエントリポイント
- `browser` フィールド
  - client-sideで利用されることを意図している場合にのみ反応するエントリポイント
- `react-native`, `browser` 共に、場合によって `main` よりも優先して評価される
- RN-web + (no suffix) が鬼門
  - `react-native` をimportしてほしいが、RN-webは環境的にはwebpackなので `browser` が優先されてしまう
- まとめ
  - `browser`, `react-native` はmetroにおいてmainより優先される
  - RN⇄browserは、Node.js⇄browserかそれ以上に難しい

## 親に向かってなんだそのz-indexは！！ by @ojisan

<!-- <div style="max-width:500px">
<script async class="speakerdeck-embed" data-id="e5c905298752499b83cb006b28bd0c11" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
</div> -->

- https://speakerdeck.com/sadnessojisan/qin-nixiang-katutenandasofalsez-indexha
- 株式会社リクルートライフスタイル
- JSのイベントなのにCSSのお話！！！
- 前提条件
  - プランナー「管理テーブルを作って」
  - 案件前の気持ち「絶対やばい...絶対崩れる...」
- z-index + position = 怪奇現象
  - モーダルを突破してくる謎のやつ
    - z-index持ちのTable header
- modalに高いz-indexを設定
  - 子供が親より強くなって解決？
  - 大きいz-indexを使うのは、親の立場として大人げ無い！
- Stack Context
  - そもそもz-indexの数値の意味は？
    - NO: 要素の重なり順を示す
    - YES: **同じStack Context内での**要素の重なり順を示す
  - z-indexの効果の影響範囲
    - 突破している要素を、新しいコンテキストで包み、外に漏れないようにする
- まとめ
  - 子供が言うことを聞かないならなら、Stack Contextに閉じ込めてやりましょう


## 感想

今回はRNの話がいくつかあったり、TSの話やJITコンパイラの話にCSSの話と、LTのジャンルが幅広かったので、飽きずに楽しむことが出来ました。

個人的には「親に向かってなんだそのz-indexは！！」のLTが面白かったので凄く良かった。JSではなくてCSSの話だけどｗ

<!-- ![親に向かってなんだそのz-indexは](/images/2018/09/18/0001.jpg) -->

以上
