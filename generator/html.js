// Generate HTML(DOM) by Cheerio

"use strict";
var cheerio = require('cheerio');

(function ($) {
	// your JavaScript code for generate DOM
	$('body').append('<div></div>'); //starting for example

	return $.html();
})(cheerio.load('<body></body>'));