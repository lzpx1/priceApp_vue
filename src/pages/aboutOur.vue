<template>
	<f7-page no-tabbar navbar-fixed id="aboutOur" data-page='aboutOur'>
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<div class="left">
					<a class="back" href="#">
						<i class="iconfont icon-zuo"></i>
					</a>
				</div>
			</f7-nav-left>
			<f7-nav-center sliding>关于我们</f7-nav-center>
			<f7-nav-right>
			</f7-nav-right>
		</f7-navbar>
		<div class="detail">
			<img src="../../static/images.png">
			<div>
				<span>广东价格</span>
				<span>2.9</span>
			</div>
			<p>
				<span>版本更新</span>
				<span></span>
			</p>
		</div>
		<div class="text">
			<p>该APP为广东省价格监测业务管理移动终端软件，与广东省价格监测预警管理系统实现无缝对接，支持全省价格监测工作人员手持移动终端，随时随地进行价格监测数据采集、填报、审核、巡查、预警和发布等相关工作</p>
			<h3>技术支持</h3>
			<p>本软件有广东省价格监测中心、联通系统集成有限公司广东省分公司和广东荣晖信息工程有限公司合作开发</p>
		</div>

	</f7-page>

</template>

<script>
	export default {
		data: function() {
			return {}
		},
		filters: {},
		methods: {}
	}
</script>