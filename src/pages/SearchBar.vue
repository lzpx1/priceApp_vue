<template>
	<form slot="fixed"  :data-search-list="searchList"  :data-search-in="searchIn" class="searchbar searchbar-init">
		<div class="searchbar_form searchbar-input">
		    <label for="q" id="q_label" v-show="searchBoole">{{InputPlaceholder}}</label>
		    <input id="q" type="search"  @focus ="focus" @blur = "blur">
		    <i class="iconfont icon-llhomesearch" id="q_i" v-show="searchBoole"></i>
		    <a href="#" class="searchbar-clear"></a>
		</div>
	</form>
</template>

<script>
	export default {
		props: {
		  searchList: {  // 可选字段，有默认值
		    default: '#search-list'
		  },
		  searchIn: {   // 可选字段，有默认值
		    default: '.item-title'
		  },
		  InputPlaceholder:{
		  	default: '请输入搜索条件'
		  }
		},
		data: function(){
			return {
				searchBoole: true
			}
		},
		methods:{
			focus: function(){
				this.searchBoole = false;
			},
			blur: function(){
				this.searchBoole = true;
			}
		}
	}
</script>