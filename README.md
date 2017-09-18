# IoT Web Sample

## 概要

[IoT-API-Sample](https://github.com/KemoKemo/IoT-API-Sample)のAPIを使って温度計情報を描画するWebサービスの実装サンプルです。

このリポジトリは以下のQiita記事と連動しています。

> [IoTのAPIサービスから取得した温度計情報をVue.jsとCanvas Gaugesでレンダリングしてみた](http://qiita.com/KemoKemo/items/f96338840770c2e425d0)

## 詳細

Go言語製の簡単なWebサービスでhtml、css、jsを公開して、描画処理もろもろは以下のライブラリを使ってクライアントサイドで行っています。

* [Vue.js](https://github.com/vuejs/vue)
* [vue-material](https://github.com/vuematerial/vue-material)
* [axios](https://github.com/mzabriskie/axios)
* [canvas-gauge](https://github.com/Mikhus/canvas-gauges)
