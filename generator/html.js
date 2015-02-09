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
		$.each(listContent, function(index, value){
    		var $li = $('<li>').text(value);
    		$ul.append($li);
		});

		return $ul;
	}

	createHtmlConstruct();

	var $first_ul = createList(["home","other","about"]);

	$('body').append($first_ul);	
	

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