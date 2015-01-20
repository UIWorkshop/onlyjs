// Generate HTML(DOM) by Cheerio

"use strict";
var cheerio = require('cheerio');

(function ($) {
	$.root();

	// your JavaScript code for generate DOM

	return $.html();
})(cheerio.load('<body></body>'));