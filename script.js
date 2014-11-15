/**
 * Created by VesAl on 14/11/2014.
 */

"use strict";

var canvas,
    context,
    canvas_height, canvas_width, canvas_centerX, canvas_centerY,
    pixelPerCM=80;

/**
 * Funktion wird ausgeführt, wenn das gesammte HTML Dokument geladen ist
 */
function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    canvas.width = 1280;
    canvas.height = 720;

    canvas_height = canvas.height;
    canvas_width = canvas.width;
    canvas_centerX = canvas_width / 2;
    canvas_centerY = canvas_height / 2;
    //setVariables();
    drawAxis();
}

function setVariables(){
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    canvas.width = 1280;
    canvas.height = 720;

    canvas_height = canvas.height;
    canvas_width = canvas.width;
    canvas_centerX = canvas_width / 2;
    canvas_centerY = canvas_height / 2;
}

function drawAxis(){
    context.fillStyle = "#000000";
    console.log("x="+ canvas_width/2 + " y="+ 0 + "  X=" + canvas_width/2+" Y="+ canvas_height);
    console.log("WIDTH=" + canvas.width + " HEIGHT=" + canvas.height);
    context.fillRect((canvas_width/2), 0, 1, canvas_height);
    context.fillRect(0, (canvas_height/2), canvas_width, 1);
    /*for(var i = 0; i < canvas_width/pixelPerCM; i++){
        context.fillRect(i*pixelPerCM, (canvas_height/2)-5, 1, 11);
    }
    for(var i = 0; i < canvas_height/pixelPerCM; i++){
        context.fillRect((canvas_width/2)-5, i*pixelPerCM, 11, 1);
    }*/

    for(var i = canvas_centerX; 0 < i; i-pixelPerCM){
        context.fillRect(i, canvas_centerY-3, 1,7);
        console.log(i);
    }
    /*var i = canvas_centerX;
    while(i > 0){
        context.fillRect(i, canvas_centerY-3, 1,7);
        i-pixelPerCM;
    }*/
}

window.addEventListener("load", init);
