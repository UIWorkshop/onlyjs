// Generate HTML(DOM) by Cheerio
var cheerio = require('cheerio');
var importfiles = '<link rel="stylesheet" href="style.css">';
importfiles += '<script src="script.js">';
(function ($) {
	"use strict";
	// your JavaScript code for generate DOM
	$('body').append('<div></div>'); //starting for example

	return $.html();
})(cheerio.load('<head>' + importfiles + '</head><body></body>'));