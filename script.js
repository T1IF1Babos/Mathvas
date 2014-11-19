/**
 * Created by VesAl & HenJo on 14/11/2014.
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
	context.fillStyle = "#ffffff";
	context.fillRect(0, 0, canvasWidth, canvasHeight);
	context.fillStyle = "#000000";
	context.fillRect(canvasWidth / 2, 0, 1, canvasHeight);
	context.fillRect(0, canvasHeight / 2, canvasWidth, 1);
	context.font = "10px Arial";
	context.textBaseline = "middle";
	context.textAlign = "center";

	var pointsX = [];
	var pointsY = [];
	var distance = 0;
	for (var i = canvasCenterX; i > 0; i -= pixelDistance) {
		context.fillRect(i, canvasCenterY - 3, 1, 7);
		if (distance != 0) context.fillText(distance + "", i, canvasCenterY + 10);
		distance -= 1;
		pointsX.push(i);
	}
	distance = 0;
	for (i = canvasCenterX; i < canvasWidth; i += pixelDistance) {
		context.fillRect(i, canvasCenterY - 3, 1, 7);
		if (distance != 0) context.fillText(distance + "", i, canvasCenterY + 10);
		distance += 1;
		pointsX.push(i);
	}
	distance = 0;
	for (i = canvasCenterY; i > 0; i -= pixelDistance) {
		context.fillRect(canvasCenterX - 3, i, 7, 1);
		if (distance != 0) context.fillText(distance + "", canvasCenterX - 10, i);
		distance += 1;
		pointsY.push(i);
	}
	distance = 0;
	for (i = canvasCenterY; i < canvasHeight; i += pixelDistance) {
		context.fillRect(canvasCenterX - 3, i, 7, 1);
		if (distance != 0) context.fillText(distance + "", canvasCenterX - 10, i);
		distance -= 1;
		pointsY.push(i);
	}
	context.fillStyle = "#8B8B8B";
	for (var x = 0; x < pointsX.length; x++) {
		if (pointsX[x] == canvasCenterX) continue;
		for (var y = 0; y < pointsY.length; y++) {
			if (pointsY[y] == canvasCenterY) continue;
			context.fillRect(pointsX[x] - 2, pointsY[y], 5, 1);
			context.fillRect(pointsX[x], pointsY[y] - 2, 1, 5);
		}
	}
}

/**
 * Funktion zum zeichnen einer Parabel
 * @param a	ax^2
 * @param b	bx
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
		y = y * -1 * pixelDistance + canvasCenterY;

		if (y + pixelDistance < 0 || y - pixelDistance > canvas.width) continue;

		if (hasAllreadyMoved) context.lineTo(i, y);
		else {
			context.moveTo(i, y);
			hasAllreadyMoved = true;
		}
	}
	context.stroke();
}

function save(polinom) {
	savePolinom.push = polinom;
}

function calc() {
	var a = Number(document.getElementById("a").value);
	var b = Number(document.getElementById("b").value);
	var c = Number(document.getElementById("c").value);

	drawParabole(a, b, c);
}

/*function round(x) {
	return Math.round(x * 100) / 100;
 }*/

window.addEventListener("load", init);
