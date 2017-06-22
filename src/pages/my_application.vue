<template>
	<f7-page no-tabbar navbar-fixed id="my_application">
		<f7-navbar v-if="$theme.ios">
			<f7-searchbar search-list="#list-block-application" searchIn=".item-application" overlay='string' placeholder="全部应用" :clear="true">
				<a href="" class="backico back Search-back" slot="before-input"><i class="iconfont icon-u-arrow3-left"></i></a>
				<div class="write" slot="after-input">编辑</div>
			</f7-searchbar>
		</f7-navbar>
		<h4>全部应用</h4>
		<div class="searchbar-found " id="list-block-application">
			<ul class="row">
				<!-- Each "cell" has col-[widht in percents] class -->
				<li class="col-25">
					<a href="Farm_food.htmla" class="item-application">
						<i class="iconfont icon-nongmaoshipin color-dblue"></i>
						<p>农贸食品</p>
					</a>
				</li>
				<li class="col-25">
					<a href="#" class="item-application">
						<i class="iconfont icon-chaoshishipin color-dred"></i>
						<p>超市食品</p>
					</a>
				</li>
				<li class="col-25">
					<a href="#" class="item-application">
						<i class="iconfont icon-dazongshangpin color-dorange"></i>
						<p>大宗食品</p>
					</a>
				</li>
				<li class="col-25">
					<a href="#" class="item-application">
						<i class="iconfont icon-gongyechanpin color-dgreen"></i>
						<p>工业产品</p>
					</a>
				</li>
				<li class="col-25">
					<a href="#" class="item-application">
						<i class="iconfont icon-jiagezixun color-dorange"></i>
						<p>价格咨询</p>
					</a>
				</li>
				<li class="col-25">
					<a href="#" class="item-application">
						<i class="iconfont icon-jiagezhishu color-dgreen"></i>
						<p>价格指数</p>
					</a>
				</li>
				<li class="col-25">
					<a href="PriceWarning.html" class="item-application">
						<i class="iconfont icon-jiageyujing color-dblue"></i>
						<p>价格预警</p>
					</a>
				</li>
				<li class="col-25">
					<f7-link href="/Macro_Judgment/">
						<i class="iconfont icon-hongguanyanpan color-dred"></i>
						<p>宏观研判</p>
					</f7-link>
				</li>
				<li class="col-25">
					<f7-link href="/Macro_data/" class="item-application">
						<i class="iconfont icon-hongguanshuju color-dred"></i>
						<p>宏观数据</p>
					</f7-link>
				</li>
				<li class="col-25">
					<f7-link href="/task_monitoring/" class="item-application">
						<i class="iconfont icon-renwujiankong color-dblue"></i>
						<p>任务监控</p>
					</f7-link>
				</li>
				<li class="col-25">
					<f7-link href="/my_ToWork/" class="item-application">
						<i class="iconfont icon-wodedaiban color-dorange"></i>
						<p>我的待办</p>
					</f7-link>
				</li>
				<li class="col-25">
					<f7-link href="/Notice/" class="item-application">
						<i class="iconfont icon-jiageyujing color-dgreen"></i>
						<p>通知公告</p>
					</f7-link>
				</li>
			</ul>
		</div>

	</f7-page>

</template>
<style>
   #my_application	.navbar-inner{padding: 0;}
</style>

<script>
	export default {}
</script>