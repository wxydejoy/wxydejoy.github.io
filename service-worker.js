if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,a,c)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return d;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"4728e500e8a718eff172c55e8d77f66f"},{url:"about/index.html",revision:"668c9e90a6a3db17a4170032eac4b0a0"},{url:"apple-touch-icon-precomposed.png",revision:"3436ada98ed271794fd601096618c9d6"},{url:"apple-touch-icon.png",revision:"4f26555dca034d08419cc8f75a806fea"},{url:"archives/2020/11/index.html",revision:"18621f7e9301ee5141b78247087bd50f"},{url:"archives/2020/index.html",revision:"c4ca03b7acaf2d81c940e01424e7b3e9"},{url:"archives/2021/03/index.html",revision:"b6f09a0791df2e68d7b389b39700886e"},{url:"archives/2021/03/page/2/index.html",revision:"ffbea51b12d82f3ad9432cdc206b26d1"},{url:"archives/2021/04/index.html",revision:"5e0fb077b85b49c755a186e5c98aec1f"},{url:"archives/2021/05/index.html",revision:"6d0718505ed8951a17f5692548e3bee3"},{url:"archives/2021/05/page/2/index.html",revision:"478cd97dc3b90dbde0d43e91338cfeef"},{url:"archives/2021/06/index.html",revision:"0f5e76b5449c00303dff7c6d3ebbf217"},{url:"archives/2021/06/page/2/index.html",revision:"75f5bad3406804f039b319b9c8f4aedc"},{url:"archives/2021/06/page/3/index.html",revision:"3c8837e8ac844b84cfc6676307696f80"},{url:"archives/2021/07/index.html",revision:"6ac1f78e9b940792b9d16fa296f09c5e"},{url:"archives/2021/07/page/2/index.html",revision:"466f60f7508d81425f07f357b45c43ea"},{url:"archives/2021/07/page/3/index.html",revision:"cd47fbf19350dad64662d5692c3095f8"},{url:"archives/2021/08/index.html",revision:"e429be16dabb5344da502945beea1d6f"},{url:"archives/2021/08/page/2/index.html",revision:"166368814c63fa4111502224fc6da9df"},{url:"archives/2021/09/index.html",revision:"b9d4598bc6af08938d651e332a5b2695"},{url:"archives/2021/10/index.html",revision:"3119f6c7e10a8a31314c14e767808a5c"},{url:"archives/2021/index.html",revision:"09c1a12e037cff45ca50fb7195fdc444"},{url:"archives/2021/page/10/index.html",revision:"c1ce1c098a39f07dfd9fb51e90756841"},{url:"archives/2021/page/11/index.html",revision:"50e7e91494d6ed4d57538e5057f5b1c8"},{url:"archives/2021/page/12/index.html",revision:"5f51cbe64cd122215f7f83d5318077cf"},{url:"archives/2021/page/2/index.html",revision:"2bf8be603945af2d36b11b74e47daea4"},{url:"archives/2021/page/3/index.html",revision:"171868cfd4428b6e6913ac2dd1aa587e"},{url:"archives/2021/page/4/index.html",revision:"3a19743ee6ef61dcb71d1002cf14d81d"},{url:"archives/2021/page/5/index.html",revision:"0300f7a9ca3063216e39d4aaa99a63ff"},{url:"archives/2021/page/6/index.html",revision:"c11ed4a23a0be48a7198fab9842509d7"},{url:"archives/2021/page/7/index.html",revision:"d5410b7a52dca1e697709e9647d1fc4c"},{url:"archives/2021/page/8/index.html",revision:"d28c3e3f825e203937fbc0ee6122d75a"},{url:"archives/2021/page/9/index.html",revision:"7e26acd232c58b1c16f3951006d06451"},{url:"archives/index.html",revision:"18fac9e8b212db1b2ff61ef6e65a3687"},{url:"archives/page/10/index.html",revision:"4a26f04bece77e08dc1c8743255c5430"},{url:"archives/page/11/index.html",revision:"89f7efaad0cf6e54fdf0f8688fd12f4b"},{url:"archives/page/12/index.html",revision:"b27dce7eb2ae644f352c6cd7232c0821"},{url:"archives/page/2/index.html",revision:"9039b2de189f701a329e2dd7fe41dd0b"},{url:"archives/page/3/index.html",revision:"c819c0cc34d1b6bc871c024d2cf09a6f"},{url:"archives/page/4/index.html",revision:"97db7bbafbc70ff7436155c472f12a29"},{url:"archives/page/5/index.html",revision:"c5e06d57c8059db524a5b21795b0d9ad"},{url:"archives/page/6/index.html",revision:"c819a30d0cce68a8ce6d8fd500ca476a"},{url:"archives/page/7/index.html",revision:"3ff0bf73ed3ed31fb1a6880337e76472"},{url:"archives/page/8/index.html",revision:"0de8313e779b7c7ec999772564971a88"},{url:"archives/page/9/index.html",revision:"3f7f477349e7ebdca3fda6006c0d60ba"},{url:"artitalk/index.html",revision:"41542b63b52838b977e628c8d14f49a8"},{url:"bangumis/index.html",revision:"c7a5aa3976c2b439eb990281f32ff1fa"},{url:"bb/index.html",revision:"0392139049bffd3a64e9e6528a2c40dc"},{url:"bg.webp",revision:"ac56d6c16f7634df84270e3f5393514c"},{url:"categories/💻-Code/index.html",revision:"ca4bdc343e579e549800115976538f72"},{url:"categories/💻-Code/page/2/index.html",revision:"cf2656ea19dd45e49aabbdc52745d2f7"},{url:"categories/💻-Code/page/3/index.html",revision:"9298b5a09a31a690af1dc979481ce5b3"},{url:"categories/💻-Code/page/4/index.html",revision:"1923d2f15e8af6f374b2e8683178248d"},{url:"categories/📃-Exam/index.html",revision:"38414ec0576e974163777d6ed8cd0539"},{url:"categories/📃-Exam/page/2/index.html",revision:"e3dea661b0f11cd4ee5dd164afa8ea83"},{url:"categories/📃-Exam/page/3/index.html",revision:"0ce508d062c490a43ad9e2766b46df7a"},{url:"categories/📚️-Study/index.html",revision:"362192c6b8826b92a3a32b5807a40d02"},{url:"categories/📚️-Study/page/2/index.html",revision:"2f21610f31db998a26bdca5e7948a6b6"},{url:"categories/📚️-Study/page/3/index.html",revision:"323de0aacd0e864d7dd53b81c83317ee"},{url:"categories/📽️-Movies/index.html",revision:"24c19b77c1803cb5940fc376705e8130"},{url:"categories/🔖-Life/index.html",revision:"89721a5583ed01ba489f8d0461ba4602"},{url:"categories/🔖-Life/page/2/index.html",revision:"e4c0c50392f217dda36d79fc8b9a929e"},{url:"categories/🖥️-Software/index.html",revision:"14ccb7e9cdf294e70a20c138bb2352ba"},{url:"categories/index.html",revision:"3be68e9b3f2b49d31f935ffa02585f63"},{url:"census/index.html",revision:"5cb092794d84f11e6b5b3d31c7681f1e"},{url:"css/bber.css",revision:"63ca60a0f00dda1bcad1fe3d4a1cb18d"},{url:"css/bbindex.css",revision:"8733dbf0f41bb846d0c3d6b50a762491"},{url:"css/code.css",revision:"d8d2abff26e769d3fdfe217a8b96f452"},{url:"css/custom.css",revision:"621ba48d6f3f703f980266d546a79b1f"},{url:"css/friend.css",revision:"181d683a521a930fea73c747b6021480"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"97aa799748d14fdc93bd2cc50598dff3"},{url:"css/star.css",revision:"4e2fd9bf8e767cbcbd19a5739ba0d80a"},{url:"css/topimg.css",revision:"22cbfc86f963facea10e06bedb6b4b82"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/index.html",revision:"c23c205386607d34e25fbfbfacb1f7ef"},{url:"file/index.html",revision:"573abc648931b30fcff5c1eb39355951"},{url:"fonts/Candy.ttf",revision:"95c34d7f49a5630f4086529e452ff775"},{url:"fonts/CDN-jsDelivr-orange.svg",revision:"b40efd6c0e10a7caba084c711d76e310"},{url:"fonts/Copyright-BY--NC--SA 4.svg",revision:"77f0a6d80f5b049ecd8377de31fff3d9"},{url:"fonts/Frame-Hexo-blue.svg",revision:"4c529e432a05854034c8120c20d9812c"},{url:"fonts/Hosted-Cloudflare-0cedbe.svg",revision:"acc1b962e6dfc77868560f8df2fb7802"},{url:"fonts/Hosted-Vercel-brightgreen.svg",revision:"e774b052e6b1a2f5f716c6bf71222af2"},{url:"fonts/Source-Github-d021d6.svg",revision:"c7d5c1efd84c41246fc809a44e4e0a2e"},{url:"fonts/Theme-Butterfly-6513df.svg",revision:"973244a3db55c1dcdd9f158158082cd5"},{url:"hpp/index.html",revision:"4f9e749c49deea9ddcc902442ebc4635"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/foot/butterfly.png",revision:"5a6b442f3b1b416d5150f05478196bfc"},{url:"img/foot/hexo.png",revision:"3ac349d7d6a471b45733b2bdc2cb9a5f"},{url:"img/foot/jsdeliver.png",revision:"72f808178ad5825b1009be74a02da260"},{url:"img/foot/ypy.png",revision:"29d294bc05b1ae24f225309b6740b2ab"},{url:"img/friend_404.gif",revision:"54f3101b13d2d55f5ff1a8bb749db4d3"},{url:"img/friend_404.webp",revision:"e4ea8a475cffd9ab7ddd8dda83e90bf9"},{url:"img/hc.jpg",revision:"a0bc700231aad9717463fae3010ef71a"},{url:"img/icon/android-chrome-144x144.png",revision:"f8073b292859e60a80f51caab21afe75"},{url:"img/icon/android-chrome-192x192.png",revision:"e935331e071f39b5b13a6c95701e1f18"},{url:"img/icon/android-chrome-256x256.png",revision:"ebd07d150b160fc664779cf43cb3dca8"},{url:"img/icon/android-chrome-36x36.png",revision:"fca43a65b7f9b18a6006686ab8e1e1a3"},{url:"img/icon/android-chrome-384x384.png",revision:"62e41340b70f20a9822f586a560f5ecb"},{url:"img/icon/android-chrome-48x48.png",revision:"5721098b955f6fab260307d56211505f"},{url:"img/icon/android-chrome-512x512.png",revision:"a06bff00f206d0423a638fe4b36d593a"},{url:"img/icon/android-chrome-72x72.png",revision:"99644709a2a7d39e3d2aa694d1b11c33"},{url:"img/icon/android-chrome-96x96.png",revision:"b173851d09683f08c33496d642a6e01c"},{url:"img/icon/apple-touch-icon-120x120.png",revision:"a6c19330a6132c052b4f63bd1e6f706c"},{url:"img/icon/apple-touch-icon-152x152.png",revision:"17eae065ce6e200bd355aab69f679cdd"},{url:"img/icon/apple-touch-icon-180x180.png",revision:"4f26555dca034d08419cc8f75a806fea"},{url:"img/icon/apple-touch-icon-60x60.png",revision:"4d09e46da29e7b07ed92e67bf334b681"},{url:"img/icon/apple-touch-icon-76x76.png",revision:"570ebb66197a48ab49497a1c9515a2ee"},{url:"img/icon/apple-touch-icon-precomposed.png",revision:"3436ada98ed271794fd601096618c9d6"},{url:"img/icon/apple-touch-icon.png",revision:"4f26555dca034d08419cc8f75a806fea"},{url:"img/icon/favicon-16x16.png",revision:"9a5b7b93e9281c40c6302d9f1cd1d4ff"},{url:"img/icon/favicon-32x32.png",revision:"11f3af02bbb42d6170b414f88310b842"},{url:"img/icon/mstile-150x150.png",revision:"672eee936c5e08ab0226c199714517d3"},{url:"img/icon/mstile-310x150.png",revision:"0387e7654590c37695fb2fd55febbd55"},{url:"img/icon/mstile-310x310.png",revision:"845cfe2efff830ae218d077c1b5ecab5"},{url:"img/icon/mstile-70x70.png",revision:"e76d34d5d41f3be21624395d485c6cd4"},{url:"img/icon/safari-pinned-tab.svg",revision:"4a0d58a3f76e4b278541e52f0cb918d4"},{url:"img/load.webp",revision:"e4ea8a475cffd9ab7ddd8dda83e90bf9"},{url:"img/loading.gif",revision:"54f3101b13d2d55f5ff1a8bb749db4d3"},{url:"img/siteshot.png",revision:"824eed4102e0adcc9b6758c6be6f9a98"},{url:"index.html",revision:"341e552871599712dcdf1c1ba4b77176"},{url:"js/autoaside.js",revision:"c67474229d2679bd179e787d6aa9c215"},{url:"js/bg.js",revision:"dd2641be81e9db30c19c19974fe8a97a"},{url:"js/diytitle.js",revision:"cc8f7364f5b9dc9a76d320747e3a8da1"},{url:"js/forbidIE.js",revision:"f07d4b8996cab3f31a11c5a808dbacd7"},{url:"js/friend.js",revision:"9a4a0601a44f2e3dbded95bad58a3430"},{url:"js/icebg.js",revision:"c1c78248ec3a7398630ab91ef011d08a"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/newbg.js",revision:"79ce2a4dfabc288f6422e5f6be45ed52"},{url:"js/SAO_Menu.js",revision:"d11fc9d26b6fb422cfb57558a6e48ef8"},{url:"js/scroll.js",revision:"5a31da9e8952873418a911a0b9554164"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"kernel.html",revision:"084641e65b87302c946e87d89d815aa3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"0c8dd1058ef5203690a8a241270f1856"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"4c7a62508e8a93830e501c8d617720d0"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"44c0132236352f6dfff9f5e7924ff8cd"},{url:"live2d-widget/waifu-tips.js",revision:"13394d0ba7b8bc0d664ef9cbe7abb490"},{url:"live2d-widget/waifu.css",revision:"e11570c2a4b40040e6b5e780409055f8"},{url:"live2dw/assets/ico_luoxiaohei.png",revision:"13376be658d9f70366ead4749bce54d7"},{url:"live2dw/assets/moc/luoxiaohei.2048/texture_00.png",revision:"78b91c7bba3ab127402bf4158e1603f6"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"movies/index.html",revision:"30d32ca87199010d93ff79c584abeba1"},{url:"page/10/index.html",revision:"a95201d18c883ba3270d79045bc7d44e"},{url:"page/11/index.html",revision:"e83f28087263273e062be6da9067641d"},{url:"page/12/index.html",revision:"5308940abaffd7e267a3cf1f9ead9341"},{url:"page/2/index.html",revision:"2860b71fa6f7fb4efb0122893876e277"},{url:"page/3/index.html",revision:"ce98cb9dbc09eb9040ddf73f3764cb26"},{url:"page/4/index.html",revision:"3a436975745833fcf81717b4b4604eef"},{url:"page/5/index.html",revision:"7648314b95c6a4bbde4d0e66b8bc575f"},{url:"page/6/index.html",revision:"a7cc9623bfe0c9162cc42fc2cc289e4d"},{url:"page/7/index.html",revision:"370cdb3c6dd15d62cf4414afc67fd197"},{url:"page/8/index.html",revision:"e52d6389d4b58dd14b72b811fe2eaf50"},{url:"page/9/index.html",revision:"74df66539c05e6a3ea89bc0823beee44"},{url:"posts/1598/index.html",revision:"dd057e65c0bd8a73b10d0a63c6a92124"},{url:"posts/166b/index.html",revision:"7c35f95e6000613cc262e80520cf467e"},{url:"posts/1cef/index.html",revision:"70b18147a3e77ba08f2d607ccf1d9838"},{url:"posts/2045/index.html",revision:"3d8d1966c75d611efa2816cde077d2d1"},{url:"posts/218/index.html",revision:"ddd462ffbc6cf05a95d8493998436e88"},{url:"posts/273b/index.html",revision:"4ddb77a3a7ec608f44cc8274963140c4"},{url:"posts/275e/index.html",revision:"80e140da8e1196b8b2a5558d968c69de"},{url:"posts/289b/index.html",revision:"8efd6b10a2db705b72bad06acd243fff"},{url:"posts/2984/index.html",revision:"28fa288aed4031f2917710f333bdca65"},{url:"posts/29a3/index.html",revision:"509d5a451d1c5f049d4783a7ef805bbd"},{url:"posts/2beb/index.html",revision:"3dfa36233d17071bd6991de6d853764e"},{url:"posts/2e04/index.html",revision:"c90397c815f9f55d0f47dfe90cc864d8"},{url:"posts/2ef9/index.html",revision:"c96c6fc3030bcd2e08b47d8cfd6cb242"},{url:"posts/34c/index.html",revision:"a1f5c98753063f95c2ebabf026a4814b"},{url:"posts/36e9/index.html",revision:"02966110b7c2cb91714f4a76cb00be67"},{url:"posts/402a/index.html",revision:"bf5db41cbddeeb888040aed54ed61588"},{url:"posts/40a1/index.html",revision:"05c294d9c061a83e7cc2ce3e68a96fe8"},{url:"posts/4142/index.html",revision:"4e6be70d92ae6c3d26ecaa81b9267cd3"},{url:"posts/427b/index.html",revision:"3971acab7d00cde8a32a976f2ff9099a"},{url:"posts/428f/index.html",revision:"600ac40a7f0e7b8c7265b919513ecb2c"},{url:"posts/48c8/index.html",revision:"4a7a2d448947712fcf0ece0e109221b4"},{url:"posts/4e10/index.html",revision:"6cb7b7bed825bb9b9559d1936ba657fb"},{url:"posts/4f7d/index.html",revision:"3a620d99ffec6eb25e3efae9b2f96268"},{url:"posts/5482/index.html",revision:"2e219adc89eeeb0db01c33684d748f93"},{url:"posts/5c42/index.html",revision:"ea927506624d1b5431f83d000df75370"},{url:"posts/5cf0/index.html",revision:"5004bcd9504fe8cdac7d35fc03efaed4"},{url:"posts/5eb1/index.html",revision:"081fa24d0852ecb45c7422f3d24c28f2"},{url:"posts/613f/index.html",revision:"be3435725ea6e79b9b4f8b52b764e840"},{url:"posts/6ae7/index.html",revision:"bad2aa7b3ac674d6663f1bf360b9a9fc"},{url:"posts/6bdd/index.html",revision:"20ff65a40d3815cb2b09d2eea137097a"},{url:"posts/7435/index.html",revision:"4d0b29c1c8e801ee6fe0b029bb383b09"},{url:"posts/744f/index.html",revision:"398072af8df6898ffadc02726a57ce91"},{url:"posts/74b6/index.html",revision:"254c72240860228eabc5402717268680"},{url:"posts/7519/index.html",revision:"6ba7a93599fb675abaa81de64d7ec5dc"},{url:"posts/7612/index.html",revision:"30a426006ce3177a0b9b28345bb11203"},{url:"posts/7809/index.html",revision:"a76eb55062b6b917f8744856cecc5de5"},{url:"posts/79a2/index.html",revision:"b7ab9eb2e3054249b0f5cc6859ca0827"},{url:"posts/7b02/index.html",revision:"96cbe0b83848820469d4b01e694e6217"},{url:"posts/7b1d/index.html",revision:"b9e8bf95d0e57bf929af694e9fb0c3aa"},{url:"posts/7c0c/index.html",revision:"212afa82915926761f6c4b11296dcc99"},{url:"posts/8659/index.html",revision:"66c229661befd6c396fff121c2a38742"},{url:"posts/8a3d/index.html",revision:"29f761f69a62e89686598917acc41bdd"},{url:"posts/909c/index.html",revision:"0c0f3a7ee7ba7d1d284f774ceab6d893"},{url:"posts/9970/index.html",revision:"dee564db0f66b11e9897a10ccc0f4b8b"},{url:"posts/9b69/index.html",revision:"432ac50fbb1f042f74afb1d4b6886420"},{url:"posts/9cee/index.html",revision:"3044c4641bd61330dcf41d9ce2046863"},{url:"posts/9d82/index.html",revision:"a7f39507fe7e174b7dfa7f5debf97370"},{url:"posts/a06e/index.html",revision:"d1cfbd78b43ecf46651c1888fe0fcd85"},{url:"posts/a107/index.html",revision:"9c74bc04248f9e34666f6dccdb64b7b0"},{url:"posts/a551/index.html",revision:"be92ae03e94ecec76aef42e00d4dc09b"},{url:"posts/a583/index.html",revision:"d071f6eb96b975008fcfc21071660ddc"},{url:"posts/aacb/index.html",revision:"9527590c2717b5f207cb9204de2208c3"},{url:"posts/b15e/index.html",revision:"bb49bbb15b01d66f949143b7c0099a28"},{url:"posts/b2a0/index.html",revision:"b2d2a2ffd5a8198371d43acd8f7de1e6"},{url:"posts/b3d2/index.html",revision:"41eef4e792874ea54a0cd7a29904d564"},{url:"posts/b586/index.html",revision:"94e11ec910ab7d141ceb959bbceb1bcb"},{url:"posts/b5d2/index.html",revision:"82e436248272858ac4ccbe9455873ba9"},{url:"posts/b662/index.html",revision:"97886bbd41301beae3fa3f68d88d0551"},{url:"posts/bc41/index.html",revision:"cdb32bf1f67e024119181b0b3c5cd61e"},{url:"posts/bc7/index.html",revision:"db6e26c92323fca17b6f8f52af510c90"},{url:"posts/c18a/index.html",revision:"1bcaffa2e409a016562af5f443899540"},{url:"posts/c223/index.html",revision:"4fcb3f0ebfaf7c57794ac01ee3908b55"},{url:"posts/c58d/index.html",revision:"19baf75d57869c19e6a8c0f2f7244159"},{url:"posts/c6bd/index.html",revision:"da6bf17b66a8091a217d4738a6ce3b2a"},{url:"posts/c75d/index.html",revision:"2b653c438ee0dc0a2031cb38ca41d6ee"},{url:"posts/c8f5/index.html",revision:"7efe850ba7e75f1f7fa58759ff2185a4"},{url:"posts/c90a/index.html",revision:"ff6b2076027894d47b3a4d94a58b9583"},{url:"posts/cd10/index.html",revision:"46fc9a14918441019e0b685a036fab1b"},{url:"posts/cd88/index.html",revision:"a22a4529b621631a0e7b8e73f0d2129f"},{url:"posts/ce44/index.html",revision:"f6bd45cd63c4e5d361c95f649307cd83"},{url:"posts/d0da/index.html",revision:"1bce73614f75e66c81e0b49b67e2de10"},{url:"posts/d364/index.html",revision:"84b14c8eddf0d74e702d3cd2d0ff4d60"},{url:"posts/d3b3/index.html",revision:"605068af0bbf9d7c3c34cbfead75bb21"},{url:"posts/d3f4/index.html",revision:"adfd80cb09d3b622dd273bfa9827f592"},{url:"posts/d5be/index.html",revision:"667c4ac98980bbb008f0859887514c22"},{url:"posts/d804/index.html",revision:"480c3ffe9a195a51b978bf3088e5d271"},{url:"posts/dea7/index.html",revision:"9a3ea42f3d33c04c52e33bd23ab9979f"},{url:"posts/df28/index.html",revision:"8eac1c56a9c70bb3fab01b5bf5043417"},{url:"posts/e0eb/index.html",revision:"026760894e063ea27d32b082b644f069"},{url:"posts/e556/index.html",revision:"a394ab6dbf79372566406ecd3734368e"},{url:"posts/e778/index.html",revision:"4d3423df137e93a5385d3e6cd77943d1"},{url:"posts/e93e/index.html",revision:"1937f58d2a770ab439e3238ee5cdd5d3"},{url:"posts/eb7/index.html",revision:"a3e28bf08fcaf9f3b8b981204f110be1"},{url:"posts/f10/index.html",revision:"20989a41faa7efcd1eddfadb07afde3c"},{url:"posts/f772/index.html",revision:"55d3fc43ae9ebbce5bdcef788b448890"},{url:"posts/f7b5/index.html",revision:"b426d1758968bd275043249d30b08887"},{url:"posts/fa1d/index.html",revision:"7961c73b45c639e388e47fbc64e75842"},{url:"posts/fdaa/index.html",revision:"7a67399a06145703d405c96edaf0c153"},{url:"pp/comet.html",revision:"f071e93f7d62f82be8bd1e06d57c239c"},{url:"random/index.html",revision:"5397e73744f20309720750b83bbcf93c"},{url:"statistics/index.html",revision:"004d5d2cdd47c39e983d059bccae4360"},{url:"tags/⌨️-AHK/index.html",revision:"19d673f6aa9bd26b11ad83e2d7c10e99"},{url:"tags/⌨️-C/index.html",revision:"2372c16bce32f51543d86a9013cedc1d"},{url:"tags/⌨️-Qt/index.html",revision:"6476476b73c38f7eb915dbbab6292789"},{url:"tags/☁️-Onedrive/index.html",revision:"c5d01bce1fe2eed8175e233c240fd527"},{url:"tags/⚙️-Machine/index.html",revision:"a5d7bbe0f94105609b13ee91f6fd0f74"},{url:"tags/⚙️-Machine/page/2/index.html",revision:"70f9737129725cf12d4f04d982bcd617"},{url:"tags/⚙️-嵌入式/index.html",revision:"9986dbff3fef94bfb17977990cacd20c"},{url:"tags/⛄-演员/index.html",revision:"b9bb808f4cde1b4c522e45cf469d21cd"},{url:"tags/🎅-头像/index.html",revision:"b5105c7f90615c1002198bfec94417d6"},{url:"tags/👣Pitstop/index.html",revision:"51c4c2ebb53e640ee57299c00927df0a"},{url:"tags/👣水印/index.html",revision:"a2ff898b5245e133d8c92ba6139e4338"},{url:"tags/💻-Gui/index.html",revision:"004a9baaa1a96b9be43f2fce2b9f93d0"},{url:"tags/💻-Hexo/index.html",revision:"e224f77f0759238a5994c07680e10a1f"},{url:"tags/💻-Keil/index.html",revision:"3fb479e6556619725328caf61f44e6e4"},{url:"tags/💻-Proteus/index.html",revision:"310f6c72ca938feacfa3fd1e0b4b3d9b"},{url:"tags/💻-Tkinter/index.html",revision:"d289e7b7eb72f9cde5a9f4abafe28f86"},{url:"tags/📁-HEXO/index.html",revision:"76c14f3281be4bdcfc3714087f0bed1c"},{url:"tags/📃-Exam/index.html",revision:"b9a3ba594ef89a0afaffa066bcf54c9b"},{url:"tags/📄-Markdown/index.html",revision:"60c65711437d76466c4c996bc0dcdb02"},{url:"tags/📄-Opencv/index.html",revision:"82b04277fd7bc43b55bceef9d3e94b05"},{url:"tags/📄-Python/index.html",revision:"c235d71dda5af3fb4d80dfb81fda02cd"},{url:"tags/📐-三角函数/index.html",revision:"a91229481b4b18c0081f4c77598671a7"},{url:"tags/📑-报告/index.html",revision:"de9403f9a195ef6d618d0bf3de46da8e"},{url:"tags/📚-Math/index.html",revision:"0a03aff640573a33f2ec83e6241e3078"},{url:"tags/📚️-高等数学/index.html",revision:"d805826ee41bb22c4e14d022720647db"},{url:"tags/📟-51-单片机/index.html",revision:"2d08fcc4bb21f9c5ad80e0315e5ddba1"},{url:"tags/📟-51单片机/index.html",revision:"41e831316f23d3c646618b1ab6dbd99f"},{url:"tags/📟51单片机/index.html",revision:"d719ffbe7faa4ec36da0abf643df4abf"},{url:"tags/📱-小米/index.html",revision:"60be4699e86ddab3d8fffafaad767f01"},{url:"tags/📽️-Movies/index.html",revision:"f89d5fd42291567d1b3a1bdb490899e8"},{url:"tags/🔠-有限元分析/index.html",revision:"6c72ee74cdb633f0d34c3e30f0676d95"},{url:"tags/🔠-英语/index.html",revision:"7353a8071909fb924dc32ecfbec86f2c"},{url:"tags/🖥️-Software/index.html",revision:"4fb2da6f9dc06dad5e6f65516e8d0a2d"},{url:"tags/🗺️-漫画/index.html",revision:"66d975306ad33b8da461de70c9a3774a"},{url:"tags/🧩-PS/index.html",revision:"1c58661633739bf9d597d6430b772bfa"},{url:"tags/😎-HPP/index.html",revision:"0a7c6ea5993d137217b43770e449d899"},{url:"tags/🙃-HPP/index.html",revision:"4e08b2b371e609dba25cfeffb1e2ca9a"},{url:"tags/🚀-GITHUB/index.html",revision:"171c0b8c20e34ce52ba26cdb285261c6"},{url:"tags/Ansys/index.html",revision:"bf0b1aaf6a622e617dd56bdd411dfb7c"},{url:"tags/index.html",revision:"69426a6872a242c4df91ccf72981a440"},{url:"tags/PPT/index.html",revision:"f202370f24e025a2cc07cc78af413ff1"},{url:"tags/test/index.html",revision:"1380ab8a4f2fdadf382a6def82c71180"},{url:"tags/作文/index.html",revision:"06bdbc2c8a2705474ae36b60a9724c13"},{url:"tags/图纸/index.html",revision:"4ad1157bc1e33ff0724ece6c7892806c"},{url:"tags/键盘⌨️/index.html",revision:"d2eea22412240dc6899b101cc4fd2aa1"},{url:"倒计时.html",revision:"1eb6912f14d7a268ab1064986da2174c"}],{})}));