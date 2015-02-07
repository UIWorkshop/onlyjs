// Generate HTML(DOM) by Cheerio
var cheerio = require('cheerio');
var importfiles = '<link rel="stylesheet" href="style.css">';
(function ($) {
	// navigation menu title
	var menu_top_titles = ["home", "other", "about"];
	
	// navigation title
	var $nav_title = $('<h1>').text("only javascript");
	var $main_title = $('<h2>').text("only use javascript to create the world");
	var $copyright = $('<a>').text("Copyright 2015").attr('href', 'http://www.ibruce.cn/');

	// main title
	var menu_main_titles = ["chearjs", "absurdjs", "vanillajs", "jasmine", "pioneerjs", "gruntjs"];
	
	// DOM
	var $li = $('<li>');
	var $img = $('<img>').attr('src', '../source/hero.jpg');
	var $header = $('<header>').addClass('banner');
	var $main = $('<main>').addClass('main');
	var $footer = $('<footer>').addClass('footer');

	var $background_img = $('<div>').addClass('background_img').append($img);

	// method
	function menu (titles,classname) {
		var $ul = $('<div>').append('<ul>');
		var my_html = "";
		for (i = 0; i < titles.length; i++) {
			my_html += $li.removeAttr('class').addClass('menu-item' + i).text(titles[i]);
		}
		return $ul.html(my_html).addClass(classname);
	}
	
	// header content
	$header.append($('<div>').append($nav_title).addClass('head_title')).append(menu(menu_top_titles, 'menu-top-nav'));

	// main content
	$main.append($('<div>').append($main_title).addClass('main_title')).append(menu(menu_main_titles, 'menu-main-nav'));
	// $main.append($('<div>').append($main_title).addClass('main_title'));

	// footer content
	$footer.append($('<p>').addClass('copyright').attr('id', 'copyright').append($copyright));

	$('body').append($background_img);
	$('body').append($header).append($main).append($footer);
	return $.html();
})(cheerio.load('<head>' + importfiles + '</head><body></body>'));
