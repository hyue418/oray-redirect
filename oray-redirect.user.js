// ==UserScript==
// @name         花生壳自动跳转
// @namespace    https://github.com/hyue418
// @version      1.0.8
// @description  自动跳过恼人的花生壳中间页
// @author       hyue418
// @icon         https://passport.oray.com/favicon.ico
// @match        https://access-hsk.oray.com/loading*
// @match        https://passport.oray.com/login/hsk*
// @match        *.xicp.net*
// @match        *.zicp.fun*
// @match        *.iok.la*
// @match        *.zicp.fun*
// @match        *.iask.in*
// @downloadURL  https://ghfast.top/https://raw.githubusercontent.com/hyue418/oray-redirect/master/oray-redirect.user.js
// @updateURL    https://ghfast.top/https://raw.githubusercontent.com/hyue418/oray-redirect/master/oray-redirect.user.js
// ==/UserScript==

(function() {
    'use strict';
    const r = new URLSearchParams(window.location.search).get('r');
    if (r) {
        location.replace(decodeURIComponent(r))
        return;
    };
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    if (url.pathname === '/login/hsk'&&url.searchParams.has('s_url')) {
        url.searchParams.delete('s_url');
        window.location.href = url.toString();
    }
    const timer=setTimeout(() => {
        var searchText = "如需去除此页，请联系管理员升级服务版本";
        if (document.body.innerText.includes(searchText)) {
            window.location.href = window.location.origin;
        }
    }, 200);
    setTimeout(() => {
        clearTimeout(timer);
    }, 30000);
})();
