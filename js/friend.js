/**
 * Minified by jsDelivr using Terser v5.7.1.
 * Original file: /npm/hexo-filter-fcircle@0.0.4/assets/js/fcircle.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function loadStatistical(e) {
    var a = document.getElementById("fcircleContainer"),
        n = `\n<div id="fMessageBoard">\n  <div class="fUpdatedTime">\n    <span class="fLabel">最近更新时间：</span><span class="fMessage">${e.last_updated_time}</span>\n  </div>\n  <div class="fMessageItem">\n    <div class="fActiveFriend fItem">\n      <span class="fLabel">活跃友链数</span>\n      <span class="fMeasureBar"><span class="fMeasure" style="width:${(e.active_num / e.friends_num * 100).toFixed(2)}%; background: rgba(89, 230, 54,0.6);">${(e.active_num / e.friends_num * 100).toFixed(2)}%</span></span>\n      <span class="fMessage">${e.active_num}/${e.friends_num}</span>\n    </div>\n    <div class="fErrorSite fItem">\n      <span class="fLabel">失联友链数</span>\n      <span class="fMeasureBar"><span class="fMeasure" style="width:${(e.error_num / e.friends_num * 100).toFixed(2)}%; background: rgba(227, 23, 72, 0.6);">${(e.error_num / e.friends_num * 100).toFixed(2)}%</span></span>\n      <span class="fMessage">${e.error_num}/${e.friends_num}</span>\n    </div>\n    <div class="fArticleNum fItem">\n      <span class="fLabel">当前库存</span>\n      <span class="fMeasureBar"><span class="fMeasure" style="width:${(e.article_num / Math.ceil(e.article_num / 100)).toFixed(2)}%; background: rgba(29, 217, 211, 0.6);">${(e.article_num / Math.ceil(e.article_num / 100)).toFixed(2)}%</span></span>\n      <span class="fMessage">${e.article_num}/${100 * Math.ceil(Number(e.article_num) / 100)}</span>\n    </div>\n  </div>\n  <div id="switchRankBtn">\n    <span id="rankByCreated">created</span>\n    <span>\n    <input type="checkbox" id="switchRankMode" checked="true" onchange="checkRankMode()"/><label for="switchRankMode" id="switchRank">Toggle</label>\n    </span>\n    <span id="rankByUpdated">updated</span>\n  </div>\n</div>\n`;
    a && (a.insertAdjacentHTML("beforebegin", n), a.insertAdjacentHTML("afterend", '\n<div id="fcircleMoreBtn" onclick="loadMoreArticle()">\n  <i class="fas fa-angle-double-down"></i>\n</div>\n'))
} 

function loadArticleItem(e, a, n) {
    for (var t = document.getElementById("fcircleContainer"), s = a; s < n; s++) {
        var i = e[s],
            l = `\n  <div class="fArticleItem">\n    <div class="fArticleAvatar">\n      <a class="fArticlelink fAvatar" target="_blank" rel="noopener nofollow" href="${i.link}">\n        <img src="${i.avatar}" alt="avatar">\n      </a>\n      <div class="fArticleAuthor">\n        ${i.author}\n      </div>\n    </div>\n    <div class="fArticleMessage">\n      <a class="fArticleTitle"  href="${i.link}" target="_blank" rel="noopener nofollow" data-title="${i.title}">\n        ${i.title}\n      </a>\n      <div class="fArticleTime">\n        <span class="fArticleCreated"><i class="far fa-calendar-alt">发表于</i>${i.created}</span>\n        <span class="fArticleUpdated"><i class="fas fa-history">更新于</i>${i.updated}</span>\n      </div>\n    </div>\n  </div>\n`;
        t && t.insertAdjacentHTML("beforeend", l)
    }
}

function initFriendCircle() {
    var e = document.getElementById("fcircleContainer"),
        a = JSON.parse(localStorage.getItem("statisticalList")),
        n = JSON.parse(localStorage.getItem("fdatalist"));
    e && a && n && (loadStatistical(a), document.getElementById("switchRankMode").checked ? loadArticleItem(JSON.parse(localStorage.getItem("updatedList")), 0, n.initnumber) : loadArticleItem(JSON.parse(localStorage.getItem("createdList")), 0, n.initnumber))
}

function loadMoreArticle() {
    var e = document.getElementsByClassName("fArticleItem").length,
        a = document.getElementById("switchRankMode"),
        n = JSON.parse(localStorage.getItem("fdatalist"));
    a && n && (a.checked ? loadArticleItem(JSON.parse(localStorage.getItem("updatedList")), e, e + n.stepnumber) : loadArticleItem(JSON.parse(localStorage.getItem("createdList")), e, e + n.stepnumber));
    window.scrollBy(0, 180)
}

function checkRankMode() {
    document.getElementById("fcircleContainer").innerHTML = "";
    var e = document.getElementById("switchRankMode"),
        a = JSON.parse(localStorage.getItem("fdatalist"));
    e && a && (e.checked ? loadArticleItem(JSON.parse(localStorage.getItem("updatedList")), 0, a.initnumber) : loadArticleItem(JSON.parse(localStorage.getItem("createdList")), 0, a.initnumber))
}
initFriendCircle();
//# sourceMappingURL=/sm/da16d3118a2fde2c164f2d04b9868b4ae00d00fc0e85cab8b638296457b344ae.map