$(function(){
	$('.recent-post__block').on('click', function(){
		$('.recent-post__block').removeClass('active__post');
		$(this).toggleClass('active__post');
		
	});
	$('.category__li').on('click', function(){
		$('.category__li').removeClass('active__category');
		$(this).toggleClass('active__category');
		
	});
	$('.tags').on('click', function(){
		$('.tags').removeClass('active__tag');
		$(this).toggleClass('active__tag');
	});
	$('.header-btn').on('click', function(){
		$('.menu__list').slideToggle();
	});
});