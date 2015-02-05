// Generate HTML(DOM) by Cheerio
var cheerio = require('cheerio');
var importfiles = '<link rel="stylesheet" href="style.css">';
(function ($) {
	"use strict";
	var data = {
		title: 'Only JavaScript',
		js: 'JS',
		only: 'only'
	};

	function createNavigator (extendClass) {
		var $section = $('<section>').addClass('nav-section');
		if (extendClass) {
			$section.addClass('nav-' + extendClass);
		}
		return $section;
	}

	function createLogo () {
		var $icon = $('<span>').attr('id', 'logo');
		$icon.append($('<b>').text(data.js))
			.append($('<i>').text(data.only));
		var $title = $('<span>').text(data.title);
		return $('<h1>')
			.prepend($icon)
			.append($title);
	}

	var $header = $('<header>').addClass('header');
	var $main = $('<main>').addClass('wrapper');
	var $footer = $('<footer>').addClass('footer');
	$('body').append($header).append($main).append($footer);

	var $nav = $('<nav>').addClass('navigator');
	var $navLeftSection = createNavigator('left');
	var $navRightSection = createNavigator('right');
	$nav.prepend($navLeftSection).append($navRightSection);
	$header.append($nav);

	var $logo = createLogo();
	$navLeftSection.append($logo);



	return $.html();
})(cheerio.load('<head>' + importfiles + '</head><body></body>'));
