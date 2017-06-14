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

	export default{
	   SwiperInit
	}
</script>