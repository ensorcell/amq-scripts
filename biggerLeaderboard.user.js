// ==UserScript==
// @name         AMQ Bigger Leaderboard
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Makes the leaderboard slightly bigger
// @author       ensorcell
// @match        https://animemusicquiz.com/*
// @grant        none
// @downloadURL  https://github.com/ensorcell/amq-scripts/raw/master/biggerLeaderboard.user.js
// @updateURL    https://github.com/ensorcell/amq-scripts/raw/master/biggerLeaderboard.user.js
// @require      https://raw.githubusercontent.com/TheJoseph98/AMQ-Scripts/master/common/amqScriptInfo.js
// @copyright MIT license
// ==/UserScript==

var saveData = {
  'ext':0
};

function saveSettings() {
  localStorage.setItem("biggerLeaderboardSettings", JSON.stringify(saveData));
}

// load settings from local storage
function loadSettings() {
// load settings, if nothing is loaded, use default settings
  let loadedSettings = localStorage.getItem("biggerLeaderboardSettings");
  if (loadedSettings !== null) {
    saveData = JSON.parse(loadedSettings);
  }
}
function getSaveData(key, defaultvalue) {
  if(!saveData.hasOwnProperty(key)) return defaultvalue;
  return saveData[key];
}
function setSaveData(key, value) {
  saveData[key]=value;
  saveSettings();
}

loadSettings();
saveSettings();

$("#settingsGraphicContainer").append($("<row id='biggerLeaderboardSettings'><div style='text-align:center;padding-top:10px;padding-bottom:10px'><label>Bigger Leaderboard Settings</label></row>"));
$("#biggerLeaderboardSettings").append("<div id='blbox' style='width:30%;height:50px;margin:auto;'></div>");
$("#blbox").append("<input type='range' min='0' max='45' value='0' class='slider' id='blslider'><p style='text-align:center;padding-top:5px;'>Extended by <span id='blin'></span>px</p>");
$(".slider").css({"width":"100%","height":"10px","-webkit-appearance":"none","-moz-appearance":"none","outline":"none","padding-top":"0px","background":"#f8f8f8","border-radius":"5px"});

const addCSS=s=>((d,e)=>{(e=d.createElement("style")).innerHTML=s;d.head.appendChild(e)})(document);

addCSS('.slider::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;border-style:none;width:20px;height:20px;background-color:#2e88d9;background-image:-webkit-linear-gradient(to bottom,#4497ea 0,#006ab7 100%);background-image:-o-linear-gradient(to bottom,#4497ea 0,#006ab7 100%);background-image:linear-gradient(to bottom,#4497ea 0,#006ab7 100%);cursor:pointer;border-radius:50%;}');
addCSS('.slider::-moz-range-thumb {width:20px;height:20px;border-style:none;background-color:#2e88d9;background-image:-webkit-linear-gradient(to bottom,#4497ea 0,#006ab7 100%);background-image:-o-linear-gradient(to bottom,#4497ea 0,#006ab7 100%);background-image:linear-gradient(to bottom,#4497ea 0,#006ab7 100%);cursor:pointer;border-radius:50%;}');


var blslider=document.getElementById("blslider");
var blin=document.getElementById("blin");
blslider.onchange=updateIncrement;

function updateIncrement(){
    setSaveData('ext',blslider.value*10);
    blin.innerHTML=blslider.value*10;
    style.appendChild(document.createTextNode('#leaderboardModal .modal-body {height: '.concat(getSaveData('ext',0)+370,'px;}.lbmBoard {height: ',getSaveData('ext',0)+280,'px;}')));
}

$(document).ready(function(){
    $("#blslider").val((getSaveData('ext',0))/10);
    updateIncrement();
});

$('#biggerLeaderboardSettings').on('wheel', function(e){
  if(e.originalEvent.deltaY<0){$("#blslider").val(parseInt(blslider.value)+1);}
  else{$("#blslider").val(parseInt(blslider.value)-1);}
  updateIncrement();
});

let style = document.createElement("style");
document.head.appendChild(style);



AMQ_addScriptData({
    name: "Bigger Leaderboard",
    author: "ensorcell",
    description: `<p>Makes the leaderboard slightly longer to make better use of space. Change how big you want your leaderboard box to be</p>
                  <img style="width: 40%" src="https://i.imgur.com/S1vEeOk.png"/>
                  <p>Note: this will not pull more entries beyond the default 11 from the "Self" and "Top" tabs, it will only extend lists that you can scroll through</p>`
});
