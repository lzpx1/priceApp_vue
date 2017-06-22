<template>
	<f7-page navbar-fixed no-tabbar no-page-content data-page="TaskWrite" @page:beforeanimation="pageInit">
		<!--导航-->
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a class="back" href="#">
					<i class="iconfont icon-zuo"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>广东省国际大宗商品价格监测日报</f7-nav-center>
			<f7-nav-right>
				<i class="iconfont d-copy">&#xe608;</i>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->
		<div class="page-content swiperHidden">
			<div class="swiper-nav swiper-container swiper-free-mode taskSwiperNav TabSwiperNav">
				<div class="swiper-wrapper">
					<div class="swiper-slide swiper-slide-visible swiper-slide-active active"><span>能源化工</span></div>
					<div class="swiper-slide swiper-slide-visible"><span>基本金属</span></div>
					<div class="swiper-slide swiper-slide-visible"><span>农产品</span></div>
					<div class="swiper-slide swiper-slide-visible"><span>黄金</span></div>
				</div>
			</div>

			<div class="swiper-pages swiper-container taskSwiperPages TabSwiperPages">
				<div class="swiper-wrapper">

					<div id="Dtab0" class="active swiper-slide swiper-slide-visible swiper-slide-active infinite-scroll">
						<div class="content-block taskBox">
							<div class="taskList taskLine-3">
								<ul>
									<li>
										<a href="javascript:;" class="row">
											<div class="col-20"><img src="../../static/food.png" /></div>
											<div class="row col-80">
												<h3>天然气（纽约）<label class="right d-remark"><i class="iconfont">&#xe608;</i>备注</label></h3>
												<p class="col-50 a-pre">上期：<span>3.45</span></p>
												<p class="col-50">涨跌幅：<span class="color-dgreen">-23%</span></p>
												<p class="col-50 a-current">本期：<input type="text" /></p>
												<p class="col-50 d-details">详情<i class="iconfont">&#xe64a;</i></p>
											</div>
										</a>
										<div class="row taskDetails">
											<p class="col-50">规格等级：新鲜一级</p>
											<p class="col-50">计价单位：美元/吨</p>
											<p class="col-50">全省均价：3.45元</p>
											<p class="col-50">产地品牌：广州</p>
										</div>
									</li>
									<li>
										<a href="javascript:;" class="row">
											<div class="col-20"><img src="../../static/food.png" /></div>
											<div class="row col-80">
												<h3>天然气（纽约）<label class="right d-remark"><i class="iconfont">&#xe608;</i>备注</label></h3>
												<p class="col-50 a-pre">上期：<span>3.55</span></p>
												<p class="col-50">涨跌幅：<span class="color-dgreen">-23%</span></p>
												<p class="col-50 a-current">本期：<input type="text" /></p>
												<p class="col-50 d-details">详情<i class="iconfont">&#xe64a;</i></p>
											</div>
										</a>
										<div class="row taskDetails">
											<p class="col-50">规格等级：新鲜一级</p>
											<p class="col-50">计价单位：美元/吨</p>
											<p class="col-50">全省均价：3.55元</p>
											<p class="col-50">产地品牌：广州</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div id="Dtab1" class="swiper-slide">
						<div class="content-block taskBox">
							<div class="taskList taskLine-3">
								<ul>
									<li>
										<a href="javascript:;" class="row">
											<div class="col-20"><img src="../../static/food.png" /></div>
											<div class="row col-80">
												<h3>天然气（纽约）<label class="right d-remark"><i class="iconfont">&#xe608;</i>备注</label></h3>
												<p class="col-50 a-pre">上期：<span>3.66</span></p>
												<p class="col-50">涨跌幅：<span class="color-dgreen">-23%</span></p>
												<p class="col-50 a-current">本期：<input type="text" /></p>
												<p class="col-50 d-details">详情<i class="iconfont">&#xe64a;</i></p>
											</div>
										</a>
										<div class="row taskDetails">
											<p class="col-50">规格等级：新鲜一级</p>
											<p class="col-50">计价单位：美元/吨</p>
											<p class="col-50">全省均价：3.66元</p>
											<p class="col-50">产地品牌：广州</p>
										</div>
									</li>
									<li>
										<a href="javascript:;" class="row">
											<div class="col-20"><img src="../../static/food.png" /></div>
											<div class="row col-80">
												<h3>天然气（纽约）<label class="right d-remark"><i class="iconfont">&#xe608;</i>备注</label></h3>
												<p class="col-50 a-pre">上期：<span>3.77</span></p>
												<p class="col-50">涨跌幅：<span class="color-dgreen">-23%</span></p>
												<p class="col-50 a-current">本期：<input type="text" /></p>
												<p class="col-50 d-details">详情<i class="iconfont">&#xe64a;</i></p>
											</div>
										</a>
										<div class="row taskDetails">
											<p class="col-50">规格等级：新鲜一级</p>
											<p class="col-50">计价单位：美元/吨</p>
											<p class="col-50">全省均价：3.77元</p>
											<p class="col-50">产地品牌：广州</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div id="Dtab2" class="swiper-slide">
						<div class="content-block">
							<div class="list-block h_news">
								<ul>2</ul>
							</div>
						</div>
					</div>
					<div id="Dtab3" class="swiper-slide">
						<div class="content-block">
							<div class="list-block h_news">
								<ul>3</ul>
							</div>
						</div>
					</div>

				</div>
			</div>

			<!--填写暂存-->
			<div class="taskToolbarBox">
				<div class="row no-gutter taskToolbar">
					<div class="col-40 btn d-TaskList">
						<label>16</label>
						<p class="title">已填写</p>
						<p class="text">可进行修改</p>
					</div>
					<div class="col-30 btn">暂存</div>
					<div class="col-30 btn">提交</div>
				</div>
				<div class="taskList" style="display: none">
					<ul>
						<li>
							<a href="#" class="row no-gutter">
								<p class="col-40 title">天然气（纽约）</p>
								<p class="col-30">上期：3.45</p>
								<p class="col-30">本期：3.45</p>
							</a>
						</li>
						<li>
							<a href="#" class="row no-gutter">
								<p class="col-40 title">天然气（纽约）</p>
								<p class="col-30">上期：3.45</p>
								<p class="col-30">本期：3.45</p>
							</a>
						</li>
						<li>
							<a href="#" class="row no-gutter">
								<p class="col-40 title">天然气（纽约）</p>
								<p class="col-30">上期：3.45</p>
								<p class="col-30">本期：3.45</p>
							</a>
						</li>
						<li>
							<a href="#" class="row no-gutter">
								<p class="col-40 title">天然气（纽约）</p>
								<p class="col-30">上期：3.45</p>
								<p class="col-30">本期：3.45</p>
							</a>
						</li>
						<li>
							<a href="#" class="row no-gutter">
								<p class="col-40 title">天然气（纽约）</p>
								<p class="col-30">上期：3.45</p>
								<p class="col-30">本期：3.45</p>
							</a>
						</li>
						<li>
							<a href="#" class="row no-gutter">
								<p class="col-40 title">天然气（纽约）</p>
								<p class="col-30">上期：3.45</p>
								<p class="col-30">本期：3.45</p>
							</a>
						</li>
						<li>
							<a href="#" class="row no-gutter">
								<p class="col-40 title">天然气（纽约）</p>
								<p class="col-30">上期：3.45</p>
								<p class="col-30">本期：3.45</p>
							</a>
						</li>
						<li>
							<a href="#" class="row no-gutter">
								<p class="col-40 title">天然气（纽约）</p>
								<p class="col-30">上期：3.45</p>
								<p class="col-30">本期：3.45</p>
							</a>
						</li>
						<li>
							<a href="#" class="row no-gutter">
								<p class="col-40 title">天然气（纽约）</p>
								<p class="col-30">上期：3.45</p>
								<p class="col-30">本期：3.45</p>
							</a>
						</li>
						<li>
							<a href="#" class="row no-gutter">
								<p class="col-40 title">天然气（纽约）</p>
								<p class="col-30">上期：3.45</p>
								<p class="col-30">本期：3.45</p>
							</a>
						</li>
						<li>
							<a href="#" class="row no-gutter">
								<p class="col-40 title">天然气（纽约）</p>
								<p class="col-30">上期：3.45</p>
								<p class="col-30">本期：3.45</p>
							</a>
						</li>
						<li>
							<a href="#" class="row no-gutter">
								<p class="col-40 title">天然气（纽约）</p>
								<p class="col-30">上期：3.45</p>
								<p class="col-30">本期：3.45</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<!--遮罩  默认2，可加class：z-index10 -->
			<div class="d-fullscreen" style="display: none"></div>
			<!--上传图片-->
			<div class="uploadBox" style="display: none">
				<form>
					<div class="uploadDiv"><img src="images/food.png" /></div>
					<div class="uploadBtn">
						<input type="file" value="上传图片" />
						<a href="javascript:;" class="button">上传图片</a>
					</div>
				</form>
			</div>
			<!--备注-->
			<div class="remarksBox" style="display: none">
				<form>
					<h3>天然气（纽约）</h3>
					<div class="line">
						波动类型
						<select name="" id="">
							<option value="成本">成本</option>
							<option value="供给">供给</option>
							<option value="需求">需求</option>
							<option value="综合">综合</option>
							<option value="其他">其他</option>
						</select>
					</div>
					<div class="line">
						波动原因
						<textarea rows="5" placeholder="原因"></textarea>
					</div>
					<div class="line">
						<input type="submit" value="确定" />
					</div>
				</form>
			</div>
		</div>
		<!--结束-->
		<!---->
	</f7-page>
</template>

<script>
	import InitPage from '../components/SwiperInit.vue';
	export default {
		methods: {
			pageInit: function() {
				InitPage.SwiperInit();
			}
		}
	}
</script>