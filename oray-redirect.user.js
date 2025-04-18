// ==UserScript==
// @name         花生壳自动跳转
// @namespace    https://github.com/hyue418
// @version      1.0.2
// @description  自动跳过恼人的花生壳中间页
// @author       hyue418
// @icon         https://passport.oray.com/favicon.ico
// @match        *
// @downloadURL  https://ghfast.top/https://raw.githubusercontent.com/hyue418/oray-redirect/master/oray-redirect.user.js
// ==/UserScript==

(function() {
    'use strict';
    var searchText = "如需去除此页，请联系管理员升级服务版本";
    if (document.body.innerText.includes(searchText)) {
        location.reload();
    }
})();
