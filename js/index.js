
$(document).ready(function () {
	//初始化swiper
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000,
		pagination : '.swiper-pagination',
		paginationClickable :true,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		loop : true,
	});

	//swiper按钮显示
	function swiperButtonShow(object) {
		$(".swiper-container").hover(
		function () {
			$(object).addClass("show");
		},
		function (){
			$(object).removeClass("show");
		}
		)
	}
	swiperButtonShow(".swiper-button-prev");
	swiperButtonShow(".swiper-button-next");

	// $(".roll li").fadeToggle("slow","linear",function () {
	// 	$(".roll li").fadeToggle("slow","linear");
	// });
	// $(".roll li").slideDown("slow");
})

