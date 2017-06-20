<template>
	<span class="btnArea" @click="areaToChange">
		<span class="a-tackArea">{{ Area.DefaultArea }}</span>
	<i class="iconfont icon-11"></i>
	</span>
</template>

<script>
	import{ mapState } from 'vuex' 
	export default { 
		computed: { 
			...mapState(['Area']) 
		}, 
		methods: { 
			areaToChange() { 
				this.$store.commit('areaToChange'); 
			} 
		} 
	}
</script>