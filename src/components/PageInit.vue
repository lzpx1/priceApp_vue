<script type="text/javascript">
	function SwiperInit(){
		var nav = new Swiper('.TabSwiperNav', {
	    slidesPerView: 'auto',
	    freeMode: true,
	    noSwiping: true,
	    freeModeFluid: true,
	    calculateHeight: true,
	    visibilityFullFit: true,
	    onTap: function (nav) {
	        pages.slideTo(nav.clickedIndex, 300, false);
	        Dom7(".TabSwiperNav .active").removeClass('active');
	        Dom7(".TabSwiperNav .swiper-slide").eq(pages.activeIndex).addClass('active');
	    }
	});
	
	var pages = new Swiper('.TabSwiperPages', {
	    noSwiping: true,
	    onSlideChangeStart: function () {
	        Dom7(".TabSwiperNav .active").removeClass('active')
	        Dom7(".TabSwiperNav .swiper-slide").eq(pages.activeIndex).addClass('active');
	    }
	});
	
	    pages.params.control = nav;
	};
	function TimeInit(){
		for(let i = 0; i<arguments.length;i++){
			let myCalendar = f7.calendar({
		   	 	input: arguments[i],
		   	 	monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月' , '九月' , '十月', '十一月', '十二月'],
		   	 	dayNamesShort:['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
		   	 	onDayClick:function (p, dayContainer, year, month, day){
		   	 		myCalendar.close();
		   	 	}
			});
		}
	}
	export default{
	   SwiperInit,
	   TimeInit
	}
</script>