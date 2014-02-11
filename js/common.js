$(document).ready(function() {


function page () {
	var wnd_height = $(window).height();
	$('#page-first .page__in').height(wnd_height-116);
	$('#page-second .page__in').height(wnd_height-220);
	$('#page-third .page__in').height(wnd_height);
}
page();

//nav
function pager() {
	var el = $('.pager');
	link = el.find('button');
	link.on('click', function(){
		link.removeClass('is-active');
		$(this).addClass('is-active');
		var item = $(this).attr('data-item');
		var top = $('#'+item).offset().top;
		$('body').animate({scrollTop: top}, 500);			
		if ($(this).attr('data-slider')) {
			var sl_attr = $(this).attr('data-slider');
			$('.info__more-item').removeClass('is-active');
			$('#'+sl_attr).addClass('is-active');	
		};
		return false;
	});	
}
pager();



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
  		//next_level();
  	}
  	else {
  		//prev_level();
  	}
  }
  function next_level() {

  	body.animate({scrollTop: top_p2}, 300, function(){
  		body.removeClass('is-running');
  	});
  }
  function next_level() {
  	
  	body.animate({scrollTop: top_p2}, 300, function(){
  		body.removeClass('is-running');
  	});
  }
  //return false;
});







});