<template>
	<f7-page navbar-fixed no-tabbar id="Big_Commodity" class="dftype">
		<!--导航-->
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a class="back" href="#">
					<i class="iconfont icon-zuo"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>大宗商品</f7-nav-center>
			<f7-nav-right>
				<span class="btnArea" @click="BtnChange">
							<span class="a-tackArea">{{ defaultArea }}</span>
				<i class="iconfont icon-11"></i>
				</span>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->

		<div class="detail_box">
			<div class="row no-gutter ">
				<div class="col-60">
					<h1>黄金(纽约)</h1>
					<h4>美元/盎司</h4>
					<h1>1228.4元</h1>
				</div>
				<div class="col-40">
					<img src="static/food.png" />
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
		<SelectArea slot='fixed' :AreaDisplay="AreaDisplay" @areaToChange="BtnChange" @selectArea="BtnValue"></SelectArea>
		<!--结束-->
		</div>

	</f7-page>
</template>

<script>
	import SelectArea from "../components/selectArea";
	export default {
		data() {
			return {
				defaultArea: "广州",
				AreaDisplay: "none",
			}
		},
		methods: {
			BtnChange: function() {
				if(this.AreaDisplay == 'none') {
					this.AreaDisplay = 'flex'
				} else {
					this.AreaDisplay = 'none'
				}
			},
			BtnValue: function(value) {
				this.defaultArea = value;
				this.BtnChange();
			}
		},
		components: { SelectArea }
	}
</script>