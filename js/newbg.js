// Infinite tunnel. Copyright (c) 2016 by Terry Tong. Licensed under the MIT license.

(function() {
    var camerab, sceneb, rendererb;
    var cylinderb;
    var textureb;
    var normal_speed = 0.0002;
    var hyperspeed = 53;
    var hyperspeed_mode = false;
    var hyperspeed_upratio = 1.03;
    var hyperspeed_downratio = 1.3;
    var current_speed = normal_speed;

    var hyperspeed_upscale = 1.03;
    var hyperspeed_downscale = 1.3;
    var current_scale = 1;



    function loadScript(src, callback) {
        var script = document.createElement('script'),
            head = document.getElementsByTagName('head')[0];
        script.type = 'text/javascript';
        script.charset = 'UTF-8';
        script.src = src;
        if (script.addEventListener) {
            script.addEventListener('load', function() {
                callback();
            }, false);
        } else if (script.attachEvent) {
            script.attachEvent('onreadystatechange', function() {
                var target = window.event.srcElement;
                if (target.readyState == 'loaded') {
                    callback();
                }
            });
        }
        head.appendChild(script);
    }
    
    function loadlived() {
        if (document.body.clientWidth > 900) {
            document.onreadystatechange = function() {
                if (document.readyState == "complete") {
                    loadScript('https://cdn.jsdelivr.net/gh/wxydejoy/wxy_bg@main/vendor/three.min.js', function() {
                        init();
                        animate();
                    })
                }
            }
        }
    }
    loadlived()






   
    function init() {

        rendererb = new THREE.WebGLRenderer();
        rendererb.setSize(window.innerWidth, window.innerHeight);
        document
            .getElementById('page-header')
            .appendChild(rendererb.domElement);

        // Our Javascript will go here.
        sceneb = new THREE.Scene();
        camerab = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000);
        camerab.position.set(0, 0, 7);
        camerab.lookAt(sceneb.position);
        sceneb.add(camerab);

        var light = new THREE.DirectionalLight(0xff8000, 0.5);
        light.position.set(1, 1, 0).normalize();
        sceneb.add(light);

        var light = new THREE.DirectionalLight(0xff8000, 0.5);
        light.position.set(-1, 1, 0).normalize();
        sceneb.add(light);

        var light = new THREE.PointLight(0xa0b5ff, 10, 25);
        light.position.set(0, -3, 0);
        sceneb.add(light);

        var light = new THREE.PointLight(0xa0e5ff, 15, 30);
        light.position.set(3, 3, 0);
        sceneb.add(light);

        sceneb.fog = new THREE.FogExp2(0x000000, 0.15);
        THREE.TextureLoader.prototype.crossOrigin = '';
        '';
        textureb = new THREE.TextureLoader().load("https://image.wxydejoy.top/img/202107/28/203438%2020210728203435webp");
        textureb.wrapT = THREE.RepeatWrapping;
        textureb.wrapS = THREE.RepeatWrapping;

        var material = new THREE.MeshLambertMaterial({ color: 0x666666, opacity: 1, map: textureb });
        var cylinder_geometry = new THREE.CylinderGeometry(1, 1, 30, 32, 1, true);

        cylinderb = new THREE.Mesh(cylinder_geometry, material);
        material.side = THREE.BackSide;
        cylinderb.rotation.x = Math.PI / 2;
        sceneb.add(cylinderb);

        //				document.addEventListener( 'keydown', onKeyDown, false );
        document.addEventListener('mousedown', onClick, false);
        document.addEventListener('touchstart', onClick, false);
        document.addEventListener('mouseup', onRelease, false);
        document.addEventListener('touchend', onRelease, false);
        window.addEventListener('resize', onWindowResize, false);
    }

    function onKeyDown(event) {
        console.log("keydown");
    }

    function onClick(event) {
        console.log("click");
        hyperspeed_mode = true;
        console.log(cylinderb);
    }

    function onRelease(event) {
        console.log("release");
        hyperspeed_mode = false;
    }

    function onWindowResize() {
        camerab.aspect = window.innerWidth / window.innerHeight;
        camerab.updateProjectionMatrix();
        rendererb.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {

        requestAnimationFrame(animate);
        render();

    }

    function render() {
        if (hyperspeed_mode) {
            current_speed = current_speed >= hyperspeed ? hyperspeed : current_speed * hyperspeed_upratio;
            current_scale = current_scale <= 0.2 ? 0.2 : current_scale / hyperspeed_upscale;
        } else {
            current_speed = current_speed <= 1 ? 1 : current_speed / hyperspeed_downratio;
            current_scale = current_scale >= 1 ? 1 : current_scale * hyperspeed_downscale;
        }
        cylinderb.scale.set(current_scale, 1, current_scale);
        textureb.offset.y -= normal_speed * current_speed;
        textureb.offset.y %= 1;
        textureb.needsUpdate = true;

        // move the camerab back and forth
        var seconds = Date.now() / 1000;
        var radius = 0.70;
        var angle = 0.2 * seconds;
        //angle	= (seconds*Math.PI)/4;
        //				camerab.position.x	= Math.cos(angle - Math.PI/2) * radius;
        //				camerab.position.y	= Math.sin(angle - Math.PI/2) * radius;
        camerab.rotation.z = angle;

        rendererb.render(sceneb, camerab);

    }

})();