<template>
	<f7-page no-tabbar navbar-fixed @page:beforeanimation="pageInit" id="price_news">
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a href="#" class="back link">
					<i class="iconfont icon-zuo"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>价格咨询</f7-nav-center>
			<f7-nav-right>
				<i class="iconfont icon-llhomesearch"></i>
			</f7-nav-right>
		</f7-navbar>

		<div class="swiper-nav swiper-container swiper-free-mode   TabSwiperNav">
			<div class="swiper-wrapper buttons-row">
				<div class="swiper-slide swiper-slide-visible swiper-slide-active active button">市场动态</div>
				<div class="swiper-slide swiper-slide-visible button">价格分析</div>
				<div class="swiper-slide swiper-slide-visible button">各地动态</div>
				<div class="swiper-slide swiper-slide-visible button">调研巡视</div>
			</div>
		</div>

		<div class="swiper-pages swiper-container TabSwiperPages">
			<div class="swiper-wrapper">

				<div id="tab1" class="active swiper-slide swiper-slide-visible swiper-slide-active">
					<!--<ul class="pricenews_list">
									<li class="nomoral">
										<a href="Notice_News.html" class="clearfloat">
											<img src="images/11.png"/>
											<div class="detail">
												<div>本周我省市场主要农场品零售价格持续平稳:收消费淡季影响</div>
												<p class="area noturnline">广东省发改委价格监测中心</p>
												<p class="right">2016-07-12</p>
											</div>
										</a>		
									</li>
									<li class="nomoral">
										<a href="#" class="clearfloat">
											<img src="images/11.png"/>
											<div class="detail">
												<div>本周我省市场主要农场品零售价格持续平稳:收消费淡季影响本周我省市场主要农场品零售价格持续平稳:收消费淡季影响</div>
												<p class="area noturnline">广东省发改委价格监测中心</p>
												<p class="right">2016-07-12</p>
											</div>
										</a>		
									</li>
									<li class="special">
										<a href="#" class="clearfloat">
											<img src="images/11.png"/>
											<div class="detail">
												<h3>
													<span  class="noturnline">我省沿海地区大雨，水产价格受影响我省沿海地区大雨，水产价格受影响</span>
													<span class="fright">专题</span>
												</h3>
												<p>连日大雨,渔民无法出海打鱼,海鲜市场海产因此受影响,价格持续上升.淡水水产也因连日大雨缺少供货.</p>
											</div>
											
										</a>		
									</li>
									<li class="nomoral">
										<a href="#" class="clearfloat">
											<img src="images/11.png"/>
											<div class="detail">
												<div>本周我省市场主要农场品零售价格持续平稳:收消费淡季影响本周我省市场主要农场品零售价格持续平稳:收消费淡季影响</div>
												<p class="area noturnline">广东省发改委价格监测中心</p>
												<p class="right">2016-07-12</p>
											</div>
										</a>		
									</li>
									<li class="nomoral">
										<a href="#" class="clearfloat">
											<img src="images/11.png"/>
											<div class="detail">
												<div>本周我省市场主要农场品零售价格持续平稳:收消费淡季影响本周我省市场主要农场品零售价格持续平稳:收消费淡季影响</div>
												<p class="area noturnline">广东省发改委价格监测中心</p>
												<p class="right">2016-07-12</p>
											</div>
										</a>		
									</li>
								</ul>-->

					<!--最新咨询-->
					<div class="row c_row c_padding-bottom d-NewsRow">
						<div class="col-100">
							<a href="Notice_News.html">
								<div class="row no-gutter">
									<div class="col-25"><img src="../../static/11.png" /></div>
									<div class="col-75">
										<h1>本周广东省主要农产品零售价格平稳运行</h1>
										<p class="text">我省粮食市场零售价格保持稳定，晚籼米、丝苗...</p>
										<p class="left">广东省发改委价格监测中心</p>
										<p class="right">2016-12-11</p>
									</div>
								</div>
							</a>
							<a href="Notice_News.html">
								<div class="row no-gutter">
									<div class="col-25"><img src="../../static/11.png" /></div>
									<div class="col-75">
										<h1>本周广东省主要农产品零售价格平稳运行</h1>
										<p class="text">我省粮食市场零售价格保持稳定，晚籼米、丝苗...</p>
										<p class="left">广东省发改委价格监测中心</p>
										<p class="right">2016-12-11</p>
									</div>
								</div>
							</a>
						</div>
					</div>

				</div>
				<div id="tab2" class="swiper-slide">
					<div class="content-block">
						<div class="list-block">
							<ul>1</ul>
						</div>
					</div>
				</div>
				<div id="tab3" class="swiper-slide">
					<div class="content-block">
						<div class="list-block">
							<ul>1</ul>
						</div>
					</div>
				</div>
				<div id="tab4" class="swiper-slide">
					<div class="content-block">
						<div class="list-block">
							<ul>1</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

	</f7-page>

</template>

<script>
	import scoke from '../scoke.vue';
	export default {
		methods: {
			pageInit: function() {
				scoke.SwiperInit();
			}
		}
	}
</script>