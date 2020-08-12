// ==UserScript==
// @name         AMQ Bigger Leaderboard
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Makes the leaderboard slightly bigger
// @author       ensorcell
// @match        https://animemusicquiz.com/*
// @grant        none
// @downloadURL  https://github.com/ensorcell/amq-scripts/raw/master/biggerLeaderboard.user.js
// @updateURL    https://github.com/ensorcell/amq-scripts/raw/master/biggerLeaderboard.user.js
// @require      https://raw.githubusercontent.com/TheJoseph98/AMQ-Scripts/master/common/amqScriptInfo.js
// @copyright MIT license
// ==/UserScript==

// ==/UserScript==

AMQ_addStyle(`
    #leaderboardModal .modal-body {
	  height: 590px;
    }
    .lbmBoard {
	  height: 500px;
    }
`);

AMQ_addScriptData({
    name: "Bigger Leaderboard",
    author: "ensorcell",
    description: `<p>Makes the leaderboard slightly longer to make better use of space</p>`
});
