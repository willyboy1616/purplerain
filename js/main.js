"use strict";

var main = {
    'timerDrop' : null,
    'timerClean' : null,
    'sky' : null
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function deleteDroppedDrops(){
    var drops = document.getElementsByClassName("drop");
    while(drops.length >= 30){
        main.sky.removeChild(drops[0]);
    }
}

function createDroplet(){
    var drop = document.createElement("img");
    var width = window.innerWidth;
    drop.src="assets/img/raindrop.svg";
    drop.className = "drop";
    var pos = getRandomInt(0, width)-25;
    drop.style.left = pos+"px";
    main.sky.appendChild(drop);
    deleteDroppedDrops();
}

function init(){
    main.sky = document.getElementById("main");
    main.timerDrop = setInterval(createDroplet, 150);
}
window.addEventListener("load", init, false);
