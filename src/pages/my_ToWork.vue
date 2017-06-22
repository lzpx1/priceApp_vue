<template>
	<f7-page navbar-fixed no-tabbar data-page="ToWork">
		<!--导航-->
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a class="back" href="#">
					<i class="iconfont icon-zuo"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>我的待办</f7-nav-center>
			<f7-nav-right>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->
		<div class="content-block taskBox margin0">
						<div class="taskList">
							<ul>
								<li><a href="checkTask/TaskOverview.html" class="row no-gutter">
									<div class="col-20 new"><i class="iconfont color-dgreen">&#xe6bd;</i></div>
									<div class="row col-80">
										<h3>广东国际大宗商品价格监测日报（审核者）</h3>
										<p class="col-50">实审/应审：<span>0/1</span></p>
										<p class="col-50">实审/应审：<span>1/1</span></p>
										<p>剩余时间：<span>3小时39分</span></p>
										<p>报告期：<span>2016-12-12（第139期）</span></p>
									</div>
								</a></li>
								<li><a href="task/TaskWrite.html"  class="row no-gutter">
									<div class="col-20"><i class="iconfont color-dblue">&#xe6bd;</i></div>
									<div class="row col-80">
										<h3>广东国际大宗商品价格监测日报（填报者）</h3>
										<p class="col-50">实审/应审：<span>0/1</span></p>
										<p class="col-50">实审/应审：<span>1/1</span></p>
										<p>剩余时间：<span>3小时39分</span></p>
										<p>报告期：<span>2016-12-12（第139期）</span></p>
									</div>
								</a></li>
								<li><a href="checkTask/TaskOverview.html" class="row no-gutter">
									<div class="col-20 new"><i class="iconfont color-dgreen">&#xe6bd;</i></div>
									<div class="row col-80">
										<h3>广东国际大宗商品价格监测日报（审核者）</h3>
										<p class="col-50">实审/应审：<span>0/1</span></p>
										<p class="col-50">实审/应审：<span>1/1</span></p>
										<p>剩余时间：<span>3小时39分</span></p>
										<p>报告期：<span>2016-12-12（第139期）</span></p>
									</div>
								</a></li>
								<li><a href="task/TaskWrite.html"  class="row no-gutter">
									<div class="col-20"><i class="iconfont color-dblue">&#xe6bd;</i></div>
									<div class="row col-80">
										<h3>广东国际大宗商品价格监测日报（填报者）</h3>
										<p class="col-50">实审/应审：<span>0/1</span></p>
										<p class="col-50">实审/应审：<span>1/1</span></p>
										<p>剩余时间：<span>3小时39分</span></p>
										<p>报告期：<span>2016-12-12（第139期）</span></p>
									</div>
								</a></li>
							</ul>
						</div>
					</div>
				
		<!--结束-->
		<!---->
	</f7-page>
</template>

<script>
	export default {}
</script>