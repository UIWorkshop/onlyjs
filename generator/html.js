// Generate HTML(DOM) by Cheerio
var cheerio = require('cheerio');

(function ($) {
	"use strict";
	// your JavaScript code for generate DOM
	$('body').append('<img class="" href="../source/logo.jpg"></img>');
	$('body').append('<h4 class="left-corner" >Only JavaScript</h4>');

	$('body').append('<table class="right-corner" ></table>');
	$('body').append('<tr class="right-corner" ></tr>');
	$('.right-corner').append('<td>HOME </td>')
		.append('<td>OTHER </td>')
		.append('<td>ABOUT </td>');
	
	$('body').append('<div id="title" ></div>');
	$('#title').append('<h2 class="title">Only Use JavaScript To</h2>'); //starting for example
	$('#title').append('<h2 class="title">Create The World</h2>');
	$('body').append('<table class="tabContainer"></table>');
	$('.tabContainer').append('<tr class="row"></tr>');
	$('.row').append('<td class="col">CHEARJS</td>')
		.append('<td class="col">ABSURDJS</td>')
		.append('<td class="col">VANILLAJS</td>')
		.append('<td class="col">JASMINE</td>')
		.append('<td class="col">PIONEERJS</td>')
		.append('<td class="col">GRUNTJS</td>');
	return $.html();
})(cheerio.load('<body></body>'));
