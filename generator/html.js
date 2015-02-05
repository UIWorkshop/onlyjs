// Generate HTML(DOM) by Cheerio
var cheerio = require('cheerio');

(function ($) {
	"use strict";
	// your JavaScript code for generate DOM
	$('body').append('<img class="" href="../source/logo.png"></img>');
	$('body').append('<h4 class="left-corner" >ONLY JAVASCRIPT</h4>');

	$('body').append('<table class="right-corner" ></table>');
	$('body').append('<tr class="right-corner" ></tr>');
	$('.right-corner').append('<td>HOME </td>')
	$('.right-corner').append('<td>OTHER </td>')
	$('.right-corner').append('<td>ABOUT </td>')
	
	$('body').append('<div id="title" ></div>');
	$('#title').append('<h2 class="title">ONLY USE JAVASCRIPT TO</h2>'); //starting for example
	$('#title').append('<h2 class="title">CAEATE THE WORLD</h2>');
	$('body').append('<table class="tabContainer"></table>');
	$('.tabContainer').append('<tr class="row"></tr>');
	$('.row').append('<td class="col">CHEARJS</td>');
	$('.row').append('<td class="col">ABSURDJS</td>');
	$('.row').append('<td class="col">VANILLAJS</td>');
	$('.row').append('<td class="col">JASMINE</td>');
	$('.row').append('<td class="col">PIONEERJS</td>');
	$('.row').append('<td class="col">GRUNTJS</td>');
	return $.html();
})(cheerio.load('<body></body>'));
