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
						<f7-navbar v-if="$theme.ios">
							<f7-nav-left></f7-nav-left>
							<f7-nav-center sliding>广东价格</f7-nav-center>
							<f7-nav-right>
								<f7-link href="/mail_message/">
									<i class="iconfont icon-duihua"></i>
								</f7-link>
							</f7-nav-right>
						</f7-navbar>
						<!-- Page Content -->

						<!--地区和搜索框-->
						<div class="row c_con no-gutter">
							<div class="col-20">
								<div class="c_region">
									<span class="btnArea" @click="BtnChange">
										<span class="a-tackArea">{{ defaultArea }}</span>
									<i class="iconfont icon-11"></i>
									</span>
								</div>
							</div>
							<div class="col-80">
								<f7-link href="/SearchIndex/">
									<div class="c_search"><i class="iconfont icon-llhomesearch"></i>搜索商品</div>
								</f7-link>
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
								<f7-link href="/Big_Commodity/"><i class="iconfont icon-dazongshangpin yellow"></i><span>大宗商品</span></f7-link>
							</div>
							<div class="col-25">
								<a href="#" class="open-login-screen"><i class="iconfont icon-gongyechanpin green"></i><span>工业产品</span></a>
							</div>
							<div class="col-25">
								<f7-link href="/Price_news/"><i class="iconfont icon-jiagezixun yellow"></i><span>价格资讯</span></f7-link>
							</div>
							<div class="col-25">
								<a href="#"><i class="iconfont icon-jiagezhishu green"></i><span>价格指数</span></a>
							</div>
							<div class="col-25">
								<f7-link href="/PriceWarning/"><i class="iconfont icon-jiageyujing bule"></i><span>价格预警</span></f7-link>
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
								<f7-link href="/News/">
									<div class="row no-gutter">
										<div class="col-25"><img src="../static/11.png" /></div>
										<div class="col-75">
											<h1>本周广东省主要农产品零售价格平稳运行</h1>
											<p class="text">我省粮食市场零售价格保持稳定，晚籼米、丝苗...</p>
											<p class="left">广东省发改委价格监测中心</p>
											<p class="right">2016-12-11</p>
										</div>
									</div>
								</f7-link>
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

						<!--区域选择-->
						<SelectArea :AreaDisplay="AreaDisplay" @areaToChange="BtnChange" @selectArea="BtnValue"></SelectArea>
						<!--结束-->

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
						<div class="taskTabs d-tab4">
							<a href="#tab1" class="tab-link active"><i class="iconfont color-dblue">&#xe6a0;</i>待审核</a>
							<a href="#tab2" class="tab-link"><i class="iconfont color-dred">&#xe69e;</i>待填报</a>
							<!--<a href="#tab3" class="tab-link "><i class="iconfont color-dgreen">&#xe69a;</i>审核中</a>-->
							<a href="#tab4" class="tab-link "><i class="iconfont color-dorange">&#xe69b;</i>已退回</a>
							<a href="#tab5" class="tab-link "><i class="iconfont color-dgreen">&#xe69d;</i>已完成</a>
						</div>
						<div class="content-block taskBox">
							<div class="tabs">
								<!--待审核-->
								<div id="tab1" class="tab active">
									<div class="taskList">
										<ul>
											<li v-for = 'item in ListWriteArr' >
												<f7-link :href="bindLink('TaskWrite', [item.taskReportedId,item.taskCataId])" class="row no-gutter">
													<div class="col-20 new"><i class="iconfont color-dgreen">&#xe6a2;</i></div>
													<div class="row col-80">
														<h3>{{item.taskName}}</h3>
														<p class="col-50">实审/应审：<span>0/1</span></p>
														<p class="col-50">实审/应审：<span>1/1</span></p>
														<p>报告期：<span>{{issueTimeSub(item.issueTime)}}{{item.taskTimes ? '(第' + item.taskTimes.substring(5) + '期)' : ''}}</span></p>
														<p>剩余时间：<span>{{timeRemaining(item.taskEndTime)}}</span></p>
													</div>
												</f7-link>
											</li>
										</ul>
									</div>
								</div>
								<!--待填报-->
								<div id="tab2" class="tab">
									<div class="taskList taskLine-3">
										<ul>
											<li v-for = 'item in ListWriteArr'>
												<f7-link :href="bindLink('TaskWrite', [item.taskReportedId,item.taskCataId])"  class="row no-gutter">
													<div class="col-20"><i class="iconfont color-dgreen">&#xe6a2;</i></div>
													<div class="row col-80">
														<h3>{{item.taskName}}</h3>
														<p>报告期：<span>{{issueTimeSub(item.issueTime)}}{{item.taskTimes ? '(第' + item.taskTimes.substring(5) + '期)' : ''}}</span></p>
														<p>剩余时间：<span>{{timeRemaining(item.taskEndTime)}}</span></p>
													</div>
												</f7-link>
											</li>
										</ul>
									</div>
								</div>
								<!--审核中-->
								<!--<div id="tab3" class="tab">
									<div class="taskList taskLine-3">
										<ul>
											<li>
												<a href="#" class="row no-gutter">
													<div class="col-20"><i class="iconfont color-dgreen">&#xe6a2;</i></div>
													<div class="row col-80">
														<h3>广东国际大宗商品价格监测日报</h3>
														<p>报告期：<span>2016-12-12（第139期）</span></p>
														<p>剩余时间：<span>已过期</span></p>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>-->
								<!--已退回-->
								<div id="tab4" class="tab">
									<div class="taskList">
										<ul>
											<li v-for = 'item in ListReturnArr'>
												<f7-link href="#" class="row no-gutter">
													<div class="col-20"><i class="iconfont color-dgreen">&#xe6a2;</i></div>
													<div class="row col-80">
														<h3>{{item.taskName}}</h3>
														<p class="col-50">实审/应审：<span>0/1</span></p>
														<p class="col-50">实审/应审：<span>1/1</span></p>
														<p>剩余时间：<span>{{timeRemaining(item.taskEndTime)}}</span></p>
														<p>报告期：<span>{{issueTimeSub(item.issueTime)}}{{item.taskTimes ? '(第' + item.taskTimes.substring(5) + '期)' : ''}}</span></p>
													</div>
												</f7-link>
											</li>
										</ul>
									</div>
								</div>
								<!--已完成-->
								<div id="tab5" class="tab">
									<div class="taskList taskLine-3">
										<ul>
											<li v-for = 'item in ListCompletedArr'>
												<f7-link href="#" class="row no-gutter">
													<div class="col-20"><i class="iconfont color-dgreen">&#xe6a2;</i></div>
													<div class="row col-80">
														<h3>{{item.taskName}}</h3>
														<p>报告期：<span>{{issueTimeSub(item.issueTime)}}{{item.taskTimes ? '(第' + item.taskTimes.substring(5) + '期)' : ''}}</span></p>
														<p>完成时间：<span>item.reportedTime.substring(0,10)</span></p>
													</div>
												</f7-link>
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
						<div class="page-content c_body" :style="bgStyle">
							<div class="c_seeks">
								<f7-link href="/DataQuery/">
									<i class="iconfont icon-shujuchaxun_ green"></i>
									<p>数据查询</p>
								</f7-link>
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
											<f7-link href="/index-woDetail/" class="item-link item-content">
												<div class="item-media">
													<div class="navbar-inner-img"><img src="../static/images.png" alt=""></div>
												</div>
												<div class="item-inner">
													<p class="userName">陈志辉</p>
													<p class="userCompany">广东省监测中心</p>

												</div>
											</f7-link>
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
										<f7-link href="/Company/" class="item-link item-content a-width">
											<div class="item-media"><i class="iconfont icon-shigongdanweisel color-dblue"></i></div>
											<div class="item-inner">
												<div class="item-title">定点单位</div>
											</div>
										</f7-link>
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
									<f7-link href="/aboutOur/" class="item-link item-content a-width">
										<div class="item-media"><i class="iconfont icon-guanyuwomen color-dorange"></i></div>
										<div class="item-inner">
											<div class="item-title">关于我们</div>
										</div>
									</f7-link>
								</li>
							</ul>
						</div>
						<!--结束-->
						<!--结束-->
					</f7-page>
				</f7-pages>
			</f7-view>
			<f7-toolbar tabbar labels>
				<f7-link :icon="classObject0" text="首页" tab-link="#index" active @click='changeIcon(0)'></f7-link>
				<f7-link :icon="classObject1" text="任务" tab-link="#index-Task" @click='changeIcon(1)'></f7-link>
				<f7-link :icon="classObject2" text="查询" tab-link="#index-Search" @click='changeIcon(2)'></f7-link>
				<f7-link :icon="classObject3" text="我的" tab-link="#index-Wo" @click='changeIcon(3)'></f7-link>
			</f7-toolbar>
			<f7-login-screen>
				<!-- Login Screen content goes here -->
				<f7-view>
					<f7-pages>
						<f7-page login-screen no-page-content>
							<div class="page-content login-screen-content d-login">
								<div class="login-logo">
									<img src="../static/images.png" alt="logo" />
									<p>广东价格</p>
								</div>
								<form>
									<div class="list-block">
										<ul>
											<li class="item-content">
												<div class="item-media"><i class="iconfont">&#xe606;</i></div>
												<div class="item-inner">
													<div class="item-input">
														<input type="text" v-model="User.loginName" name="username" placeholder="请输入用户名">
													</div>
												</div>
											</li>
											<li class="item-content">
												<div class="item-media"><i class="iconfont">&#xe629;</i></div>
												<div class="item-inner">
													<div class="item-input">
														<input type="password" v-model="User.loginPwd" name="password" placeholder="请输入登录密码">
													</div>
												</div>
											</li>
										</ul>
										<input class="button" @click.prevent="login" type="submit" name="submit" value="登录">
									</div>
									<div class="list-block">
										<div class="list-block-label">
											<p>
												<a href="#" class="close-login-screen">Close Login Screen</a>
											</p>
										</div>
									</div>
								</form>
								<div class="copyright">广东省价格监测中心</div>
							</div>
						</f7-page>
					</f7-pages>
				</f7-view>
			</f7-login-screen>

		</f7-views>

	</div>
