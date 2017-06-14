<template>
	<!-- App -->
	<div id="app">
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>

		<!-- Main Views -->
		<f7-views tabs>
			<f7-view id="index" tab active main>
				<!-- Pages -->
				<f7-pages>
					<f7-page navbar-fixed toolbar-fixed>
						<!-- Material Theme Navbar -->
						<!-- iOS Theme Navbar -->
						<f7-navbar>
							<f7-nav-left></f7-nav-left>
							<f7-nav-center sliding>广东价格</f7-nav-center>
							<f7-nav-right>
								<f7-link>
									<i class="iconfont icon-duihua"></i>
								</f7-link>
							</f7-nav-right>
						</f7-navbar>
						<!-- Page Content -->

						<!--地区和搜索框-->
						<div class="row c_con no-gutter">
							<div class="col-20">
								<div class="c_region">
									<a href="#" onclick="areaToChange(this);"><span class="a-tackArea">广东</span><i class="iconfont icon-11"></i></a>
								</div>
							</div>
							<div class="col-80">
								<a href="SearchIndex.html">
									<div class="c_search"><i class="iconfont icon-llhomesearch"></i>搜索商品</div>
								</a>
							</div>
						</div>
						<!--8个按钮-->
						<div class="row c_row">
							<div class="col-25">
								<f7-link href="/Farm_food/"><i class="iconfont icon-nongmaoshipin bule"></i><span>农贸食品</span></f7-link>
							</div>
							<div class="col-25">
								<a href="LoginPage.html" class="open-login-screen"><i class="iconfont icon-chaoshishipin red"></i><span>超市食品</span></a>
							</div>
							<div class="col-25">
								<a href="Big_Commodity.html"><i class="iconfont icon-dazongshangpin yellow"></i><span>大众商品</span></a>
							</div>
							<div class="col-25">
								<a href="#"><i class="iconfont icon-gongyechanpin green"></i><span>工业产品</span></a>
							</div>
							<div class="col-25">
								<f7-link href="/Price_news/"><i class="iconfont icon-jiagezixun yellow"></i><span>价格资讯</span></f7-link>
							</div>
							<div class="col-25">
								<a href="#"><i class="iconfont icon-jiagezhishu green"></i><span>价格指数</span></a>
							</div>
							<div class="col-25">
								<a href="PriceWarning.html"><i class="iconfont icon-jiageyujing bule"></i><span>价格预警</span></a>
							</div>
							<div class="col-25">
								<f7-link href="/my_application/"><i class="iconfont icon-1 red"></i><span>全部</span></f7-link>
							</div>
						</div>

						<!--最新价格-->
						<div class="row c_row c_margin-top no-gutter c_padding-bottom">
							<div class="col-100 c_margin-bottom"><b>最新价格</b>
								<a class="right" href="Farm_food.html">全部</a>
							</div>
							<div class="col-33">
								<a href="#">
									<p><i class="iconfont icon-liangshinew bule"></i><b>粮食</b></p>
									<p><b class="red">20.00</b><samp class="red">元</samp></p>
									<p><samp>环比:</samp><samp class="red">+0.15%</samp></p>
								</a>
							</div>
							<div class="col-33">
								<a href="#">
									<p><i class="iconfont icon-liangshinew bule"></i><b>粮食</b></p>
									<p><b class="red">20.00</b><samp class="red">元</samp></p>
									<p><samp>环比:</samp><samp class="green">+0.15%</samp></p>
								</a>
							</div>
							<div class="col-33">
								<a href="#">
									<p><i class="iconfont icon-liangshinew bule"></i><b>粮食</b></p>
									<p><b class="red">20.00</b><samp class="red">元</samp></p>
									<p><samp>环比:</samp><samp class="red">+0.15%</samp></p>
								</a>
							</div>
						</div>

						<!--最新咨询-->
						<div class="row c_row c_padding-bottom">
							<div class="col-100 c_clo-100 c_margin-bottom"><b>最新咨询</b>
								<a class="right" href="Price_news.html">全部</a>
							</div>
							<div class="col-100 c_margin-bottom">
								<a href="Notice_News.html">
									<div class="row no-gutter">
										<div class="col-25"><img src="../static/11.png" /></div>
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
										<div class="col-25"><img src="../static/11.png" /></div>
										<div class="col-75">
											<h1>本周广东省主要农产品零售价格平稳运行</h1>
											<p>我省粮食市场零售价格保持稳定，晚籼米、丝苗...</p>
											<p class="left">广东省发改委价格监测中心</p>
											<p class="right">2016-12-11</p>
										</div>
									</div>
								</a>
							</div>
						</div>

						<!-- page Content End-->

					</f7-page>
				</f7-pages>
			</f7-view>
			<f7-view id="index-Task" tab>
				<!-- Pages -->
				<f7-pages>
					<f7-page navbar-fixed toolbar-fixed>
						<!-- iOS Theme Navbar -->
						<f7-navbar v-if="$theme.ios">
							<f7-nav-left>

							</f7-nav-left>
							<f7-nav-center sliding>任务</f7-nav-center>
							<f7-nav-right>

							</f7-nav-right>
						</f7-navbar>
						<!-- Page Content -->
						<!-- tabs控制面板 -->
						<!--加class：d-tab4 一行四个-->
						<div class="taskTabs">
							<a href="#tab1" class="tab-link active "><i class="iconfont color-dblue">&#xe6a0;</i>待审核</a>
							<a href="#tab2" class="tab-link "><i class="iconfont color-dred">&#xe69e;</i>待填报</a>
							<a href="#tab3" class="tab-link "><i class="iconfont color-dgreen">&#xe69a;</i>审核中</a>
							<a href="#tab4" class="tab-link "><i class="iconfont color-dorange">&#xe69b;</i>已退回</a>
							<a href="#tab5" class="tab-link "><i class="iconfont color-dgreen">&#xe69d;</i>已完成</a>
						</div>
						<div class="content-block taskBox">
							<div class="tabs">
								<!--待审核-->
								<div id="tab1" class="tab active">
									<div class="taskList">
										<ul>
											<li>
												<a href="checkTask/TaskOverview.html" class="row">
													<div class="col-20"><i class="iconfont color-dgreen">&#xe6a2;</i></div>
													<div class="row col-80">
														<h3>广东国际大宗商品价格监测日报（审核者）</h3>
														<p class="col-50">实审/应审：<span>0/1</span></p>
														<p class="col-50">实审/应审：<span>1/1</span></p>
														<p>剩余时间：<span>3小时39分</span></p>
														<p>报告期：<span>2016-12-12（第139期）</span></p>
													</div>
												</a>
											</li>
											<li>
												<a href="task/TaskWrite.html" class="row">
													<div class="col-20"><i class="iconfont color-dblue">&#xe6a1;</i></div>
													<div class="row col-80">
														<h3>广东国际大宗商品价格监测日报（填报者）</h3>
														<p class="col-50">实审/应审：<span>0/1</span></p>
														<p class="col-50">实审/应审：<span>1/1</span></p>
														<p>剩余时间：<span>3小时39分</span></p>
														<p>报告期：<span>2016-12-12（第139期）</span></p>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<!--待填报-->
								<div id="tab2" class="tab">
									<div class="taskList taskLine-3">
										<ul>
											<li>
												<a href="#" class="row">
													<div class="col-20"><i class="iconfont color-dgreen">&#xe6a2;</i></div>
													<div class="row col-80">
														<h3>广东国际大宗商品价格监测日报</h3>
														<p>状态：<span>未完成</span></p>
														<p>报告期：<span>2016-12-12（第139期）</span></p>
													</div>
												</a>
											</li>
											<li>
												<a href="#" class="row">
													<div class="col-20"><i class="iconfont color-dblue">&#xe6a1;</i></div>
													<div class="row col-80">
														<h3>广东国际大宗商品价格监测日报</h3>
														<p>状态：<span>未完成</span></p>
														<p>报告期：<span>2016-12-12（第139期）</span></p>
													</div>
												</a>
											</li>
											<li>
												<a href="#" class="row">
													<div class="col-20"><i class="iconfont color-dblue">&#xe6a1;</i></div>
													<div class="row col-80">
														<h3>广东国际大宗商品价格监测日报</h3>
														<p>状态：<span>未完成</span></p>
														<p>报告期：<span>2016-12-12（第139期）</span></p>
													</div>
												</a>
											</li>
											<li>
												<a href="#" class="row">
													<div class="col-20"><i class="iconfont color-dgreen">&#xe6a2;</i></div>
													<div class="row col-80">
														<h3>广东国际大宗商品价格监测日报</h3>
														<p>状态：<span>未完成</span></p>
														<p>报告期：<span>2016-12-12（第139期）</span></p>
													</div>
												</a>
											</li>
											<li>
												<a href="#" class="row">
													<div class="col-20"><i class="iconfont color-dblue">&#xe6a1;</i></div>
													<div class="row col-80">
														<h3>广东国际大宗商品价格监测日报</h3>
														<p>状态：<span>未完成</span></p>
														<p>报告期：<span>2016-12-12（第139期）</span></p>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<!--审核中-->
								<div id="tab3" class="tab">
									<div class="taskList taskLine-2">
										<ul>
											<li>
												<a href="#" class="row">
													<div class="col-20"><i class="iconfont color-dgreen">&#xe6a2;</i></div>
													<div class="row col-80">
														<h3>广东国际大宗商品价格监测日报</h3>
														<p>报告期：<span>2016-12-12（第139期）</span></p>
													</div>
												</a>
											</li>
											<li>
												<a href="#" class="row">
													<div class="col-20"><i class="iconfont color-dblue">&#xe6a1;</i></div>
													<div class="row col-80">
														<h3>广东国际大宗商品价格监测日报222</h3>
														<p>报告期：<span>2016-12-12（第139期）</span></p>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<!--已退回-->
								<div id="tab4" class="tab">
									<div class="taskList">
										<ul>
											<li>
												<a href="#" class="row">
													<div class="col-20"><i class="iconfont color-dgreen">&#xe6a2;</i></div>
													<div class="row col-80">
														<h3>广东国际大宗商品价格监测日报</h3>
														<p class="col-50">实审/应审：<span>0/1</span></p>
														<p class="col-50">实审/应审：<span>1/1</span></p>
														<p>剩余时间：<span>3小时39分</span></p>
														<p>报告期：<span>2016-12-12（第139期）</span></p>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<!--已完成-->
								<div id="tab5" class="tab">
									<div class="taskList taskLine-3">
										<ul>
											<li>
												<a href="#" class="row">
													<div class="col-20"><i class="iconfont color-dgreen">&#xe6a2;</i></div>
													<div class="row col-80">
														<h3>广东国际大宗商品价格监测日报</h3>
														<p>报告期：<span>2016-12-12</span></p>
														<p>完成时间：<span>2016-12-12 11:21</span></p>
													</div>
												</a>
											</li>
											<li>
												<a href="#" class="row">
													<div class="col-20"><i class="iconfont color-dblue">&#xe6a1;</i></div>
													<div class="row col-80">
														<h3>广东国际大宗商品价格监测日报222</h3>
														<p>报告期：<span>2016-12-12</span></p>
														<p>完成时间：<span>2016-12-12 11:21</span></p>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<!--Page Content End-->
					</f7-page>
				</f7-pages>
			</f7-view>
			<f7-view id="index-Search" tab>

				<!-- Pages -->
				<f7-pages>
					<f7-page navbar-fixed toolbar-fixed no-page-content>
						<!-- iOS Theme Navbar -->
						<f7-navbar>
							<f7-nav-left></f7-nav-left>
							<f7-nav-center sliding>查询</f7-nav-center>
							<f7-nav-right>

							</f7-nav-right>
						</f7-navbar>
						<!-- Page Content -->
						<div class="page-content c_body">
							<div class="c_seeks">
								<a href="DataQuery.html">
									<i class="iconfont icon-shujuchaxun_ green"></i>
									<p>数据查询</p>
								</a>
							</div>
							<div class="c_seeks">
								<a href="#">
									<i class="iconfont icon-shujuchaxun bule"></i>
									<p>信息查询</p>
								</a>
							</div>
						</div>
					</f7-page>
				</f7-pages>
			</f7-view>
			<f7-view id="index-Wo" tab>

				<!-- Pages -->
				<f7-pages>
					<f7-page navbar-fixed toolbar-fixed>
						<!-- Material Theme Navbar -->
						<!-- iOS Theme Navbar -->
						<f7-navbar v-if="$theme.ios">
							<f7-nav-left>

							</f7-nav-left>
							<f7-nav-center sliding>我的</f7-nav-center>
							<f7-nav-right>

							</f7-nav-right>
						</f7-navbar>
						<!-- Page Content -->
						<!--内容-->

						<!--登陆状态-->
						<div class="user_box">
							<div class="login-after">
								<div class="list-block">
									<ul>
										<li>
											<a href="index-woDetail.html" class="item-link item-content">
												<div class="item-media">
													<div class="navbar-inner-img"><img src="../static/images.png" alt=""></div>
												</div>
												<div class="item-inner">
													<p class="userName">陈志辉</p>
													<p class="userCompany">广东省监测中心</p>

												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div id="login-before" style="display: none">
								<div class="list-block user-margin">
									<ul>
										<li>
											<a href="#" class="item-link item-content open-login-screen">
												<div class="item-media">
													<div class="navbar-inner-img"><img src="images/我的_06.png" alt=""></div>
												</div>
												<div class="item-inner">
													<div class="item-title">
														<p id="user-title">您还没有登录</p>
													</div>
													<div class="user-box-btn">点击登录</div>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<!--结束-->

						<!--栏目1-->
						<div class="wo_box1">
							<div class="list-block">
								<ul>
									<li>
										<a href="Company.html" class="item-link item-content a-width">
											<div class="item-media"><i class="iconfont icon-shigongdanweisel color-dblue"></i></div>
											<div class="item-inner">
												<div class="item-title">定点单位</div>
											</div>
										</a>
									</li>
									<li>
										<a href="InvestigateFill.html" class="item-link item-content a-width">
											<div class="item-media"><i class="iconfont icon-lishihuiyijilu color-dorange"></i></div>
											<div class="item-inner">
												<div class="item-title">明察暗访</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<!--结束-->

						<!--栏目2-->
						<div class="wo_box2">
							<div class="list-block">
								<ul>
									<li>
										<a href="javascript:void(0)" class="item-link item-content a-width">
											<div class="item-media"><i class="iconfont icon-yjgl-a2 color-dgreen"></i></div>
											<div class="item-inner">
												<div class="item-title">主动预警</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<!--结束-->

						<!--关于我们-->
						<div class="list-block">
							<ul>
								<li>
									<a href="javascript:void(0)" class="item-link item-content a-width">
										<div class="item-media"><i class="iconfont icon-guanyuwomen color-dorange"></i></div>
										<div class="item-inner">
											<div class="item-title">关于我们</div>
										</div>
									</a>
								</li>
							</ul>
						</div>
						<!--结束-->
						<!--结束-->
					</f7-page>
				</f7-pages>
			</f7-view>
			<f7-toolbar tabbar labels>
				<f7-link icon="iconfont icon-shouye1" text="首页" tab-link="#index" active @click='change(0)'></f7-link>
				<f7-link icon="iconfont icon-renwu2" text="任务" tab-link="#index-Task" @click='change(1)'></f7-link>
				<f7-link icon="iconfont icon-chaxun2" text="查询" tab-link="#index-Search" @click='change(2)'></f7-link>
				<f7-link icon="iconfont icon-wo1" text="我的" tab-link="#index-Wo" @click='change(3)'></f7-link>
			</f7-toolbar>

		</f7-views>

	</div>
