if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,a,c)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const r={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return d;case"module":return r;default:return e(i)}}))).then((e=>{const i=c(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"92c98ad7f02d566b3515fe7244c84c47"},{url:"about/index.html",revision:"9253a5f367c5221553dd1043f6ff4405"},{url:"apple-touch-icon-precomposed.png",revision:"3436ada98ed271794fd601096618c9d6"},{url:"apple-touch-icon.png",revision:"4f26555dca034d08419cc8f75a806fea"},{url:"archives/2020/11/index.html",revision:"d653f82915106cdc981e4f8063b33935"},{url:"archives/2020/index.html",revision:"536501b25855c8ba9df382de9ab8377a"},{url:"archives/2021/03/index.html",revision:"4af84e44b3cb0dfab02599ae336bb444"},{url:"archives/2021/03/page/2/index.html",revision:"a3a3db882baf426ed27b485f6b315b34"},{url:"archives/2021/04/index.html",revision:"11b34419d6b286dc69e1144aa6459b69"},{url:"archives/2021/05/index.html",revision:"d1887bed0a7c28a389cbe8fd2372110f"},{url:"archives/2021/06/index.html",revision:"44005df5bf6f6226cc3ae4fd71215e29"},{url:"archives/2021/06/page/2/index.html",revision:"18e0f58bea51160450a9b72f2ad35c8c"},{url:"archives/2021/07/index.html",revision:"985bc0665d07418322f7f85f51d5750a"},{url:"archives/2021/07/page/2/index.html",revision:"cb7d446d1464074bd7fcd4fdedd9cf50"},{url:"archives/2021/08/index.html",revision:"a77146efbf8b8d60b435d8d72bffff8e"},{url:"archives/2021/index.html",revision:"23212dc352b01bbf2f8b47f17be7556b"},{url:"archives/2021/page/2/index.html",revision:"b0bb65eb7e4cd69d1aabc44b369946ee"},{url:"archives/2021/page/3/index.html",revision:"f6bff50ce8ed542754faaef43c026e76"},{url:"archives/2021/page/4/index.html",revision:"a5bb378be5f53e320ea18a0be16281b1"},{url:"archives/2021/page/5/index.html",revision:"edc9105a45ca0cecf6ca82d674988278"},{url:"archives/2021/page/6/index.html",revision:"9fe220ef97f24d985b129d2debc7f36d"},{url:"archives/2021/page/7/index.html",revision:"f79d379a0201af3af983c5486d350960"},{url:"archives/index.html",revision:"3eb34c5637daee1cb2c122e6e519bc66"},{url:"archives/page/2/index.html",revision:"96d2651a591f197b5ffccc564f5d7603"},{url:"archives/page/3/index.html",revision:"d87aa78d39e03ba5c3a1c7dba69bb5e0"},{url:"archives/page/4/index.html",revision:"e21e319d193d2379c1ac767b650e2251"},{url:"archives/page/5/index.html",revision:"c30e560c023d558d013dc5b850d0f8fe"},{url:"archives/page/6/index.html",revision:"57cdb90d5d8c920a94002d4ba8f9ff30"},{url:"archives/page/7/index.html",revision:"1dd52d1c3e603b59adede7aff4ceb644"},{url:"artitalk/index.html",revision:"3610fda95b38bf7daece2256dcee3577"},{url:"bangumis/index.html",revision:"734b3fe15dfc51fd0f7bf40ae3f0e898"},{url:"bb/index.html",revision:"b5941763c283146b90149121b66a2800"},{url:"bg.webp",revision:"ac56d6c16f7634df84270e3f5393514c"},{url:"categories/💻-Code/index.html",revision:"23481f0a8271ca724ec451b4ac7fb6a4"},{url:"categories/💻-Code/page/2/index.html",revision:"faef11ad0c4e90c23ef71701ca6c4f56"},{url:"categories/💻-Code/page/3/index.html",revision:"5623ba8cdcfcfb94240c51b28b9087da"},{url:"categories/📚️-Study/index.html",revision:"9fe5c8f564496b2cbccee82fb5034f0d"},{url:"categories/📚️-Study/page/2/index.html",revision:"47944ced9aec687af1f4626d3c3d067e"},{url:"categories/📽️-Movies/index.html",revision:"1415cfe9a3e3b99cf514609780c27954"},{url:"categories/🔖-Life/index.html",revision:"06edfccdba26b60df235b6d3f31a6b9e"},{url:"categories/🔖-Life/page/2/index.html",revision:"d15319fd9f5774044ee65f756332c966"},{url:"categories/🖥️-Software/index.html",revision:"423cf8c8901b520acaf711c791550bf8"},{url:"categories/index.html",revision:"d60eb5016236c00464a2f9deca972bb3"},{url:"census/index.html",revision:"3560127b73803ce06ab8003952714620"},{url:"css/bber.css",revision:"63ca60a0f00dda1bcad1fe3d4a1cb18d"},{url:"css/bbindex.css",revision:"8733dbf0f41bb846d0c3d6b50a762491"},{url:"css/code.css",revision:"d8d2abff26e769d3fdfe217a8b96f452"},{url:"css/custom.css",revision:"621ba48d6f3f703f980266d546a79b1f"},{url:"css/friend.css",revision:"181d683a521a930fea73c747b6021480"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"a342c9b835bc10d8fa959318b7c0e736"},{url:"css/star.css",revision:"4e2fd9bf8e767cbcbd19a5739ba0d80a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/index.html",revision:"c2852238a74b258c41aad87f7aa278a9"},{url:"file/index.html",revision:"6421cb0eb82076f6e9b0f119cbaa95dd"},{url:"fonts/Candy.ttf",revision:"95c34d7f49a5630f4086529e452ff775"},{url:"fonts/CDN-jsDelivr-orange.svg",revision:"b40efd6c0e10a7caba084c711d76e310"},{url:"fonts/Copyright-BY--NC--SA 4.svg",revision:"77f0a6d80f5b049ecd8377de31fff3d9"},{url:"fonts/Frame-Hexo-blue.svg",revision:"4c529e432a05854034c8120c20d9812c"},{url:"fonts/Hosted-Cloudflare-0cedbe.svg",revision:"acc1b962e6dfc77868560f8df2fb7802"},{url:"fonts/Hosted-Vercel-brightgreen.svg",revision:"e774b052e6b1a2f5f716c6bf71222af2"},{url:"fonts/Source-Github-d021d6.svg",revision:"c7d5c1efd84c41246fc809a44e4e0a2e"},{url:"fonts/Theme-Butterfly-6513df.svg",revision:"973244a3db55c1dcdd9f158158082cd5"},{url:"hpp/index.html",revision:"fd429cf19cf374079deed759aeb2e8fc"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/foot/butterfly.png",revision:"5a6b442f3b1b416d5150f05478196bfc"},{url:"img/foot/hexo.png",revision:"3ac349d7d6a471b45733b2bdc2cb9a5f"},{url:"img/foot/jsdeliver.png",revision:"72f808178ad5825b1009be74a02da260"},{url:"img/foot/ypy.png",revision:"29d294bc05b1ae24f225309b6740b2ab"},{url:"img/friend_404.gif",revision:"54f3101b13d2d55f5ff1a8bb749db4d3"},{url:"img/friend_404.webp",revision:"e4ea8a475cffd9ab7ddd8dda83e90bf9"},{url:"img/hc.jpg",revision:"a0bc700231aad9717463fae3010ef71a"},{url:"img/icon/android-chrome-144x144.png",revision:"f8073b292859e60a80f51caab21afe75"},{url:"img/icon/android-chrome-192x192.png",revision:"e935331e071f39b5b13a6c95701e1f18"},{url:"img/icon/android-chrome-256x256.png",revision:"ebd07d150b160fc664779cf43cb3dca8"},{url:"img/icon/android-chrome-36x36.png",revision:"fca43a65b7f9b18a6006686ab8e1e1a3"},{url:"img/icon/android-chrome-384x384.png",revision:"62e41340b70f20a9822f586a560f5ecb"},{url:"img/icon/android-chrome-48x48.png",revision:"5721098b955f6fab260307d56211505f"},{url:"img/icon/android-chrome-512x512.png",revision:"a06bff00f206d0423a638fe4b36d593a"},{url:"img/icon/android-chrome-72x72.png",revision:"99644709a2a7d39e3d2aa694d1b11c33"},{url:"img/icon/android-chrome-96x96.png",revision:"b173851d09683f08c33496d642a6e01c"},{url:"img/icon/apple-touch-icon-120x120.png",revision:"a6c19330a6132c052b4f63bd1e6f706c"},{url:"img/icon/apple-touch-icon-152x152.png",revision:"17eae065ce6e200bd355aab69f679cdd"},{url:"img/icon/apple-touch-icon-180x180.png",revision:"4f26555dca034d08419cc8f75a806fea"},{url:"img/icon/apple-touch-icon-60x60.png",revision:"4d09e46da29e7b07ed92e67bf334b681"},{url:"img/icon/apple-touch-icon-76x76.png",revision:"570ebb66197a48ab49497a1c9515a2ee"},{url:"img/icon/apple-touch-icon-precomposed.png",revision:"3436ada98ed271794fd601096618c9d6"},{url:"img/icon/apple-touch-icon.png",revision:"4f26555dca034d08419cc8f75a806fea"},{url:"img/icon/favicon-16x16.png",revision:"9a5b7b93e9281c40c6302d9f1cd1d4ff"},{url:"img/icon/favicon-32x32.png",revision:"11f3af02bbb42d6170b414f88310b842"},{url:"img/icon/mstile-150x150.png",revision:"672eee936c5e08ab0226c199714517d3"},{url:"img/icon/mstile-310x150.png",revision:"0387e7654590c37695fb2fd55febbd55"},{url:"img/icon/mstile-310x310.png",revision:"845cfe2efff830ae218d077c1b5ecab5"},{url:"img/icon/mstile-70x70.png",revision:"e76d34d5d41f3be21624395d485c6cd4"},{url:"img/icon/safari-pinned-tab.svg",revision:"4a0d58a3f76e4b278541e52f0cb918d4"},{url:"img/load.webp",revision:"e4ea8a475cffd9ab7ddd8dda83e90bf9"},{url:"img/loading.gif",revision:"54f3101b13d2d55f5ff1a8bb749db4d3"},{url:"img/siteshot.png",revision:"824eed4102e0adcc9b6758c6be6f9a98"},{url:"index.html",revision:"c0c379cce3b637d4f6e42616039c2c07"},{url:"js/autoaside.js",revision:"c67474229d2679bd179e787d6aa9c215"},{url:"js/bg.js",revision:"dd2641be81e9db30c19c19974fe8a97a"},{url:"js/diytitle.js",revision:"cc8f7364f5b9dc9a76d320747e3a8da1"},{url:"js/forbidIE.js",revision:"f07d4b8996cab3f31a11c5a808dbacd7"},{url:"js/friend.js",revision:"9a4a0601a44f2e3dbded95bad58a3430"},{url:"js/icebg.js",revision:"c1c78248ec3a7398630ab91ef011d08a"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/newbg.js",revision:"79ce2a4dfabc288f6422e5f6be45ed52"},{url:"js/re.js",revision:"f17af31bff4f62d6a56cd0d44faa60a0"},{url:"js/SAO_Menu.js",revision:"d11fc9d26b6fb422cfb57558a6e48ef8"},{url:"js/scroll.js",revision:"5a31da9e8952873418a911a0b9554164"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"kernel.html",revision:"084641e65b87302c946e87d89d815aa3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"d9e6c1931d5d81dc4652313dc90fd4ec"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"4c7a62508e8a93830e501c8d617720d0"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"44c0132236352f6dfff9f5e7924ff8cd"},{url:"live2d-widget/waifu-tips.js",revision:"13394d0ba7b8bc0d664ef9cbe7abb490"},{url:"live2d-widget/waifu.css",revision:"e11570c2a4b40040e6b5e780409055f8"},{url:"live2dw/assets/ico_luoxiaohei.png",revision:"13376be658d9f70366ead4749bce54d7"},{url:"live2dw/assets/moc/luoxiaohei.2048/texture_00.png",revision:"78b91c7bba3ab127402bf4158e1603f6"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"movies/index.html",revision:"8bd3a346b8a4436f39511e848b2fcc26"},{url:"page/2/index.html",revision:"833391841b2a37f9b7088ede47530989"},{url:"page/3/index.html",revision:"48abbe3fd6785470c47483ac08c2a09b"},{url:"page/4/index.html",revision:"ecac2f37f38f15e7d2aedd8c89bca428"},{url:"page/5/index.html",revision:"2f9af2a2ec6d68a710e6f9727118a3b0"},{url:"page/6/index.html",revision:"65d4de506fa3807ee5de62e496328847"},{url:"page/7/index.html",revision:"5bc0f565c326ee813c2f0a57c383afdb"},{url:"posts/1598/index.html",revision:"a20668db564035657e7e1bc8d1f14424"},{url:"posts/166b/index.html",revision:"40ec618274cad3283c8b72913dcf51f4"},{url:"posts/1cef/index.html",revision:"86d69ed40a00520d6fbc06bc1a206df1"},{url:"posts/218/index.html",revision:"832c42c64ad94c673c5854efad246282"},{url:"posts/273b/index.html",revision:"e6f8031e3ae6c3b8bd76affd8bb9275f"},{url:"posts/275e/index.html",revision:"171f1f487bd894f99a18d5264032b52a"},{url:"posts/289b/index.html",revision:"cb9a3e234d527ba835dbcf7accc2b694"},{url:"posts/2beb/index.html",revision:"64fe837fe9d10475ae5055cab4e0325e"},{url:"posts/2ef9/index.html",revision:"1e72f4ff2cb6d669eba3853650ae5c83"},{url:"posts/402a/index.html",revision:"571b16c0c5b977353be20ec90cac4a86"},{url:"posts/40a1/index.html",revision:"cb7796be99448dbff72dd73331e756b0"},{url:"posts/4142/index.html",revision:"a277c261c3fd678178d415a1c3bdba90"},{url:"posts/427b/index.html",revision:"6d8719775feac91de4f7ba8ac5e4cff3"},{url:"posts/428f/index.html",revision:"a8fedfeef7bad3a6075daab8f3bdfba4"},{url:"posts/5482/index.html",revision:"2a27c601e6195c46bb564b73dd9e9b54"},{url:"posts/5c42/index.html",revision:"6e266716da531eb459c810cb6d403e4f"},{url:"posts/5eb1/index.html",revision:"2b3ef8767fd26f7a96698b741215f0f6"},{url:"posts/6bdd/index.html",revision:"7f2bc1c6a461fa90c5a6591033b87a0f"},{url:"posts/7435/index.html",revision:"d58cb0dc81100ad1b42fc933526c763d"},{url:"posts/744f/index.html",revision:"da3b7195efbb94c6ecf1b9f305eb94a9"},{url:"posts/74b6/index.html",revision:"833641d608c3353692d30d07e33324ac"},{url:"posts/7612/index.html",revision:"11402ca2415275c2f05c75123fc34752"},{url:"posts/7c0c/index.html",revision:"359fb2be984f325bf8cec5077bb57ef0"},{url:"posts/8659/index.html",revision:"e4f009c43862bb9a911851f5dd49aee5"},{url:"posts/9970/index.html",revision:"fd32c58a602b51dfdba7a154b9ed799e"},{url:"posts/a06e/index.html",revision:"1f987ef52cf2d623cf8b3eeadbe40a8c"},{url:"posts/a551/index.html",revision:"706b6295b3bd2996a8548d409fa8211e"},{url:"posts/a583/index.html",revision:"a2733e31f1c04149bd8a37bbd876b2b6"},{url:"posts/aacb/index.html",revision:"a9914deb33cd8b933577edaefa095442"},{url:"posts/b2a0/index.html",revision:"85599e4da3e69dd57487d12f4bb340ed"},{url:"posts/b3d2/index.html",revision:"3a1cac318bcabffe66451242c8643ed5"},{url:"posts/b586/index.html",revision:"319063bbb0d40dd711396ca510efd8dc"},{url:"posts/bc41/index.html",revision:"cd1d4ee1643c5ed305b9a9c4f47bf46a"},{url:"posts/bc7/index.html",revision:"a919f876654876968c0a10a65bb693db"},{url:"posts/c223/index.html",revision:"6752b64f95e1b960b9e48551ed652b08"},{url:"posts/c6bd/index.html",revision:"5309de75edc99d9a0b97b58609d0aaf1"},{url:"posts/c8f5/index.html",revision:"0ab40863ec28d885f19134f632f8d895"},{url:"posts/cd10/index.html",revision:"3865dcbd2288e148d3515c6a274f9c52"},{url:"posts/cd88/index.html",revision:"6b8f412a5ddc9b53075460efc0ef014d"},{url:"posts/ce44/index.html",revision:"ec397fc6293fb5f70a0292c74bf077c1"},{url:"posts/d0da/index.html",revision:"11b677ab90a9cfbb96ea623a7ae3c0bd"},{url:"posts/d364/index.html",revision:"c2c8c2ab8d2516a0c6e5820528622826"},{url:"posts/d3f4/index.html",revision:"2453bcfba7c7bc4679075478e212e738"},{url:"posts/d5be/index.html",revision:"09371713c34ad7af764468bfa138869c"},{url:"posts/df28/index.html",revision:"81e9e20abf0129b55c612bd9bad05642"},{url:"posts/e0eb/index.html",revision:"a422673e94dd398e01b8fe1d901fa8b2"},{url:"posts/e556/index.html",revision:"c0b3c28b114fd81a836f9e382a078422"},{url:"posts/e778/index.html",revision:"a1a50ea6bb9b0c75412e53cfb16cc909"},{url:"posts/e93e/index.html",revision:"ad85997a150891d87b09ff95a7e6e528"},{url:"posts/eb7/index.html",revision:"e4b37b290facfaa2c3b43bd66e1c3c6f"},{url:"posts/f10/index.html",revision:"616a718fa8224b308f8916a6f607fe0d"},{url:"posts/f772/index.html",revision:"7fe6d725de9c843aec48d06ade667ca2"},{url:"posts/fa1d/index.html",revision:"a05dc8864b1d1d61e52908f0eb6ba76d"},{url:"posts/fdaa/index.html",revision:"2342815aed7942818d66cd55a8949c1d"},{url:"pp/comet.html",revision:"f071e93f7d62f82be8bd1e06d57c239c"},{url:"random/index.html",revision:"e002058f978d96863a399e4134f07743"},{url:"statistics/index.html",revision:"d7747e9be799f93e884404dcced9ee0c"},{url:"tags/⌨️-AHK/index.html",revision:"40ee573709932789265685f0f31e7712"},{url:"tags/⌨️-C/index.html",revision:"0f9fa66096c42fe2b15ba188c7bb6462"},{url:"tags/⌨️-Qt/index.html",revision:"24295055edce3034072525817837182f"},{url:"tags/☁️-Onedrive/index.html",revision:"54ffa3b8ce14eb8d7e2dff28aab7f894"},{url:"tags/⚙️-Machine/index.html",revision:"f0153e9d1a51916299fc9e2cd7628fea"},{url:"tags/⚙️-Machine/page/2/index.html",revision:"7fce798ae93128af498c4e6150f789fa"},{url:"tags/⚙️-嵌入式/index.html",revision:"42d7f749408c4dba23b3a6dfb7e24e37"},{url:"tags/⛄-演员/index.html",revision:"197046631f608a351455d0527d747ebb"},{url:"tags/🎅-头像/index.html",revision:"256ee4c2255e598cc9338226125167c3"},{url:"tags/👣Pitstop/index.html",revision:"5f5072d2c5ed92b2d03997018fef8d27"},{url:"tags/👣水印/index.html",revision:"971f9698d3525eb479a156bf1795c2a1"},{url:"tags/💻-Gui/index.html",revision:"7663422e0c1f8b1996f351bc5800c196"},{url:"tags/💻-Hexo/index.html",revision:"35c3550b16736dc75df3aedd3160e287"},{url:"tags/💻-Tkinter/index.html",revision:"074e40b47d1240c0a342e6ebba777ae6"},{url:"tags/📁-HEXO/index.html",revision:"b439acb12bcadaca5c057062284f170d"},{url:"tags/📄-Markdown/index.html",revision:"0a3cb0319cb03f9054ac1222f5f35517"},{url:"tags/📄-Opencv/index.html",revision:"aaf071289fab1ac8a7ef9dcc51fc2c3a"},{url:"tags/📄-Python/index.html",revision:"0571e9cdd2c29889a34ff13ee7f81287"},{url:"tags/📑-报告/index.html",revision:"056e8815c563b35e67e4b7fa220ab911"},{url:"tags/📟-51单片机/index.html",revision:"724ec678af885313ae323833ecb6f83b"},{url:"tags/📱-小米/index.html",revision:"654c76b0a6772d65dee3057b4f43d759"},{url:"tags/📽️-Movies/index.html",revision:"c69cee5ca66525330c159819813bf030"},{url:"tags/🔠-有限元分析/index.html",revision:"2b4fcd6caf0993b88acec9c4460f9c50"},{url:"tags/🔠-英语/index.html",revision:"b2e3e0c3602d6243ba7564edd880640b"},{url:"tags/🖥️-Software/index.html",revision:"0fff3e77b35e21fd927f28c6050a0c79"},{url:"tags/🗺️-漫画/index.html",revision:"6dcb3caff86ae7756b3a75a20d0aeaae"},{url:"tags/🧩-PS/index.html",revision:"ae485c54f0b5973ea17682a7c4c03fc5"},{url:"tags/😎-HPP/index.html",revision:"2e82e2bf8e5f23272df879e851e312c9"},{url:"tags/🙃-HPP/index.html",revision:"4d90df73c76934d5d1c9108b65dcf546"},{url:"tags/🚀-GITHUB/index.html",revision:"7fcca38c2d19f3e615125d1fc5cc87d9"},{url:"tags/Ansys/index.html",revision:"f1800d381d1b0cbed40a7c0809e06d3c"},{url:"tags/index.html",revision:"e7f1345972c9023a84c2e81c01a8b39b"},{url:"tags/PPT/index.html",revision:"724eadd403b498c01663247854384759"},{url:"tags/test/index.html",revision:"d79a963d07eca95a34ac93e3fa3ebc97"},{url:"tags/作文/index.html",revision:"4af01ee8eb24b970745bf13ae846ecae"},{url:"tags/键盘⌨️/index.html",revision:"20af0979686600538c20ef711c34a24d"},{url:"倒计时.html",revision:"27b38aa7c758a30a031ec3923973ad43"}],{})}));