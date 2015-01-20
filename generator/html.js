// Generate HTML(DOM) by Cheerio
var cheerio = require('cheerio');

(function ($) {
	"use strict";
	// your JavaScript code for generate DOM
	$('body').append('<div></div>'); //starting for example

	return $.html();
})(cheerio.load('<body></body>'));