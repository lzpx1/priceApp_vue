<template>
	<f7-page navbar-fixed no-tabbar  data-page="TaskFile">
		<!--导航-->
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a class="back" href="#">
					<i class="iconfont icon-zuo"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>汕头市11月份市场附件</f7-nav-center>
			<f7-nav-right>
				<a href="#">附件</a>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->
		<div class="taskFileBox">
                        <p>报告期：2016-11-09</p>
                        <p>截止时间：2016-11-09&nbsp;&nbsp;&nbsp;24:00:00</p>
                        <p>监测机构：汕头市监测中心</p>
                        <div class="msg">
                            汕头市11月份市场附件，请查收。
                        </div>
                    </div>
                    <!--填写暂存-->
                    <div class="taskToolbarBox">
                        <div class="row no-gutter taskToolbar">
                            <div class="col-50 btn">通过</div>
                            <div class="col-50 btn">退回</div>
                        </div>
                    </div>
		<!--结束-->
		<!---->
	</f7-page>
</template>

<script>
	export default {}
</script>