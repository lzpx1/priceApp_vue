<template>
	<f7-page no-tabbar navbar-fixed id="Wo_Detail" data-page='Wo_Detail'>
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<div class="left">
					<a class="back" href="#">
						<i class="iconfont icon-zuo"></i>
					</a>
				</div>
			</f7-nav-left>
			<f7-nav-center sliding></f7-nav-center>
			<f7-nav-right>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->

		<!--图标背景-->
		<div class="detail_bg">
			<i class="iconfont icon-wo4"></i>
			<p><span>罗志辉</span><span>男</span></p>
			<p>广东省价格监测中心</p>
		</div>
		<!--结束-->

		<!--栏目1-->
		<div class="data">
			<div class="list-block">
				<ul>
					<li>
						<a href="javascript:void(0)" class="item-link item-content a-width">
							<div class="item-media"><i class="iconfont icon-zuoji color-dorange"></i></div>
							<div class="item-inner">
								<div class="item-title">座机电话</div>
							</div>
						</a>
					</li>
					<li>
						<a href="javascript:void(0)" class="item-link item-content a-width">
							<div class="item-media"><i class="iconfont icon-shouji color-dorange"></i></div>
							<div class="item-inner">
								<div class="item-title">手机号码</div>
							</div>
						</a>
					</li>
					<li>
						<a href="javascript:void(0)" class="item-link item-content a-width">
							<div class="item-media"><i class="iconfont icon-youxiang-copy color-dgreen"></i></div>
							<div class="item-inner">
								<div class="item-title">邮箱</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<!--结束-->

		<!--栏目2-->
		<div class="pwdEdit">
			<div class="list-block">
				<ul>
					<li>
						<a href="javascript:void(0)" class="item-link item-content a-width">
							<div class="item-media"><i class="iconfont icon-mima color-dblue"></i></div>
							<div class="item-inner">
								<div class="item-title">修改密码</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<!--结束-->

		<!--结束-->
	</f7-page>

</template>

<script>
	export default {
		data: function() {
			return {}
		},
		filters: {},
		methods: {},
		components: {}
	}
</script>