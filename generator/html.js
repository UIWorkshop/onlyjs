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
	elm.navLeft = createNavigatorLeft(data.title);
	elm.navRight = createNavigatorRight(data.navLinks);
	elm.header.append(elm.nav);


	function createNavigatorLeft (title) {
		var $section = _createNavSection('left');
		$section.append(_createLogo(title));
		elm.nav.prepend($section);
		return $section;
	}

	function createNavigatorRight (links) {
		var $section = _createNavSection('right');

		links.forEach(function (link) {
			var $link = _createNavLink(link);
			$section.append($link);
		});

		elm.nav.append($section);
		return $section;
	}

	function _createNavSection (extendClass) {
		var $section = $('<section>').addClass('nav-section');
		if (extendClass) {
			$section.addClass('nav-' + extendClass);
		}
		return $section;
	}

	function _createLogo (title) {
		var $icon = $('<span>').attr('id', 'logo');
		$icon.append($('<b>').text(data.js))
			.append($('<i>').text(data.only));
		var $title = $('<span>').text(title);
		return $('<h1>')
			.prepend($icon)
			.append($title);
	}

	function _createNavLink (name, href) {
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
