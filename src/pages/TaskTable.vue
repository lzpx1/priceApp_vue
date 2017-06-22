<template>
	<f7-page navbar-fixed no-tabbar no-page-content data-page="TaskTable">
		<!--导航-->
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a class="back" href="#">
					<i class="iconfont icon-zuo"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>广东省国际大宗商品价格监测月报</f7-nav-center>
			<f7-nav-right>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->
		<div class="page-content  taskTable">
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>地区</th>
						<th>上报</th>
						<th>初审</th>
						<th>复审</th>
						<th>终审</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>01</td>
						<td>广州</td>
						<td>12/32</td>
						<td>100%</td>
						<td>100%</td>
						<td>100%</td>
					</tr>
					<tr>
						<td>02</td>
						<td>深圳</td>
						<td>12/32</td>
						<td>100%</td>
						<td>100%</td>
						<td>100%</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="submitBtn">
			<form>
				<input type="submit" value="强制审核" />
			</form>
		</div>
		<!--结束-->
		<!---->
	</f7-page>
</template>

<script>
	export default {}
</script>