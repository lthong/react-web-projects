## React Web Projects

### Introduction

This project is a web demo of some React applications. Every page support the view of PC and H5. You can change the mode of dark and lite theme. More introduction is below.

本專案將實作許多 React Application，各頁面均支援 PC & H5 模式，另有黑白兩色系可作切換，詳細的介紹如下：

[Live Demo](https://lthong.github.io/react-web-projects) 😊
|#| Project <a id="project-info"></a> |
|-:|:---------|
|01|[Music Player (音樂播放器)](#01) |
|02|[Vedio Browser (影片搜尋瀏覽)](#02) |
|03|[IG Filter (IG 濾鏡)](#03) |
|04|[Snake Game (貪食蛇)](#04) |
|05|[Jigsaw Game (拼圖)](#05) |
|06|[Dinosaur Game (Google 恐龍遊戲)](#06) |
|07|[Animation Slider (圖片輪播器)](#07)
|08|[Matching Game (記憶卡牌)](#08) |
|09|[Countdown (倒數計值器)](#09) |
|10|[Drawing (畫畫板)](#10) |
|11|[Pacman Game (小精靈)](#11) |
|12|[CSS Filters (CSS 濾鏡)](#12) |
|13|[Pokedex (寶可夢圖鑑)](#13) |
|14|[Tic Tac Toe Game (圈圈叉叉)](#14) |

---

#### 🎸 Music Player (音樂播放器) <a id="01"></a>

<a href='https://lthong.github.io/react-web-projects/music-player' target='_blank' >
<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m1.jpg' width='150px' style='margin: 8px 0' />
</a>

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

<a href='https://lthong.github.io/react-web-projects/vedio-browser' target='_blank' >
<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m2.jpg' width='150px' style='margin: 8px 0' />
</a>

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

<a href='https://lthong.github.io/react-web-projects/ig-filter' target='_blank' >
<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m3.jpg' width='150px' style='margin: 8px 0' />
</a>

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

<a href='https://lthong.github.io/react-web-projects/snake-game' target='_blank' >
<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m4.jpg' width='150px' style='margin: 8px 0' />
</a>

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

#### 🧩 Jigsaw Game (拼圖)<a id="05"></a>

<a href='https://lthong.github.io/react-web-projects/jigsaw-game' target='_blank' >
<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m5.jpg' width='150px' style='margin: 8px 0' />
</a>

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

#### 🦖 Dinosaur Game (Google 恐龍遊戲)<a id="06"></a>

<a href='https://lthong.github.io/react-web-projects/dino-game' target='_blank' >
<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m6.jpg' width='150px' style='margin: 8px 0' />
</a>

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

<a href='https://lthong.github.io/react-web-projects/anima-slider' target='_blank' >
<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m7.jpg' width='150px' style='margin: 8px 0' />
</a>

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

#### 🙈 Matching Game (記憶卡牌)<a id="08"></a>

<a href='https://lthong.github.io/react-web-projects/matching-game' target='_blank' >
<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m8.jpg' width='150px' style='margin: 8px 0' />
</a>

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

<a href='https://lthong.github.io/react-web-projects/countdown' target='_blank' >
<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m9.jpg' width='150px' style='margin: 8px 0' />
</a>

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

#### ⏲ Drawing (畫畫板)<a id="10"></a>

<a href='https://lthong.github.io/react-web-projects/drawing' target='_blank' >
<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m10.jpg' width='150px' style='margin: 8px 0' />
</a>

- Features
  - 畫布繪畫
  - 自選顏色
  - 筆刷大小
  - 清除畫布
  - 作品儲存
- Resource
  - [canvas lineTo](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - [canvas clearRect](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - [TouchEvent targetTouches](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent/targetTouches)
  - [TouchList](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchList)
  - [Touch](https://developer.mozilla.org/zh-CN/docs/Web/API/Touch)
  - [user-scalable](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Viewport_meta_tag)

##### <div style='text-align: right'>[⬆ TOP](#project-info)</div>

---

#### 👀 Pacman Game (小精靈)<a id="11"></a>

<a href='https://lthong.github.io/react-web-projects/pacman-game' target='_blank' >
<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m11.jpg' width='150px' style='margin: 8px 0' />
</a>

- Features
  - 地圖繪製
  - 小精靈移動
  - 鬼自動移動
  - 金幣邏輯
  - 碰撞偵測
  - 分數計算
- Resource
  - [canvas clearRect](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - [canvas arc](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/arc)
  - [for...of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)
  - [example](https://www.youtube.com/watch?v=5IMXpp3rohQ)

##### <div style='text-align: right'>[⬆ TOP](#project-info)</div>

---

#### 🌫 CSS Filters (CSS 濾鏡)<a id="12"></a>

<a href='https://lthong.github.io/react-web-projects/css-filters' target='_blank' >
<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m12.jpg' width='150px' style='margin: 8px 0' />
</a>

- Features
  - 自訂圖片濾鏡效果
  - grayscale (灰階)
  - sepia (懷舊)
  - saturate (飽和)
  - hue-rotate (色相旋轉)
  - invert (負片)
  - opacity (不透明)
  - brightness (亮度)
  - contrast (對比)
  - blur (模糊)
  - drop-shadow (下拉陰影)
- Resource
  - [css filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)
  - [css filter intro](http://blog.shihshih.com/css-filter/)

##### <div style='text-align: right'>[⬆ TOP](#project-info)</div>

---

#### 📖 Pokedex (寶可夢圖鑑)<a id="13"></a>

<a href='https://lthong.github.io/react-web-projects/pokede' target='_blank' >
<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m13.jpg' width='150px' style='margin: 8px 0' />
</a>

- Features
  - 列表查詢
  - 屬性分類
  - 加入最愛
  - 背景音樂
  - 多國語系

##### <div style='text-align: right'>[⬆ TOP](#project-info)</div>

---

#### 📖 Tic Tac Toe Game (圈圈叉叉)<a id="14"></a>

<a href='https://lthong.github.io/react-web-projects/pokede' target='_blank' >
<img alt='' src='https://raw.githubusercontent.com/lthong/react-web-projects/master/src/components/Home/assets/imgs/screenShot/m14.jpg' width='150px' style='margin: 8px 0' />
</a>

- Features
  - 遊戲邏輯
  - 步驟記錄
  - 輸贏判斷

##### <div style='text-align: right'>[⬆ TOP](#project-info)</div>

---
