(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{104:function(e,t,a){"use strict";var l=a(13),n=a.n(l),i=a(1);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resizeCallback,a=void 0===t?function(){}:t,l=e.widthThreshold,r=void 0===l?530:l,c=Object(i.useState)(window.innerWidth<r),o=n()(c,2),s=o[0],m=o[1];return Object(i.useEffect)((function(){var e=function(){m(window.innerWidth<r),a&&a()};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[a,r]),{isMobile:s}}},107:function(e,t,a){},109:function(e,t,a){"use strict";var l=a(23),n=a.n(l),i=a(13),r=a.n(i),c=a(1),o=a.n(c),s=a(9),m=a.p+"static/media/bg1.1bf2878a.jpg",f=a.p+"static/media/bg2.cdb9e6ea.jpg",u=a(97),d=a(17),p=(a(95),function(e){var t=e.photoClasses,a=e.mainPhotoCustomStyle,l=void 0===a?{}:a,i=e.onReset,p=e.children,h=Object(c.useState)(m),b=r()(h,2),v=b[0],g=b[1],E=Object(c.useCallback)((function(){var e=document.createElement("a"),t=document.getElementById("main-photo"),a=document.getElementById("filter-style"),l=document.createElement("canvas"),n=l.getContext("2d");l.width=t.width,l.height=t.height,n.filter=window.getComputedStyle(a).filter,n.drawImage(t,0,0,t.width,t.height),e.download="ig-filter.png",e.href=l.toDataURL(),e.click()}),[]),w=Object(c.useCallback)((function(e){var t,a=e.target.files[0];if(["png","jpeg"].includes(null===(t=a.type)||void 0===t?void 0:t.split("/")[1])){var l=URL.createObjectURL(a);g(l)}else alert("File type error! It accepts the type of .png and .jpeg")}),[]);return o.a.createElement("div",{className:"photo-selector"},o.a.createElement("div",{className:"photo-block"},o.a.createElement("figure",{className:Object(s.a)("main-photo",n()({},t,!!t)),id:"filter-style",style:l},o.a.createElement("img",{id:"main-photo",src:v,alt:"main-photo"})),o.a.createElement("div",{className:"photo-select"},o.a.createElement("div",null,o.a.createElement("img",{src:m,alt:"bg1",onClick:function(){g(m)}})),o.a.createElement("div",null,o.a.createElement("img",{src:f,alt:"bg2",onClick:function(){g(f)}})),o.a.createElement("div",{className:"upload"},o.a.createElement("label",{htmlFor:"file-upload",className:"upload-btn"},o.a.createElement(u.b,{className:"upload-icon",size:30,accept:"image/*"}),o.a.createElement("span",null,"Upload")),o.a.createElement("input",{id:"file-upload",type:"file",className:"file-input",onChange:w})))),p({currentPhoto:v}),o.a.createElement("div",{className:"action-block"},o.a.createElement("div",{className:"btn"},o.a.createElement(u.a,{className:"icon",size:30,onClick:E}),o.a.createElement("span",null,"Download")),i&&o.a.createElement("div",{className:"btn"},o.a.createElement(d.b,{className:"icon",size:30,onClick:i}),o.a.createElement("span",null,"Reset"))))});a(107),t.a=p},114:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var l=a(13),n=a.n(l),i=a(1),r=a.n(i),c=a(9),o=a(98),s=a(11),m=a(93),f={Normal:"filter-normal",1977:"filter-1977",Aden:"filter-aden",Amaro:"filter-amaro",Ashby:"filter-ashby",Brannan:"filter-brannan",Brooklyn:"filter-brooklyn",Charmes:"filter-charmes",Clarendon:"filter-clarendon",Crema:"filter-crema",Dogpatch:"filter-dogpatch",Earlybird:"filter-earlybird",Gingham:"filter-gingham",Ginza:"filter-ginza",Hefe:"filter-hefe",Helena:"filter-helena",Hudson:"filter-hudson",Inkwell:"filter-inkwell",Kelvin:"filter-kelvin",Kuno:"filter-juno",Lark:"filter-lark","Lo-Fi":"filter-lofi",Ludwig:"filter-ludwig",Maven:"filter-maven",Mayfair:"filter-mayfair",Moon:"filter-moon",Nashville:"filter-nashville",Perpetua:"filter-perpetua",Poprocket:"filter-poprocket",Reyes:"filter-reyes",Rise:"filter-rise",Sierra:"filter-sierra",Skyline:"filter-skyline",Slumber:"filter-slumber",Stinson:"filter-stinson",Sutro:"filter-sutro",Toaster:"filter-toaster",Valencia:"filter-valencia",Vesper:"filter-vesper",Walden:"filter-walden",Willow:"filter-willow","X-Pro II":"filter-xpro-ii"},u=["Normal"].concat(a.n(m)()(Object.keys(f).filter((function(e){return"Normal"!==e})))),d=(a(95),a(104)),p=a(109),h=function(){var e=Object(i.useState)("normal"),t=n()(e,2),a=t[0],l=t[1],m=Object(d.a)().isMobile,h=Object(i.useMemo)((function(){return m?2:6}),[m]);return r.a.createElement("div",{className:"ig-filter"},r.a.createElement(p.a,{photoClasses:f[a]},(function(e){var t=e.currentPhoto;return r.a.createElement("div",{className:"filter-block"},r.a.createElement(o.a,{slidesPerView:h,spaceBetween:10,navigation:!0,modules:[s.b],className:"swipers"},u.map((function(e){return r.a.createElement(o.b,{key:e,onClick:function(){l(e)}},r.a.createElement("div",{className:Object(c.a)("item",{active:e===a})},r.a.createElement("figure",{className:f[e]},r.a.createElement("img",{src:t,alt:e}),r.a.createElement("figcaption",{className:"name"},e))))}))))})))};a(114),t.default=h}}]);