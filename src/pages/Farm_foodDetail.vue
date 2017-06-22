<template>
	<f7-page no-tabbar navbar-fixed id="Farm_foodDetail" class="dftype">
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a href="#" class="back link">
					<i class="iconfont icon-zuo icon-back"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>农贸食品</f7-nav-center>
			<f7-nav-right sliding>
				<span class="btnArea" @click="BtnChange">
					<span class="a-tackArea">{{ defaultArea }}</span>
					<i class="iconfont icon-11"></i>
				</span>
			</f7-nav-right>
		</f7-navbar>
		<div class="detail_box">
			<div class="row no-gutter ">
				<div class="col-60">
					<h1>西洋菜</h1>
					<h4>当地营销&nbsp; 标准品一级</h4>
					<h1>
						<span>3.10元</span>
						<span>/500克</span>
					</h1>
				</div>
				<div class="col-40">
					<img src="../../static/food.png" />
				</div>
				<div class="col-50">最低:2.8元(云浮)</div>
				<div class="col-50">环比:0.53%</div>
				<div class="col-50">最高:3.5元(深圳)</div>
				<div class="col-50">日期:2017-04-24</div>
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
	</f7-page>

</template>

<script>
	import SelectArea from "../components/selectArea";
	export default {
		data(){
			return {
				defaultArea: "广州",
				AreaDisplay: "none",
			}
		},
		methods:{
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