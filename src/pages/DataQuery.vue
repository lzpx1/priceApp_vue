<template>
	<f7-page navbar-fixed no-tabbar no-page-content data-page="DataQuery">
		<!--导航-->
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a class="back" href="#">
					<i class="iconfont icon-zuo"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>数据查询</f7-nav-center>
			<f7-nav-right class="dr-css">
				<span class="a-filtrate" href="#" @click="toggle()">更多 <i class="iconfont">&#xe64a;</i></span>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->
		<SearchBar slot="fixed" InputPlaceholder="搜索" data-search-list=".taskList" data-search-in=".taskBox .taskList li a" class="d-FormFix"></SearchBar>
		<div class="page-content taskTab2">
			<div class="content-block taskBox">
				<div class="tabs">
					<div class="taskList">
						<ul>
							<li>
								<f7-link href="/DataQuery/" class="row">
									<div class="col-20"><img src="../../static/food.png"></div>
									<div class="row col-80">
										<h3>油粘米 <samp>（新鲜一级优质）</samp></h3>
										<p>任务：<span>广东省成品粮和小杂粮零售</span></p>
										<p>全市均价：<span class="sub">0.33%<samp>/元500克</samp></span><span class="right">2017-03-25</span></p>
										<p class="col-50">地区：<span>广州</span></p>
										<p class="col-50">环比：<span>0.33%</span></p>
									</div>
								</f7-link>
							</li>
							<li>
								<a href="Search_Commodity.html" class="row">
									<div class="col-20"><img src="../../static/food.png"></div>
									<div class="row col-80">
										<h3>油粘米 <samp>（新鲜一级优质）</samp></h3>
										<p>任务：<span>广东省成品粮和小杂粮零售</span></p>
										<p>全市均价：<span class="sub">0.33%<samp>/元500克</samp></span><span class="right">2017-03-25</span></p>
										<p class="col-50">地区：<span>广州</span></p>
										<p class="col-50">环比：<span>0.32%</span></p>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!--数据查询筛选-->
		<div v-show = 'isShow' class="filtrateBox" @click='toggle'>
			<div class="box" @click.stop>
				<div class="link">
					<a href="#" onclick="areaToChange(this)"><i class="iconfont color-dblue">&#xe6a3;</i>地区</a>
					<a href="#"><i class="iconfont color-dorange">&#xe6a6;</i>任务名称</a>
					<a href="#"><i class="iconfont color-dgreen">&#xe6a4;</i>定点单位</a>
					<a href="#"><i class="iconfont color-dred">&#xe6a5;</i>价格指标</a>
				</div>
				<form>
					<div class="condition">
						<p><label>地区</label>广州</p>
						<p><label>任务名称</label>广州市红华好滋润食品有限公司</p>
						<p><label>定点单位</label>广州市国际大宗商品价格监测日报</p>
						<p><label>价格指标</label>XXX</p>
					</div>
					<input type="submit" value="确定" />
				</form>
			</div>
		</div>
		<!--结束-->
		<!---->
	</f7-page>
</template>

<script>
	import SearchBar from "../components/SearchBar"
	export default {
		data(){
			return {
				isShow: false
			}
		},
		methods:{
			toggle: function(){
				this.isShow = !this.isShow;
				
			}
		},
		components: { SearchBar }
	}
</script>