(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{101:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var l=a(11),i=a.n(l),n=a(1),r=a.n(n),c=a(96),o=a(10),s=a.p+"static/media/bg1.7a76b371.jpg",m=a.p+"static/media/bg2.98a89657.jpg",f=a(87),d={Normal:"filter-normal",1977:"filter-1977",Aden:"filter-aden",Amaro:"filter-amaro",Ashby:"filter-ashby",Brannan:"filter-brannan",Brooklyn:"filter-brooklyn",Charmes:"filter-charmes",Clarendon:"filter-clarendon",Crema:"filter-crema",Dogpatch:"filter-dogpatch",Earlybird:"filter-earlybird",Gingham:"filter-gingham",Ginza:"filter-ginza",Hefe:"filter-hefe",Helena:"filter-helena",Hudson:"filter-hudson",Inkwell:"filter-inkwell",Kelvin:"filter-kelvin",Kuno:"filter-juno",Lark:"filter-lark","Lo-Fi":"filter-lofi",Ludwig:"filter-ludwig",Maven:"filter-maven",Mayfair:"filter-mayfair",Moon:"filter-moon",Nashville:"filter-nashville",Perpetua:"filter-perpetua",Poprocket:"filter-poprocket",Reyes:"filter-reyes",Rise:"filter-rise",Sierra:"filter-sierra",Skyline:"filter-skyline",Slumber:"filter-slumber",Stinson:"filter-stinson",Sutro:"filter-sutro",Toaster:"filter-toaster",Valencia:"filter-valencia",Vesper:"filter-vesper",Walden:"filter-walden",Willow:"filter-willow","X-Pro II":"filter-xpro-ii"},p=["Normal"].concat(a.n(f)()(Object.keys(d).filter((function(e){return"Normal"!==e})))),u=a(93),g=(a(92),a(8)),h=window.innerWidth<530?2:6,b=function(){var e=Object(n.useState)("normal"),t=i()(e,2),a=t[0],l=t[1],f=Object(n.useState)(s),b=i()(f,2),E=b[0],w=b[1],v=Object(n.useCallback)((function(){var e=document.createElement("a"),t=document.getElementById("main-photo"),a=document.getElementById("filter-style"),l=document.createElement("canvas"),i=l.getContext("2d");l.width=t.width,l.height=t.height,i.filter=window.getComputedStyle(a).filter,i.drawImage(t,0,0,t.width,t.height),e.download="ig-filter.png",e.href=l.toDataURL(),e.click()}),[]),k=Object(n.useCallback)((function(e){var t,a=e.target.files[0];if(["png","jpeg"].includes(null===(t=a.type)||void 0===t?void 0:t.split("/")[1])){var l=URL.createObjectURL(a);w(l)}else alert("File type error! It accepts the type of .png and .jpeg")}),[]);return r.a.createElement("div",{className:"ig-filter"},r.a.createElement("div",{className:"photo-block"},r.a.createElement("figure",{className:"main-photo ".concat(d[a]),id:"filter-style"},r.a.createElement("img",{id:"main-photo",src:E,alt:"main-photo"})),r.a.createElement("div",{className:"photo-select"},r.a.createElement("div",null,r.a.createElement("img",{src:s,alt:"bg1",onClick:function(){w(s)}})),r.a.createElement("div",null,r.a.createElement("img",{src:m,alt:"bg2",onClick:function(){w(m)}})),r.a.createElement("div",{className:"upload"},r.a.createElement("label",{htmlFor:"file-upload",className:"upload-btn"},r.a.createElement(u.b,{className:"upload-icon",size:30,accept:"image/*"}),r.a.createElement("span",null,"Upload")),r.a.createElement("input",{id:"file-upload",type:"file",className:"file-input",onChange:k})))),r.a.createElement("div",{className:"filter-block"},r.a.createElement(c.a,{slidesPerView:h,spaceBetween:10,navigation:!0,modules:[o.a],className:"swipers"},p.map((function(e){return r.a.createElement(c.b,{key:e,onClick:function(){l(e)}},r.a.createElement("div",{className:Object(g.a)("item",{active:e===a})},r.a.createElement("figure",{className:d[e]},r.a.createElement("img",{src:E,alt:e}),r.a.createElement("figcaption",{className:"name"},e))))})))),r.a.createElement("div",{className:"action-block"},r.a.createElement("div",{className:"download-btn"},r.a.createElement(u.a,{className:"download-icon",size:30,onClick:v}),r.a.createElement("span",null,"Download"))))};a(101),t.default=b}}]);