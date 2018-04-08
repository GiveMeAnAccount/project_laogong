
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

	//register页面校验
	//手机号校验
	function isPoneAvailable($poneInput) {  
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
        if (!myreg.test($poneInput.val())) {  
            return false;  
          	} else {  
            return true;  
          	}  
      	}
    console.log($(".phone")); 	
    console.log($(".phone>input").attr("value"));
    console.log($(".submit"));
    $(".submit").click(function(){
    	// console.log($(".phone>input").val())
    	// console.log('111');
    	isPoneAvailable($(".phone>input"));
    	if (isPoneAvailable($(".phone>input"))) {
    		$(".error").text("正确");
    	} else {
    		$(".error").text("请输入正确手机号");
    	}
    });
})

