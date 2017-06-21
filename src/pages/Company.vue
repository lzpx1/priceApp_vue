<template>
	<f7-page no-tabbar navbar-fixed id="Company" data-page='Company'>
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<div class="left">
					<a class="back" href="#">
						<i class="iconfont icon-zuo"></i>
					</a>
				</div>
			</f7-nav-left>
			<f7-nav-center sliding>定点单位</f7-nav-center>
			<f7-nav-right>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->
		<SearchBar slot="fixed" InputPlaceholder="搜索" class='d-FormFix'></SearchBar>
		<h1>历史记录</h1>
		<ul class="searchbar-found list-block" id="search-list">
			<li class="item-content">
				<a href="javascript:void(0)" class="item-title">
					<i class="iconfont icon-dingwei color-dblue"></i>
					<span class="noturnline">汕尾信利广场贸易有限公司1</span>
				</a>
			</li>

			<li class="item-content">
				<a href="javascript:void(0)" class="item-title">
					<i class="iconfont icon-dingwei color-dblue"></i>
					<span class="noturnline">汕尾信利广场贸易有限公司1</span>
				</a>
			</li>
			<li class="item-content">
				<a href="javascript:void(0)" class="item-title">
					<i class="iconfont icon-dingwei color-dblue"></i>
					<span class="noturnline">汕尾信利广场贸易有限公司1</span>
				</a>
			</li>
			<li class="item-content">
				<a href="javascript:void(0)" class="item-title">
					<i class="iconfont icon-dingwei color-dblue"></i>
					<span class="noturnline">汕尾信利广场贸易有限公司1</span>
				</a>
			</li>
			<li class="item-content">
				<a href="javascript:void(0)" class="item-title">
					<i class="iconfont icon-dingwei color-dblue"></i>
					<span class="noturnline">汕尾信利广场贸易有限公司1</span>
				</a>
			</li>
			<li class="item-content">
				<a href="javascript:void(0)" class="item-title">
					<i class="iconfont icon-dingwei color-dblue"></i>
					<span class="noturnline">汕尾信利广场贸易有限公司1</span>
				</a>
			</li>
			<li class="item-content">
				<a href="javascript:void(0)" class="item-title">
					<i class="iconfont icon-dingwei color-dblue"></i>
					<span class="noturnline">汕尾信利广场贸易有限公司1</span>
				</a>
			</li>
			<li class="item-content">
				<a href="javascript:void(0)" class="item-title">
					<i class="iconfont icon-dingwei color-dblue"></i>
					<span class="noturnline">汕尾信利广场贸易有限公司1</span>
				</a>
			</li>
			<li class="item-content">
				<a href="javascript:void(0)" class="item-title">
					<i class="iconfont icon-dingwei color-dblue"></i>
					<span class="noturnline">汕尾信利广场贸易有限公司1</span>
				</a>
			</li>
			<li class="item-content">
				<a href="javascript:void(0)" class="item-title">
					<i class="iconfont icon-dingwei color-dblue"></i>
					<span class="noturnline">汕尾信利广场贸易有限公司1</span>
				</a>
			</li>
			<li class="item-content">
				<a href="javascript:void(0)" class="item-title">
					<i class="iconfont icon-dingwei color-dblue"></i>
					<span class="noturnline">汕头信利广场贸易有限公司2</span>
				</a>
			</li>
			<li class="item-content">
				<a href="javascript:void(0)" class="item-title">
					<i class="iconfont icon-dingwei color-dblue"></i>
					<span class="noturnline">汕尾信利广场贸易有限公司1</span>
				</a>
			</li>

		</ul>

		<!--结束-->
	</f7-page>

</template>

<script>
	import SearchBar from "../components/SearchBar"
	export default {
		data: function() {
			return {}
		},
		filters: {},
		methods: {},
		components: { SearchBar }
	}
</script>