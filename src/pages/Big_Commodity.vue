<template>
	<f7-page navbar-fixed  no-tabbar id="Big_Commodity" class="dftype">
				<!--导航-->
				<f7-navbar v-if="$theme.ios">
					<f7-nav-left sliding>
						<a class="back" href="#">
				        		<i class="iconfont icon-zuo"></i>
				        	</a>
					</f7-nav-left>
					<f7-nav-center sliding>大宗商品</f7-nav-center>
					  <f7-nav-right>
							<span class="btnArea" @click="areaToChange"><span class="a-tackArea">{{Area}}</span><i class="iconfont icon-11"></i></span>
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
								<img src="static/food.png"/>
							</div>
						</div>
						<div class="Chart"></div>
					</div> 
					
					<div class="type_new">
						<h1>新闻</h1>
						<ul class="newlist">
							<li class="noturnline">
								<i class="iconfont icon-dian"></i>
								<a href="#">受汛情影响不大  西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
							</li>
							<li class="noturnline">
								<i class="iconfont icon-dian"></i>
								<a href="#">受汛情影响不大  西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
							</li><li class="noturnline">
								<i class="iconfont icon-dian"></i>
								<a href="#">受汛情影响不大  西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
							</li><li class="noturnline">
								<i class="iconfont icon-dian"></i>
								<a href="#">受汛情影响不大  西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
							</li><li class="noturnline">
								<i class="iconfont icon-dian"></i>
								<a href="#">受汛情影响不大  西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
							</li><li class="noturnline">
								<i class="iconfont icon-dian"></i>
								<a href="#">受汛情影响不大  西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
							</li><li class="noturnline">
								<i class="iconfont icon-dian"></i>
								<a href="#">受汛情影响不大  西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
							</li><li class="noturnline">
								<i class="iconfont icon-dian"></i>
								<a href="#">受汛情影响不大  西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
							</li><li class="noturnline">
								<i class="iconfont icon-dian"></i>
								<a href="#">受汛情影响不大  西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定西洋菜供应稳定</a>
							</li>
							
						</ul>
					</div>

				

				<!--区域选择-->
				<div class="areaSelect" slot="fixed"  :style = "{display: AreaDisplay}" @click = 'areaToChange'>
					<div class="box" @click.stop>
						<div class="line">
							<h3>珠三角</h3>
							<ul>
								<li v-for="AreaName in AreaYD" @click = 'selectArea(AreaName)'>{{AreaName}}</li>
							</ul>
						</div>
						<div class="line">
							<h3>粤东</h3>
							<ul>
								<li>汕头</li>
								<li>潮州</li>
								<li>揭阳</li>
								<li>汕尾</li>
							</ul>
						</div>
						<div class="line">
							<h3>粤西</h3>
							<ul>
								<li>湛江</li>
								<li>茂名</li>
								<li>阳江</li>
								<li>云浮</li>
							</ul>
						</div>
						<div class="line">
							<h3>粤北</h3>
							<ul>
								<li>韶关</li>
								<li>清远</li>
								<li>河源</li>
								<li>梅州</li>
							</ul>
						</div>
					</div>
				</div>
				<!--结束-->
			</div>
		
</f7-page>
</template>

<script>
	export default {
		data(){
			return {
				Area:"广州",
				rule:false,
				AreaDisplay: "none",
				AreaYD: ["广州","深圳","珠海","佛山","江门","中山","东莞","惠州","肇庆"]
			}
		},
		methods:{
			areaToChange: function(){
				if(this.AreaDisplay == 'none'){
					this.AreaDisplay = 'flex'
				} else{
					this.AreaDisplay = 'none'
				}
			},
			selectArea: function(value){
				this.Area = value;
				this.areaToChange();
			}
		}
	}
</script>