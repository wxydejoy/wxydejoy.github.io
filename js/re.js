window.onload=function(){sessionStorage.getItem("isReload")?console.log("页面被刷新"):(console.log("首次被加载"),sessionStorage.setItem("isReload",!0),confirm("您正在浏览的是旧版网站，是否要前往新站点")&&(window.location="https://c.undf.top"))};