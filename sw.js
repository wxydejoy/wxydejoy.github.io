const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"090980dfdc4cac30113f8d1fee94e45a",url:"./404.html"},{revision:"f114635f533506fe7820d66fba339c4e",url:"./about/index.html"},{revision:"254b92624fa0f70627acbca955ff6ad6",url:"./archives/2020/11/index.html"},{revision:"92fce1fda565be147eca57bd3f7f56b4",url:"./archives/2020/index.html"},{revision:"fb1ef5d2a6e808676d9dfac5d1a55457",url:"./archives/2021/03/index.html"},{revision:"26ee0b86e1abec26b2d80cec86fe1fac",url:"./archives/2021/03/page/2/index.html"},{revision:"bba0c694474141a47b9b574340b4597a",url:"./archives/2021/04/index.html"},{revision:"e676a772367fe7c8f16128b7f55918e1",url:"./archives/2021/05/index.html"},{revision:"3fef6659f7d9da1effad200e80ed5637",url:"./archives/2021/06/index.html"},{revision:"d2ecea6bdb34bc3a9f01b820906671da",url:"./archives/2021/06/page/2/index.html"},{revision:"d4d739ade35ca6b4e1951d58ae2ce62a",url:"./archives/2021/07/index.html"},{revision:"211b204d5d0dddfecc229f86e7aaccfd",url:"./archives/2021/07/page/2/index.html"},{revision:"148b7f62aa0bcfcf0e56627cc694298f",url:"./archives/2021/08/index.html"},{revision:"92a7750ece271564946fced94152edbf",url:"./archives/2021/index.html"},{revision:"2778ad6247f94c65127ae029026cc323",url:"./archives/2021/page/2/index.html"},{revision:"04d859b48babf31949ea203ca53a09cb",url:"./archives/2021/page/3/index.html"},{revision:"6dabb421ebb9550999c4a83d362400c2",url:"./archives/2021/page/4/index.html"},{revision:"e2058b4d9c6f16aafaa3429f67c7fe64",url:"./archives/2021/page/5/index.html"},{revision:"6f22a09253874d83a422b28027e11e28",url:"./archives/2021/page/6/index.html"},{revision:"b185da1f3e15c3486a6da2a1159f22fa",url:"./archives/2021/page/7/index.html"},{revision:"7a252d3745e7cc9910fb58b8a048c0ce",url:"./archives/index.html"},{revision:"53d572af1511584836cff15d73392d08",url:"./archives/page/2/index.html"},{revision:"9e656dc2a80774c7ac7872922f6dcb23",url:"./archives/page/3/index.html"},{revision:"91a48ef7031229c882f5beb72983ea71",url:"./archives/page/4/index.html"},{revision:"18732f4a22ecbf29e2c51b56e16ff606",url:"./archives/page/5/index.html"},{revision:"c76cd448d81566ddba172a13994a0dcc",url:"./archives/page/6/index.html"},{revision:"404da2d4131b3f253f4df7bbadf2cc23",url:"./archives/page/7/index.html"},{revision:"89cf885443598bee2bd6c1d8b9ff4b4e",url:"./artitalk/index.html"},{revision:"af23538236eadf5bc31780e987f8017e",url:"./bangumis/index.html"},{revision:"7752614a20d9cb5c35681e16632e6f7d",url:"./bb/index.html"},{revision:"5778abc386283c5cfeb8b07ab0f1124f",url:"./browserconfig.xml"},{revision:"1d652081694f663fd1620429d304d7dc",url:"./categories/💻-Code/index.html"},{revision:"cc71afc3da0be325060f7399e711693d",url:"./categories/💻-Code/page/2/index.html"},{revision:"49e5403c94fb79f88606fdd3045677fd",url:"./categories/💻-Code/page/3/index.html"},{revision:"e21bc37474fb2f139677d6c8b612c624",url:"./categories/📚️-Study/index.html"},{revision:"c66afbd7a35fc870141a2c47626b41a2",url:"./categories/📚️-Study/page/2/index.html"},{revision:"8791a1c38e84b52f83e2400b56531cdc",url:"./categories/📽️-Movies/index.html"},{revision:"967d1b0f157488358803728e13dd6c9b",url:"./categories/🔖-Life/index.html"},{revision:"f5cac14d11e5fe4dadc05dd6f5101eaf",url:"./categories/🔖-Life/page/2/index.html"},{revision:"35698c79018756aa54bfd7345408e87b",url:"./categories/🖥️-Software/index.html"},{revision:"18efa0283622c72a2020d2dde8e9ce5d",url:"./categories/index.html"},{revision:"70d2ad276c076b3d8f1d2092b888405d",url:"./census/index.html"},{revision:"63ca60a0f00dda1bcad1fe3d4a1cb18d",url:"./css/bber.css"},{revision:"8733dbf0f41bb846d0c3d6b50a762491",url:"./css/bbindex.css"},{revision:"d8d2abff26e769d3fdfe217a8b96f452",url:"./css/code.css"},{revision:"621ba48d6f3f703f980266d546a79b1f",url:"./css/custom.css"},{revision:"181d683a521a930fea73c747b6021480",url:"./css/friend.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"a342c9b835bc10d8fa959318b7c0e736",url:"./css/index.css"},{revision:"4e2fd9bf8e767cbcbd19a5739ba0d80a",url:"./css/star.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"03bd1e238d485d0b10cf125f78c4e185",url:"./fcircle/index.html"},{revision:"1a73bdad08ce0bf05b94c0fb70cbf655",url:"./file/index.html"},{revision:"3a4bf0f4cf35a1df06ea0564cae8470b",url:"./hpp/index.html"},{revision:"45d1c4d3483e0e879d4d8cb7421b240f",url:"./img/icon/browserconfig.xml"},{revision:"86ea1f08ad4ec8531bf12c87e8f1c534",url:"./index.html"},{revision:"c67474229d2679bd179e787d6aa9c215",url:"./js/autoaside.js"},{revision:"dd2641be81e9db30c19c19974fe8a97a",url:"./js/bg.js"},{revision:"cc8f7364f5b9dc9a76d320747e3a8da1",url:"./js/diytitle.js"},{revision:"f07d4b8996cab3f31a11c5a808dbacd7",url:"./js/forbidIE.js"},{revision:"9a4a0601a44f2e3dbded95bad58a3430",url:"./js/friend.js"},{revision:"c1c78248ec3a7398630ab91ef011d08a",url:"./js/icebg.js"},{revision:"01f62452fd05335569c6341d3ac0f52b",url:"./js/main.js"},{revision:"79ce2a4dfabc288f6422e5f6be45ed52",url:"./js/newbg.js"},{revision:"f17af31bff4f62d6a56cd0d44faa60a0",url:"./js/re.js"},{revision:"d11fc9d26b6fb422cfb57558a6e48ef8",url:"./js/SAO_Menu.js"},{revision:"5a31da9e8952873418a911a0b9554164",url:"./js/scroll.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"084641e65b87302c946e87d89d815aa3",url:"./kernel.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"f81ba7d50edb25640348f83074d4cae6",url:"./link/index.html"},{revision:"4c7a62508e8a93830e501c8d617720d0",url:"./live2d-widget/autoload.js"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./live2d-widget/live2d.min.js"},{revision:"44c0132236352f6dfff9f5e7924ff8cd",url:"./live2d-widget/README.html"},{revision:"13394d0ba7b8bc0d664ef9cbe7abb490",url:"./live2d-widget/waifu-tips.js"},{revision:"82dd286dffdad4cbbcda80352aca97ec",url:"./live2d-widget/waifu-tips.json"},{revision:"e11570c2a4b40040e6b5e780409055f8",url:"./live2d-widget/waifu.css"},{revision:"36d7783b1b20eeb7674aaea501d43605",url:"./live2dw/assets/luoxiaohei.model.json"},{revision:"e4e1d1df90aab0c0b9223a44e3bf959d",url:"./live2dw/assets/luoxiaohei.physics.json"},{revision:"8396d263cd326bb23e488191dfecdca0",url:"./live2dw/assets/luoxiaohei.pose.json"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"e6c83f380b1a9ceb0e2975f2654adbaa",url:"./movies/index.html"},{revision:"bffad0873f3706e59ac2e73524324170",url:"./page/2/index.html"},{revision:"003b8c2ef7e379a11442d303e1a3f543",url:"./page/3/index.html"},{revision:"62f8ae9b7bb7e1147cb63137cecbab4d",url:"./page/4/index.html"},{revision:"8664fa61c2c36e3b26ce44877ae5d26e",url:"./page/5/index.html"},{revision:"eb3c99bf28070be4fe595e723814c319",url:"./page/6/index.html"},{revision:"b18f67460c63151c0752bb93a5ba940b",url:"./page/7/index.html"},{revision:"d07ab6d096140baab7b1d55a04ca6f8d",url:"./posts/1598/index.html"},{revision:"c98f5b2a2420602e373b4b358b8f7e74",url:"./posts/166b/index.html"},{revision:"8be280d22d6d5fef90e7a33664b9e709",url:"./posts/1cef/index.html"},{revision:"7326440afeee122a6d38eb4ad9384dc2",url:"./posts/218/index.html"},{revision:"ad5823edc3bcf66250b64cffcc3b90a6",url:"./posts/273b/index.html"},{revision:"8feec0a468abed677761ec4408ce0a6b",url:"./posts/275e/index.html"},{revision:"4db89311c3046c87a04b6b78672c6b4e",url:"./posts/289b/index.html"},{revision:"81ae482f5ad436d315b3c511cae8f569",url:"./posts/2beb/index.html"},{revision:"df42993b714f295a3d36eabacabfa86d",url:"./posts/2ef9/index.html"},{revision:"7798093aded7adab487134c9c18c087c",url:"./posts/402a/index.html"},{revision:"c375ea1d35c13d23ba86713190c92917",url:"./posts/40a1/index.html"},{revision:"b1b51508c303d316999108438cc26ac5",url:"./posts/4142/index.html"},{revision:"80cf061ccf43041b75e60e42dfb684b1",url:"./posts/427b/index.html"},{revision:"25d5b47ed40aae585653397ae65b6796",url:"./posts/428f/index.html"},{revision:"fcd813967acbc36f31e76db1371b5db7",url:"./posts/5482/index.html"},{revision:"d1a610cb3a4932eea5af4e70ac18d5ed",url:"./posts/5c42/index.html"},{revision:"f5a0c82d936b851231cb830e9a3a432c",url:"./posts/5eb1/index.html"},{revision:"a15bdea90709620dfb55b43d5e0f4afd",url:"./posts/6bdd/index.html"},{revision:"870ff3e27ee4a59e7eb9c3e44167646b",url:"./posts/7435/index.html"},{revision:"471f0817f120510d9dd9ba9293026a5c",url:"./posts/744f/index.html"},{revision:"f182c6a04f33633841cae289e7270ee6",url:"./posts/74b6/index.html"},{revision:"2104f961a2a1d6f6601abf3e932a29ec",url:"./posts/7612/index.html"},{revision:"9588b6d400f71242e286e542cc5cb13b",url:"./posts/7c0c/index.html"},{revision:"7e21a96000250300367c49154189ffb3",url:"./posts/8659/index.html"},{revision:"d6e05064848cc95a97125756d1d8bdac",url:"./posts/9970/index.html"},{revision:"cf7f7d9731b7c082c22680ba8496c52d",url:"./posts/a06e/index.html"},{revision:"f5ded432602ec3a32f91d4cf745fd284",url:"./posts/a551/index.html"},{revision:"839f45cb57636680337f65703f32f27b",url:"./posts/a583/index.html"},{revision:"884adc4faee064bdbbd9758f15d163c4",url:"./posts/aacb/index.html"},{revision:"07b4f52e5022ad61a6414a3312bf0c88",url:"./posts/b2a0/index.html"},{revision:"608190b1b60794c2d2892dc3c4094062",url:"./posts/b3d2/index.html"},{revision:"7f6bf9ef3f893185bae9a53205edd242",url:"./posts/b586/index.html"},{revision:"a8664c94ca94bdfcba547f160a32ae7d",url:"./posts/bc41/index.html"},{revision:"d5984c22ff4d60683a30590a63d63ce1",url:"./posts/bc7/index.html"},{revision:"b79fdc9bd5003302c1889f7aeeaec84b",url:"./posts/c223/index.html"},{revision:"1b95e222929269143d058669087af814",url:"./posts/c6bd/index.html"},{revision:"32d713d221d7c39b7480b00cbe95c748",url:"./posts/c8f5/index.html"},{revision:"9639cc549f046ae23699778b925c7947",url:"./posts/cd10/index.html"},{revision:"fde4298061125ea1ce1d9848fa851554",url:"./posts/cd88/index.html"},{revision:"943eb578e44a59ca53803f7fd1937915",url:"./posts/ce44/index.html"},{revision:"20de4007b576a9994e5023e2b894c758",url:"./posts/d0da/index.html"},{revision:"ecc1e28d636b42be9c164c4addf62dcd",url:"./posts/d364/index.html"},{revision:"d4456753368151aafb8d54e125be92ab",url:"./posts/d3f4/index.html"},{revision:"07cb37481e7d47a127c5c84a90756384",url:"./posts/d5be/index.html"},{revision:"c67603a01db8c151b187ed654a40083d",url:"./posts/df28/index.html"},{revision:"9d96460a096dfcbcbe0c31ae72f61e34",url:"./posts/e0eb/index.html"},{revision:"287a5b3ac0639f87c1516caa78e89563",url:"./posts/e556/index.html"},{revision:"86b59ccfe823e9d42992edfe8538c478",url:"./posts/e778/index.html"},{revision:"dc9027115062e35ef18c20b312e14797",url:"./posts/e93e/index.html"},{revision:"6e90a8f5ff986bf27cb9ae0678ebc132",url:"./posts/eb7/index.html"},{revision:"3e5d99d2ff5c717721a28c53b06a913a",url:"./posts/f10/index.html"},{revision:"6761b05c0aaf806f4ad7b592f801ebfe",url:"./posts/f772/index.html"},{revision:"5e1d4bfee77580ea89a42911564b6623",url:"./posts/fa1d/index.html"},{revision:"4c5dc02e9d4ce3b94e575fa27e857ba8",url:"./posts/fdaa/index.html"},{revision:"f071e93f7d62f82be8bd1e06d57c239c",url:"./pp/comet.html"},{revision:"2063ec99dde00b6d9105b6b3bf7bf781",url:"./pwa/manifest.json"},{revision:"e002058f978d96863a399e4134f07743",url:"./random/index.html"},{revision:"c6c7ec621063043199ab42155802068e",url:"./search.xml"},{revision:"5975ae2003ee8c76d807fd3baa54c0ee",url:"./service-worker.js"},{revision:"38cf32815cb433a060a7972c336beafb",url:"./statistics/index.html"},{revision:"6da9ebc86738f1d2bbc128815175f2cc",url:"./tags/⌨️-AHK/index.html"},{revision:"da91a6cb8a009bb6e3a90f73402cb0ae",url:"./tags/⌨️-C/index.html"},{revision:"fc7b3d07e5f6ee01cb1f2994516329a3",url:"./tags/⌨️-Qt/index.html"},{revision:"117fd43230e987b35faa4a49ebde8a25",url:"./tags/☁️-Onedrive/index.html"},{revision:"7e346983d81d8d5004a50610b7aabd2c",url:"./tags/⚙️-Machine/index.html"},{revision:"657bed04c0809ae5784e105621bd883a",url:"./tags/⚙️-Machine/page/2/index.html"},{revision:"b94eb71826a28500cd8cc1d21c1e7fda",url:"./tags/⚙️-嵌入式/index.html"},{revision:"78891328f41c34254adc0b46b6f11301",url:"./tags/⛄-演员/index.html"},{revision:"bab1d9ea5fe6edbf21c5c310ead39613",url:"./tags/🎅-头像/index.html"},{revision:"91b5f3678427fc58237b1fafde04e4c0",url:"./tags/👣Pitstop/index.html"},{revision:"9b92f666f39fd5414955b2e9960226fd",url:"./tags/👣水印/index.html"},{revision:"bb9bd93f729346ce1d11aa9f9d3dce25",url:"./tags/💻-Gui/index.html"},{revision:"b3590ac6fb16bd8615daf4b77f956b10",url:"./tags/💻-Hexo/index.html"},{revision:"6c9ebe555c835b22246a62f67692c211",url:"./tags/💻-Tkinter/index.html"},{revision:"8bc9ab6c5b0df03752405d65af926a55",url:"./tags/📁-HEXO/index.html"},{revision:"dc0d1d6f37f98e0a264360be2eb653de",url:"./tags/📄-Markdown/index.html"},{revision:"be0aecd323172025e7a7c6a97bb5468c",url:"./tags/📄-Opencv/index.html"},{revision:"22db886e93f994e407e2927dc663bde2",url:"./tags/📄-Python/index.html"},{revision:"511286bd9859800bbe22bce96ee74a93",url:"./tags/📑-报告/index.html"},{revision:"e98f5ceec7f75a8c6d0608ab44a272ce",url:"./tags/📟-51单片机/index.html"},{revision:"ddb959d1aaa0df9d2e13a5fe55a3aeb1",url:"./tags/📱-小米/index.html"},{revision:"397f60fa30751fafd7b14997b62cde13",url:"./tags/📽️-Movies/index.html"},{revision:"3dc4cc7e44909340b7c0eba1d10eacd9",url:"./tags/🔠-有限元分析/index.html"},{revision:"7775bbb550acdd40f8f8b8c019134b3f",url:"./tags/🔠-英语/index.html"},{revision:"20eb5f9e72776e6a323792a07f82da79",url:"./tags/🖥️-Software/index.html"},{revision:"a45d727b17f12644c97729fcb08b6867",url:"./tags/🗺️-漫画/index.html"},{revision:"e7aee05b0397118ce8722ae48640227c",url:"./tags/🧩-PS/index.html"},{revision:"63b250363258d69de7d56a792d26a0b5",url:"./tags/😎-HPP/index.html"},{revision:"0df666bffd2643c08d00e9622176e663",url:"./tags/🙃-HPP/index.html"},{revision:"68746f037951fe37a16e941b817e304c",url:"./tags/🚀-GITHUB/index.html"},{revision:"40f5f19c82e23ccee8be51611c361078",url:"./tags/Ansys/index.html"},{revision:"a0d12279dcbbb2011b128b60be213735",url:"./tags/index.html"},{revision:"4955debff9c38da45b42a40e30a81329",url:"./tags/PPT/index.html"},{revision:"f6dbfe34952e25b2ab05002154a3f175",url:"./tags/test/index.html"},{revision:"6ca1ba7035cd075f882fea3a0bcf80dc",url:"./tags/作文/index.html"},{revision:"e19141ab816fd438a62c5d6e39e829ea",url:"./tags/键盘⌨️/index.html"},{revision:"0497fcadf6b83c75ec4df94ab5067d20",url:"./workbox-f7715658.js"},{revision:"afdfe9fdc718bff13cb25aeb7eeb24a2",url:"./倒计时.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();