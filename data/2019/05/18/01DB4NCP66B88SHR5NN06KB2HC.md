---
id: 01DB4NCP66B88SHR5NN06KB2HC
title: 'Inside Frontend 2019 参加メモ'
create: '2019-05-19 23:00'
modify: '2019-05-19 23:00'
categories: [Meetup]
---

Inside Frontend 2019 に参加してきたのでメモ。

最近の自分の気持ちとして、ガッツリ技術の話ではなく大規模開発について知りたい気持ちが強かったので、そうゆう発表をいくつか聞くことができて良かった。

<!-- more -->

<blockquote class="embedly-card" data-card-key="efc9713d77434ae8b88ef22dda0a91e8" data-card-controls="0" data-card-type="article" data-card-align="left"><h4><a href="https://inside-frontend.com/">Inside Frontend #3</a></h4><p>2019年5月18日 Frontendカンファレンスを渋谷Abema Towersで開催</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

## TypeScript: Why and how we adopted it at Slack

- SlackでTSが採用された理由と方法
- TSとトランスパイルされるJSの比較
  - 人間が読めるコードに変換される
- エディタで補完が効くのも良い
- 型の補完でI/Fが見れるので、効率的に開発をすすめることができた
  - Koaを利用しているが、ドキュメントを見に行くことが少なくなった
- Slackではネイティブ出身のエンジニアが多く、型に慣れている
- 型付けが複雑過ぎて、一般的なJSエンジニアは混乱することがある

## Introduction to Lucet

- FastlyのWebAssemblyのコンパイラとランタイムで構成される「Lucet」の紹介
  - https://www.publickey1.jp/blog/19/fastly_ctowebassemblylucet.html 
  - https://www.fastly.com/blog/announcing-lucet-fastly-native-webassembly-compiler-runtime
- WebAssembly → Lucet → x86-64
  - lucetはJIT(Just In Time)ではなくAOT(Ahead of Time)なので、コンパイル時に最適化がされる
  - lucetcでwasmをparse → verifier → translator → codegen → artifat生成
  - craneliftでIRをverifiter → pre-optimize → legalizer → post-optimize → register allocator → branch relaxer
- https://wasm.fastlylabs.com/
  - wasmのサンドボックス
- Terrariumはx86-64向けしかサポートしていないが今後増やしていく

## Making less of the web with feature policy
- 黎明期のWeb開発にルールはなかった
  - 今日ではDeveloperとVendorが協力して作るようになった
  - 成熟したエコシステムでもルールがある
    - たとえば航空業界もさまざまな協定やルールを決めて運用されている
- ポップアップウィンドウやFlashは介入によって見直され無くなっていった
  - AMPでも同じように、問題があるとして介入が始まっている
    - http://ampletter.org/?lang=ja
- Feature PolicyのHTTPヘッダは自動再生や通知設定を制御することができる
  - https://featurepolicy.info/
    - Feature Policyのプレイグラウンド
- Rebuild.fmはFeature Policyの違反が1つだけ、jackさんのサイトはオールグリーン！
- 非同期で呼び出す、メディアを最適化する、レンダリングをブロックしない

## formの送信ログから反省する、本当は必要だったvalidationや機能たち

- https://speakerdeck.com/sadnessojisan/formfalsesong-xin-rogukarafan-sheng-suru-ben-dang-habi-yao-datutabaridesiyonyaji-neng-tati
- 「肩エラーがひどい」ｗ
- 「リクルートライフスタイルはリクルートテクノロジーズではありません」ｗ
- 業務アプリケーションは設定画面に大量のフォームが必要で複雑になりがち
  - 分析提案機能の精度向上のために必要
- 実際に遭遇したUXバグ
  - 「0」と「O」のキーは近いので「お」の入力ミスが発生する
  - 大量のフォームがある時、操作のたびに再レンダリングが走ってしまうと重くなる
  - 入力前のバリデーションの場合、「0」「０」のチェックで「０」が入力できず、全角入力後に半角へ変換したいユースケースに対応していなかった
- フォームは想像以上に実装すべき機能が多く、実装漏れを起こしやすい
- 仕組みで担保する取り組みを始めた
  - Input要素の振る舞いをAirシリーズで統一するためのデザインコンポーネント
  - 要件をテストケースとしたインテグレーションテストを用いて、TDDで開発している
    - https://github.com/testing-library/dom-testing-library
    - https://github.com/testing-library/react-testing-library
    - https://github.com/testing-library/vue-testing-library
    - ユーザのユースケースの粒度で、ページそのものに対してテストを書くことができる
  - Firebaseでログを記録し、ログの配列を元にSeleniumで再現をする
    - 完全に再現できるわけではないが、ユーザがどのように動かしたかはある程度知ることができる
