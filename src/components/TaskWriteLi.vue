<template>
	<div>
		<a href="javascript:;" class="row">
		<div class="col-20"><img src="../../static/food.png" /></div>
		<div class="row col-80">
			<h3>{{ ProductItem.mercName }}<label class="right d-remark"  @click="ShowRemarksBox"><i class="iconfont">&#xe608;</i>备注</label></h3>
			<p class="col-50 a-pre">上期：<span>{{ ProductItem.priorPrice }}</span></p>
			<p class="col-50">涨跌幅：<span class="color-dgreen">{{ wave }}%</span></p>
			<p class="col-50 a-current">本期：<input type="text"  v-model="ProductItem.price" @blur="blur"/></p>
			<p class="col-50 d-details" @click="showDetail">详情<i class="iconfont">&#xe64a;</i></p>
		</div>
		</a>
		<div class="row taskDetails" :style="{display: detailShow}">
			<p class="col-50">规格等级：{{ProductItem.spec}}{{ProductItem.grade}}</p>
			<p class="col-50">计价单位：{{ProductItem.unit}}</p>
			<p class="col-50">全省均价：{{ProductItem.avgPrice}}元</p>
			<p class="col-50">产地品牌：{{ProductItem.producingarea}}</p>
		</div>	
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				detailShow: 'none'
			}
		},
		props: ['ProductItem','index'],
		filters:{
		},
		computed:{
			wave: function(){
				return Math.floor((this.ProductItem.price - this.ProductItem.priorPrice)*100)/100;
			}
		},
		methods:{
			showDetail: function(){
				if(this.detailShow == 'none') {
					this.detailShow = 'flex'
				} else {
					this.detailShow = 'none'
				}
			},
			blur: function(){
				//还要做条件判断
				if(this.ProductItem.price.trim() != '' && (this.wave > 3 || this.wave < -3)){
					if(this.ProductItem.waveReasonRemark.trim() == ''){
						this.$emit("ShowRemarksBox",this.index,true);
					}else{
						this.$emit("hasFilled",this.index);
					}
				} else if(this.ProductItem.price.trim() != ''){
					console.log("suc");
					this.$emit("hasFilled",this.index);
				}
			},
			ShowRemarksBox: function(){
				this.$emit("ShowRemarksBox",this.index);
			}
		}
	}
</script>

<style>

</style>