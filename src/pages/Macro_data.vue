<template>
	<f7-page navbar-fixed no-tabbar data-page="Macro_data" id="Macro_data">
		<!--导航-->
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a class="back" href="#">
					<i class="iconfont icon-zuo"></i>
				</a>
				<span>宏观数据</span>
			</f7-nav-left>
			<f7-nav-center sliding>
				<span class="btn">
	        		GDP<i class="iconfont icon-11"></i>
	        	</span></f7-nav-center>
			<f7-nav-right>
				<span class="btn">区域对比</span>
			</f7-nav-right>
		</f7-navbar>

		<!--搜索框-->
		<SearchBar slot="fixed" InputPlaceholder="搜索" data-search-list='.list-block-search' class="d-FormFix"></SearchBar>
		<!--搜索结束-->

		<!--内容-->
		<div class="part1">
			<div class="buttons-row">
				<a href="#" class="button">
					<span>广东</span>
					<i class="iconfont icon-xia"></i>
				</a>
				<a href="#" class="button">
					<span>国内</span>
					<i class="iconfont icon-xia"></i>
				</a>
				<a href="#" class="button">
					<span>国家</span>
					<i class="iconfont icon-xia"></i>
				</a>
			</div>
		</div>
		<div class="chart">

		</div>
		<div class="data_list  list-block-search">
			<ul class="searchbar-found">
				<li>
					<a href="" class="item-title">
						<div class="iconf">
							<i class="iconfont icon-kuanyi-guanqian-yuebao"></i>
						</div>
						<div class="item_content">
							<div class="item_title">
								<p class="noturnline">广东</p>
								<p class="noturnline">日期:2017年第4季度</p>
							</div>
						</div>
						<div class="index">
							<div>
								<span>经济指标:</span>
								<span>8.30</span>
							</div>
						</div>
					</a>
				</li>
				<li>
					<a href="" class="item-title">
						<div class="iconf">
							<i class="iconfont icon-kuanyi-guanqian-yuebao"></i>
						</div>
						<div class="item_content">
							<div class="item_title">
								<p class="noturnline">广东</p>
								<p class="noturnline">日期:2017年第4季度</p>
							</div>
						</div>
						<div class="index">
							<div>
								<span>经济指标:</span>
								<span>8.30</span>
							</div>
						</div>
					</a>
				</li>
				<li>
					<a href="" class="item-title">
						<div class="iconf">
							<i class="iconfont icon-kuanyi-guanqian-yuebao"></i>
						</div>
						<div class="item_content">
							<div class="item_title">
								<p class="noturnline">广东</p>
								<p class="noturnline">日期:2017年第4季度</p>
							</div>
						</div>
						<div class="index">
							<div>
								<span>经济指标:</span>
								<span>8.30</span>
							</div>
						</div>
					</a>
				</li>
				<li>
					<a href="" class="item-title">
						<div class="iconf">
							<i class="iconfont icon-kuanyi-guanqian-yuebao"></i>
						</div>
						<div class="item_content">
							<div class="item_title">
								<p class="noturnline">广xi</p>
								<p class="noturnline">日期:2017年第4季度</p>
							</div>
						</div>
						<div class="index">
							<div>
								<span>经济指标:</span>
								<span>8.20</span>
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>

		<!--结束-->
	</f7-page>
</template>

<script>
	import SearchBar from "../components/SearchBar";
	export default {
		data(){
			return {
				
			}
		},
		methods:{
		},
		components: { SearchBar }
	}
</script>