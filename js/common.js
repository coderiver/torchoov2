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
		$('body').animate({scrollTop: top}, 300, function() {
			body.removeClass('is-running');
		});			
		if ($(this).attr('data-slider')) {
			var sl_attr = $(this).attr('data-slider');
			$('.info__more-item').removeClass('is-active');
			$('#'+sl_attr).addClass('is-active');	
		};
		return false;
	});	
}
pager();



var body = $('body');
var wrap = $('.wrap');

var counter = 0;

wrap.bind('mousewheel', function(event, delta) {

	if (body.hasClass('is-running')) {
		//alert('i am runnig dont talk to me');
	}
	else{
		//alert('go!');
		body.addClass('is-running');
  	if (delta < 0) {
  		var pager_btn_act = $('.pager button.is-active').next();
  		if (pager_btn_act.length) {
  			pager_btn_act.removeClass('is-active').trigger('click', function(){
  				$(this).addClass('is-active');
  			});
  		}
  		else{
  			body.removeClass('is-running');
  		}
  	}
  	else {
  		var pager_btn_act = $('.pager button.is-active').prev();
  		if (pager_btn_act.length) {
  			pager_btn_act.removeClass('is-active').trigger('click', function(){
  				$(this).addClass('is-active');
  			});
  		}
  		else{
  			body.removeClass('is-running');
  		}
  	}
  }

 
  return false;
});





$(window).on('resize', function(){
	page();
})

$(window).on('scroll', function(){
	
})




});