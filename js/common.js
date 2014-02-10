$(document).ready(function() {


function page () {
	var el = $('.js-page');
	var wnd_height = $(window).height();
	el.height(wnd_height);
}
page();

//nav
function pager() {
	var el = $('.js-pager');
	link = el.find('button');
	link.on('click', function(){
		el.find('button').removeClass('is-active');
		$(this).addClass('is-active');
		var item = $(this).attr('data-item');
		var top = $('#'+item).offset().top;
		var nav_height = el.height();
		$('body').animate({scrollTop: top}, 500);					
	});	
}
pager();

$(window).on('resize', function(){
	page();
})

});