const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"8485035ac7773b382bdf1f8f2c4d93d6",url:"./404.html"},{revision:"6d653eb9d54467c47bd3fed16395ecf7",url:"./about/index.html"},{revision:"b545c5bf221bb49b77d77cae3c5af308",url:"./archives/2020/11/index.html"},{revision:"722e72bd1bbfb7aad2cda2df8a7eb2d0",url:"./archives/2020/index.html"},{revision:"46afc4d8f1815ec4fa7f5613d4d8859b",url:"./archives/2021/03/index.html"},{revision:"ea678db9a9b872cc0e9cc30f94a34bd0",url:"./archives/2021/03/page/2/index.html"},{revision:"43e8eee44b808093d08e4fa3ff90023e",url:"./archives/2021/04/index.html"},{revision:"92b2fb17fd3a55ef32f031c105830f34",url:"./archives/2021/05/index.html"},{revision:"6b97dbf3723d9f4e407bba625e3a4242",url:"./archives/2021/05/page/2/index.html"},{revision:"f33b5cca47eb9d45645f88230f6c3795",url:"./archives/2021/06/index.html"},{revision:"97b8663ccf58ecab8f35aa9f22ed32f0",url:"./archives/2021/06/page/2/index.html"},{revision:"59f4dd9eadf19b2fc13fbc7bf9849bc2",url:"./archives/2021/06/page/3/index.html"},{revision:"a4f3a3e6bf4eef171c9a990c05297c74",url:"./archives/2021/07/index.html"},{revision:"98ac3ed985d7e8c9775cc1a6f5fcfa60",url:"./archives/2021/07/page/2/index.html"},{revision:"0c235f39a5f3e357c134f03af2c0ec93",url:"./archives/2021/07/page/3/index.html"},{revision:"eb28c906788d008b7cb6b8862a937538",url:"./archives/2021/08/index.html"},{revision:"f13f5a5c1a363b354fef4e182e803a6a",url:"./archives/2021/08/page/2/index.html"},{revision:"91841a4ef4893fad536d9cd510fd07da",url:"./archives/2021/10/index.html"},{revision:"cd33dc69a09fbce54a7a6d477f9036e2",url:"./archives/2021/index.html"},{revision:"21f2935b3c687016ee03b6eed4d381c3",url:"./archives/2021/page/10/index.html"},{revision:"dcb48dfa569208e2de25676322c2cf63",url:"./archives/2021/page/11/index.html"},{revision:"7ab614687485a16a1101f3402d632d8a",url:"./archives/2021/page/12/index.html"},{revision:"6090ed37b61906f90fc4899d2f86e44f",url:"./archives/2021/page/2/index.html"},{revision:"a9fae7e7b30608c68a591bd1999a2190",url:"./archives/2021/page/3/index.html"},{revision:"0f35fde97a49d53b4d6d7547d8d2a7e3",url:"./archives/2021/page/4/index.html"},{revision:"e9cca895b2077710c28c18bd40db028c",url:"./archives/2021/page/5/index.html"},{revision:"0010bed95adb0dacc6822e9a67929596",url:"./archives/2021/page/6/index.html"},{revision:"4ee29f39b8dbcc73b1da30485d31504f",url:"./archives/2021/page/7/index.html"},{revision:"7574341b71b5d9653a90a6bb19a55761",url:"./archives/2021/page/8/index.html"},{revision:"60c5dd7689f6efa153a6dcdb633d2d24",url:"./archives/2021/page/9/index.html"},{revision:"82e7620ae57c43a5f65a13847568012b",url:"./archives/index.html"},{revision:"fc3d09076d976a9f85edaf99ce98a4cc",url:"./archives/page/10/index.html"},{revision:"9bb6730a6a3d73604b2970fe90586166",url:"./archives/page/11/index.html"},{revision:"cbd35ba323f66650e9c08151d06bb11b",url:"./archives/page/12/index.html"},{revision:"54bd7a3ee3beb895f40029849365551d",url:"./archives/page/2/index.html"},{revision:"c65b9d0cb47bce3727a0715515f3dfde",url:"./archives/page/3/index.html"},{revision:"9433a4e64f1334a3d779f64cb93ea2ae",url:"./archives/page/4/index.html"},{revision:"27778b531746c25717aa0ead6c3ddf90",url:"./archives/page/5/index.html"},{revision:"c3ca0d81a79d7641b9e24970eab62678",url:"./archives/page/6/index.html"},{revision:"ad0b815605fceed3d8a30802407defd8",url:"./archives/page/7/index.html"},{revision:"e92913a279fef985906d3652ee988d2c",url:"./archives/page/8/index.html"},{revision:"c63bfd3f11bc468b21d675058a8e22ed",url:"./archives/page/9/index.html"},{revision:"5ab271247e474afe4b424749f03716a0",url:"./artitalk/index.html"},{revision:"77b5fd3ffec0a474cc7a45100eafbe85",url:"./bangumis/index.html"},{revision:"93650e9de951089eb323ab924b52c957",url:"./bb/index.html"},{revision:"5778abc386283c5cfeb8b07ab0f1124f",url:"./browserconfig.xml"},{revision:"c4ca75c6cb3260d88711deb262eefc9c",url:"./categories/💻-Code/index.html"},{revision:"eda9137ed034316c8bbf8345066fcc23",url:"./categories/💻-Code/page/2/index.html"},{revision:"e198f7349b9be95cbbdf6e6909402121",url:"./categories/💻-Code/page/3/index.html"},{revision:"fc8b854ba7f1882a3e37ef5148f4589d",url:"./categories/💻-Code/page/4/index.html"},{revision:"3f1667e94e54e8e11ed3133751c077d7",url:"./categories/📃-Exam/index.html"},{revision:"39a1caa40e0f29753bee20c136a3d780",url:"./categories/📃-Exam/page/2/index.html"},{revision:"97d9e4c5e958df0a2b50655290aa566e",url:"./categories/📃-Exam/page/3/index.html"},{revision:"d4300fedd20a5059d3b7918dd5406f4f",url:"./categories/📚️-Study/index.html"},{revision:"db1ed4ef264813da4c4d318820e1fb44",url:"./categories/📚️-Study/page/2/index.html"},{revision:"6a8038c284216e29ed694937ad045d81",url:"./categories/📚️-Study/page/3/index.html"},{revision:"8fdad52fd8e3fdebff970f62a96ae255",url:"./categories/📽️-Movies/index.html"},{revision:"d8ba874ad28c2b282211da5e3a00c29c",url:"./categories/🔖-Life/index.html"},{revision:"dcf47089194b7fc97127645d7d39c698",url:"./categories/🔖-Life/page/2/index.html"},{revision:"9e5f4922fd3fe9a6aa98e2381c5fe306",url:"./categories/🖥️-Software/index.html"},{revision:"734f5338682b31b6a41d7712e8502dbf",url:"./categories/index.html"},{revision:"fe2edaa9cce236f085622407f1274c6d",url:"./census/index.html"},{revision:"63ca60a0f00dda1bcad1fe3d4a1cb18d",url:"./css/bber.css"},{revision:"8733dbf0f41bb846d0c3d6b50a762491",url:"./css/bbindex.css"},{revision:"d8d2abff26e769d3fdfe217a8b96f452",url:"./css/code.css"},{revision:"82f9e6d37b432781d1084c1138c4b250",url:"./css/custom.css"},{revision:"b5caaf35e2a2300ac2ce5b5a54145213",url:"./css/friend.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"a342c9b835bc10d8fa959318b7c0e736",url:"./css/index.css"},{revision:"4e2fd9bf8e767cbcbd19a5739ba0d80a",url:"./css/star.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"401d53aee73742085d15da82a8af565d",url:"./fcircle/index.html"},{revision:"430e698bf2720c66e3b6f3a335e63103",url:"./file/index.html"},{revision:"99cbbcb035b959010d081f985289784e",url:"./hpp/index.html"},{revision:"45d1c4d3483e0e879d4d8cb7421b240f",url:"./img/icon/browserconfig.xml"},{revision:"5cf2674d0e72ff9b9cb39e113198acd1",url:"./index.html"},{revision:"c67474229d2679bd179e787d6aa9c215",url:"./js/autoaside.js"},{revision:"dd2641be81e9db30c19c19974fe8a97a",url:"./js/bg.js"},{revision:"cc8f7364f5b9dc9a76d320747e3a8da1",url:"./js/diytitle.js"},{revision:"f07d4b8996cab3f31a11c5a808dbacd7",url:"./js/forbidIE.js"},{revision:"9a4a0601a44f2e3dbded95bad58a3430",url:"./js/friend.js"},{revision:"c1c78248ec3a7398630ab91ef011d08a",url:"./js/icebg.js"},{revision:"01f62452fd05335569c6341d3ac0f52b",url:"./js/main.js"},{revision:"79ce2a4dfabc288f6422e5f6be45ed52",url:"./js/newbg.js"},{revision:"d11fc9d26b6fb422cfb57558a6e48ef8",url:"./js/SAO_Menu.js"},{revision:"5a31da9e8952873418a911a0b9554164",url:"./js/scroll.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"084641e65b87302c946e87d89d815aa3",url:"./kernel.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"db616c7ce00e40f9d6ca344d5197b0f8",url:"./link/index.html"},{revision:"4c7a62508e8a93830e501c8d617720d0",url:"./live2d-widget/autoload.js"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./live2d-widget/live2d.min.js"},{revision:"44c0132236352f6dfff9f5e7924ff8cd",url:"./live2d-widget/README.html"},{revision:"13394d0ba7b8bc0d664ef9cbe7abb490",url:"./live2d-widget/waifu-tips.js"},{revision:"82dd286dffdad4cbbcda80352aca97ec",url:"./live2d-widget/waifu-tips.json"},{revision:"e11570c2a4b40040e6b5e780409055f8",url:"./live2d-widget/waifu.css"},{revision:"36d7783b1b20eeb7674aaea501d43605",url:"./live2dw/assets/luoxiaohei.model.json"},{revision:"e4e1d1df90aab0c0b9223a44e3bf959d",url:"./live2dw/assets/luoxiaohei.physics.json"},{revision:"8396d263cd326bb23e488191dfecdca0",url:"./live2dw/assets/luoxiaohei.pose.json"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"ef8b4a31631f9b137ba245ee7e51e4ec",url:"./movies/index.html"},{revision:"6df91e2483dd40c36e03d2e025ae0eae",url:"./page/10/index.html"},{revision:"dac1883d4fe1ef0505dda8feccf7a3ea",url:"./page/11/index.html"},{revision:"5b565a3748c1fdb2f1a85a3af68f6f0c",url:"./page/12/index.html"},{revision:"0642316add934901410e7e8e02234727",url:"./page/2/index.html"},{revision:"6c402ec359e88a6fd19269f9dad08f6e",url:"./page/3/index.html"},{revision:"11ffd9f3d41a88b885381d5f77ac2e00",url:"./page/4/index.html"},{revision:"340e3b73f9dc9d78e81e22049fa9f016",url:"./page/5/index.html"},{revision:"ebedd5c9225d29638e35163d86742d50",url:"./page/6/index.html"},{revision:"e7d2beb8f0e324beca1054f356d31e42",url:"./page/7/index.html"},{revision:"ed22f4d4858f44acc83951d1f5bca53c",url:"./page/8/index.html"},{revision:"ab9a51571d308f3a47e83ab47dade460",url:"./page/9/index.html"},{revision:"ca5b19d35df011cbcbc15bf834af1d73",url:"./posts/1598/index.html"},{revision:"4dcd1e8d22671e278bbda5ec31527481",url:"./posts/166b/index.html"},{revision:"71ea7466ef631862c25a4592d5f6210b",url:"./posts/1cef/index.html"},{revision:"06e2305b31eb90a78ff0a1f9f69df4f7",url:"./posts/2045/index.html"},{revision:"01f025182a2d926b6f6d57f7bb54c722",url:"./posts/218/index.html"},{revision:"aa98a9a09b0832bd61ca4675d6711362",url:"./posts/273b/index.html"},{revision:"c1127e2f68b87408222cc7bd9769eead",url:"./posts/275e/index.html"},{revision:"e45414c27f135b30712f99a476668447",url:"./posts/289b/index.html"},{revision:"d0edba42a42d7f2c124f3fc5b6984e7c",url:"./posts/2984/index.html"},{revision:"3320af0e33474ccce28cfebc03826787",url:"./posts/29a3/index.html"},{revision:"cb5f1678195fb652ad0916523717a947",url:"./posts/2beb/index.html"},{revision:"d6312b48dce97cfc7690e4bfe98aad5e",url:"./posts/2e04/index.html"},{revision:"a3ea563e627798e1067685e4453c5c0c",url:"./posts/2ef9/index.html"},{revision:"193bf7e35268cad57248644906439999",url:"./posts/34c/index.html"},{revision:"295a0d8528e9a6bd13078c77b0880a85",url:"./posts/36e9/index.html"},{revision:"29b7bff098d61409bae79b3137bc7bbe",url:"./posts/402a/index.html"},{revision:"ef21d853292b3d0bfee59eb6e8446864",url:"./posts/40a1/index.html"},{revision:"8492467e29cbad52e3e17a8eef5aff16",url:"./posts/4142/index.html"},{revision:"728eaf306cd40b1fde4709025ac49086",url:"./posts/427b/index.html"},{revision:"9edd4138a36b55625a462c5e61b4e56d",url:"./posts/428f/index.html"},{revision:"0c3070801ac0ab230557e2146a7f33f2",url:"./posts/48c8/index.html"},{revision:"9fdff28d4ef32aa3b4aa210464306aef",url:"./posts/4e10/index.html"},{revision:"bc0912b7f1986888eec63fb76c28be52",url:"./posts/4f7d/index.html"},{revision:"764353528577f784146cbdb59ecbe43f",url:"./posts/5482/index.html"},{revision:"d3a2e6c9c0dfd495c7ab0495fbacd9a4",url:"./posts/5c42/index.html"},{revision:"dfbcf00656568782b7a44247d7396726",url:"./posts/5cf0/index.html"},{revision:"d7563f3b44c21206515465c74db125c0",url:"./posts/5eb1/index.html"},{revision:"9d08e71a89d121977c93a743d92ebe61",url:"./posts/613f/index.html"},{revision:"4a30811d4cd3a99faea4c12c2af05c23",url:"./posts/6ae7/index.html"},{revision:"415b88d16c132dd1ea2cd8741fd7c303",url:"./posts/6bdd/index.html"},{revision:"0cbdf293ab933817cddc0ff8bcd1c787",url:"./posts/7435/index.html"},{revision:"865731d222ae0a49c286b853d1f0ddd9",url:"./posts/744f/index.html"},{revision:"844941e0b042c403a433f158fa9f5f40",url:"./posts/74b6/index.html"},{revision:"18b23a62962accb5ab3a5ed57abb27fc",url:"./posts/7519/index.html"},{revision:"33ad6b0fff735c78b793bd658177da2f",url:"./posts/7612/index.html"},{revision:"b10f2e620ec2fff0edaae70fcfcbbc3c",url:"./posts/7809/index.html"},{revision:"5f8ff987ecc76f0d3bd426355367bdea",url:"./posts/79a2/index.html"},{revision:"ba9cddc07e60e94784cbaf4716619e11",url:"./posts/7b02/index.html"},{revision:"c7c6e8622f42d46cc2e7776a3d2feb44",url:"./posts/7b1d/index.html"},{revision:"06786ef4ecb4ba7bbbd72c2d53f0c30d",url:"./posts/7c0c/index.html"},{revision:"6dc98370d1c3cc781841065faf1e6ae7",url:"./posts/8659/index.html"},{revision:"82a4bc8d4c797dd72ca8358cfe5fb394",url:"./posts/8a3d/index.html"},{revision:"42345ed548ea903162331a3762337de8",url:"./posts/909c/index.html"},{revision:"d90d2701061241df1ee1048044650c92",url:"./posts/9970/index.html"},{revision:"f1e288ca6305204aa249009f21a09ae7",url:"./posts/9b69/index.html"},{revision:"a7746439e67f70d29b22c5efc88a22e5",url:"./posts/9cee/index.html"},{revision:"a5b1a72e9463968d98bb3c261f5f55eb",url:"./posts/9d82/index.html"},{revision:"c2f23bcc83bb4ae56a8db12feb63318f",url:"./posts/a06e/index.html"},{revision:"c9b39b04bbcbd1af34a80436ee989520",url:"./posts/a107/index.html"},{revision:"5a6f136070d008db9fea208f04f8e6c6",url:"./posts/a551/index.html"},{revision:"a7e638270eade98a6994864dce9a7527",url:"./posts/a583/index.html"},{revision:"54104ffb929a937cb2b2ec2255fe8104",url:"./posts/aacb/index.html"},{revision:"d62437188b4a063b409eb5d58b4ddaee",url:"./posts/b15e/index.html"},{revision:"46a6b157610464c89f3ef85b147db466",url:"./posts/b2a0/index.html"},{revision:"f76678608e4b1b2a712cbd3132816bd5",url:"./posts/b3d2/index.html"},{revision:"980fbc8b93b5d403f58b579e6dc61fab",url:"./posts/b586/index.html"},{revision:"9810ee9c2c4b79368dcf392a918b63c3",url:"./posts/b5d2/index.html"},{revision:"3a2cd123072ba00bda4dde171d8bfb0b",url:"./posts/b662/index.html"},{revision:"8c9f3c9d393a7cfe09e7103461c40845",url:"./posts/bc41/index.html"},{revision:"d2f397ed75f0c7ebaa514bfe522b2869",url:"./posts/bc7/index.html"},{revision:"25d10003fa58abee3094a3dbf51b5494",url:"./posts/c18a/index.html"},{revision:"2bd0b3e8bb626b5d476d5168ea8fa50a",url:"./posts/c223/index.html"},{revision:"b1106ee17898dd4a24f04ec7acd71ebd",url:"./posts/c58d/index.html"},{revision:"76adbad83bb16333bec5f0138a71b421",url:"./posts/c6bd/index.html"},{revision:"9ac84d10725102fd3572edd86cd6ac94",url:"./posts/c75d/index.html"},{revision:"15b4daea9739990950e5c10f1f904bce",url:"./posts/c8f5/index.html"},{revision:"54df2c118a696fb2d7bd8a701b0f25e1",url:"./posts/c90a/index.html"},{revision:"777e7283d13787058f4e6569f22c6fc8",url:"./posts/cd10/index.html"},{revision:"45d4533bc5b61abe91718f62944ddddf",url:"./posts/cd88/index.html"},{revision:"55018cdf0aaf94134fc9bc0b5134e515",url:"./posts/ce44/index.html"},{revision:"47f8ab7a22dcbb299a44c1cfcfb854e2",url:"./posts/d0da/index.html"},{revision:"4c27f3eb4f581d077a8dad2565344754",url:"./posts/d364/index.html"},{revision:"f34106d36fbdb342e8124c13e071a830",url:"./posts/d3b3/index.html"},{revision:"092fae1e64235df9e5cca03790fec227",url:"./posts/d3f4/index.html"},{revision:"f9cf62fa730810059df360cc2e01f39a",url:"./posts/d5be/index.html"},{revision:"d67749c5fbf2981d14098fb8c83250c6",url:"./posts/d804/index.html"},{revision:"bd5fe9a0262bda0b87bd4d517a5e7a1f",url:"./posts/dea7/index.html"},{revision:"021f27fd2598add902077543386dac67",url:"./posts/df28/index.html"},{revision:"e3972f09a59772fc223b11052cd5f038",url:"./posts/e0eb/index.html"},{revision:"ce16c41ba7c3e59036ff95dcb60c9c0e",url:"./posts/e556/index.html"},{revision:"8027eff71ae4d72e120986cdea99d4d8",url:"./posts/e778/index.html"},{revision:"1590ded8808bf63e2544bc13e888deb0",url:"./posts/e93e/index.html"},{revision:"531bf336d1833f4121c47aa2ce588e94",url:"./posts/eb7/index.html"},{revision:"aab589d8614f156e5b6914ae9ef40dbe",url:"./posts/f10/index.html"},{revision:"c2d40760f7ddae943646a17062b9e6f1",url:"./posts/f772/index.html"},{revision:"57c8914820e0a2cc1211cf37e950b4a5",url:"./posts/f7b5/index.html"},{revision:"f641ac22a74c9a5e90e4c4eeaf2c6a08",url:"./posts/fa1d/index.html"},{revision:"60d8a18b8c10861eaa9937fc04f56538",url:"./posts/fdaa/index.html"},{revision:"f071e93f7d62f82be8bd1e06d57c239c",url:"./pp/comet.html"},{revision:"2063ec99dde00b6d9105b6b3bf7bf781",url:"./pwa/manifest.json"},{revision:"322518d1bf1134679b795d4b5657fda7",url:"./random/index.html"},{revision:"3d4684039b8d3413c0756ee760fc5a4a",url:"./service-worker.js"},{revision:"9a08011df38d8902c0566fe4e730a1fb",url:"./statistics/index.html"},{revision:"dabda2171787c0e92a5e26f7cac796bb",url:"./tags/⌨️-AHK/index.html"},{revision:"7024d78a31c0515fe40277dd3e8b22ca",url:"./tags/⌨️-C/index.html"},{revision:"3c55feee129edbb949ba02ffad419f8f",url:"./tags/⌨️-Qt/index.html"},{revision:"d3b40f641dab41e7dae304081b0a0475",url:"./tags/☁️-Onedrive/index.html"},{revision:"1478d7984e7ab539fe896e6f5dee68a9",url:"./tags/⚙️-Machine/index.html"},{revision:"d0d64b7ded761f5b661649a7b8bf07ba",url:"./tags/⚙️-Machine/page/2/index.html"},{revision:"18d5fa5a71f121aa7ed5758030f26c3e",url:"./tags/⚙️-嵌入式/index.html"},{revision:"18855a2d984046b629d29be382e5ec74",url:"./tags/⛄-演员/index.html"},{revision:"0da79967e4a1416668a4dae1fbbb2358",url:"./tags/🎅-头像/index.html"},{revision:"0ec0f39f9fa009565db3c06e12b61fe5",url:"./tags/👣Pitstop/index.html"},{revision:"588a786cf834b7efd8fe5b41cf29c640",url:"./tags/👣水印/index.html"},{revision:"9da2d9fec484559845fdab6bea54b628",url:"./tags/💻-Gui/index.html"},{revision:"78d6aff22025aafee886ba8cf0cbe841",url:"./tags/💻-Hexo/index.html"},{revision:"291c8cb04508bb687953798dc12c2f06",url:"./tags/💻-Keil/index.html"},{revision:"cba1507724fba7711da9e93d0195ee06",url:"./tags/💻-Proteus/index.html"},{revision:"7aaeffd4a3789f5e7920d118246e93cd",url:"./tags/💻-Tkinter/index.html"},{revision:"e927d9cd4c14f658743b37e8d98144d4",url:"./tags/📁-HEXO/index.html"},{revision:"a46fdc6fc9c51639f484300446de0b19",url:"./tags/📃-Exam/index.html"},{revision:"a7b14c3f1792e4c4549c490fc089c49f",url:"./tags/📄-Markdown/index.html"},{revision:"c602682f6546502440d233b46bd32eca",url:"./tags/📄-Opencv/index.html"},{revision:"ebfe477df4872042476f1fa3bf6c6eb9",url:"./tags/📄-Python/index.html"},{revision:"72aae5b1e1022c9f35fc528413e7cf7c",url:"./tags/📐-三角函数/index.html"},{revision:"aa026d9322f8a27e8facf9592618c0ae",url:"./tags/📑-报告/index.html"},{revision:"6991815b14b0200ce9f21f8cf929b443",url:"./tags/📚-Math/index.html"},{revision:"a1e3e3246944f7df0e3636dedb90e4f8",url:"./tags/📚️-高等数学/index.html"},{revision:"790684b5ef95799c09b42f90f0799b35",url:"./tags/📟-51-单片机/index.html"},{revision:"4b02a6caba492ef2d2ca4fccfaf8f0f5",url:"./tags/📟-51单片机/index.html"},{revision:"358f270df7d9fca5d28e483bafc89e40",url:"./tags/📟51单片机/index.html"},{revision:"522fb64366ed83f44c439cfa4407e8b6",url:"./tags/📱-小米/index.html"},{revision:"b202b1789a2e78206169352375caea3b",url:"./tags/📽️-Movies/index.html"},{revision:"1b4d745a07c316be48f58d3bd6633281",url:"./tags/🔠-有限元分析/index.html"},{revision:"32aa907eee9bb6e65448bb08447b182c",url:"./tags/🔠-英语/index.html"},{revision:"cc6cbb78fa8722062996197c16af3f66",url:"./tags/🖥️-Software/index.html"},{revision:"35457280bf9becff049dcd7f1a5316b0",url:"./tags/🗺️-漫画/index.html"},{revision:"e635665b16d333075a209bb77d25ab89",url:"./tags/🧩-PS/index.html"},{revision:"babd6789708ea85e93937fe6b5ced821",url:"./tags/😎-HPP/index.html"},{revision:"4efe51aefc5961c3105306db46f5c810",url:"./tags/🙃-HPP/index.html"},{revision:"2b1d0e42f3d511571808e75264c19b82",url:"./tags/🚀-GITHUB/index.html"},{revision:"eb5119ab67954fa284780fa611aa8e1c",url:"./tags/Ansys/index.html"},{revision:"29490303db147022f5878802f20f709a",url:"./tags/index.html"},{revision:"254eabcc46bea1d728c76b01439f2417",url:"./tags/PPT/index.html"},{revision:"cf893a65311e761bb8592ba36b327d6b",url:"./tags/test/index.html"},{revision:"541edb960332f826306f305c3e5a3576",url:"./tags/作文/index.html"},{revision:"3006bf5581d9764a70f1844cfd32402f",url:"./tags/图纸/index.html"},{revision:"c28e2a90a4e42e8f762138ed75f6ab0b",url:"./tags/键盘⌨️/index.html"},{revision:"0497fcadf6b83c75ec4df94ab5067d20",url:"./workbox-f7715658.js"},{revision:"ed70afefd6d3481b9c0ba208ffea8e07",url:"./倒计时.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();