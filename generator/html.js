// Generate HTML(DOM) by Cheerio
var cheerio = require('cheerio');
var importfiles = '<link rel="stylesheet" href="style.css">';
(function ($) {
	"use strict";
	var ul = $('ul').append('<ul></ul>');
	var li = $('li').append('<li></li>');
	
	$('h2').addclass('Head')
	var main_title = $('h2.title').text('ONLY USE JAVASCRIPT TO CREATE THE WORLD!');
	var body = main_title
	var html = header
	return $.html(header, body);
})(cheerio.load('<head>' + importfiles + '</head><body></body>'));
