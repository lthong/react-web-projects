(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{104:function(e,t,a){"use strict";var n=a(13),c=a.n(n),l=a(1);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resizeCallback,a=void 0===t?function(){}:t,n=e.widthThreshold,r=void 0===n?530:n,i=Object(l.useState)(window.innerWidth<r),o=c()(i,2),s=o[0],u=o[1];return Object(l.useEffect)((function(){var e=function(){u(window.innerWidth<r),a&&a()};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[a,r]),{isMobile:s}}},107:function(e,t,a){},109:function(e,t,a){"use strict";var n=a(23),c=a.n(n),l=a(13),r=a.n(l),i=a(1),o=a.n(i),s=a(9),u=a.p+"static/media/bg1.1bf2878a.jpg",m=a.p+"static/media/bg2.cdb9e6ea.jpg",p=a(97),d=a(17),b=(a(95),function(e){var t=e.photoClasses,a=e.mainPhotoCustomStyle,n=void 0===a?{}:a,l=e.onReset,b=e.children,f=Object(i.useState)(u),v=r()(f,2),h=v[0],g=v[1],y=Object(i.useCallback)((function(){var e=document.createElement("a"),t=document.getElementById("main-photo"),a=document.getElementById("filter-style"),n=document.createElement("canvas"),c=n.getContext("2d");n.width=t.width,n.height=t.height,c.filter=window.getComputedStyle(a).filter,c.drawImage(t,0,0,t.width,t.height),e.download="filter-output.png",e.href=n.toDataURL(),e.click()}),[]),E=Object(i.useCallback)((function(e){var t,a=e.target.files[0];if(["png","jpeg"].includes(null===(t=a.type)||void 0===t?void 0:t.split("/")[1])){var n=URL.createObjectURL(a);g(n)}else alert("File type error! It accepts the type of .png and .jpeg")}),[]);return o.a.createElement("div",{className:"photo-selector"},o.a.createElement("div",{className:"photo-block"},o.a.createElement("figure",{className:Object(s.a)("main-photo",c()({},t,!!t)),id:"filter-style",style:n},o.a.createElement("img",{id:"main-photo",src:h,alt:"main-photo"})),o.a.createElement("div",{className:"photo-select"},o.a.createElement("div",null,o.a.createElement("img",{src:u,alt:"bg1",onClick:function(){g(u)}})),o.a.createElement("div",null,o.a.createElement("img",{src:m,alt:"bg2",onClick:function(){g(m)}})),o.a.createElement("div",{className:"upload"},o.a.createElement("label",{htmlFor:"file-upload",className:"upload-btn"},o.a.createElement(p.b,{className:"upload-icon",size:30,accept:"image/*"}),o.a.createElement("span",null,"Upload")),o.a.createElement("input",{id:"file-upload",type:"file",className:"file-input",onChange:E})))),b({currentPhoto:h}),o.a.createElement("div",{className:"action-block"},o.a.createElement("div",{className:"btn"},o.a.createElement(p.a,{className:"icon",size:30,onClick:y}),o.a.createElement("span",null,"Download")),l&&o.a.createElement("div",{className:"btn"},o.a.createElement(d.b,{className:"icon",size:30,onClick:l}),o.a.createElement("span",null,"Reset"))))});a(107),t.a=b},123:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(13),c=a.n(n),l=a(23),r=a.n(l),i=a(1),o=a.n(i),s=a(9),u=a(109),m=a(104);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=[{label:"亮度",key:"brightness",value:"100",max:"200"},{label:"對比",key:"contrast",value:"100",max:"200"},{label:"灰階",key:"grayscale",value:"0",max:"200"},{label:"負片",key:"invert",value:"0",max:"100"},{label:"飽和",key:"saturate",value:"100",max:"200"},{label:"懷舊",key:"sepia",value:"0",max:"200"},{label:"不透明",key:"opacity",value:"100",max:"100"},{label:"模糊",key:"blur",value:"0",max:"20"},{label:"下拉陰影",key:"drop-shadow",value:"5",max:"10"},{label:"色相旋轉",key:"hue-rotate",value:"0",max:"360"}],f=b.reduce((function(e,t){return d(d({},e),{},r()({},t.key,t.value))}),{}),v=function(){var e=Object(i.useState)((function(){return f})),t=c()(e,2),a=t[0],n=t[1],l=Object(m.a)().isMobile;return o.a.createElement("div",{className:"css-filters"},o.a.createElement(u.a,{mainPhotoCustomStyle:{filter:"brightness(".concat(a.brightness,"%) contrast(").concat(a.contrast,"%) grayscale(").concat(a.grayscale,"%) invert(").concat(a.invert,"%) saturate(").concat(a.saturate,"%) sepia(").concat(a.sepia,"%) opacity(").concat(a.opacity,"%)  blur(").concat(a.blur,"px) drop-shadow(5px 5px ").concat(a["drop-shadow"],"px #aaa) hue-rotate(").concat(a["hue-rotate"],"deg)")},onReset:function(){n(f)}},(function(){return o.a.createElement("div",{className:Object(s.a)("filter-block",{"m-size":l})},b.map((function(e){var t=e.key,c=e.label,l=e.max;return o.a.createElement("div",{key:t,className:"data-box"},o.a.createElement("div",{className:"info"},o.a.createElement("span",null,c),o.a.createElement("span",null,a[t])),o.a.createElement("input",{type:"range",min:"0",max:l,step:"1",value:a[t],onChange:function(e){var a=e.target.value;n((function(e){return d(d({},e),{},r()({},t,a))}))}}))})))})))};a(123),t.default=v}}]);