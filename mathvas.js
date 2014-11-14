/**
 * Created by VesAl & HenJo on 14/11/2014.
 */

"use strict";

var canvas, context;

/**
 * Funktion wird ausgeführt, wenn das gesammte HTML Dokument geladen ist
 */
function init() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

	canvas.width = 1280;
	canvas.height = 720;
}

window.addEventListener("load", init);