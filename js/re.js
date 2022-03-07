window.onload = function () { //设置当页面加载时执行
    function a() { //给button加上一个点击事件
        var answer = confirm("您正在浏览的是旧版网站，是否要前往新站点") //把确认框赋值给answer
        if (answer) //判断是否点击确定
            window.location = "https://c.undf.top" //确定的话游览器自身跳转
    }
    if (sessionStorage.getItem("isReload")) {
        console.log("页面被刷新");
    } else {
        console.log("首次被加载");
        sessionStorage.setItem("isReload", true)
        a();
    }
    
}