


function loadaside() {    
    if (GLOBAL_CONFIG_SITE.isPost) {
        document.documentElement.classList.remove('hide-aside')
    } else  {
        document.documentElement.classList.add('hide-aside')
    }
    if (GLOBAL_CONFIG_SITE.isHome) {
        document.documentElement.classList.add('hide-aside')
    }
}

loadaside()
    
//!GLOBAL_CONFIG_SITE.isHome$htmlDom.contains('hide-aside')
