// ==UserScript==
// @name         Luogu Apr Fool's Contest TO css Better
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  通过本地路径桥接调试
// @author       CaoGenJY
// @match        https://www.luogu.com.cn/record/*
// @grant        GM_addStyle
// ==/UserScript==

(async function() {
    'use strict';
    const timer = setTimeout(() => {
        const testCases = document.querySelectorAll('.test-case');
        const infos = document.querySelectorAll('.test-case .content .info');
        const statuses = document.querySelectorAll('.test-case .content .status');
        const messages = document. querySelectorAll('.wrapper .message');
        const length = testCases.length;
        for (var i = 0; i < length; i ++ ) {
            var div = testCases[i], info = infos[i], status = statuses[i], message = messages[i]
            var inf = info.innerText.split('ms/');
            info.innerText = `第${inf[0]}关`;
            if (status.innerText == 'AC') {
                status.innerText = '玩家';
                info.innerText = '';
                message.innerText = '玩家';
            }
            if (status.innerText == 'MLE') {
                if (inf[1] == '0B') {
                    div.style.setProperty('background', 'rgb(104, 2, 248)')
                    status.innerText = '主传送门';
                    message.innerText = '主传送门';
                } else if (inf[1] == '1.00MB') {
                    div.style.setProperty('background', 'rgb(159, 93, 252)')
                    status.innerText = '传送门';
                    message.innerText = '传送门';
                } else if(inf[1] == '999.00MB') {
                    status.innerText = '墙';
                    message.innerText = '墙';
                }
            }
            if (status.innerText == 'WA') {
                div.style.setProperty('background', 'rgb(138, 138, 138)');
                status.innerText = '空地';
                info.innerText = '';
                message.innerText = '空地';
            }
        }
        clearTimeout(timer);
    }, 500);
})();
