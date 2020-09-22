// ==UserScript==
// @name         AMQ DM Timestamps
// @version      1.2
// @description  Adds timestamps to DM messages
// @author       xSardine
// @match        https://animemusicquiz.com/*
// @grant        none
// @downloadURL  https://github.com/ensorcell/amq-scripts/raw/master/dmTimestamps.user.js
// @updateURL    https://github.com/ensorcell/amq-scripts/raw/master/dmTimestamps.user.js
// @require      https://raw.githubusercontent.com/TheJoseph98/AMQ-Scripts/master/common/amqScriptInfo.js
// ==/UserScript==

ChatBox.prototype.writeMessage = function (sender, msg, emojis, allowHtml) {
	msg = passChatMessage(msg, emojis, allowHtml);
    let d = new Date();
    let mins = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    let timeFormat = hours + ":" + mins;
    let final = timeFormat + " " + sender;
	let atBottom = this.$CHAT_CONTENT.scrollTop() + this.$CHAT_CONTENT.innerHeight() >= this.$CHAT_CONTENT[0].scrollHeight;
	this.$CHAT_CONTENT.append(format(chatBoxLineTemplate, msg, final));
	if (atBottom) {
		this.$CHAT_CONTENT.scrollTop(this.$CHAT_CONTENT.prop("scrollHeight"));
	}
	this.$CHAT_CONTENT.perfectScrollbar('update');
};

AMQ_addScriptData({
    name: "DM Timestamps",
    author: "xSardine",
    description: `<p>Adds a timestamp to DM messages</p>`
});
