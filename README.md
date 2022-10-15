## React Web Projects

### Introduction

This project is a web demo of some React applications. Every page support the view of PC and H5. You can change the mode of dark and lite theme. More introduction is below.

本專案將實作許多 React Application，各頁面均支援 PC & H5 模式，另有黑白兩色系可作切換，詳細的介紹如下：

[Live Demo](https://lthong.github.io/react-web-projects) 😊
|#| Projects  |      Preview     |
|-:|:---------|:-------------:|
|01|[Musci Player](#01) |![d1](https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/d1.jpg)|
|02|[Vedio Browser](#02) |![d2](https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/d2.jpg)|
|03|[IG Filter](#03) |![d3](https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/d3.jpg)|
|04|[Snake Game](#04) |![d4](https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/d4.jpg) |
|05|[Jigsaw Game](#05) |![d5](https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/d5.jpg)|
  
---
#### 🎸 Musci Player 音樂播放器 <a id="01"></a>
  * Features
    - 選曲播放
    - 暫停播放
    - 上下首換曲
    - 自動換曲
    - 曲目時間顯示
    - 音軌拖拉播放
  * Resource
    - [Html Audio](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)
---
#### 📺 Vedio Browser 影片瀏覽<a id="02"></a>
  * Features
      - 關鍵字搜尋
      - Enter鍵搜尋
      - 影片點擊播放
      - 無限滾動內容
  * Resource
      - [Youtube API](https://developers.google.com/youtube/v3/docs/search/list)
      - [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
      - [React Player](https://github.com/CookPete/react-player)
      - [semantic-ui-css](https://semantic-ui.com/)
---
#### 📷 IG Filter IG濾鏡<a id="03"></a>
  * Features
      - 濾鏡效果瀏覽
      - 圖片上傳
      - 圖片下載
      - 圖片檔案處理
  * Resource
      - [instagram.css](https://github.com/picturepan2/instagram.css)
      - [Swiper](https://github.com/nolimits4web/swiper)
      - [Window.getComputedStyle()](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/getComputedStyle)
      - [CanvasRenderingContext2D.filter](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter)
      - [URL.createObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)
---
#### 🐍 Snake Game 貪食蛇<a id="04"></a>
  * Features
      - 邊界碰撞偵測
      - 蛇身碰撞偵測
      - 蘋果碰撞偵測
      - 蘋果隨機產生
      - 遊戲狀態控制
      - 鍵盤操作
      - 分數計算
  * Resource
      - [useInterval](https://www.30secondsofcode.org/articles/s/react-use-interval-explained)
      - [useEffect update point](https://zh-hant.reactjs.org/docs/hooks-effect.html#explanation-why-effects-run-on-each-update)
      - [Canvas](https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API/Tutorial)
      <!-- - [requestAnimationFrame](https://developer.mozilla.org/zh-TW/docs/Web/API/window/requestAnimationFrame) -->
---
#### 🧩 Jigsaw Game 拼圖遊戲<a id="05"></a>
  * Features
      - 題目隨機生成
      - 支援更換題目
      - 響應裝置大小
      - 支援桌機拖拉
      - 支援手機拖拉
      - 可查看提示
      - 最終答案檢查
  * Resource
      - [background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
      - [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
      - [DnD](https://pjchender.dev/html/html-drag-and-drop/)
      - [touch-event](https://developer.mozilla.org/zh-CN/docs/Web/API/Touch_events)
      - [getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)