$(function(){
	//右下角 固定定位
	$(window).scroll(function() {
            var scrollTop = $(this).scrollTop();
            // console.log(scrollTop);
            if (scrollTop < 300) {
                $('.return').hide();
            } else {
                $('.return').show();
            }
            if (scrollTop + $(window).height() - $('.footer').offset().top >= 0) {
                var dis = scrollTop + $(window).height() - $('.footer').offset().top;

                $('.fixed').css('bottom', dis + 20);
            }
        })
	$('.advice').click(function(){
		$('.advicefixed').show();
	})
	$('.advice-close').click(function(){
		$('.advicefixed').hide();
	})
	// 轮播图
	var index = 0;
	var timer;
	var len = $('.lun li').length;
	fun();
	$('.lun li:eq(0)').clone(true).appendTo($('.lun'))

	function fun(){
		$('.lun').stop(true,true)
		timer= setInterval(function(){
			$('.lun li').stop(true,true);
			$('ol li').eq(index%len).removeClass('active');
			index++;
			if(index>len){
				index = 1;
				$('.lun').css('margin-left',0);
			}
			$('ol li').eq(index%len).addClass('active');
			$('.lun ').animate({'margin-left':-170*(index)},100)
		},3000) 
	}
	$('ol li').click(function(){
		$('ol li').eq(index).removeClass('active');
		index = $(this).index();
		$('ol li').eq(index).addClass('active');
		$('.lun ').animate({'margin-left':-170*(index)})
	})
	$('.carousel').mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		fun();
	})  
	// 轮播图淡入
	$('.img').animate({top:80},2000,'linear',function(){
		$('.carousel').fadeIn();
		$('.logo').fadeIn()
	})
})