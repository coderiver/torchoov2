$(document).ready(function() {


function page () {
	var el = $('.page');
	var wnd_height = $(window).height();
	el.height(wnd_height);
}
page();

//nav
function pager() {
	var el = $('.pager');
	link = el.find('button');
	link.on('click', function(){
		var item = $(this).attr('data-item');
		var top = $('#'+item).offset().top;
		$('body').animate({scrollTop: top}, 500);					
	});	
}
pager();


function pager_scroll() {
	var offset_top = $(window).scrollTop();
	var item_scroll = $('.pager');
	item_scroll.each(function(){		
		var item_scroll_top = $(this).offset().top;
		if (offset_top >= item_scroll_top) {
			var item_el = $(this).attr('id');
			var link_el = $('.pager button');
			link_el.each(function(){		
				var link_item = $(this).attr('data-item');
				if ('#'+item_el == link_item) {
					link_el.removeClass('is-active');
					$(this).addClass('is-active');
				};
			});
		};
	});
}
pager_scroll();




$(window).on('resize', function(){
	page();
})

$(window).on('scroll', function(){
	
})

var body = $('body');
var wrap = $('.wrap');

var counter = 0;

wrap.bind('mousewheel', function(event, delta) {
	
	if (body.hasClass('is-running')) {
		//alert('i am runnig dont talk to me');
	}
	else{
		//alert('gogogo');
		body.addClass('is-running');
  	if (delta < 0) {
  		next_level();
  	}
  	else {
  		prev_level();
  	}
  }
  function prev_level() {
  	var el = $('.page');
  	el.each(function(){
  		if ($(this).hasClass('is-active')) {
  			var el_prev = $(this).prev();
  			if (el_prev.length > 0) {
  				var el_top = el_prev.offset().top;
  				body.animate({scrollTop: el_top}, 300, function(){
  					body.removeClass('is-running');
  					el.removeClass('is-active');
  					el_prev.addClass('is-active');
  				});
  			}
  			else{
  				body.removeClass('is-running');
  			}
  		};
  	})
  }
  function next_level() {
  	var el = $('.page');
  	el.each(function(){
  		if ($(this).hasClass('is-active')) {
  			var el_next = $(this).next();
  			if (el_next.length > 0) {
  				var el_top = el_next.offset().top;
  				body.animate({scrollTop: el_top}, 300, function(){
  					body.removeClass('is-running');
  					el.removeClass('is-active');
  					el_next.addClass('is-active');
  				});
  			};
  		}
  		else{
  			body.removeClass('is-running');
  		}
  	})
  }
  return false;
});







});