<template>
	<f7-page navbar-fixed no-tabbar no-page-content data-page="Report_pull" id="Report_pull" class='report'>
		<!--导航-->
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a class="back" href="#">
					<i class="iconfont icon-zuo"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>广东省劳动力市场价格监测月报</f7-nav-center>
			<f7-nav-right>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->
		<div class="page-content taskTab2">
			<!--<div class="btn_box">
						<span class="btn btnArea">广州<i class="iconfont icon-11"></i></span>
						<span class="btn btnSummary">广州<i class="iconfont icon-diqu"></i></span>
					</div>-->
			<div class="row tackArea">
				<div class="col-40"><label class="btnArea"><span class="a-tackArea">广州</span><i class="iconfont">&#xe64a;</i></label></div>
				<div class="col-60">
					<a href="javascript:;">概览<i class="iconfont">&#xe6ba;</i></a>
				</div>
			</div>
			<div class="area_num">
				<span>广州市</span>
				<span>天河区</span>
				<span>定点单位:4</span>
			</div>

			<!-- tabs控制面板 -->
			<div class="taskTabs">
				<a href="#tabAll" class="tab-link active ">未完成</a>
				<a href="#tabChecked" class="tab-link ">已完成</a>
			</div>
			<div class="content-block taskBox">
				<div class="tabs">
					<!--全部-->
					<div id="tabAll" class="tab active">
						<div class="taskList taskLine-3">
							<ul>
								<li>
									<a href="checkTask/TaskFile.html" class="row no-gutter">
										<div class="col-20 new"><i class="iconfont color-dblue">&#xe6c4;</i></div>
										<div class="row col-80">
											<h3>广州市文冲物业管理有限公司</h3>
											<p>上报时间：<span>2017-03-23&nbsp;&nbsp;&nbsp;13:17:21</span></p>
											<p>上报状态：<span>通过终审</span></p>
										</div>
									</a>
								</li>
								<li>
									<a href="#" class="row no-gutter">
										<div class="col-20"><i class="iconfont color-dblue">&#xe6c4;</i></div>
										<div class="row col-80">
											<h3>广州市文冲物业管理有限公司</h3>
											<p>上报时间：<span>2017-03-23&nbsp;&nbsp;&nbsp;13:17:21</span></p>
											<p>上报状态：<span>通过终审</span></p>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<!--已审核-->
					<div id="tabChecked" class="tab">
						<div class="taskList taskLine-3">
							<ul>
								<li>
									<a href="#" class="row no-gutter">
										<div class="col-20 new"><i class="iconfont color-dblue">&#xe6c4;</i></div>
										<div class="row col-80">
											<h3>广州市文冲物业管理有限公司</h3>
											<p>上报时间：<span>2017-03-23&nbsp;&nbsp;&nbsp;13:17:21</span></p>
											<p>上报状态：<span>通过终审</span></p>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<!--下拉地区-->
			<div class="row pull_area no-gutter" style="display: none;">
				<ul class="col-50 pull_left">
					<li class="clearfloat select"><span class="fleft">广州</span><span class="fright">5</span></li>
					<li class="clearfloat "><span class="fleft">广州</span><span class="fright">5</span></li>
					<li class="clearfloat"><span class="fleft">广州</span><span class="fright">5</span></li>
					<li class="clearfloat"><span class="fleft">广州</span><span class="fright">5</span></li>
					<li class="clearfloat"><span class="fleft">广州</span><span class="fright">5</span></li>
					<li class="clearfloat"><span class="fleft">广州</span><span class="fright">5</span></li>
					<li class="clearfloat"><span class="fleft">广州</span><span class="fright">5</span></li>
					<li class="clearfloat"><span class="fleft">广州</span><span class="fright">5</span></li>
					<li class="clearfloat"><span class="fleft">广州</span><span class="fright">5</span></li>
					<li class="clearfloat"><span class="fleft">广州</span><span class="fright">5</span></li>
					<li class="clearfloat"><span class="fleft">广州</span><span class="fright">5</span></li>
					<li class="clearfloat"><span class="fleft">广州</span><span class="fright">5</span></li>

				</ul>
				<ul class="col-50 pull_right">
					<li class="clearfloat"><span class="fleft">天河</span><span class="fright">5</span></li>
					<li class="clearfloat"><span class="fleft">海珠</span><span class="fright">5</span></li>
					<li class="clearfloat"><span class="fleft">越秀</span><span class="fright">5</span></li>
					<li class="clearfloat"><span class="fleft">花都</span><span class="fright">5</span></li>
					<li class="clearfloat"><span class="fleft">从化</span><span class="fright">5</span></li>
				</ul>
			</div>
			<!--结束-->
		</div>
		<!--结束-->
		<!---->
	</f7-page>
</template>

<script>
	export default {
		
	}
</script>