"use strict";
const cardTypes = ['itemcardborder', 'powercardborder', 'feat'];
var domTool = window.$tw.modules.execute("$:/core/modules/utils/dom.js");
setInterval(() => {
    let cards = [];
    for (let type of cardTypes) {
        let temp = document.getElementsByClassName(type);
        cards = [...cards, ...temp];
    }
    console.log(cards);
    for (let card of cards) {
        card = card;
        let haveCopy = false;
        if (card.Clipboard == true) {
            haveCopy = true;
        }
        if (!haveCopy) {
            card.ondblclick = () => {
                domTool.copyToClipboard(card.innerText);
            };
            card.Clipboard = true;
        }
    }
}, 500);
