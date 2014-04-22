$(document).ready(function() {

var body = $('body'),
		wrap = $('.wrap'),
		pager = $('.pager'),
		info_sl = $('.info__sl-in');

function page () {
	var wnd_height = $(window).height();
	$('#page-first .page__in').height(wnd_height-116);
	$('#page-second .page__in').height(wnd_height-220);
	$('#page-third .page__in').height(wnd_height);
}
page();

//nav
function pager_nav() {
	var el = $('.pager');
	link = el.find('button');
	link.on('click', function(){
		link.removeClass('is-active');
		$(this).addClass('is-active');
		var item = $(this).attr('data-item'),
				top = $('#'+item).offset().top;
		$('body').animate({scrollTop: top}, 500, 'easeInOutQuart', function() {
			body.removeClass('is-running');
		});			
		if ($(this).attr('data-slider')) {
			var sl_attr = $(this).attr('data-slider');
			$('.info__text-item').removeClass('is-active');
			$('.info__ico').removeClass('is-active');
			$('.info__sl-in li').removeClass('is-active');
			$('.'+sl_attr).addClass('is-active');	
		};
		return false;
	});	
}
pager_nav();

function go_step() {
	var go = $('.js-go-step');
	go.on('click', function(){
		var	go_attr = $(this).data('step'),
				top = $('#'+go_attr).offset().top,
				pager_btn = pager.find('button');
		pager_btn.removeClass('is-active');
		pager_btn.each(function(){
			var pager_item = $(this).data('item');
			if (pager_item == go_attr) {
				$(this).addClass('is-active');
			};
		});
		$('body').animate({scrollTop: top}, 500, 'easeInOutQuart');
		return false;	
	});	
}
go_step();

wrap.bind('mousewheel', function(event, delta) {
	if (body.hasClass('is-running')) {
		//alert('i am runnig dont talk to me');
	}
	else{
		//alert('go!');
		body.addClass('is-running');
  	if (delta < 0) {
  		var pager_btn = pager.find('button.is-active');
  		var pager_btn_act = pager.find('button.is-active').next();
  		if (pager_btn_act.length) {
  			setTimeout(next_level, 300);
  			function next_level() {
	  			var pager_attr = pager_btn.attr('data-slider');
	  			var pager_act_attr = pager_btn_act.attr('data-slider');
	  			if (pager_attr) {
						info_sl.find('li').removeClass('is-active');
						var pager_sl = $('.'+pager_attr);
						pager_sl.addClass('is-active');
						var pager_sl_pic = pager_sl.find('.info__sl-step.is-active');
						if (pager_sl_pic.next().length) {
							pager_sl_pic.removeClass('is-active').next().addClass('is-active');
						}
						else{
							pager_btn_act.removeClass('is-active').trigger('click', function(){
								$(this).addClass('is-active');
							});
						}
	  			}
	  			else{
	  				pager_btn_act.removeClass('is-active').trigger('click', function(){
	  					$(this).addClass('is-active');
	  				});
	  			}
	  			body.removeClass('is-running');
  			}
  		}
  		else{
  			body.removeClass('is-running');
  		}
  	}
  	else {
  		var pager_btn = pager.find('button.is-active');
  		var pager_btn_act = pager.find('button.is-active').prev();
  		if (pager_btn_act.length) {
  			setTimeout(prev_level, 300);
  			function prev_level() {
	  			var pager_attr = pager_btn.attr('data-slider');
	  			var pager_act_attr = pager_btn_act.attr('data-slider');
	  			if (pager_attr) {
						info_sl.find('li').removeClass('is-active');
						var pager_sl = $('.'+pager_attr);
						pager_sl.addClass('is-active');
						var pager_sl_pic = pager_sl.find('.info__sl-step.is-active');
						if (pager_sl_pic.prev().length) {
							pager_sl_pic.removeClass('is-active').prev().addClass('is-active');
						}
						else{
							pager_btn_act.removeClass('is-active').trigger('click', function(){
								$(this).addClass('is-active');
							});
						}
	  			}
	  			else{
	  				pager_btn_act.removeClass('is-active').trigger('click', function(){
	  					$(this).addClass('is-active');
	  				});
	  			}
	  			body.removeClass('is-running');
  			}
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