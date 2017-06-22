<template>
	<f7-page no-tabbar navbar-fixed no-page-content data-pag>
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a href="#" class="back link">
					<i class="iconfont icon-zuo icon-back"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>
				<marquee behavior="scroll" scrollamount="3">广东省劳动力市场价格监测月报</marquee>
			</f7-nav-center>
			<f7-nav-right>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->
		<div class="page-content taskTab2">
			<div class="row tackArea">
				<div class="col-40"><label @click="BtnChange"><span class="a-tackArea">{{defaultArea}}</span><i class="iconfont">&#xe64a;</i></label></div>
				<div class="col-60">
					<f7-link href="/TaskTable/">概览<i class="iconfont">&#xe6ba;</i></f7-link>
				</div>
			</div>
			<div class="taskProgress">
				<h3>广州市<span>上报：21/22</span></h3>
				<div class="line">
					初审
					<div class="d-progress">
						<span class="blue" style="width: 40%;"></span>
					</div>
					45%
				</div>
				<div class="line">
					复审
					<div class="d-progress">
						<span class="orange" style="width: 50%;"></span>
					</div>
					45%
				</div>
				<div class="line">
					终审
					<div class="d-progress">
						<span class="red" style="width: 70%;"></span>
					</div>
					45%
				</div>
			</div>
			<!-- tabs控制面板 -->
			<div class="taskTabs">
				<a href="#tabAll" class="tab-link active ">全部</a>
				<a href="#tabChecked" class="tab-link ">已审核</a>
			</div>
			<div class="content-block taskBox">
				<div class="tabs">
					<!--全部-->
					<div id="tabAll" class="tab active">
						<div class="taskList taskLine-3">
							<ul>
								<li>
									<f7-link href="/TaskFile/" class="row no-gutter">
										<div class="col-20 new"><i class="iconfont color-dblue">&#xe6c4;</i></div>
										<div class="row col-80">
											<h3>广州市文冲物业管理有限公司</h3>
											<p>上报时间：<span>2017-03-23&nbsp;&nbsp;&nbsp;13:17:21</span></p>
											<p>上报状态：<span>通过终审</span></p>
										</div>
									</f7-link>
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

		</div>

		<!--区域选择-->
		<SelectArea  slot='fixed' :AreaDisplay= "AreaDisplay" @areaToChange="BtnChange" @selectArea="BtnValue"></SelectArea>
		<!--结束-->
		<!---->
	</f7-page>

</template>

<script>
	import SearchBar from "../components/SearchBar"
	import SelectArea from "../components/selectArea";
	export default {
		data: function() {
			return {
				defaultArea: "广州",
				AreaDisplay: "none",
			}
		},
		methods: {
			BtnChange: function(){
				if(this.AreaDisplay == 'none'){
					this.AreaDisplay = 'flex'
				} else{
					this.AreaDisplay = 'none'
				}
			},
			BtnValue:function(value){
				this.defaultArea = value;
				this.BtnChange();
			}
		},
		components: { SearchBar , SelectArea}
	}
</script>