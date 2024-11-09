// ==UserScript==
// @name         Quotation Text Corrector
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Change specific text on car edit page by Mufty Pro
// @author       Your Name
// @match        https://salsabeelcars.site/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const newText = "<strong>OFFER/</strong><br>QUOTATION"; // HTML formatted text
    const targetSelector = 'body > div.wrapper > div.content-wrapper > section > div > div > div.panel-body > div:nth-child(1) > div > div.col-sm-3.top_left > p';

    const observer = new MutationObserver((mutationsList, observer) => {
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
            targetElement.innerHTML = newText; // Use innerHTML to allow bold and line break
            observer.disconnect();
        } else {
            console.error('Target element not found.');
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
