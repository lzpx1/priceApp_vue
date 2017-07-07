<template>
	<f7-page navbar-fixed no-tabbar  data-page="Search_Commodity" class="dftype" @page:beforeanimation="pageInit">
		<!--导航-->
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a class="back" href="#">
					<i class="iconfont icon-zuo"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>数据查询详情</f7-nav-center>
			<f7-nav-right>
				<span class="btnArea" @click="BtnChange">
					<span class="a-tackArea">{{ defaultArea }}</span>
					<i class="iconfont icon-11"></i>
				</span>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->
		<!--时间选择-->
		<div class="StimeBox">
			从
			<span><input name="MiningTime" placeholder="2017.04.01" type="text" readonly="readonly" class='calendar'><i class="iconfont">&#xe64a;</i></span> 截止到:
			<span><input name="MiningTime" placeholder="2017.04.01" type="text" readonly="readonly" id='calendar'><i class="iconfont">&#xe64a;</i></span>
		</div>
		<!--时间选择--结束-->
		<div class="detail_box">
			<div class="row no-gutter ">
				<div class="col-60">
					<h1>油粘米</h1>
					<h4>元/人民币</h4>
					<h1>1228.4元</h1>
				</div>
				<div class="col-40">
					<img src="../../static/food.png" />
				</div>
			</div>
			<div class="Chart"></div>
		</div>

		<div class="type_new">
			<h1>新闻</h1>
			<ul class="newlist">
				<li class="noturnline">
					<i class="iconfont icon-dian"></i>
					<a href="#">受汛情影响不大 西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
				</li>
				<li class="noturnline">
					<i class="iconfont icon-dian"></i>
					<a href="#">受汛情影响不大 西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
				</li>
				<li class="noturnline">
					<i class="iconfont icon-dian"></i>
					<a href="#">受汛情影响不大 西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
				</li>
				<li class="noturnline">
					<i class="iconfont icon-dian"></i>
					<a href="#">受汛情影响不大 西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
				</li>
				<li class="noturnline">
					<i class="iconfont icon-dian"></i>
					<a href="#">受汛情影响不大 西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
				</li>
				<li class="noturnline">
					<i class="iconfont icon-dian"></i>
					<a href="#">受汛情影响不大 西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
				</li>
				<li class="noturnline">
					<i class="iconfont icon-dian"></i>
					<a href="#">受汛情影响不大 西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
				</li>
				<li class="noturnline">
					<i class="iconfont icon-dian"></i>
					<a href="#">受汛情影响不大 西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
				</li>
				<li class="noturnline">
					<i class="iconfont icon-dian"></i>
					<a href="#">受汛情影响不大 西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
				</li>

			</ul>
		</div>
		<!--区域选择-->
		<SelectArea  slot='fixed' :AreaDisplay= "AreaDisplay" @areaToChange="BtnChange" @selectArea="BtnValue"></SelectArea>
		<!--结束-->
		<!---->
	</f7-page>
</template>

<script>
	import InitPage from '../components/PageInit.vue';
	import SelectArea from "../components/selectArea";
	export default {
		data(){
			return {
				defaultArea: "广州",
				AreaDisplay: "none",
			}
		},
		methods:{
			pageInit: function(){
				InitPage.TimeInit('.calendar','#calendar');
			},
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
		components: { SelectArea }
	}
</script>