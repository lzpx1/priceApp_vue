<template>
	<f7-page no-tabbar navbar-fixed id="Mail_message">
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a class="back" href="#">
				    <i class="iconfont icon-zuo"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>消息</f7-nav-center>
			<f7-nav-right>
				<f7-link href="/mail_list/"><span>通讯录</span></f7-link>
			</f7-nav-right>
		</f7-navbar>
		<!-- Search bar -->
		<!--默认data-search-list="#search-list"  :data-search-in=".item-title"   需要改变的话  searchList、searchIn 进行传值 参照f7文档搜索框-->
		<SearchBar slot="fixed" InputPlaceholder="搜索"></SearchBar>
		<!-- Search-through list -->
		<ul class="message_list searchbar-found" id="search-list">
						<li>
							<f7-link href="/mail_list_chat/" class="clearfloat item-title">
								<div class="Ticon fleft">
									<i class="iconfont icon-wo2"></i>
								</div>
								<div class="details">
									<p>
										<span class="PName">陈春丽</span>
										<span class="fright">17:56</span>
									</p>
									<p class="noturnline">
										广东省国际大宗商品价格监测广东省国际大宗商品价格监测
									</p>
								</div>
							</f7-link>
						</li>
						<li>
							<a href="#" class="clearfloat item-title">
								<div class="Ticon fleft">
									<i class="iconfont icon-wo2"></i>
								</div>
								<div class="details">
									<p>
										<span class="PName">陈春丽</span>
										<span class="fright">17:56</span>
									</p>
									<p class="noturnline">
										广东省国际大宗商品价格监测广东省国际大宗商品价格监测
									</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#" class="clearfloat item-title">
								<div class="Ticon fleft">
									<i class="iconfont icon-wo2"></i>
								</div>
								<div class="details">
									<p>
										<span class="PName">陈春丽</span>
										<span class="fright">17:56</span>
									</p>
									<p class="noturnline">
										广xi省国际大宗商品价格监测广东省国际大宗商品价格监测
									</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#" class="clearfloat item-title">
								<div class="Ticon fleft">
									<i class="iconfont icon-wo2"></i>
								</div>
								<div class="details">
									<p>
										<span class="PName">陈春</span>
										<span class="fright">17:56</span>
									</p>
									<p class="noturnline">
										广东省国际大宗商品价格监测广东省国际大宗商品价格监测
									</p>
								</div>
							</a>
						</li>
						
				</ul>

	</f7-page>

</template>

<script>
	import SearchBar from "../components/SearchBar"
	export default {
		data: function(){
			return {
				title:"农贸食品",
				NameList:["粮食","食用油","畜类","禽类","蛋类","蔬菜","水果","干货","水产品","加工食品"],
				DetailList: [
				   	{ Url: require("../../static/food.png"),name: '油粘米'},
				   	{ Url: require("../../static/food.png"),name: '油粘粥'},
				   	{ Url: require("../../static/food.png"),name: '油粘米'},
				   	{ Url: require("../../static/food.png"),name: '油粘米'},
				   	{ Url: require("../../static/food.png"),name: '油粘米'},
				   	{ Url: require("../../static/food.png"),name: '油粘米'},
				   	{ Url: require("../../static/food.png"),name: '油粘米'},
				   	{ Url: require("../../static/food.png"),name: '油粘米'},
				   	{ Url: require("../../static/food.png"),name: '油粘米'},
				   	{ Url: require("../../static/food.png"),name: '油粘米'},
				],
				flag: 0,
				searchBoole: true
			}
		},
		methods:{
			light: function(index){
				this.flag = index;
			},
			focus: function(){
				this.searchBoole = false;
			},
			blur: function(){
				this.searchBoole = true;
			}
		},
		components: { SearchBar }
	}
</script>