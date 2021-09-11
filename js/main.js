document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("site-name");let e=t&&t.offsetWidth;const n=document.querySelector("#menus .menus_items");let o=n&&n.offsetWidth;const i=document.querySelector("#search-button");let c=i&&i.offsetWidth;const s=(s=!1)=>{s&&(e=t&&t.offsetWidth,o=n&&n.offsetWidth,c=i&&i.offsetWidth);const a=document.getElementById("nav");let l;l=window.innerWidth<768||e+o+c>a.offsetWidth-120,l?a.classList.add("hide-menu"):a.classList.remove("hide-menu")},a=function(){const t=GLOBAL_CONFIG.highlight;if(!t)return;const e=t.highlightCopy,n=t.highlightLang,o=GLOBAL_CONFIG_SITE.isHighlightShrink,i=t.highlightHeightLimit,c=e||n||void 0!==o,s="highlighjs"===t.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(!c&&!i||!s.length)return;const a="prismjs"===t.plugin;let l="",d="";const r=!0===o?"closed":"";void 0!==o&&(l=`<i class="fas fa-angle-down expand ${r}"></i>`),e&&(d='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>');const u=t=>{const e=t.parentNode;e.classList.add("copy-true");const n=window.getSelection(),o=document.createRange();a?o.selectNodeContents(e.querySelectorAll("pre code")[0]):o.selectNodeContents(e.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o);n.toString();((t,e)=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(GLOBAL_CONFIG.copy.success);else{const t=e.previousElementSibling;t.innerText=GLOBAL_CONFIG.copy.success,t.style.opacity=1,setTimeout((()=>{t.style.opacity=0}),700)}else void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):e.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport})(0,t.lastChild),n.removeAllRanges(),e.classList.remove("copy-true")},m=function(t){const e=t.target.classList;e.contains("expand")?(t=>{const e=[...t.parentNode.children].slice(1);t.firstChild.classList.toggle("closed"),btf.isHidden(e[e.length-1])?e.forEach((t=>{t.style.display="block"})):e.forEach((t=>{t.style.display="none"}))})(this):e.contains("copy-button")&&u(this)},f=function(){this.classList.toggle("expand-done")};function h(t,e,n){const o=document.createDocumentFragment();if(c){const e=document.createElement("div");e.className=`highlight-tools ${r}`,e.innerHTML=l+t+d,e.addEventListener("click",m),o.appendChild(e)}if(i&&e.offsetHeight>i+30){const t=document.createElement("div");t.className="code-expand-btn",t.innerHTML='<i class="fas fa-angle-double-down"></i>',t.addEventListener("click",f),o.appendChild(t)}"hl"===n?e.insertBefore(o,e.firstChild):e.parentNode.insertBefore(o,e)}n?a?s.forEach((function(t){const e=`<div class="code-lang">${t.getAttribute("data-language")?t.getAttribute("data-language"):"Code"}</div>`;btf.wrap(t,"figure",{class:"highlight"}),h(e,t)})):s.forEach((function(t){let e=t.getAttribute("class").split(" ")[1];"plain"!==e&&void 0!==e||(e="Code");h(`<div class="code-lang">${e}</div>`,t,"hl")})):a?s.forEach((function(t){btf.wrap(t,"figure",{class:"highlight"}),h("",t)})):s.forEach((function(t){h("",t,"hl")}))};let l=!1;const d=()=>{const t="fancybox"===GLOBAL_CONFIG.lightbox?document.querySelectorAll("#article-container :not(a):not(.gallery-group):not(.flink-item-icon) > img, #article-container > img"):[],e=t.length>0,n=document.querySelectorAll("#article-container .justified-gallery"),o=n.length>0;(o||e)&&btf.isJqueryLoad((()=>{o&&function(t){const e=$(t),n=e.find("img");n.unwrap(),n.length&&n.each((function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")})),l?btf.initJustifiedGallery(e):($("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.justifiedGallery.css}">`),$.getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`,(function(){btf.initJustifiedGallery(e)})),l=!0)}(n),e&&function(t){const e=t=>{t.each((function(t,e){const n=$(e),o=n.attr("data-lazy-src")||n.attr("src"),i=n.attr("alt")||"";n.wrap(`<a href="${o}" data-fancybox="group" data-caption="${i}" class="fancybox"></a>`)})),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})};void 0===$.fancybox?($("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.fancybox.css}">`),$.getScript(`${GLOBAL_CONFIG.source.fancybox.js}`,(function(){e($(t))}))):e($(t))}(t)}))},r=function(){const t=document.getElementById("rightside"),e=window.innerHeight+56;if(document.body.scrollHeight<=e)return void(t.style.cssText="opacity: 1; transform: translateX(-38px)");let n=0,o=!0;const i=document.getElementById("page-header"),c="function"==typeof chatBtnHide,s="function"==typeof chatBtnShow;window.scrollCollect=()=>btf.throttle((function(a){const l=window.scrollY||document.documentElement.scrollTop,d=function(t){const e=t>n;return n=t,e}(l);l>56?(d?(i.classList.contains("nav-visible")&&i.classList.remove("nav-visible"),s&&!0===o&&(chatBtnHide(),o=!1)):(i.classList.contains("nav-visible")||i.classList.add("nav-visible"),c&&!1===o&&(chatBtnShow(),o=!0)),i.classList.add("nav-fixed"),"0"===window.getComputedStyle(t).getPropertyValue("opacity")&&(t.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===l&&i.classList.remove("nav-fixed","nav-visible"),t.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=e&&(t.style.cssText="opacity: 1; transform: translateX(-38px)")}),200)(),window.addEventListener("scroll",scrollCollect)},u=function(){const t=document.getElementById("card-toc"),e=t.getElementsByClassName("toc-content")[0],n=e.querySelectorAll(".toc-link"),o=document.getElementById("article-container");window.tocScrollFn=function(){return btf.throttle((function(){const t=window.scrollY||document.documentElement.scrollTop;i(t),r(t)}),100)()},window.addEventListener("scroll",tocScrollFn);const i=function(t){const n=o.clientHeight,i=document.documentElement.clientHeight,c=(t-o.offsetTop)/(n>i?n-i:document.documentElement.scrollHeight-i),s=Math.round(100*c),a=s>100?100:s<=0?0:s;e.setAttribute("progress-percentage",a)},c=GLOBAL_CONFIG.isanchor,s=()=>{t.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"},a=()=>{t.style.animation="toc-close .2s",setTimeout((()=>{t.style.cssText="opacity:''; animation: ''; right: ''"}),100)};document.getElementById("mobile-toc-button").addEventListener("click",(()=>{"0"===window.getComputedStyle(t).getPropertyValue("opacity")?s():a()})),e.addEventListener("click",(t=>{t.preventDefault();const e=t.target.classList.contains("toc-link")?t.target:t.target.parentElement;btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&a()}));const l=o.querySelectorAll("h1,h2,h3,h4,h5,h6");let d="";const r=function(t){if(0===n.length||0===t)return!1;let o="",i="";if(l.forEach((function(e,n){t>btf.getEleTop(e)-80&&(o="#"+encodeURI(e.getAttribute("id")),i=n)})),d===i)return;if(c&&function(t){if(window.history.replaceState&&t!==window.location.hash){t||(t=location.pathname);const e=GLOBAL_CONFIG_SITE.title;window.history.replaceState({url:location.href,title:e},e,t)}}(o),""===o)return e.querySelectorAll(".active").forEach((t=>{t.classList.remove("active")})),void(d=i);d=i,e.querySelectorAll(".active").forEach((t=>{t.classList.remove("active")}));const s=n[i];s.classList.add("active"),setTimeout((()=>{!function(t){const n=t.getBoundingClientRect().top,o=e.scrollTop;n>document.documentElement.clientHeight-100&&(e.scrollTop=o+150),n<100&&(e.scrollTop=o-150)}(s)}),0);let a=s.parentNode;for(;!a.matches(".toc");a=a.parentNode)a.matches("li")&&a.classList.add("active")}},m=()=>{const t=document.body;t.classList.add("read-mode");const e=document.createElement("button");e.type="button",e.className="fas fa-sign-out-alt exit-readmode",t.appendChild(e),e.addEventListener("click",(function n(){t.classList.remove("read-mode"),e.remove(),e.removeEventListener("click",n)}))},f=()=>{"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)},h=()=>{document.getElementById("rightside-config-hide").classList.toggle("show")},g=()=>{btf.scrollToDest(0,500)},p=()=>{const t=document.documentElement.classList;t.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),t.toggle("hide-aside")},y=t=>{const e=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size"));let n="";if(t){if(e>=20)return;n=e+1,document.documentElement.style.setProperty("--global-font-size",n+"px"),!document.getElementById("nav").classList.contains("hide-menu")&&s(!0)}else{if(e<=10)return;n=e-1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")&&s(!0)}saveToLocal.set("global-font-size",n,2)};document.getElementById("rightside").addEventListener("click",(function(t){switch(t.target.id||t.target.parentNode.id){case"go-up":g();break;case"rightside_config":h();break;case"readmode":m();break;case"darkmode":f();break;case"hide-aside-btn":p();break;case"font-plus":y(!0);break;case"font-minus":y()}}));const L=function(){document.querySelectorAll("#article-container .tab > button").forEach((function(t){t.addEventListener("click",(function(t){const e=this,n=e.parentNode;if(!n.classList.contains("active")){const t=n.parentNode.nextElementSibling,o=btf.siblings(n,".active")[0];o&&o.classList.remove("active"),n.classList.add("active");const i=e.getAttribute("data-href").replace("#","");[...t.children].forEach((t=>{t.id===i?t.classList.add("active"):t.classList.remove("active")}));const c=t.querySelectorAll(`#${i} .justified-gallery`);c.length>0&&btf.initJustifiedGallery(c)}}))}))},b=()=>{document.querySelectorAll("#article-container .tabs .tab-to-top").forEach((function(t){t.addEventListener("click",(function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)}))}))},v=function(t){t.forEach((t=>{const e=t,n=e.getAttribute("datetime");e.innerText=btf.diffDate(n,!0),e.style.display="inline"}))};window.refreshFn=function(){s(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&u(),void 0!==GLOBAL_CONFIG.noticeOutdate&&function(){const t=GLOBAL_CONFIG.noticeOutdate,e=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(e>=t.limitDay){const n=document.createElement("div");n.className="post-outdate-notice",n.textContent=t.messagePrev+" "+e+" "+t.messageNext;const o=document.getElementById("article-container");"top"===t.position?o.insertBefore(n,o.firstChild):o.appendChild(n)}}(),GLOBAL_CONFIG.relativeDate.post&&v(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&v(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(()=>{const t=document.getElementById("runtimeshow");if(t){const e=t.getAttribute("data-publishDate");t.innerText=btf.diffDate(e)+" "+GLOBAL_CONFIG.runtime}})(),(()=>{const t=document.getElementById("last-push-date");if(t){const e=t.getAttribute("data-lastPushDate");t.innerText=btf.diffDate(e,!0)}})(),function(){const t=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i");t.length&&t.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),this.classList.toggle("expand");const e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"}))}))}()),(()=>{const t=document.getElementById("toggle-menu"),e=document.getElementById("sidebar-menus"),n=document.getElementById("menu-mask"),o=document.body;function i(){o.style.overflow="",o.style.paddingRight="",btf.fadeOut(n,.5),e.classList.remove("open")}t.addEventListener("click",(function(){btf.sidebarPaddingR(),o.style.overflow="hidden",btf.fadeIn(n,.5),e.classList.add("open")})),n.addEventListener("click",(t=>{e.classList.contains("open")&&i()})),window.addEventListener("resize",(n=>{btf.isHidden(t)&&e.classList.contains("open")&&i()}))})(),GLOBAL_CONFIG_SITE.isHome&&(()=>{const t=document.getElementById("scroll-down");t&&t.addEventListener("click",(function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}))})(),a(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach((function(t){const e=t.parentNode;if(!e.parentNode.classList.contains("justified-gallery")){const n=document.createElement("div");n.className="img-alt is-center",n.textContent=t.getAttribute("alt"),e.insertBefore(n,t.nextSibling)}})),d(),"mediumZoom"===GLOBAL_CONFIG.lightbox&&(()=>{const t=mediumZoom(document.querySelectorAll("#article-container :not(a):not(.flink-item-icon) > img"));t.on("open",(e=>{const n="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";t.update({background:n})}))})(),r(),function(){const t=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table");t.length&&t.forEach((t=>{btf.wrap(t,"div",{class:"table-wrap"})}))}(),function(){const t=document.querySelectorAll("#article-container .hide-button");t.length&&t.forEach((function(t){t.addEventListener("click",(function(t){const e=this,n=e.nextElementSibling;e.classList.toggle("open"),e.classList.contains("open")&&n.querySelectorAll(".justified-gallery").length>0&&btf.initJustifiedGallery(n.querySelectorAll(".justified-gallery"))}))}))}(),L(),b(),function(){let t=!1;const e=document.querySelector("#comment-switch > .switch-btn");e&&e.addEventListener("click",(function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach((function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"})),t||"function"!=typeof loadOtherComment||(t=!0,loadOtherComment())}))}()},refreshFn(),window.addEventListener("resize",s),window.addEventListener("orientationchange",(()=>{setTimeout(s(!0),100)})),document.querySelectorAll("#sidebar-menus .expand").forEach((function(t){t.addEventListener("click",(function(){this.classList.toggle("hide");const t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"}))})),window.addEventListener("touchmove",(function(t){document.querySelectorAll("#nav .menus_item_child").forEach((t=>{btf.isHidden(t)||(t.style.display="none")}))})),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(()=>{const t=GLOBAL_CONFIG.copyright;document.body.oncopy=e=>{let n;e.preventDefault();const o=window.getSelection(0).toString();return n=o.length>t.limitCount?o+"\n\n\n"+t.languages.author+"\n"+t.languages.link+window.location.href+"\n"+t.languages.source+"\n"+t.languages.info:o,e.clipboardData?e.clipboardData.setData("text",n):window.clipboardData.setData("text",n)}})()}));