<template>
	<f7-page navbar-fixed  no-tabbar id="PriceWarning" >
				<!--导航-->
				<f7-navbar v-if="$theme.ios">
					<div class="navbar-inner">
						<f7-nav-left sliding>
						<a class="back" href="#">
				        		<i class="iconfont icon-zuo"></i>		        		
				        </a>
						</f7-nav-left>
				       <f7-nav-center sliding>价格预警</f7-nav-center> 
				       <f7-nav-right>
							<span class="btnArea" @click="BtnChange">
								<span class="a-tackArea">{{ defaultArea }}</span>
								<i class="iconfont icon-11"></i>
							</span>
				       </f7-nav-right>
				    </div>
				</f7-navbar>

				<!--搜索框-->
				<SearchBar slot="fixed" InputPlaceholder="搜索" data-search-list='.list-block-search' class = "d-FormFix"></SearchBar>
				<!--搜索结束-->
				
				<!--内容-->
				<div class="Warning_list list-block-search">
						<ul class="searchbar-found">
							<li class="clearfloat">
								<div class="item_content item-title">
									<i class="iconfont icon-jingbao fleft color-dorange"></i>
									<span>中度上涨</span>
									<p>
										<span class="">大米</span>
										<span class="fright color-dgreen">-0.59%</span>
									</p>
									<p>
										<span>环比:<em>+1.54%</em></span>
										<span class="fright">涨跌幅</span>
									</p>
								</div>
							</li>
							<li class="clearfloat">
								<div class="item_content  item-title">
									<i class="iconfont icon-jingbao fleft color-dblue"></i>
									<span>轻度下跌</span>
									<p>
										<span class="">粮食</span>
										<span class="fright color-dgreen">-0.59%</span>
									</p>
									<p>
										<span>环比:<em>+1.54%</em></span>
										<span class="fright">涨跌幅</span>
									</p>
								</div>
							</li>
							<li class="clearfloat">
								<div class="item_content  item-title">
									<i class="iconfont icon-jingbao fleft color-dblue"></i>
									<span>轻度下跌</span>
									<p>
										<span class="">粮食</span>
										<span class="fright color-dgreen">-0.59%</span>
									</p>
									<p>
										<span>环比:<em>+1.54%</em></span>
										<span class="fright">涨跌幅</span>
									</p>
								</div>
							</li>
							<li class="clearfloat">
								<div class="item_content  item-title">
									<i class="iconfont icon-jingbao fleft color-dblue"></i>
									<span>轻度下跌</span>
									<p>
										<span class="">粮食</span>
										<span class="fright color-dgreen">-0.59%</span>
									</p>
									<p>
										<span>环比:<em>+1.54%</em></span>
										<span class="fright">涨跌幅</span>
									</p>
								</div>
							</li>
							<li class="clearfloat">
								<div class="item_content  item-title">
									<i class="iconfont icon-jingbao fleft color-dblue"></i>
									<span>轻度下跌</span>
									<p>
										<span class="">粮食</span>
										<span class="fright color-dgreen">-0.59%</span>
									</p>
									<p>
										<span>环比:<em>+1.54%</em></span>
										<span class="fright">涨跌幅</span>
									</p>
								</div>
							</li>
							<li class="clearfloat">
								<div class="item_content  item-title">
									<i class="iconfont icon-jingbao fleft color-dblue"></i>
									<span>轻度下跌</span>
									<p>
										<span class="">粮食</span>
										<span class="fright color-dgreen">-0.59%</span>
									</p>
									<p>
										<span>环比:<em>+1.54%</em></span>
										<span class="fright">涨跌幅</span>
									</p>
								</div>
							</li>
							<li class="clearfloat">
								<div class="item_content  item-title">
									<i class="iconfont icon-jingbao fleft color-dblue"></i>
									<span>轻度下跌</span>
									<p>
										<span class="">粮食</span>
										<span class="fright color-dgreen">-0.59%</span>
									</p>
									<p>
										<span>环比:<em>+1.54%</em></span>
										<span class="fright">涨跌幅</span>
									</p>
								</div>
							</li>
							<li class="clearfloat">
								<div class="item_content item-title">
									<i class="iconfont icon-jingbao fleft color-dgreen"></i>
									<span>正常</span>
									<p>
										<span class="">粮食</span>
										<span class="fright color-dgreen">-0.59%</span>
									</p>
									<p>
										<span>环比:<em>+1.54%</em></span>
										<span class="fright">涨跌幅</span>
									</p>
								</div>
							</li>
							<li class="clearfloat">
								<div class="item_content item-title">
									<i class="iconfont icon-jingbao fleft color-dorange"></i>
									<span>中度上涨</span>
									<p>
										<span class="">商品</span>
										<span class="fright color-dgreen">-0.59%</span>
									</p>
									<p>
										<span>环比:<em>+1.54%</em></span>
										<span class="fright">涨跌幅</span>
									</p>
								</div>
							</li>
							<li class="clearfloat">
								<div class="item_content item-title">
									<i class="iconfont icon-jingbao fleft color-dorange"></i>
									<span>中度上涨</span>
									<p>
										<span class="">粮食</span>
										<span class="fright color-dgreen">-0.59%</span>
									</p>
									<p>
										<span>环比:<em>+1.54%</em></span>
										<span class="fright">涨跌幅</span>
									</p>
								</div>
							</li>
						</ul>
						<div class="btnShow" @click="hideRule">查看预警规则</div>
						<div class="rule_table" v-show = 'rule'>
							<table border="0">
								<tr>
									<th>商品</th>
									<th>预警规则</th>
								</tr>
								<tr>
									<td>粮食</td>
									<td>
										绿灯:旬环比<2%  &nbsp
										黄灯:旬环比≥2%  &nbsp
										红灯:旬环比≥5%  &nbsp
									</td>
								</tr>
								<tr>
									<td>食用油</td>
									<td>
										绿灯:旬环比<2%  &nbsp
										黄灯:旬环比≥2%  &nbsp
										红灯:旬环比≥3%  &nbsp
									</td>
								</tr>
								<tr>
									<td>蔬菜</td>
									<td>
										绿灯:旬环比<10%  &nbsp
										黄灯:旬环比≥10%  &nbsp
										红灯:旬环比≥15%  &nbsp
									</td>
								</tr>
								<tr>
									<td>猪肉</td>
									<td>
										绿灯:旬环比<5%  &nbsp
										黄灯:旬环比≥5%  &nbsp
										红灯:旬环比≥10%  &nbsp
									</td>
								</tr>
								<tr>
									<td>鸡肉</td>
									<td>
										绿灯:旬环比<3%  &nbsp
										黄灯:旬环比≥3%  &nbsp
										红灯:旬环比≥5%  &nbsp
									</td>
								</tr>
								<tr>
									<td>鸡蛋</td>
									<td>
										绿灯:旬环比<3%  &nbsp
										黄灯:旬环比≥3%  &nbsp
										红灯:旬环比≥5%  &nbsp
									</td>
								</tr>
							</table>
							
							<table border="0">
								<tr>
									<th>信号灯</th>
									<th>预警规则</th>
								</tr>
								<tr>
									<td>绿灯</td>
									<td>
										价格正常:猪粮比价在5.5:1 - 8.5:1之间
									</td>
								</tr>
								<tr>
									<td>蓝灯</td>
									<td>
										价格轻度上涨或者轻度下跌:猪粮比价在8.5:1 - 9:1或5.5:1 - 5:1之间
									</td>
								</tr>
								<tr>
									<td>黄灯</td>
									<td>
										价格中度上涨或者中度下跌:猪粮比价在9:1 - 9.5:1或5:1 - 4.5:1之间
									</td>
								</tr>
								<tr>
									<td>红灯</td>
									<td>
										价格重度上涨或者重度下跌:猪粮比价高于9.5:1或低于5:1
									</td>
								</tr>
							</table>
						</div>
					</div>

				<!--区域选择-->
				<SelectArea  slot='fixed' :AreaDisplay= "AreaDisplay" @areaToChange="BtnChange" @selectArea="BtnValue"></SelectArea>
				<!--结束-->
	</f7-page>
</template>
<script>
	import SearchBar from "../components/SearchBar";
	import SelectArea from "../components/selectArea";
	export default {
		data(){
			return {
				rule:false,
				defaultArea: "广州",
				AreaDisplay: "none",
			}
		},
		methods:{
			hideRule: function(){
				if(this.rule == false){
					var Scolltop = Dom7('#PriceWarning .page-content').scrollTop();
					this.rule = true;
					setTimeout(function(){
						Dom7('#PriceWarning .page-content').scrollTop(Scolltop + 80);
					},100)
				}else{
					this.rule =!this.rule;
				}
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
		components: { SearchBar , SelectArea}
	}
</script>