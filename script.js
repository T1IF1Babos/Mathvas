/**
 * Created by VesAl HenJo on 14/11/2014.
 */
"use strict";

var canvas,
    context,
    canvasHeight, canvasWidth, canvasCenterX, canvasCenterY,
	pixelDistance = 50,
	savePolinom = [];

/**
 * Funktion wird ausgeführt, wenn das gesammte HTML Dokument geladen ist
 */
function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    setVariables();
    drawAxis();
}

/**
 * Funktion definiert variabeln, nachdem das HTML Dokument geladen ist
 */
function setVariables() {
	canvas.width = 1280;
	canvas.height = 720;

	canvasHeight = canvas.height;
	canvasWidth = canvas.width;
	canvasCenterX = canvasWidth / 2;
	canvasCenterY = canvasHeight / 2;
}

/**
 * Funktion zeichnet die X und Y Axe ein
 */
function drawAxis(){
	context.fillStyle = "#000000";
	context.fillRect(canvasWidth / 2, 0, 1, canvasHeight);
	context.fillRect(0, canvasHeight / 2, canvasWidth, 1);
	context.font = "10px Arial";
	context.textBaseline = "middle";
	context.textAlign = "center";

	var distance = 0;
	for (var i = canvasCenterX; i > 0; i -= pixelDistance) {
		context.fillRect(i, canvasCenterY - 3, 1, 7);
		if (distance != 0) context.fillText(distance + "", i, canvasCenterY + 10);
		distance -= 1;
	}
	distance = 0;
	for (i = canvasCenterX; i < canvasWidth; i += pixelDistance) {
		context.fillRect(i, canvasCenterY - 3, 1, 7);
		if (distance != 0) context.fillText(distance + "", i, canvasCenterY + 10);
		distance += 1;
	}
	distance = 0;
	for (i = canvasCenterY; i > 0; i -= pixelDistance) {
		context.fillRect(canvasCenterX - 3, i, 7, 1);
		if (distance != 0) context.fillText(distance + "", canvasCenterX - 10, i);
		distance += 1;
	}
	distance = 0;
	for (i = canvasCenterY; i < canvasHeight; i += pixelDistance) {
		context.fillRect(canvasCenterX - 3, i, 7, 1);
		if (distance != 0) context.fillText(distance + "", canvasCenterX - 10, i);
		distance -= 1;
	}
}

/**
 * Funktion zum zeichnen einer Parabel
 * @param a	ax^2
 * @param b	ax
 * @param c	c
 */
function drawParabole(a, b, c) {
	context.fillStyle = "#000000";
	context.beginPath();

	if (a == null || a == undefined)a = 0;
	if (b == null || b == undefined)b = 0;
	if (c == null || c == undefined)c = 0;

	var x;
	var y;
	var hasAllreadyMoved = false;

	for (var i = 0; i < canvas.width; i++) {
		x = (i - canvasCenterX) / pixelDistance;

		y = a * x * x + b * x + c;
		y = round(y);
		console.log("i=" + i + "  y=" + y);
		y = (y * -1 * pixelDistance) + canvasCenterY;

		if (y + pixelDistance < 0 || y - pixelDistance > canvas.width) continue;
		console.log("X=" + i + "   Y=" + y);
		if (hasAllreadyMoved) context.lineTo(i, y);
		else {
			context.moveTo(i, y);
			hasAllreadyMoved = true;
		}
	}
	context.stroke();
	return;
}

function save(polinom) {
	savePolinom.push = polinom;
}

function calc() {
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;

	drawParabole(a, b, c);
}

function round(x) {
	return Math.round(x * 100) / 100;
}

window.addEventListener("load", init);
