(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{101:function(A,e,t){"use strict";var c=t(12),n=t.n(c),a=t(1);e.a=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=A.resizeCallback,t=void 0===e?function(){}:e,c=A.widthThreshold,u=void 0===c?530:c,r=Object(a.useState)(window.innerWidth<u),l=n()(r,2),o=l[0],s=l[1];return Object(a.useEffect)((function(){var A=function(){s(window.innerWidth<u),t&&t()};return window.addEventListener("resize",A),function(){window.removeEventListener("resize",A)}}),[t]),{isMobile:o}}},102:function(A,e,t){},103:function(A,e,t){"use strict";var c=t(22),n=t.n(c),a=t(1),u=t.n(a),r=t(8),l=function(A){var e=A.className,t=A.isOpen,c=A.onChange,l=A.OpenIcon,o=A.iconSize,s=void 0===o?20:o,i=A.ClosedIcon,d=Object(a.useCallback)((function(A){A.stopPropagation(),c&&c()}),[c]);return u.a.createElement("div",{className:Object(r.a)("common-switch",n()({},e,!!e)),onClick:d},u.a.createElement("div",{className:"icon"},t?u.a.createElement(l,{size:s}):u.a.createElement(i,{size:s})),u.a.createElement("div",{className:Object(r.a)("btn",{open:t})},u.a.createElement("div",{className:"switch"})))};t(102),e.a=l},110:function(A,e,t){},115:function(A,e,t){"use strict";t.r(e);var c=t(90),n=t.n(c),a=t(12),u=t.n(a),r=t(1),l=t.n(r),o=t(8),s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACV8AAAAYCAYAAADnXB+kAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU9TpVIqDu0g4pChOlkQFXHUKhShQqgVWnUweekfNGlIUlwcBdeCgz+LVQcXZ10dXAVB8AfEydFJ0UVKvC8ptIjxhkc+zrvn8N59gNCsMs3qGQc03TYzqaSYy6+KoVeEEUCUvkGZWcacJKXhW1/31Et1l+BZ/n1/Vr9asBgQEIlnmWHaxBvE05u2wXmfOMbKskp8Tjxm0gGJH7muePzGueSywDNjZjYzTxwjFktdrHQxK5sa8RRxXNV0yhdyHquctzhr1Tprn5PfMFLQV5a5TmsYKSxiCRJEKKijgipsJOivk2IhQ/tJH/+Q65fIpZCrAkaOBdSgQXb94G/we7ZWcXLCS4okgd4Xx/kYAUK7QKvhON/HjtM6AYLPwJXe8deawMwn6Y2OFj8CBraBi+uOpuwBlzvA4JMhm7IrBWkJxSLwfkbPlAeit0B4zZtbex+nD0CWZpW+AQ4OgdESZa/73Luve27/9rTn9wMgjHKG6ip4oAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+QKARMeL9L9k18AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAACkUlEQVR42u3cS26EMAwA0KZXDMecOzIrNkhUxZD/e/uqA9iOg4jTvu8/AAAAAAAwqm3bbr/o/nw+yZ0DANAH+v3AU79uAQAAAAAAAAAAwH3J5CsAAAAAAEZ0nhTwnykAkb8BAEAf6PcDV0y+AgAAAAAAAAAACDD5CgAAAACAIZxP+x8ip/5NDgAA0AfW6gP1sTA3k68AAAAAAAAAAAACTL4CAAAAAKBrJU/3vzmFAAAAfaA+FtZj8hUAAAAAAAAAAEBAyjkbfQUAAAAAQPdqnOK/miAw47X2ds0AALP2gSv1sbAik68AAAAAAAAAAAAC0r77+BEAAAAAAFq7mlZQYlJCzf8FAAAwM5OvAAAAAAAAAAAAAky+AgAAAACAzlxNpirBtCsAAIA4k68AAAAAAAAAAAACTL4a1NWpJyeUWDn+5QHqKmA9AQDrHfZZoP6irgLWEwCw3tVk8hUAAAAAAAAAAEDA7clXvrCmhSPuWsfXOf7FO+Jv3XrgulFX6D0/nYieM089R8+V8nW79vooHureV/eXFfpCfT7iTz1w3agrjJKf9kNz7788R8+VcnXb+6v+mHwFAAAAAAAAAAAQcHvyFQCszAk+xAf0mXcH+Yf6/zyP5BMAgP4U8QGU23fLP9T/53kkn+iNyVcAAAAAAAAAAAABJl+9ZJWTAr1/mX31xWuvv1dcULKO+AKcmvHZug6IdwB9I8gvEwwQJ6OsN95fiQt1xH6eNvHp/RUA+kaYaz/RE5OvAAAAAAAAAAAAAlLOuepJK1+K/n0/St9/1ogncQPASH2PdYuZ+m/9GPJLfbcfLfPca78/Ec9t7z/qBQD01vdYt5ip/9aPIb/Ud/vR95+7yVcAAAAAAAAAAAABX/6Z8AvqXAOiAAAAAElFTkSuQmCC",i={sCactusPosition:[172],lCactusPosition:[119],dinoJumpingMs:500},d={"run-0":"data:image/png;base64,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","run-1":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABeCAYAAACnzNMpAAAPmnpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjapZppdiSrkoT/s4peAvOwHMDhnN5BL78/h0iVVCWpVO8pb2VkRkaA44OZOXHN+r//3eZ/+Iu1eRNTqbnlbPmLLTbf+VDt/evn3dl43s9fev3mPp43aT0/eE4FjuF+rfk5vzjvud4/5+czTud8ejdQewZy4+MP/RnI12eC5/xrouDuBFaegfozUPDPzPF+H8/MudXyfgnPfbp89xzPP6NvMRSfU3Yl8h69LSU3PldvY8FvooaGcuZ/m+j37+Z1qccmv4IL9rzHa2W4/7qe550FcZ0Lmc+eo55Px7/WEDJMYOT2+PblfLz5wTev4xd/5ifLetLhQ7jX/pgG5t1M7rM0yOs5H36LXn47nvPm9x9c+jzcJ6bvLCrxbWL/waLu3Ecv1F//9pa697qr6zGz5Pws6rUSZ/QTFw5NgnNb5lX4l/hczqvxqpTLJNRipx28pmvOE8rtohPX3TZunQ/TTWyMfvnC0ftJdPVcJRbNTw18iPpy25fQgoRKAkxSJXDW720eW9yZt535pqvMLI5LvWMwxy1/fZmfXPTda2+tJefMq2bIC+zymvaYoZHTdy4jIm4/Tk3Hwa/Xx4R8AhsIYTpuriyw23GHGMn9yq1wAh24LnG8NeaK3Pt1oMjcCWNcIAQ2Uz4uO1u8L87hyEqAurPVh+gHEXApecFIH0PIxIYiYGrDPcWda33y9zwoSSQSpVmITQudYMWYyJ8SKznUU0gxpZRTSTW11HPI0VBhOZescNtLKLGkkksptbTSa6ixppprqbW22ptvATROjXJstbXWO3N2Ru7ZdK7vnBl+hBFHGnmUUUcbfZI+M8408yyzzja7eAlCHUuWIlWa9OUWqbTiSmblVVZdbfVNru2w404777Lrbru/Rc09Zfv76x+i5p6o+RMpva68RY2zpdyjOfnCIBozIuajI+JFI0BCe42ZrS5Gr5HTmNnmqYrkMTJpbMRR79lHE+JyPm33FrtfkfunuJkcv42b/2nkjIbuv4zciZtZ6V3cPomaKG3PE7FbhepTG6g+rum+8h+o6Kt5ffjH45hjzCTb+ZCq2DBNcqX1nLqMVAcAtqZg/swr1ZUcbwV7SvJlECRywi9Q0ZY9d1utbSwrq0eADQDxq9rAWis5GfWnmiYZCwK3DRSGvbZE7sECcMWOitv0gw2r9Fy27N6COTcOHLHzUIsT9zmQulY+lLnj1CvGxqa9Yb/yp1HHJLN/N+jNHGs/GoTPr0n2zah3JpnArX8x6DFHUewzg66XztL+xUul71ylNJ9JQ7faLiP43qcZxWVxcy6nXOtnt23mMgp6xJHuGnBVW389mk9/qH31lR2ZHpt+dDtDWTOLj1WqL7lTl77Y0Fb1Q9dXTWqBqtXlgB1lr0iNHMdGoVBqZ1kRjMala2Aqqc4K0g4xKf+7FYrELiGZul1N+F1qlFUSw1A0s0hPFH4VLlXqBnXTZIwksVS7Z6Cul8dXJKofgnWm8n0JyX1I3y6ljaVx2UGlFqMSgTw1LTSg+6bFFGKyNjNe6xMDNVEhmJza+scxrRW6VbAko6WBLSVO4AFTcRu83rly1rGzKS0uycq3iL9RlyZT6Orx3dOOQJ5fjVTAQjLKd8wQt2KWTVaUvNpA4xXUCEsm7ULqIy2MtwmTAcbNcoKanXEWv31j9T2aLy8ARr+LWRFPdaG/mgMKG7VGMrfjwphGKlNUOAO2UJDsNAXIxPMukdQgaWFV0Wtuuz7yzHkO6ibU6Q3p1S2xLTqC29xFNc22baMYbTo55RPuOqWUB2j6aXabP7J6p7yrPzYGxzgjn4ofiXzBk7OXZW/Kzow/pbJsctJw38+K6dPj1CoHCKi11Ek2KXUeG7qXPha1qrGf6djifcvjRDChGM8S68h9tw8wbn6I90HS+HRJuqLtiVo9BbuPO/CEOuRxx7+xywc6CgqRf1vOWMTzcczxCz0cnjkIud9c84lbuxIv1TVk1AQDp+pTW7lMVrdQ5nMK4BRMPehkBU1Ays7A+hsS5GD6ONlDgpFeXMsXyvOgebWpN+0qPAi81D4zvaY6aUizS+oCFwgXCPvUwEGveajj6yHuCOa/H+KOYD4fovUyfeRbsgIUjByWbEAhUSO5tDDC5PIGUIYJcdAC0K5T4qHvOH45edQGAJeHmGtEoBAIYGVggSBfovUAkoIMwqbOATEYNDKGAldUucO9gCKZ5voGOg+rNsvKvBRyb826SYq2T84VcJFrBpzi8jJt2Azvhg712b/j1zmmkz1VNdgpLFsbAwV3g1wfq0FVIU8WlZBU1SAit8AyuVov+xOs0wTJYi7c9bSIiMunTKC2RvpZlhK3eoV+ZobBh9JkjBYr7s0lQHxTXoVhPpRMy6LECnEvlq3TtmxbC2HkWBGQwwP7FqZDhdD7sIp6OIpMMOR7h2GuiViV0/asB+WGX9dGE6TI90Gx492I0NBbLxvDlsdH/io2blBg5K5dY3+pMXpeeVyJGUfUqHsceK+aRmwpkA7t46B2Zh6GM5/OcCcI3/z2cXLz1ewwH4tfQ/pMa9dFh0Dpd3Bq94JamCKooVHwQRdEgql1QiROokXYKsNfoEuX5afW/JoLHJkhbTvVfLdYXSIqAxV+83vTZfPTGojiQeEsmk0ppc1CzkU1Pv6Jhirq6mQiH/IdCGDrhnFoDbi/L1WQK6g6rAKYXXz0RyX24HVc+K5qkflkw1GX96ruyeyxQDEtn+XIgdmiPZpRp0LQoBg7ln+D1r3huZ4blJ01ZQr83LmbdocCKXP2NobTFPblAYhRjsw4WUCaIjPk+DGrMCqmH0U9fXLLXfy266jeSgfHuxQ0gKM/a4pOKIKJqgv0HHRawnycTLUTfmZqlg6PyS1qF6AgRrPm7/hVFVw93LKhGyQzDGv2i2wqOWPhIwXTG3rophxkIGseHl4KgfazOczvJ/4I3Q3cCZt2B58HHxY5wYeTAEQg2Y8B4CeENmno8/Z5ZT+PyqU1bvaIXB9O6etkKoAu+Jh3Gsi/NBDdr46Nx8QyUh6yTwTodqmylRsdHe1zzNO6QZ9LAS5jtTyAv0Sru+oJUAyq03ijjCBZuLMrxeZKu3Padhs7yqC4VpgLdSfkoEG1ogBB0Lgamm52iDfwtUX4KC4Ya+p2HU08TW5VbTnTwW8ViLf5itSeN7TEy6n0Vq/0MS5NrExq7jFiEYEmoLWNGxcN+Uy3c0Nkb4R1ZOnHbvMY3tI7u5u3ZPQWLFs0Y3ApjHHhBbTPhT7du9GhiynQBA2gJBM5n2GMoBAxunJFfxeOG4sbCY2DLwASGh770fAezkz5aHgDmq994kV3dmS8KvqoKt6lluIPqA5nV/LIwzJ0ebiDALEg6qMm7W34DPNIyx6frNSiyh+4+3N7tTnOrRG/Tan1pr1T6BFaA2Pm+/itSeukRM0Pga4wZe28at59ZpDIICt6E0Hj3/0DEcR8rGf/oPoK3UZL71uKNpaQpMuUiHaI6IHTcnlx2sibcDspEEEK4Cas7vSeiCM6HchZm08bSiBzYsOq0BuwRYmrlnx0LuVteihHZlOGKEmCFtKXLfF3BW2+q+hXQbP6t7EgiU9hxvzCGRduqfapGjjdb/RLj2AOeT2CmUy9GDZJ9P4VHv0FFK8Gv6ComHgRMZVlLgUrEcr5RKOsa6I5oPq+vlXssR67T9fi79JU51d5dL5qgTqSkvO3XcObY8+yxfTTG/UPPDkGkr7UCN9iBc143pRYTrpbZukb/MxarbjW1TDazK5V41a9ghhCAj7phQFTek/4HIlM5hWOCOKMvgsopCYOsexRrtMCUr2pooTYzE/E53dHkLPoAlVo0SezICTMPoiHZEdEwOQqlFXqnHdVoOPkGAjySFBQ+k0Km59NSwI7r1swgGc/w9Bf7x11V4CVpZ1MTqe79qyd1vfp5KF5Tf29nkaeQkcrfzuh+WpPRM4yraLlJWegvJ9zcp7bWG0ITjlsxG61JjjdxAGPyH9LRQukoiAWJq5rvul+LJ1dAMdReXDQJpHkpztavx+VZ9ThWFpLh02AlTKCbk744WXC5iaEGps7z01ptVyLyq8FLqo73P0mV6R4O7iDC5pSLPCbfS7ZxhVHuIYatXR35/+zfP6Vzua/y+dfUTJfbWV9uZn2xV6auZtprE63VpDwtPJ0grReUhGHd/uuaQ9WIjJlOmgXd0I4oGgpujc0kTkrG855ek80fVy6iw6nCXoTB4Xkhp8sHGjpU1t2RfR4Oo7T+N3SAaS0KTG6MzyuDHUa3ZfS+Nej+XjCTXytu7LadWsiQ5S3QFGxJDd9eNwl5EFER16igbUxhekNApjmRLdM06A4Az44jcmVnwT3VSJ01nK2SZzXd8Vx3fjpMIFzE4t0m7iAq65SmickO0OvMTp9gBnOA2UYtKOpT6pzo2KKm1vv82QTHiWPvOo0l0okq/UJZEVw6paqZql2a/DxkfSaNUP7j2lj1X04xX6l0sO4u5rHdgWLl+32sZ7ap5iXRzQJGUsyuDpQonNEaJJPUZb2ItXbFI1qU1ryWR0Cze12El53aNJrF/DZwcH573dw+k4CR4F4lj5vRQPktdOglAth9Gus89/jb/5ygVNVfXZc0HdeG9F8e9q8wVqctnaAhIc3oMFC3eNqkp1Wi1BQI2dfrsaI1D7e0ofNLEr6mGc7o6FzKQEZ1LegxeYya4u/zV84Ckr3JMg+xCskXvWRzaHMHbgF3EKLyNw4mGYKErF7JTU7BdOTHPTL3CE5UUlJJXamYn0W7f4GUgiRPXdeiOh2KWpo+9f1iXAL7fYi2jzsj7tTHzan7iOV37a19H8neTa2NLSuVINo77cYasEfyK6+YRDa01UwVSins0c0sGZQSMQYw6iuTMtZ750jxGZ0p0q55+6JOM0ZP8oq1ESgpwWINq1L0nTaZxfRb+2bnnIdNk7dI1rV4CxPrrbmdCsBlReBp64bwdstSfqsA8fjHhBXN8aZJBcAkrQd+iGoD/VpFu7fCD8c1f/YNf9s0/xXslv7Pt3N/jPbn2TX3qAov/8o2c1/goZfDASknfVg6rOiI+xeEueuKe049ncPE8DsIvqQ8+tFcV3TTSCU/Yv4UnbZ0a9d4itUWENEHOZT0ZCU+SB0UTrbTnOHFENzLM+AYVCfui0VM/RYJu0FvUuJrqG1a6DLbueJgfv3R6wfjuanF4KTvWUFAFod0Z16Uly/ZqtPlJaRqZ1VpyN1srvodi91d0uzX0G17qNMmlmQQa5ouDL/3XXm44XC8K+dRY/L4OtfG4sgjf6PAXdjUTdO291Y3BvuNkCZ9P/kkQgZL3CV+X/x1yecsV/M7gAAAYRpQ0NQSUNDIHByb2ZpbGUAAHicfZE9SMNQFIVP04pSKg7NIOKQoTpZEBVx1CoUoUKoFVp1MHnpHzRpSVJcHAXXgoM/i1UHF2ddHVwFQfAHxMnRSdFFSrwvKbSI8cLjfZx3z+G9+wChWWG6FRoHdMM208mElM2tSr2vCCMAEVGEFGbV5mQ5Bd/6uqdeqrs4z/Lv+7P6tbzFgIBEPMtqpk28QTy9adc47xOLrKRoxOfEYyZdkPiR66rHb5yLLgs8UzQz6XlikVgqdrHaxaxk6sRTxDFNNyhfyHqscd7irFfqrH1P/sJI3lhZ5jqtYSSxiCXIkKCijjIqsBGn3SDFQprOEz7+Idcvk0slVxmMHAuoQofi+sH/4PdsrcLkhJcUSQA9L47zMQL07gKthuN8HztO6wQIPgNXRsdfbQIzn6Q3OlrsCBjYBi6uO5q6B1zuAINPNcVUXClISygUgPcz+qYcEL0Fwmve3NrnOH0AMjSr1A1wcAiMFil73efdfd1z+7enPb8f8Tpyc/Ry79EAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkCgEUFRH1J0G6AAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAYFJREFUeNrt3cFugzAURNE4yifymfyju20iBDE28B45s+sOXY1uJzZNS631kSzRH7j8/+H5kEMDMMC588ru3GmaLn24eZ41mCIAlt2bLcEOrpGc2+pkDbYi+hp0deM1GGCA5ZccHG1laDDAAAvAAAMsAAMMsAAMsLzl9esAtm6FNZgiAJaTHbx1zVwOfqZTr7lbz48XnF00mCIAlg4Hr745c+BO/Mq1o+/Yjt69GkwRAEvnDr6FawemaDBFACxH+aV+vOK+5cLeHZntDXUOpgiAJdIObj2riObcs/+GQ4MpAmAZ6eBsu3bH7tVgihCA0zj4BikaTBEC8IUOLh+7MNU3jGiwBt87o28oNDhBgzlZgwEWgE/6HL7jm/9CO/mL810rgiIE4MwODuXkaM7VYIABloYMP01rffcr27ttGgwwwBJsB6/u4lantjr56hsLDQYYYIm0gxccWDvPDqoGC8AAc/AwJw/Nwi6ukXaxBgMMsKz5Mdt/RIz2O0CDKQJg6cgfUaNswEdGEYIAAAAASUVORK5CYII=",init:"data:image/png;base64,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",lose:"data:image/png;base64,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"},m="INIT",w="START",g="PAUSE",f="END",Z=t.p+"static/media/bgm.66904dd0.mp3",X=t(100),p=t(17),v=t(101),E=t(103),b=function(){var A=Object(r.useRef)(null),e=Object(r.useRef)(null),t=Object(r.useRef)(null),c=Object(r.useRef)(null),a=Object(r.useState)("init"),b=u()(a,2),P=b[0],C=b[1],B=Object(r.useState)(m),T=u()(B,2),Q=T[0],N=T[1],O=Object(r.useState)(!1),H=u()(O,2),M=H[0],U=H[1],R=Object(r.useState)(!1),z=u()(R,2),G=z[0],y=z[1],J=Object(r.useState)(!1),S=u()(J,2),q=S[0],V=S[1],x=Object(r.useState)(0),j=u()(x,2),h=j[0],K=j[1],F=Object(v.a)().isMobile,W=Object(r.useCallback)((function(){clearInterval(A.current),clearInterval(e.current)}),[]),D=Object(r.useCallback)((function(){var A=t.current,e=parseInt(window.getComputedStyle(A).getPropertyValue("bottom")),c=parseInt(window.getComputedStyle(A).getPropertyValue("left")),a=c+A.clientWidth-12;n()(document.querySelectorAll(".obstacle")).some((function(A){var t=parseInt(window.getComputedStyle(A).getPropertyValue("left")),n=A.clientHeight;return t<a&&t>c&&n>e}))&&(C("lose"),N(f),W(),V(!1))}),[W]),I=Object(r.useCallback)((function(){"init"===P&&(y(!1),c.current.currentTime=0),V(!0),A.current=setInterval((function(){C((function(A){return"run-0"===A?"run-1":"run-0"})),D(),K((function(A){return A+1}))}),100),N(w)}),[D,P]),k=Object(r.useCallback)((function(){clearInterval(A.current),N(g),V(!1)}),[]),L=Object(r.useCallback)((function(){N(m),y(!0),C("init"),U(!1),K(0)}),[]),Y=Object(r.useMemo)((function(){return Q===w}),[Q]),$=Object(r.useMemo)((function(){return d[M?"init":P]}),[M,P]),_=Object(r.useCallback)((function(){Y&&!M&&(U(!0),e.current=setTimeout((function(){U(!1)}),i.dinoJumpingMs))}),[Y,M]),AA=Object(r.useCallback)((function(A){[32,38].includes(A.keyCode)&&_()}),[_]),eA=Object(r.useCallback)((function(){V((function(A){return!A}))}),[]);return Object(r.useEffect)((function(){q?c.current.play():c.current.pause()}),[q]),Object(r.useEffect)((function(){return document.addEventListener("keydown",AA),function(){document.removeEventListener("keydown",AA)}}),[AA]),Object(r.useEffect)((function(){return function(){W()}}),[]),l.a.createElement("div",{className:Object(o.a)("dino-game",{"m-platform":F})},l.a.createElement("div",{className:Object(o.a)("container",{pause:!Y,reset:G}),onClick:_,onTouchStart:_},l.a.createElement("div",{className:"info"},Q===m&&(F?"Touch Screen to Jump":l.a.createElement(l.a.Fragment,null,"Press"," ",l.a.createElement("button",{className:"ui black basic button space"},"SPACE")," ","or ",l.a.createElement(p.a,{className:"info-icon"})," To Jump")),Q===f&&l.a.createElement("div",{className:"end-text"},"GAME OVER")),l.a.createElement("div",{className:"score"},String(h).padStart(5,"0")),l.a.createElement("div",{className:"ground-wrapper"},l.a.createElement("img",{src:s,alt:"ground",className:"ground"}),l.a.createElement("img",{src:s,alt:"ground",className:"ground"})),i.sCactusPosition.map((function(A){return l.a.createElement("div",{key:"cactus-small-".concat(A),className:"obstacle cactus-small position-".concat(A)})})),i.lCactusPosition.map((function(A){return l.a.createElement("div",{key:"cactus-large-".concat(A),className:"obstacle cactus-large position-".concat(A)})})),l.a.createElement("div",{className:"cloud type-1"}),l.a.createElement("div",{className:"cloud type-2"}),l.a.createElement("div",{className:"cloud type-3"}),d[P]&&l.a.createElement("img",{ref:t,className:Object(o.a)("dino",{"jump-upper":M}),src:$,alt:"dino"})),l.a.createElement("div",{className:"action-controls"},l.a.createElement(l.a.Fragment,null,Q===f?l.a.createElement("button",{className:"ui green button",onClick:L},"Reset"):l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"ui blue button",disabled:Q===w,onClick:I},"Start"),l.a.createElement("button",{className:"ui gray button",disabled:Q!==w,onClick:k},"Pause")),l.a.createElement("div",{className:"bgm-control"},l.a.createElement("audio",{className:"bgm-audit",ref:c,src:Z,muted:!q,autoPlay:!1,preload:"auto",loop:!0,controls:!0}),Q===w&&l.a.createElement(E.a,{isOpen:q,onChange:eA,OpenIcon:X.a,ClosedIcon:X.b,iconSize:20})))))};t(110),e.default=b}}]);