</template>

<script>
	import SelectArea from "./components/selectArea"
	import Vue from 'vue'
	export default {
		data() {
			return {
				//登陆变量
				User: {
					loginName: '',
					loginPwd: ''
				},
				//index变量
				bgStyle: {
					background: "url(" + require("./assets/bg.png") + ") no-repeat",
					backgroundSize: '100% 100%'
				},
				classObject0: 'iconfont icon-shouye',
				classObject1: 'iconfont icon-renwu2',
				classObject2: 'iconfont icon-chaxun2',
				classObject3: 'iconfont icon-wo1',
				defaultArea: "广州",
				AreaDisplay: "none",
				ListWriteArr:[],//任务填报
				ListReturnArr:[],//任务退回
				ListCompletedArr:[],//任务完成
			}
		},
		mounted: function() {
			if(!localStorage.getItem('token')) {
				var myapp = new Framework7();
				myapp.loginScreen();
			}
			this.taskListWriteData();
			this.taskListReturnData();
			this.taskListCompletedData();
		},
		computed: {},
		methods: {
			taskListWriteData: function(){
				//获取任务填报数据
				this.$ajax.taskListWrite().then(res => {
					this.ListWriteArr = [...res.dataList];
				})
			},
			taskListReturnData: function(){
				//获取任务退回数据
				this.$ajax.taskListReturn().then(res => {
					this.ListReturnArr = [...res.dataList];
				})
			},
			taskListCompletedData: function(){
				//获取任务完成数据
				this.$ajax.taskListCompleted().then(res => {
					this.ListCompletedArr = [...res.dataList];
				})
			},
			changeIcon: function(index) {
				switch(index) {
					case 0:
						this.classObject0 = 'iconfont icon-shouye2';
						this.classObject1 = 'iconfont icon-renwu2';
						this.classObject2 = 'iconfont icon-chaxun2'
						this.classObject3 = 'iconfont icon-wo1'
						break;
					case 1:
						this.classObject0 = 'iconfont icon-shouyexian';
						this.classObject1 = 'iconfont icon-renwumian1';
						this.classObject2 = 'iconfont icon-chaxun2'
						this.classObject3 = 'iconfont icon-wo1'
						break;
					case 2:
						this.classObject0 = 'iconfont icon-shouyexian';
						this.classObject1 = 'iconfont icon-renwu2';
						this.classObject2 = 'iconfont icon-chaxunmian1'
						this.classObject3 = 'iconfont icon-wo1'
						break;
					case 3:
						this.classObject0 = 'iconfont icon-shouyexian';
						this.classObject1 = 'iconfont icon-renwu2';
						this.classObject2 = 'iconfont icon-chaxun2'
						this.classObject3 = 'iconfont icon-womian'
						break;
				}
			},
			BtnChange: function() {
				if(this.AreaDisplay == 'none') {
					this.AreaDisplay = 'flex'
				} else {
					this.AreaDisplay = 'none'
				}
			},
			BtnValue: function(value) {
				this.defaultArea = value;
				this.BtnChange();
			},
			issueTimeSub: function(time) {
				return time.substring(0, 10);
			},
			//登陆事件
			login: function() {
				if(this.User.loginName.trim() == '' || this.User.loginName == 'undefined') {
					f7.alert("用户名为空");
				} else if(this.User.loginPwd.trim() == '') {
					f7.alert("密码为空");
				} else {
					this.$ajax.Login(this.User)
						.then(response => {
							if('token' in response) {
								localStorage.setItem('token', response.token);
								f7.closeModal();
							} else if('msg' in response) {
								f7.alert(response.msg);
							}
						})
				}
			},
			//计算剩余时间
			timeRemaining: function(end) {
				//计算时间
				let currTime = new Date().getTime(),//当前时间
						endTime = new Date(end).getTime();//结束时间
				if(end != null && endTime >= currTime){
					let remaining = endTime - currTime,
							h = Math.floor(remaining/(3600*1000)),//时
							min = Math.floor((remaining%(3600*1000))/(60*1000));//分
					return h + '时' + min + '分'
				}else{
					return "已过期"
				}

			},
			/*
			 * 链接--例子
			 *	:href="bindLink('TaskWrite', [item.taskReportedId, item.taskCataId],[{index: item.taskReportedId,id: item.taskCataId}])"
			 *	返回：href = '/TaskWrite/1711818/1/?index=1711818&id:1'
			 */
			bindLink: function(path,params,query){
				let pathHead = '/'+ path + '/';

				//判断params参数是否为空
				if(params != undefined && params.length != 0){
					for(let i=0;i<params.length;i++){
						if(params[i] == null && params[i] == undefined ){
							if(i < params.length){
								continue;
							}else{
								return pathHead;
							}
						}
						else{
							pathHead = pathHead + params[i] + '/';

							if(i+1 == params.length && query == undefined){
								return pathHead;
							} else if(i+1 >= params.length && query.length != 0){
								let queryStr = JSON.stringify(query[0]).replace(/{/, '?').replace(/,/, '&').replace(/:/g, '=').replace(/"/g, '').replace(/}/, '');
								return pathHead + queryStr;
							}
						}
					}
				}else{
					return pathHead;
				}

			}
		},
		components: { SelectArea }
	}
</script>