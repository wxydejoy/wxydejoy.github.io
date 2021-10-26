const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"006e11ed844dd9b8c28c05bf23d05296",url:"./404.html"},{revision:"7200c7b4a3a5085c015568b98941d9a0",url:"./about/index.html"},{revision:"d3d31d3774ee5e5e6bd908c1a6e505dd",url:"./archives/2020/11/index.html"},{revision:"f560be0d95f0e05ada4d5bb16062e1e1",url:"./archives/2020/index.html"},{revision:"72493b07fc3ff541c93aaac8f1e65425",url:"./archives/2021/03/index.html"},{revision:"8eaca69c9ed42ab055770f9093f2eddd",url:"./archives/2021/03/page/2/index.html"},{revision:"e1398716f0345ba834b8cca91ae727ba",url:"./archives/2021/04/index.html"},{revision:"fa970ea176c7d7761bbace632f756e1d",url:"./archives/2021/05/index.html"},{revision:"88d7762f6fa229458c9e338acc59f9f0",url:"./archives/2021/06/index.html"},{revision:"425ce86dff4605bbfe4586f3d925f23b",url:"./archives/2021/06/page/2/index.html"},{revision:"e9a985dfb9a9a9a3d7a61583a8246940",url:"./archives/2021/07/index.html"},{revision:"21a3fe1a2bc688f25612ee178d159c97",url:"./archives/2021/07/page/2/index.html"},{revision:"3984e7a118da4abd92829a221169764d",url:"./archives/2021/08/index.html"},{revision:"e8a285f2a8757305823973fbfa33b008",url:"./archives/2021/index.html"},{revision:"915c3dd99958a6a476800e10d754037c",url:"./archives/2021/page/2/index.html"},{revision:"c493774e57876181048501ae5fde7f6a",url:"./archives/2021/page/3/index.html"},{revision:"777a086ef565b16185953b658d01facf",url:"./archives/2021/page/4/index.html"},{revision:"52f4b49b2dffe290ac113d854fefd369",url:"./archives/2021/page/5/index.html"},{revision:"07ba5b112e9c394e571b77f9622d91d3",url:"./archives/2021/page/6/index.html"},{revision:"febb6d31674720203543d85c1868681a",url:"./archives/2021/page/7/index.html"},{revision:"65e0a97885ed95b4b5a4d6e09ab6092e",url:"./archives/index.html"},{revision:"214bdac04e78e66a9ab6b1cc73c4040d",url:"./archives/page/2/index.html"},{revision:"02f9c8def7165b4bdadf608b1e986fd0",url:"./archives/page/3/index.html"},{revision:"218cd54cc3f2df24c49a45192626dd52",url:"./archives/page/4/index.html"},{revision:"702606b530b0a90540b11191def73484",url:"./archives/page/5/index.html"},{revision:"2004a34e0e49d02b8cf5f9ec725a26f9",url:"./archives/page/6/index.html"},{revision:"1c89966c243fcad808bbf3725af17516",url:"./archives/page/7/index.html"},{revision:"bdec62c41e7844a2ca59eedcfccdd61f",url:"./artitalk/index.html"},{revision:"7d723c4c98da9ffa7e68264fc1ed6a07",url:"./bangumis/index.html"},{revision:"8231f12c656297728c893d9fd4b20ecf",url:"./bb/index.html"},{revision:"5778abc386283c5cfeb8b07ab0f1124f",url:"./browserconfig.xml"},{revision:"fa13a6ff534d90c0abfdd645522be1b8",url:"./categories/💻-Code/index.html"},{revision:"847a04c5ab9ec0506a0be370b3dc62e0",url:"./categories/💻-Code/page/2/index.html"},{revision:"a193068162bd7e8b6a467ea51948b44c",url:"./categories/💻-Code/page/3/index.html"},{revision:"e346d9e9f8f7a83443906b01ecdb135e",url:"./categories/📚️-Study/index.html"},{revision:"becdadf9fa884e75e5a07289a68152de",url:"./categories/📚️-Study/page/2/index.html"},{revision:"f9d97f3c89ddce5a59ea77bff968d275",url:"./categories/📽️-Movies/index.html"},{revision:"d388670047d022259396432c7fd7ea86",url:"./categories/🔖-Life/index.html"},{revision:"ccecef0299f1afbb03520ab04fea930e",url:"./categories/🔖-Life/page/2/index.html"},{revision:"4b1b49d308e94b0a1e9aa7aa5be36f4b",url:"./categories/🖥️-Software/index.html"},{revision:"bc384eb750f654d7903c88cfd2de4995",url:"./categories/index.html"},{revision:"f0f9d9e97d8a5dc50cff8de1a5fda210",url:"./census/index.html"},{revision:"63ca60a0f00dda1bcad1fe3d4a1cb18d",url:"./css/bber.css"},{revision:"8733dbf0f41bb846d0c3d6b50a762491",url:"./css/bbindex.css"},{revision:"d8d2abff26e769d3fdfe217a8b96f452",url:"./css/code.css"},{revision:"621ba48d6f3f703f980266d546a79b1f",url:"./css/custom.css"},{revision:"181d683a521a930fea73c747b6021480",url:"./css/friend.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"a342c9b835bc10d8fa959318b7c0e736",url:"./css/index.css"},{revision:"4e2fd9bf8e767cbcbd19a5739ba0d80a",url:"./css/star.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"28a6afad23499988f1dbfa836e89ebe7",url:"./fcircle/index.html"},{revision:"b7c25b9505aabbe93b54e4f2934c6d40",url:"./file/index.html"},{revision:"d04db5d6fbbf005e16dfdaab3c112dd1",url:"./hpp/index.html"},{revision:"45d1c4d3483e0e879d4d8cb7421b240f",url:"./img/icon/browserconfig.xml"},{revision:"d3d470caeb52266ec0508b785ca461e9",url:"./index.html"},{revision:"c67474229d2679bd179e787d6aa9c215",url:"./js/autoaside.js"},{revision:"dd2641be81e9db30c19c19974fe8a97a",url:"./js/bg.js"},{revision:"cc8f7364f5b9dc9a76d320747e3a8da1",url:"./js/diytitle.js"},{revision:"f07d4b8996cab3f31a11c5a808dbacd7",url:"./js/forbidIE.js"},{revision:"9a4a0601a44f2e3dbded95bad58a3430",url:"./js/friend.js"},{revision:"c1c78248ec3a7398630ab91ef011d08a",url:"./js/icebg.js"},{revision:"01f62452fd05335569c6341d3ac0f52b",url:"./js/main.js"},{revision:"79ce2a4dfabc288f6422e5f6be45ed52",url:"./js/newbg.js"},{revision:"d11fc9d26b6fb422cfb57558a6e48ef8",url:"./js/SAO_Menu.js"},{revision:"5a31da9e8952873418a911a0b9554164",url:"./js/scroll.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"084641e65b87302c946e87d89d815aa3",url:"./kernel.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"b35da56e6a3ef96e183bf55e6bad6d39",url:"./link/index.html"},{revision:"4c7a62508e8a93830e501c8d617720d0",url:"./live2d-widget/autoload.js"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./live2d-widget/live2d.min.js"},{revision:"44c0132236352f6dfff9f5e7924ff8cd",url:"./live2d-widget/README.html"},{revision:"13394d0ba7b8bc0d664ef9cbe7abb490",url:"./live2d-widget/waifu-tips.js"},{revision:"82dd286dffdad4cbbcda80352aca97ec",url:"./live2d-widget/waifu-tips.json"},{revision:"e11570c2a4b40040e6b5e780409055f8",url:"./live2d-widget/waifu.css"},{revision:"36d7783b1b20eeb7674aaea501d43605",url:"./live2dw/assets/luoxiaohei.model.json"},{revision:"e4e1d1df90aab0c0b9223a44e3bf959d",url:"./live2dw/assets/luoxiaohei.physics.json"},{revision:"8396d263cd326bb23e488191dfecdca0",url:"./live2dw/assets/luoxiaohei.pose.json"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"ebdf043fddcbed7c40ee0fc6452f8ae3",url:"./movies/index.html"},{revision:"8506484d6e774820672a913228042e0c",url:"./page/2/index.html"},{revision:"07c489fd917f00cd0a77c5704cf6f218",url:"./page/3/index.html"},{revision:"06d2ea9e69a48be452a8f3588fa60b23",url:"./page/4/index.html"},{revision:"c4e25345aefa20f0fc613e28d19b7212",url:"./page/5/index.html"},{revision:"790b82f19fddf8cc567df3d9378b3961",url:"./page/6/index.html"},{revision:"2c82c9f9e0ff28f26157a9c1f10367ab",url:"./page/7/index.html"},{revision:"bf9a2875d6043eb8b5de4dc4593844f0",url:"./posts/1598/index.html"},{revision:"0d839af0d4a3b67f1d4a622271aff84b",url:"./posts/166b/index.html"},{revision:"032b9c58ade10d0a187434ce59038cbb",url:"./posts/1cef/index.html"},{revision:"49417638c0c51f5b0e508e9b1fba5e22",url:"./posts/218/index.html"},{revision:"41f4ac9beff230091e2d3efab47efe58",url:"./posts/273b/index.html"},{revision:"d8a59eb4c8715d562baafeedd31714b4",url:"./posts/275e/index.html"},{revision:"1d8a16786c8227490b8b7af2f0726ba7",url:"./posts/289b/index.html"},{revision:"c18d5d54a3ae0391672ebe7e3edc0619",url:"./posts/2beb/index.html"},{revision:"dbfa7bfafecb3311faa19b650e55730e",url:"./posts/2ef9/index.html"},{revision:"d3e035b4134a6044a6a2b334b88d2771",url:"./posts/402a/index.html"},{revision:"f3936ab587c304d7672e7cdee2fa55ae",url:"./posts/40a1/index.html"},{revision:"c0ac75309bd3f8152c7fe938eaabdc91",url:"./posts/4142/index.html"},{revision:"0089b672358c8b1e486edb66521971c5",url:"./posts/427b/index.html"},{revision:"6a38b04a496bdd41feaca3d09f328df9",url:"./posts/428f/index.html"},{revision:"ea10788011b881e345bbc100339cd7ac",url:"./posts/5482/index.html"},{revision:"3267dbae845ec84c66f682d6c64ff412",url:"./posts/5c42/index.html"},{revision:"ff61319fafd88f3eb63e135b6912fcdc",url:"./posts/5eb1/index.html"},{revision:"3d3053da43f0062107582cc46c782176",url:"./posts/6bdd/index.html"},{revision:"195d96a867920a9c54e6a41d8c841d1e",url:"./posts/7435/index.html"},{revision:"0b4cbd3809446c7fccb4765b4b1a5d4a",url:"./posts/744f/index.html"},{revision:"9f2359caad91f96e5310d000c79aaf40",url:"./posts/74b6/index.html"},{revision:"2adeb50a91bcc3425bdfb0357ebbd296",url:"./posts/7612/index.html"},{revision:"6a68e985cd1ba719a17ed9ebe53735fa",url:"./posts/7c0c/index.html"},{revision:"81d89aba7d2f2841c5c79a6cce03f15a",url:"./posts/8659/index.html"},{revision:"44b5f6ec3797f563762ed3e8ab7a9bea",url:"./posts/9970/index.html"},{revision:"a5e8d8f25bb2b9fe4e929acbbca7e0c9",url:"./posts/a06e/index.html"},{revision:"ec37e8e4c4efb6ae6add2a752eaa6c30",url:"./posts/a551/index.html"},{revision:"4c5f511a53346a5d0cc7d8311f5005fa",url:"./posts/a583/index.html"},{revision:"6e04d663ccb04a6ce3d5e47eb11d43c6",url:"./posts/aacb/index.html"},{revision:"3243cad4d468da5aa6db57cee0375db8",url:"./posts/b2a0/index.html"},{revision:"28cfa7ae785e04d0a4969a7207a3ef60",url:"./posts/b3d2/index.html"},{revision:"d2b330f6e9090b96afc4c124c8be358d",url:"./posts/b586/index.html"},{revision:"ec71dee58b1d5872bb33f032eeddfa91",url:"./posts/bc41/index.html"},{revision:"c600583dae229c926d1b97b0aadeef19",url:"./posts/bc7/index.html"},{revision:"39814b13bb15d1e77f96bf4c02fbaf6c",url:"./posts/c223/index.html"},{revision:"1fcfd137b5526420b5369db302db4232",url:"./posts/c6bd/index.html"},{revision:"47352eb30e30fd5b4e28164dc43994ae",url:"./posts/c8f5/index.html"},{revision:"a328a31f76e17b2fe659ba9bcbcbd7d8",url:"./posts/cd10/index.html"},{revision:"1eaacd32318e942291bfad529f781e7c",url:"./posts/cd88/index.html"},{revision:"14a1a580a1a4361cc8c781ceca7c7c11",url:"./posts/ce44/index.html"},{revision:"e8f2d97620e6cd737d481b5f89fd609d",url:"./posts/d0da/index.html"},{revision:"fe36f3639b09a058928f5cd7b65b751c",url:"./posts/d364/index.html"},{revision:"8f350c3cb3406e733ba96f0bd2822c7e",url:"./posts/d3f4/index.html"},{revision:"416518e5470ef3c378fa65467eebccf1",url:"./posts/d5be/index.html"},{revision:"df1624f52cd5c4aa0c4bb6bbd068171b",url:"./posts/df28/index.html"},{revision:"c40964e528d880a0191a4d114b6f40ac",url:"./posts/e0eb/index.html"},{revision:"6178a9f208988aa2de682c095c4d4bdf",url:"./posts/e556/index.html"},{revision:"d137dfdedf1ae70537b0f9c62e2d3e4c",url:"./posts/e778/index.html"},{revision:"ac7b247ad6905f3a443ee6380ae62d23",url:"./posts/e93e/index.html"},{revision:"fd3faf8c0acf415d4d7387a499388081",url:"./posts/eb7/index.html"},{revision:"d70bdaecef94b9dfc3bdbf38fb2901d2",url:"./posts/f10/index.html"},{revision:"f99162e0ebed8ea57f723b7b2d133c71",url:"./posts/f772/index.html"},{revision:"6eb56da0e6ceb7b98235d07f8f85f743",url:"./posts/fa1d/index.html"},{revision:"891f1696fdae0124373e580f3a2fc898",url:"./posts/fdaa/index.html"},{revision:"f071e93f7d62f82be8bd1e06d57c239c",url:"./pp/comet.html"},{revision:"2063ec99dde00b6d9105b6b3bf7bf781",url:"./pwa/manifest.json"},{revision:"e002058f978d96863a399e4134f07743",url:"./random/index.html"},{revision:"c6c7ec621063043199ab42155802068e",url:"./search.xml"},{revision:"a354ec3228bad1024223da220cae6f59",url:"./service-worker.js"},{revision:"35d1ef50d2bd27bed7a13e2e24fb5c9a",url:"./statistics/index.html"},{revision:"8e06d85a7a16b226b4f7de56cc6d152e",url:"./tags/⌨️-AHK/index.html"},{revision:"8b08403c0d5fb7aa6d91b6aa7d32aa5c",url:"./tags/⌨️-C/index.html"},{revision:"c7568ae7398e2eb65a1b2e0781d5bd92",url:"./tags/⌨️-Qt/index.html"},{revision:"8e66524301c290f92d0eef420474639c",url:"./tags/☁️-Onedrive/index.html"},{revision:"e16a3123cac90583eb0f032e9cbf694d",url:"./tags/⚙️-Machine/index.html"},{revision:"0ebd4efb97f192d482ce43a1a9077469",url:"./tags/⚙️-Machine/page/2/index.html"},{revision:"6ccf8d983d21a16315dc6d77cbcecbdf",url:"./tags/⚙️-嵌入式/index.html"},{revision:"d21f7fd0962287b4d9720718304aa121",url:"./tags/⛄-演员/index.html"},{revision:"b25f722e8dd7a550b9e83fdb57841ac7",url:"./tags/🎅-头像/index.html"},{revision:"3b437d818a937d7f642969e42e1b2874",url:"./tags/👣Pitstop/index.html"},{revision:"f26daf4a8b199f6d4a47d8b404c088c4",url:"./tags/👣水印/index.html"},{revision:"ff66421d98920159676b9b8aa8d5f978",url:"./tags/💻-Gui/index.html"},{revision:"f2d80642e58db9b1ee8f778f2a871b09",url:"./tags/💻-Hexo/index.html"},{revision:"9a512eeaf56b6f9c964ee13765d36b01",url:"./tags/💻-Tkinter/index.html"},{revision:"c8e03d2c6e00d428412a2b131f32cbf7",url:"./tags/📁-HEXO/index.html"},{revision:"e8870ebddd7b8029155c14fa44748c7e",url:"./tags/📄-Markdown/index.html"},{revision:"fadd750da1fc595eae544f1b6de8d9fd",url:"./tags/📄-Opencv/index.html"},{revision:"d6549451535ee9219238d7f81b70ca84",url:"./tags/📄-Python/index.html"},{revision:"ab6c726d663252f452491c9778e4cabc",url:"./tags/📑-报告/index.html"},{revision:"6e31c484f7f96a9c1f17c0e53a9a10bc",url:"./tags/📟-51单片机/index.html"},{revision:"f6f64af5514201009e60a14db5c46093",url:"./tags/📱-小米/index.html"},{revision:"a28570b24e72e58d32cbb5e08e21f58b",url:"./tags/📽️-Movies/index.html"},{revision:"853fd5f6e1a3e0e181403a9164c1d78a",url:"./tags/🔠-有限元分析/index.html"},{revision:"edea14b1d84bef945f939eea5a4d466c",url:"./tags/🔠-英语/index.html"},{revision:"cfd4a8b2f769f0e938a3ca0b9e4662e5",url:"./tags/🖥️-Software/index.html"},{revision:"4c353391fd4716b95271173d80a77fab",url:"./tags/🗺️-漫画/index.html"},{revision:"1a060dae9ed7beffe838eb60efc55bbb",url:"./tags/🧩-PS/index.html"},{revision:"94e8634d5b957f0a45c1e7390d297768",url:"./tags/😎-HPP/index.html"},{revision:"149ee6baddbf6ff468817c7b24b34826",url:"./tags/🙃-HPP/index.html"},{revision:"f4b37a9d5a4f86b86e088b1498bd2a19",url:"./tags/🚀-GITHUB/index.html"},{revision:"b3c4ccef04ba9ff5a3330a59e532caae",url:"./tags/Ansys/index.html"},{revision:"ae5e3f4ca0645882e0e5ddfce03dbb35",url:"./tags/index.html"},{revision:"48223bb39b476dd4d0911f3fac8be391",url:"./tags/PPT/index.html"},{revision:"7abe4bfb50836ade1af236550394b500",url:"./tags/test/index.html"},{revision:"1526f922f1db7fef5f9d93623eecf088",url:"./tags/作文/index.html"},{revision:"3598afce881f6664b33177663b145e32",url:"./tags/键盘⌨️/index.html"},{revision:"0497fcadf6b83c75ec4df94ab5067d20",url:"./workbox-f7715658.js"},{revision:"6efbd4c39caeb2d40a7368f08802df22",url:"./倒计时.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();