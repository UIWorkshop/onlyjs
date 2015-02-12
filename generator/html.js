// Generate HTML(DOM) by Cheerio
var cheerio = require('cheerio');
var importfiles = '<link rel="stylesheet" href="style.css">';
(function ($) {
	"use strict";

	$('body').addClass('main');

	function createHtmlConstruct() {
		var $header = $('<header>').addClass('header');
		var $main = $('<main>').addClass('content');
		var $footer = $('<footer>').addClass('footer');

		$('body').append($header).append($main).append($footer);
	} 

	function createList(listContent) {
		var $ul = $('<ul>');
		
		for (var i = 0; i<listContent.length;i++){
			var $li = $('<li>');
			$li.append(createLink(listContent[i], "#"));
    		$ul.append($li);
		}

		return $ul;
	}

	function createLink (text,link) {
		var $a = $('<a>');
		$a.text(text).attr('href','#');
		return $a;
	}

	function createOptionContainer(className) {
		var $opt = $('<div>').addClass(className);
		return $opt;
	}

	function createNav(className) {
		var $nav = $('<nav>').addClass(className);
		return $nav;
	}

	function createOptLeft() {
		var $optLeft = createOptionContainer("opt-left");
		var $img = $('<img>').attr('src','../source/Logo.jpg');
		var $h1 = $('<h1>').text("only JavaScript");
		$optLeft.append($img).append($h1);

		$('header').append($optLeft);
	}

	function createOptRight() {
		var $optRight = createOptionContainer("opt-right");
		var $nav = createNav("header-nav");
		var $list = createList(["home","other","about"]);

		$nav.append($list);
		$optRight.append($nav);
		$('header').append($optRight);
	}

	function createMainContent() {
		var $optCenter = createOptionContainer("container");

		var $h1 = $('<h1>').text("only use JavaScript create the world");
		var $nav = createNav("center-nav");
		var $list = createList(["CheerioJS","AbsurdJS","VanillaJS","Jasmine","PioneerJS","GruntJS"]);
		$nav.append($list);

		$optCenter.append($h1).append($nav);

		$('.content').append($optCenter);
	}	

	createHtmlConstruct();
	createOptLeft();
	createOptRight();
	createMainContent(); 

	return $.html();
})(cheerio.load('<head>' + importfiles + '</head><body></body>'));
