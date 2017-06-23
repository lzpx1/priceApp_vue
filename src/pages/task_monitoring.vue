<template>
	<f7-page navbar-fixed no-tabbar no-page-content data-page="task_monitoring" id="Task" @page:beforeanimation="pageInit">
		<!--导航-->
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a class="back" href="#">
					<i class="iconfont icon-zuo"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>
				<!-- 导航栏中的按键排控制器 -->
				<div class="buttons-row">
					<!-- 关联到第一个tab的链接，默认激活 -->
					<a href="#tab1" class="tab-link active button">任务监控</a>
					<!-- 关联到第二个tab的链接 -->
					<a href="#tab2" class="tab-link button">任务统计</a>
				</div>
			</f7-nav-center>
			<f7-nav-right>
				<span class="btnArea" @click="BtnChange">
								<span class="a-tackArea">{{ defaultArea }}</span>
				<i class="iconfont icon-11"></i>
				</span>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->
		<div class="page-content tabs">
			<!-- Tab 1，默认激活 -->
			<div id="tab1" class="tab active">
				<div class="swiper-nav swiper-container swiper-free-mode   TabSwiperNav">
					<div class="swiper-wrapper buttons-row">
						<div class="swiper-slide swiper-slide-visible swiper-slide-active active button">珠三角</div>
						<div class="swiper-slide swiper-slide-visible button">粤东</div>
						<div class="swiper-slide swiper-slide-visible button">粤西</div>
						<div class="swiper-slide swiper-slide-visible button">粤北</div>
					</div>
				</div>

				<div class="swiper-pages swiper-container TabSwiperPages">
					<div class="swiper-wrapper">

						<div id="Stab1" class="active swiper-slide swiper-slide-visible swiper-slide-active">
							<div class="chart">

							</div>
							<div class="list-block">
								<ul>
									<li>
										<f7-link href="/Report_pull/" class="item-link item-content">
											<div class="item-inner">
												<div class="item-title">
													<h1 class="noturnline">广东省月度价格监测分析报告任务</h1>
													<p class="task_progress">
														<span>完成情况:</span>
														<em>100%</em>
														<span>参与单位:</span>
														<em>21</em>
													</p>
													<p>任务类型:信息类型</p>
												</div>
											</div>
										</f7-link>
									</li>
									<li>
										<a href="#" class="item-link item-content">
											<div class="item-inner">
												<div class="item-title">
													<h1 class="noturnline">广东省月度价格监测分析报告任务</h1>
													<p class="task_progress">
														<span>完成情况:</span>
														<em>100%</em>
														<span>参与单位:</span>
														<em>21</em>
													</p>
													<p>任务类型:信息类型</p>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="#" class="item-link item-content">
											<div class="item-inner">
												<div class="item-title">
													<h1 class="noturnline">广东省月度价格监测分析报告任务</h1>
													<p class="task_progress">
														<span>完成情况:</span>
														<em>100%</em>
														<span>参与单位:</span>
														<em>21</em>
													</p>
													<p>任务类型:信息类型</p>
												</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div id="Stab2" class="swiper-slide">
							<div class="content-block">
								<div class="list-block">
									<ul>1</ul>
								</div>
							</div>
						</div>
						<div id="Stab3" class="swiper-slide">
							<div class="content-block">
								<div class="list-block">
									<ul>1</ul>
								</div>
							</div>
						</div>
						<div id="Stab4" class="swiper-slide">
							<div class="content-block">
								<div class="list-block">
									<ul>1</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Tab 2 -->
			<div id="tab2" class="tab">

				<p>This is tab 2 content</p>
				...

			</div>

		</div>
		<!--区域选择-->
		<SelectArea slot='fixed' :AreaDisplay="AreaDisplay" @areaToChange="BtnChange" @selectArea="BtnValue"></SelectArea>

		<!--结束-->
		<!---->
	</f7-page>
</template>

<script>
	import SelectArea from "../components/selectArea";
	import InitPage from '../components/PageInit.vue';
	export default {
		data(){
			return {
				defaultArea: "广州",
				AreaDisplay: "none",
			}
		},
		methods:{
			pageInit: function() {
				InitPage.SwiperInit();
			},
			BtnChange: function(){
				if(this.AreaDisplay == 'none'){
					this.AreaDisplay = 'flex'
				} else{
					this.AreaDisplay = 'none'
				}
			},
			BtnValue:function(value){
				this.defaultArea = value;
				this.BtnChange();
			}
		},
		components: { SelectArea }
	}
</script>