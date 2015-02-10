// Generate HTML(DOM) by Cheerio
var cheerio = require('cheerio');
var importfiles = '<link rel="stylesheet" href="style.css">';
(function ($) {
	"use strict";
	var data = {
		title: 'Only JavaScript',
		js: 'JS',
		only: 'only',
		navLinks: ['Home', 'Other', 'About'],
		sidebarLinks: [{
			name: 'Cheerio',
			href: 'http://cheeriojs.github.io/cheerio/'
		},{
			name: 'AbsurdJS',
			href: 'http://absurdjs.com/'
		},{
			name: 'VanillaJS',
			href: 'http://vanilla-js.com/'
		},{
			name: 'Jasmine',
			href: 'http://jasmine.github.io/'
		},{
			name: 'PioneerJS',
			href: 'http://pioneerjs.com/'
		},{
			name: 'GruntJS',
			href: 'http://gruntjs.com/'
		}]
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

	data.sidebarLinks.forEach(function (link) {
		link.id = link.name.toLowerCase();
		return link;
	});
	elm.wrapper.append(createSidebar(data.sidebarLinks));

	function createNavigatorLeft (title) {
		var $section = _createNavSection('left');
		$section.append(_createLogo(title));
		elm.nav.prepend($section);
		return $section;
	}

	function createNavigatorRight (links) {
		var $section = _createNavSection('right');

		links.forEach(function (link) {
			var $link = _createLink(link.toUpperCase());
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

	function _createLink (name, attr) {
		var $anchor = $('<a></a>');
		$anchor.attr('href', '#').attr(attr);
		if (name) {
			$anchor.text(name);
		}
		return $anchor;
	}

	function layout (bodyContainers) {
		bodyContainers.forEach(function (container) {
			elm[container.cls] = $('<' + container.tag + '>').addClass(container.cls);
			elm.body.append(elm[container.cls]);
		});
	}

	function createSidebar(items) {
		var $sidebar = $('<aside>');
		$sidebar.addClass('sidebar');
		elm.sidebar = $('<ul>');
		$sidebar.append(elm.sidebar);

		items.forEach(function (item) {
			var $list = $('<li>');
			$list.append(_createLink(item.name, {
				id: item.id,
				href: item.href,
				target: '_blank'
			}));
			elm.sidebar.append($list);
		});
		return $sidebar;
	}

	return $.html();
})(cheerio.load('<head>' + importfiles + '</head><body></body>'));
