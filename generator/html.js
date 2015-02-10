// Generate HTML(DOM) by Cheerio
var cheerio = require('cheerio');

(function ($) {
	"use strict";

	$('body').addClass('main');

	function createHtmlConstruct() {
		var $header = $('<header>');
		var $main = $('<main>').addClass('content');
		var $footer = $('<footer>');

		$('body').append($header).append($main).append($footer);
	} 

	function createList(listContent) {
		var $ul = $('<ul>');

		for (var i = 0; i<listContent.lengths;i++){
			var $li = $('<li>').text(listContent[i]);
    		$ul.append($li);
		}

		return $ul;
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
		var $img = $('<img>');
		var $h1 = $('<h1>').text("only JavaScript");
		$optLeft.append($img).append($h1);

		$('header').append($optLeft);
	}

	function createOptRight() {
		var $optRight = createOptionContainer("opt-right");
		var $nav = createNav("header-nav");

		var listContent = new Array("home","other","about");
		var $list = createList(listContent);

		$nav.append($list);
		$optRight.append($nav);
		$('header').append($optRight);
	}

	function createMainContent() {
		var $optCenter = createOptionContainer("container");

		var $h1 = $('<h1>').text("only use JavaScript create the world");
		var $nav = createNav("center-nav");
		var listContent = new Array("CheerioJS","AbsurdJS","VanillaJS","Jasmine","PioneerJS","GruntJS");
		var $list = createList(listContent);
		$nav.append($list);

		$optCenter.append($h1).append($nav);

		$('.content').append($optCenter);
	}	


	createHtmlConstruct();
	createOptLeft();
	createOptRight();
	createMainContent(); 


	// $('header').append('<div class="opt-left"></div>');
	// $('header', 'div').addClass('opt-left');
	// $('.opt-left').append('<img src="../source/Logo.jpg"></img>');

	// $('.opt-left').append('<h1>only JavaScript</h1>');

	// $('header').append('<div class="opt-right"></div>');
	// $('.opt-right').append('<nav class="header-nav"></nav>');

	// $('.header-nav').append('<button>HOME</button>');
	// $('.header-nav').append('<button>OTHER</button>');
	// $('.header-nav').append('<button>ABOUT</button>');



	// $('.content').append('<div class="container"></div>');
	// $('.container').append('<h2>only use JavaScript create the world</h2>');
	// $('.container').append('<nav class="center-nav"></nav>');

	// $('.center-nav').append('<button>CheerioJS</button>');
	// $('.center-nav').append('<button>AbsurdJS</button>');
	// $('.center-nav').append('<button>VanillaJS</button>');
	// $('.center-nav').append('<button>Jasmine</button>');	
	// $('.center-nav').append('<button>PioneerJS</button>');
	// $('.center-nav').append('<button>GruntJS</button>');




	return $.html();
})(cheerio.load('<body></body>'));