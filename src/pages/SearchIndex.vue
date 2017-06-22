<template>
	<f7-page navbar-fixed no-tabbar data-page="Notice_Search" id='Notice_Search'>
		<!--导航-->
		<f7-navbar v-if="$theme.ios">
			<form class="searchbar searchbar-init">
				<a href="" class="back"><i class="iconfont icon-zuo"></i></a>
				<div class="searchbar-input">
					<input id="more_application" type="search" placeholder="请输入关键字">
					<a href="#" class="searchbar-clear"></a>
				</div>
				<span>查询</span>
			</form>
		</f7-navbar>
		<!--内容-->
		<div class="his_Search">
			<div class="clearfloat head_title">
				<span class="fleft">历史搜索</span>
				<i class="iconfont icon-shanchu fright"></i>
			</div>
			<ul class="clearfloat">
				<li>价格监测</li>
				<li>价格监测</li>
				<li>价格监测</li>
				<li>价格监测</li>
				<li>价格监测</li>
				<li>价格监测</li>
				<li>价格监测</li>
				<li>价格监测</li>

			</ul>
		</div>
		<div class="find_Search">
			<div class="clearfloat head_title">
				<span class="fleft">搜索发现</span>
				<i class="iconfont icon-shanchu fright"></i>
			</div>
			<ul class="clearfloat">
				<li>价格监测</li>
				<li>监测系统分析</li>
				<li>元旦春节期间市场</li>
				<li>价格</li>
				<li>元旦春节期间市场</li>

			</ul>
		</div>

		<!--结束-->
		<!---->
	</f7-page>
</template>
<style>
	#Notice_Search .navbar-inner {
		padding: 0;
	}
</style>
<script>
	export default {}
</script>