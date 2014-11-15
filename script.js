/**
 * Created by VesAl on 14/11/2014.
 */
"use strict";

var canvas,
    context,
    canvasHeight, canvasWidth, canvasCenterX, canvasCenterY,
	pixelDistance = 50;

/**
 * Funktion wird ausgeführt, wenn das gesammte HTML Dokument geladen ist
 */
function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    setVariables();
    drawAxis();
	drawParabole(1, 2, -3);
}
function setVariables() {
	canvas.width = 1280;
	canvas.height = 720;

	canvasHeight = canvas.height;
	canvasWidth = canvas.width;
	canvasCenterX = canvasWidth / 2;
	canvasCenterY = canvasHeight / 2;
}
/**
 * X und Y Axe zeichnen!
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
		distance -= 1;
	}
	distance = 0;
	for (i = canvasCenterY; i < canvasHeight; i += pixelDistance) {
		context.fillRect(canvasCenterX - 3, i, 7, 1);
		if (distance != 0) context.fillText(distance + "", canvasCenterX - 10, i);
		distance += 1;
	}
}
function drawParabole(a, b, c) {
	context.fillStyle = "#000000";
	context.beginPath();

	var x;
	var y;
	var hasAllreadyMoved = false;

	for (var i = 0; i < canvas.width; i++) {
		x = (i - canvasCenterX) / pixelDistance;

		y = a * x * x + b * x - c;
		y = (y * pixelDistance) + canvasCenterY;

		if (y < 0 || y > canvas.width) continue;
		if (hasAllreadyMoved) context.lineTo(i, y);
		else {
			context.moveTo(i, y);
			hasAllreadyMoved = true;
		}
	}
	context.stroke();
}

window.addEventListener("load", init);