- まとめ
  - フォームはユーザとの接点であり、サービスにとっては生命線そのもの
  - フォームの実装ミスに気付くための仕組みを作り、ユーザの声を拾いながらフォームを作れるようにした

## AbemaTVにおけるCSS is too fragile問題に対する解

- https://speakerdeck.com/kubosho/solution-of-css-is-too-fragile-in-abematv
- 元々のCSS構成 Atomic Design
- 元々はFlux単位だったディレクトリ構造だったが、機能ドメインの増加に伴い、ディレクトリ構造を変えた
- ディレクトリ構造の変更によって、スタイルが壊れてしまった
  - インポートの順序が変わったことで探索の順序が変わってしまい、順番に依存するルールが崩れてしまった
- CSS Modules から BEM + PostCSS に移行した
  - `アプリケーションドメイン_コンポーネント名__コンポーネント内の要素--修飾子`
- 結果
  - CSSのimport順でスタイルが適用されるようになったので、スタイル管理がしやすくなった
  - クラス名の規約を作るコスト、規約に沿っているかのレビューのコストが増えたが、浸透すればそのコストは減っていく
  - ファイルサイズとパフォーマンスに影響はあまりなかった

## 品質と開発速度を両立させるために捨てたものと守ったもの

- https://docs.google.com/presentation/d/13QD86hxp0dB_xHkYcyLrFX1xNt0Vg4wsqIo8yeBQmFs/mobilepresent?slide=id.g5a1484322a_2_48
- WinTicketの事例
  - 屋外での利用と高い年齢層など、競輪ドメインに求められる特性
  - 高い利用体験を実現するためにはパフォーマンスとアクセシビリティだと考えた
  - 開発体制はFE8人、想定ページ数最大100P
  - 初期工数見積は12か月以上に対して、納期は4か月
- 品質を担保する戦略
  - Performance
    - パフォーマンスのためにSSRを利用している
      - メディア特性とアプリケーション特性があるが、メディア特性を最大限活かすための施策
      - Fastify + React
    - Fastlyを使ったキャッシュの利用
      - ユーザ固有の情報については配信時はプレースホルダー表示、クライアントサイドでレンダリングを実施
      - UAによって4種類に絞り、キャッシュヒット率を上げた
    - Performance Budget
      - SpeedCurveを使ったSynthetic Monitoringを行い、基準値を超えたらSlackに通知
    - Resource Budget
      - ファイルサイズをチェックし、基準値を超えたらCIで落とす
    - Code Splitting & Dynamic Import
      - チャンク分割と遅延読み込み
    - Component Catalog
  - Development
    - TSを書きつつ、Unit TestとVisual Regression Testのテストを使い分けることで、変更に強いコードを実現
    - 全体を通して、当たり前を積み重ねることを意識し、その後の開発改善のための安定した開発基盤を整えた
  - Accessibility
    - プロジェクト初期からデザイナーとの密なコミュニケーション
      - コントラスト比、フォーカスリング用のスタイルの統一、フォントサイズなど、守りたい点を伝える
    - 実装方針の策定
      - 当初は個人任せだったが、問題が出てきたので、全員で共有するための方針が必要だった
      - a11yの観点からFE実装の達成すべきMust Usual Advancedを決めた
- 捨てたもの
  - 全ページキャッシュ
  - 慣れた技術以外への挑戦
  - 小中規模の負債に対しては勇気ある妥協をしたが、負債を局所化しコントロールできる状態の維持を意識した
  - レビューにかかるコスト、意思決定にかかるスピードから、Mustではないものは諦めた
- これから
  - PR単位でPerformanceを確認できるようにLightWalletの導入
  - ページによってはインタラクションに伴う問題を抱えているのでRuntime Performanceの改善
  - prefetchやpreloadの機構の追加
  - 品質テストの自動化
- 捨てたもの
  - レビューにかかるコスト、意思決定にかかるスピードから、Mustではないものは諦めた
  - 要素選択の徹底
  - 完璧なフォーカスマネジメント
- まとめ
  - やらないを決めることの覚悟と重要性
  - どこからどのくらい借り入れがあるかは把握する
  - 改善 / 維持ができる基盤は大事
  - あたりまえを積み重ねる
