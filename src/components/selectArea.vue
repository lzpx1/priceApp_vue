<template>
	<!--区域选择-->
	<div class="areaSelect" :style="{display: AreaDisplay}" @click="areaToChange">
		<div class="box" @click.stop>
			<div class="line">
				<h3>珠三角</h3>
				<ul>
					<li v-for="AreaName in AreaYD" @click='selectArea(AreaName)'>{{AreaName}}</li>
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
</template>

<script>
//	import{ mapState } from 'vuex' 
	export default { 
		data(){
			return {
				AreaYD: ["广州","深圳","珠海","佛山","江门","中山","东莞","惠州","肇庆"]
			}
		},
		props: ['AreaDisplay','defaultArea'],
		computed: { 
//			...mapState(['Area']) 
		}, 
		methods: { 
//			selectArea(value) { 
//				this.$store.dispatch('A_SelectArea',value); 
//			},
			areaToChange: function(){
//				this.$store.commit('areaToChange');
				this.$emit('areaToChange');
			},
			selectArea:function(value){
				this.$emit('selectArea',value);
			}
		} 
	}
</script>