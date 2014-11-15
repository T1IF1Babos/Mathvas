/**
 * Created by VesAl on 14/11/2014.
 */
"use strict";

var canvas,
    context,
    canvas_height, canvas_width, canvas_centerX, canvas_centerY,
    pixelPerCM = 40;

/**
 * Funktion wird ausgeführt, wenn das gesammte HTML Dokument geladen ist
 */
function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    setVariables();
    drawAxis();
}

function setVariables() {

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
    context.fillRect(canvas_width / 2, 0, 1, canvas_height);
    context.fillRect(0, canvas_height / 2, canvas_width, 1);

    for (var i = canvas_centerX; i > 0; i -= pixelPerCM) {
        context.fillRect(i, canvas_centerY - 3, 1,7);
    }
    for (var i = canvas_centerX; i < canvas.width; i += pixelPerCM) {
        context.fillRect(i, canvas_centerY - 3, 1, 7);
    }
    for (var i = canvas_centerY; i > 0; i -= pixelPerCM) {
        context.fillRect(canvas_centerX - 3, i, 7, 1);
    }
    for (var i = canvas_centerY; i < canvas.height; i += pixelPerCM) {
        context.fillRect(canvas_centerX - 3, i, 7, 1);
    }
}

window.addEventListener("load", init);
