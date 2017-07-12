<template>
	<f7-page navbar-fixed no-tabbar data-page="Notice" id="Notice" ><!--@page:beforeanimation="pageInit"-->
		<!--导航-->
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a class="back" href="#">
					<i class="iconfont icon-zuo"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>通知公告</f7-nav-center>
			<f7-nav-right>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->

		<ul class="Notice_list">
			<li v-if="NoticeListArr.length == 0" class="NoData">暂无数据</li>
			<li v-for="item in NoticeListArr">
				<f7-link :href="bindLink('News',[item.bullentId])" class="row no-gutter">
					<div class="col-20">
						<i class="iconfont icon-tongzhigonggao1"></i>
					</div>
					<div class="col-80">
						<p>
							<span class="PName">{{item.title}}</span>
						</p>
						<p>
							<span>{{issueTimeSub(item.noticeDate)}}</span>
							<span class="right">{{item.sendOrg}}</span>
						</p>
					</div>
				</f7-link>
			</li>
		</ul>

		<!--<div class="swiper-nav swiper-container swiper-free-mode   TabSwiperNav" style="border-bottom: 1px solid #eaeaea;">
			<div class="swiper-wrapper buttons-row">
				<div class="swiper-slide swiper-slide-visible swiper-slide-active active button">未完成</div>
				<div class="swiper-slide swiper-slide-visible button">已完成</div>
			</div>
		</div>
		<div class="swiper-pages swiper-container TabSwiperPages">
			<div class="swiper-wrapper">
				<div id="tab1" class="active swiper-slide swiper-slide-visible swiper-slide-active">
					<ul class="Notice_list">
						<li>
							<a href="#" class="row no-gutter">
								<div class="col-20">
									<i class="iconfont icon-tongzhigonggao1"></i>
								</div>
								<div class="col-80">
									<p>
										<span class="PName">2017年3月17日短信</span>
										<span class="fright">陈铁夫</span>
									</p>
									<p>
										<span>2017-03-17 &nbsp;14:39:22</span>
									</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#" class="row no-gutter">
								<div class="col-20">
									<i class="iconfont icon-tongzhigonggao1"></i>
								</div>
								<div class="col-80">
									<p>
										<span class="PName">2017年3月17日短信</span>
										<span class="fright">陈铁夫</span>
									</p>
									<p>
										<span>2017-03-17 &nbsp;14:39:22</span>
									</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#" class="row no-gutter">
								<div class="col-20">
									<i class="iconfont icon-tongzhigonggao1"></i>
								</div>
								<div class="col-80">
									<p>
										<span class="PName">2017年3月17日短信</span>
										<span class="fright">陈铁夫</span>
									</p>
									<p>
										<span>2017-03-17 &nbsp;14:39:22</span>
									</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#" class="row no-gutter">
								<div class="col-20">
									<i class="iconfont icon-tongzhigonggao1"></i>
								</div>
								<div class="col-80">
									<p>
										<span class="PName">2017年3月17日短信</span>
										<span class="fright">陈铁夫</span>
									</p>
									<p>
										<span>2017-03-17 &nbsp;14:39:22</span>
									</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
				<div id="tab2" class="swiper-slide">
					<div class="content-block">
						<div class="list-block">
							<ul>1</ul>
						</div>
					</div>
				</div>
			</div>
		</div>-->
		<!--结束-->
		<!---->
	</f7-page>
</template>

<script>
	/*import InitPage from '../components/PageInit.vue';
	export default {
		methods: {
			pageInit: function() {
				InitPage.SwiperInit();
			}
		}
	}*/
	import {bindLink,timeRemaining,issueTimeSub,timeChange} from "../components/gather.vue"
	export default {
		data(){
		return {
			NoticeListArr:[],
		}
	},
	mounted:function(){
		this.initData();
	},
	methods:{
		initData: function(){
			//获取通知公告列表
			this.$ajax.NoticeList().then(res => {
				this.NoticeListArr = [...res.dataList];
			});
		},
		bindLink,//链接--例子详情gather.vue
		timeRemaining,//计算剩余时间
		issueTimeSub,//截取时间 10位
		timeChange,//时间格式转换和截取
	},
	components:{}
	}
</script>