<template>
	<f7-page no-tabbar navbar-fixed id="Mail_list">
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<div class="left">
					<a class="back" href="#">
						<i class="iconfont icon-zuo"></i>
					</a>
				</div>
			</f7-nav-left>
			<f7-nav-center sliding>通讯录</f7-nav-center>
			<f7-nav-right>
				<i class="iconfont icon-llhomesearch"></i>
			</f7-nav-right>
		</f7-navbar>
		<div class="Common_mail list-block">
			<div class="item-content">
				<div class="item-media">
					<span class="bgcolor-1">
            			<i class="iconfont icon-yonghu"></i>
            		</span>
				</div>
				<div class="item-inner">
					<div class="item-title">
						<p class="noturnline">常用联系人</p>
					</div>
				</div>
			</div>
		</div>
		<div class="nomoral list-block contacts-block">
			<div class="list-group">
				<ul>
					<li class="list-group-title">A</li>
					<li v-for='person in randomArray(PerList)' >
						<a class="item-content" href="mail_list_chat.html">
							<div class="item-media">
								<span :class="person.color">{{person.name | splitName}}</span>
							</div>
							<div class="item-inner">
								<div class="item-title">
									<p v-text='person.name'></p>
									<p v-text='person.Company'></p>
								</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
			<div class="list-group">
				<ul>
					<li class="list-group-title">B</li>
					<li>
						<div class="item-content">
							<div class="item-media">
								<span class="bgcolor-1">春丽</span>
							</div>
							<div class="item-inner">
								<div class="item-title">
									<p>陈春丽</p>
									<p>[定点单位]</p>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="item-content">
							<div class="item-media">
								<span class="bgcolor-2">春丽</span>
							</div>
							<div class="item-inner">
								<div class="item-title">
									<p>陈春丽</p>
									<p>[定点单位]</p>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="item-content">
							<div class="item-media">
								<span class="bgcolor-3">春丽</span>
							</div>
							<div class="item-inner">
								<div class="item-title">
									<p>陈春丽</p>
									<p>[定点单位]</p>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="item-content">
							<div class="item-media">
								<span class="bgcolor-4">春丽</span>
							</div>
							<div class="item-inner">
								<div class="item-title">
									<p>陈春丽</p>
									<p>[定点单位]</p>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="item-content">
							<div class="item-media">
								<span class="bgcolor-1">春丽</span>
							</div>
							<div class="item-inner">
								<div class="item-title">
									<p>陈春丽</p>
									<p>[定点单位]</p>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</f7-page>

</template>

<script>
	export default {
		data: function() {
			return {
				PerList: [
				   	{ name: '陈春丽', Company: '定点单位' },
				   	{ name: '陈春丽', Company: '定点单位' },
				   	{ name: '陈春丽', Company: '定点单位' },
				   	{ name: '陈丽', Company: '定点单位' },
				   	{ name: '陈春丽', Company: '定点单位' },
				   	{ name: '陈春丽', Company: '定点单位' },
				   	{ name: '陈春丽', Company: '定点单位' },
				]
			}
		},
		filters: {
			splitName: function(value){
				return  value.substr(1);
			}
		},
		methods: {
			randomArray: function(array1){
				Dom7.each(array1,function(index,value){
					var num = Math.floor(Math.random()*4 + 1);
					value.color = 'bgcolor-' + num;
				});
				return array1; 
			}
		}
	}
</script>