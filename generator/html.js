// Generate HTML(DOM) by Cheerio
var cheerio = require('cheerio');

(function ($) {
	// var $html
	var $header = $('<header>').addClass('header');
	function nav_title (title) {
		return $('<a>').append('<h1>' + title + '</h1>');
	}
	var $title = nav_title('demo');
	$header.append($title)
	var $main = $('<main>').addClass('wrapper');
	var $footer = $('<footer>').addClass('footer').append(nav_title('demo'));
	$('body').append($main).append($footer);
	return $.html();
})(cheerio.load('<body></body>'));
