// Generate HTML(DOM) by Cheerio
var cheerio = require('cheerio');
var importfiles = '<link rel="stylesheet" href="style.css">';
(function ($) {
	"use strict";
	var data = {
		title: 'Only JavaScript',
		js: 'JS',
		only: 'only',
		navLinks: ['Home', 'Other', 'About']
	};

	var elm = {
		body: $('body')
	};

	layout([{
		tag: 'header',
		cls: 'header'
	}, {
		tag: 'main',
		cls: 'wrapper'
	}, {
		tag: 'footer',
		cls: 'footer'
	}]);

	elm.nav = $('<nav>').addClass('navigator');
	var $navLeftSection = createNavigator('left');
	var $navRightSection = createNavigator('right');
	elm.nav.prepend($navLeftSection).append($navRightSection);
	elm.header.append(elm.nav);

	elm.logo = createLogo();
	$navLeftSection.append(elm.logo);

	data.navLinks.forEach(function (link) {
		var $link = createNavLink(link);
		$navRightSection.append($link);
	});

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

	function createNavLink (name, href) {
		var $anchor = $('<a></a>');
		$anchor.attr('href', href || '#');
		if (name) {
			$anchor.text(name.toUpperCase());
		}
		return $anchor;
	}

	function layout (bodyContainers) {
		bodyContainers.forEach(function (container) {
			elm[container.cls] = $('<' + container.tag + '>').addClass(container.cls);
			elm.body.append($[container.cls]);
		});
	}

	return $.html();
})(cheerio.load('<head>' + importfiles + '</head><body></body>'));
