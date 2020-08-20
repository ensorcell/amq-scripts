// ==UserScript==
// @name         AMQ No AFK Kick
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Prevents you from getting kicked while afk
// @author       ensorcell
// @match        https://animemusicquiz.com/*
// @grant        none
// @downloadURL  https://github.com/ensorcell/amq-scripts/raw/master/noAfkKick.user.js
// @updateURL    https://github.com/ensorcell/amq-scripts/raw/master/noAfkKick.user.js
// @require      https://raw.githubusercontent.com/TheJoseph98/AMQ-Scripts/master/common/amqScriptInfo.js
// @copyright MIT license
// ==/UserScript==

//DISCLAIMER: may violate terms of service, use at your own risk

AfkKicker.prototype.setupAfkTimeout=()=>{};
AfkKicker.prototype.setupHostTimeout=()=>{};

AMQ_addScriptData({
    name: "No AFK Kick",
    author: "ensorcell",
    description: `<p>Prevents you from getting kicked while afk</p><p>Disclaimer: may violate terms of service, use at your own risk</p>`
});