</template>

<script>
	const $$ = Dom7;
	export default {
		data() { return { title: "" } },
		methods: {
			change: function(index) {
				switch(index) {
					case 0:
						$$(".toolbar .toolbar-inner a").eq(0).find("i").attr("class", "iconfont icon-shouye2");
						$$(".toolbar .toolbar-inner a").eq(1).find("i").attr("class", "iconfont icon-renwu2");
						$$(".toolbar .toolbar-inner a").eq(2).find("i").attr("class", "iconfont icon-chaxun2");
						$$(".toolbar .toolbar-inner a").eq(3).find("i").attr("class", "iconfont icon-wo1");
						break;
					case 1:
						$$(".toolbar .toolbar-inner a").eq(1).find("i").attr("class", "iconfont icon-renwumian1");
						$$(".toolbar .toolbar-inner a").eq(0).find("i").attr("class", "iconfont icon-shouyexian");
						$$(".toolbar .toolbar-inner a").eq(2).find("i").attr("class", "iconfont icon-chaxun2");
						$$(".toolbar .toolbar-inner a").eq(3).find("i").attr("class", "iconfont icon-wo1");
						break;
					case 2:
						$$(".toolbar .toolbar-inner a").eq(2).find("i").attr("class", "iconfont icon-chaxunmian1");
						$$(".toolbar .toolbar-inner a").eq(0).find("i").attr("class", "iconfont icon-shouyexian");
						$$(".toolbar .toolbar-inner a").eq(1).find("i").attr("class", "iconfont icon-renwu2");
						$$(".toolbar .toolbar-inner a").eq(3).find("i").attr("class", "iconfont icon-wo1");
						break;
					case 3:
						$$(".toolbar .toolbar-inner a").eq(3).find("i").attr("class", "iconfont icon-womian");
						$$(".toolbar .toolbar-inner a").eq(0).find("i").attr("class", "iconfont icon-shouyexian");
						$$(".toolbar .toolbar-inner a").eq(1).find("i").attr("class", "iconfont icon-renwu2");
						$$(".toolbar .toolbar-inner a").eq(2).find("i").attr("class", "iconfont icon-chaxun2");
						break;
				}
			}
		}
	}
</script>