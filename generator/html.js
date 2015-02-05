// Generate HTML(DOM) by Cheerio
var cheerio = require('cheerio');

(function ($) {
	"use strict";
	// your JavaScript code for generate DOM
	$('body').append('<div class="main"></div>');
	 //starting for example
	$('.main').append('<header></header>');

	$('header').append('<div class="opt-left"></div>');
	$('header', 'div').addClass('opt-left');
	$('.opt-left').append('<img src="../source/Logo.jpg"></img>');

	$('.opt-left').append('<h1>only JavaScript</h1>');

	$('header').append('<div class="opt-right"></div>');
	$('.opt-right').append('<nav class="header-nav"></nav>');

	$('.header-nav').append('<button>HOME</button>');
	$('.header-nav').append('<button>OTHER</button>');
	$('.header-nav').append('<button>ABOUT</button>');



	$('.main').append('<main class="content"></main>');
	$('.content').append('<div class="container"></div>');
	$('.container').append('<h2>only use JavaScript create the world</h2>');
	$('.container').append('<nav class="center-nav"></nav>');

	$('.center-nav').append('<button>CheerioJS</button>');
	$('.center-nav').append('<button>AbsurdJS</button>');
	$('.center-nav').append('<button>VanillaJS</button>');
	$('.center-nav').append('<button>Jasmine</button>');	
	$('.center-nav').append('<button>PioneerJS</button>');
	$('.center-nav').append('<button>GruntJS</button>');

	$('.main').append('<footer></footer>');
	return $.html();
})(cheerio.load('<body></body>'));