// ==UserScript==
// @name         AMQ No Chat Floaters
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Removes the emotes that float up when it's spammed
// @author       ensorcell
// @match        https://animemusicquiz.com/*
// @grant        none
// @downloadURL  https://github.com/ensorcell/amq-scripts/raw/master/noChatFloaters.user.js
// @updateURL    https://github.com/ensorcell/amq-scripts/raw/master/noChatFloaters.user.js
// @require      https://raw.githubusercontent.com/TheJoseph98/AMQ-Scripts/master/common/amqScriptInfo.js
// @copyright MIT license
// ==/UserScript==

EmoteBubler.prototype.newBubles=()=>{};

AMQ_addScriptData({
    name: "No Chat Floaters",
    author: "ensorcell",
    description: `<p>Removes the emotes that float up when it's spammed</p>`
});
