// ==UserScript==
// @name        GreaseMonkey NirvanaHQ theme
// @namespace   yanncharlou.fr
// @match       https://focus.nirvanahq.com/*
// @grant       none
// @version     1.0
// @author      Yann Charlou
// @description 22/01/2025 19:10:42
// ==/UserScript==


(function() {
    'use strict';

    const style = document.createElement('style');
    style.textContent = `
        /* contact tag color in editable tags list */
        html li.task.edit form ul.holder li.bit-box.contact {
            background-color: #cbe2ff;
            color: #2263b5;
        }
        /* in the task header in list mode */
        html.appearance--light li.task span.tag.contact {
            background-color: #cbe2ff;
            color: #2263b5;
        }
    `;
    document.head.appendChild(style);
})();
