## React Web Projects

### Introduction

This project is a web demo of some React applications. Every page support the view of PC and H5. You can change the mode of dark and lite theme. More introduction is below.

本專案將實作許多 React Application，各頁面均支援 PC & H5 模式，另有黑白兩色系可作切換，詳細的介紹如下：

[Live Demo](https://lthong.github.io/react-web-projects) 😊
|#| Projects <a id="project-info"></a> |
|-:|:---------|
|01|[Music Player (音樂播放器)](#01) |
|02|[Vedio Browser (影片搜尋瀏覽)](#02) |
|03|[IG Filter (IG 濾鏡)](#03) |
|04|[Snake Game (貪食蛇)](#04) |
|05|[Jigsaw Game (拼圖遊戲)](#05) |
|06|[Dinosaur Game (恐龍遊戲)](#06) |
|07|[Animation Slider (圖片輪播器)](#07)
|08|[Matching Game (記憶卡牌遊戲)](#08) |
|09|[Countdown (倒數計值器)](#09) |

---

#### 🎸 Music Player (音樂播放器) <a id="01"></a>

<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m1.jpg' width='150px' style='margin: 8px 0' />

- Features
  - 選曲播放
  - 暫停播放
  - 上下首換曲
  - 自動換曲
  - 曲目時間顯示
  - 音軌拖拉播放
- Resource
  - [Html Audio](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)

##### <div style='text-align: right'>[⬆ TOP](#project-info)</div>

---

#### 📺 Vedio Browser (影片搜尋瀏覽)<a id="02"></a>

<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m2.jpg' width='150px' style='margin: 8px 0' />

- Features
  - 關鍵字搜尋
  - Enter 鍵搜尋
  - 影片點擊播放
  - 無限滾動內容
- Resource
  - [Youtube API](https://developers.google.com/youtube/v3/docs/search/list)
  - [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
  - [React Player](https://github.com/CookPete/react-player)
  - [semantic-ui-css](https://semantic-ui.com/)

##### <div style='text-align: right'>[⬆ TOP](#project-info)</div>

---

#### 📷 IG Filter (IG 濾鏡)<a id="03"></a>

<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m3.jpg' width='150px' style='margin: 8px 0' />

- Features
  - 濾鏡效果瀏覽
  - 圖片上傳
  - 圖片下載
  - 圖片檔案處理
- Resource
  - [instagram.css](https://github.com/picturepan2/instagram.css)
  - [Swiper](https://github.com/nolimits4web/swiper)
  - [Window.getComputedStyle()](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/getComputedStyle)
  - [CanvasRenderingContext2D.filter](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter)
  - [URL.createObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)

##### <div style='text-align: right'>[⬆ TOP](#project-info)</div>

---

#### 🐍 Snake Game (貪食蛇)<a id="04"></a>

<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m4.jpg' width='150px' style='margin: 8px 0' />

- Features
  - 邊界碰撞偵測
  - 蛇身碰撞偵測
  - 蘋果碰撞偵測
  - 蘋果隨機產生
  - 遊戲狀態控制
  - 鍵盤操作
  - 分數計算
- Resource
  - [useInterval](https://www.30secondsofcode.org/articles/s/react-use-interval-explained)
  - [useEffect update point](https://zh-hant.reactjs.org/docs/hooks-effect.html#explanation-why-effects-run-on-each-update)
  - [Canvas](https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API/Tutorial)
  <!-- - [requestAnimationFrame](https://developer.mozilla.org/zh-TW/docs/Web/API/window/requestAnimationFrame) -->

##### <div style='text-align: right'>[⬆ TOP](#project-info)</div>

---

#### 🧩 Jigsaw Game (拼圖遊戲)<a id="05"></a>

<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m5.jpg' width='150px' style='margin: 8px 0' />

- Features
  - 題目隨機生成
  - 支援更換題目
  - 響應裝置大小
  - 支援桌機拖拉
  - 支援手機拖拉
  - 可查看提示
  - 最終答案檢查
- Resource
  - [background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
  - [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
  - [DnD](https://pjchender.dev/html/html-drag-and-drop/)
  - [touch-event](https://developer.mozilla.org/zh-CN/docs/Web/API/Touch_events)
  - [getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)
  - [shuffle algorithm](https://chupai.github.io/posts/2008/shuffle_algorithm/)

##### <div style='text-align: right'>[⬆ TOP](#project-info)</div>

---

#### 🦖 Dinosaur Game (恐龍遊戲)<a id="06"></a>

<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m6.jpg' width='150px' style='margin: 8px 0' />

- Features
  - 動畫執行/暫停
  - 恐龍跳躍操作
  - 仙人掌碰撞偵測
  - 仙人掌隨機產生
  - 遊戲狀態控制
  - 鍵盤操作
  - 點擊操作
  - 背景音樂
  - 分數計算
- Resource
  - [useInterval](https://www.30secondsofcode.org/articles/s/react-use-interval-explained)
  - [useEffect update point](https://zh-hant.reactjs.org/docs/hooks-effect.html#explanation-why-effects-run-on-each-update)
  - [SCSS operators](https://sass-lang.com/documentation/operators)
  - [css background-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image)
  - [css background-position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position)
  - [css animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)
  - [css animation-play-state](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state)
  - [keydown event](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)

##### <div style='text-align: right'>[⬆ TOP](#project-info)</div>

---

#### 🎞 Animation Slider (圖片輪播器)<a id="07"></a>

<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m7.jpg' width='150px' style='margin: 8px 0' />

- Features
  - 輪播拖曳偵測
  - 輪播圖自動輪播
  - 輪播圖左右切換
  - 動畫簡介
  - 動畫圖庫
  - 圖片淡入淡出
- Resource
  - [onMouseEnter](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mouseenter_event)
  - [onMouseDown](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mousedown_event)
  - [onMouseMove](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mousemove_event)
  - [onMouseUp](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mouseup_event)
  - [onMouseLeave](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mouseleave_event)
  - [CSSStyleDeclaration.setProperty()](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleDeclaration/setProperty)
  - [css translateX()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/translateX)

##### <div style='text-align: right'>[⬆ TOP](#project-info)</div>

---

#### 🙈 Matching Game (記憶卡牌遊戲)<a id="08"></a>

<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m8.jpg' width='150px' style='margin: 8px 0' />

- Features
  - 卡牌隨機排列
  - 卡牌翻轉動畫
  - 分數計算
  - 遊戲重置
- Resource
  - [shuffle algorithm](https://chupai.github.io/posts/2008/shuffle_algorithm/)
  - [flip box example](https://www.w3schools.com/howto/howto_css_flip_box.asp)
  - [css perspective](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective)
  - [css transform-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-style)
  - [css backface-visibility](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backface-visibility)
  - [css conic-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/conic-gradient)

##### <div style='text-align: right'>[⬆ TOP](#project-info)</div>

---

#### ⏲ Countdown (倒數計值器)<a id="09"></a>

<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m9.jpg' width='150px' style='margin: 8px 0' />

- Features
  - 秒數倒數
  - 輸入驗證
  - 開始鍵
  - 暫停鍵
  - 倒數動畫
- Resource
  - [svg circle](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/circle)
  - [svg stroke](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke)
  - [svg stroke-dasharray](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)
  - [svg stroke-dashoffset](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dashoffset)

##### <div style='text-align: right'>[⬆ TOP](#project-info)</div>

---
