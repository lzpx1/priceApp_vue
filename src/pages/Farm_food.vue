<template>
	<f7-page no-tabbar navbar-fixed id="Farm_food">
		<f7-navbar>
			<f7-nav-left sliding>
				<a href="#" class="back link">
					<i class="iconfont icon-zuo icon-back"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>{{title}}</f7-nav-center>
			<f7-nav-right>
			</f7-nav-right>
		</f7-navbar>
		<!-- Search bar -->
		<!--默认data-search-list="#search-list"  :data-search-in=".item-title"   需要改变的话  searchList、searchIn 进行传值 参照f7文档搜索框-->
		<SearchBar slot="fixed" InputPlaceholder="请输入商品名称"></SearchBar>
		<!-- Search-through list -->
		<div class="row">
			<div class="col-25">
				<ul>
					<!--<li class="select">粮食</li>
						<li>食用油</li>
						<li>畜类</li>
						<li>禽类</li>
						<li>蛋类</li>
						<li>蔬菜</li>
						<li>水果</li>
						<li>干货</li>
						<li>水产品</li>
						<li>加工食品</li>-->
					<li v-for="(name,index) in NameList" :class="{'select':flag==index}" @click = 'light(index)'>{{name}}</li>
				</ul>
			</div>
			<div class="col-75 searchbar-found" id="search-list">
				<ul class="row no-gutter">
					<!--<li class="col-33">
						<f7-link href="/Farm_foodDetail/" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</f7-link>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘粥</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>
					<li class="col-33">
						<a href="Farm_foodDetail.html" class="item-title">
							<img src="../../static/food.png" />
							<p>油粘米</p>
						</a>
					</li>-->
					
					<li v-for="item in DetailList" class="col-33">
						<f7-link href="/Farm_foodDetail/" class="item-title">
							<img :src="item.Url">
							<p>{{item.name}}</p>
						</f7-link>
					</li>
				</ul>
			</div>
		</div>

	</f7-page>

</template>

<script>
	import SearchBar from "./SearchBar"
	export default {
		data: function(){
			return {
				title:"农贸食品",
				NameList:["粮食","食用油","畜类","禽类","蛋类","蔬菜","水果","干货","水产品","加工食品"],
				DetailList: [
				   	{ Url: '../../static/food.png',name: '油粘米'},
				   	{ Url: '../../static/food.png',name: '油粘粥'},
				   	{ Url: '../../static/food.png',name: '油粘米'},
				   	{ Url: '../../static/food.png',name: '油粘米'},
				   	{ Url: '../../static/food.png',name: '油粘米'},
				   	{ Url: '../../static/food.png',name: '油粘米'},
				   	{ Url: '../../static/food.png',name: '油粘米'},
				   	{ Url: '../../static/food.png',name: '油粘米'},
				   	{ Url: '../../static/food.png',name: '油粘米'},
				   	{ Url: '../../static/food.png',name: '油粘米'},
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