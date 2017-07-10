<template>
	<f7-page navbar-fixed no-tabbar data-page="Notie_News" id="Notie_News">
		<!--导航-->
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a class="back" href="#">
					<i class="iconfont icon-zuo"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>公告详情</f7-nav-center>
			<f7-nav-right>
				<span>附件</span>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->
		<div class="content-block" v-for="item in dataInfos">
			<h1 class="">{{item.title}}</h1>
			<div class="titleDetail">
				<span>发布人:{{item.sendOrg}}</span>
				<samp>|</samp>
				<span>时间:{{item.noticeDate}}</span>
			</div>
			<div class="Chart">

			</div>
			<div v-html="item.content">
				{{item.content}}
			</div>
			<!--<p>据广东省发改委价格监测中心监测，本周（2017年5月2日,下同）我省猪肉市场各环节价格总体呈窄幅盘整的运行走势。与上周（2017年4月25日，下同）相比，生猪出场价、总肉批发价和猪肉零售价分别微幅下降0.19%、0.94%和上升0.14%。猪粮比价为8.09:1，与上周变化不大，继续运行在绿色正常区域（6:1-8.5：1）。受“五一”小长假影响，本周我省猪肉零售环节价格略有回升，但随着节后市场需求再度回落，后期猪价仍可能回调下行。</p>
			<p>一、生产环节</p>
			<p>本周，我省生猪市场价格延续今年以来的回落走势。全省生猪平均出场价为每500克7.93元，比上周略降0.19%，比年初高点（1月10的9.0元）下降11.9%。</p>
			<p>二、批发环节</p>
			<p>本周，我省猪肉批发市场价格继续窄幅下跌。全省总肉平均批发价为每500克10.49元，比上周略降0.94%。</p>
			<p>三、零售环节</p>
			<p>本周，我省猪肉市场价格微幅盘整，略有回升，结束前期连续10周的下行走势。所监测的4种主要猪肉平均零售价为每500克18.16元，比上周微升0.14%。其中，排骨、精瘦肉、上肉和肋条肉零售价，与上周比分别微幅上升0.31%、0.16%、持平和下降0.07%。</p>
			<p>四、饲料和仔猪</p>
			<p>本周，我省饲料市场价格稳中略升。全省玉米和豆粕平均批发价分别为每500克0.98元和1.52元，与上周比分别持平和微微升0.66%。仔猪价格微升，本周均价为每500克21.67元，比上周略升0.58%。</p>
			<p>五、猪粮比价</p>
			<p>本周，我省猪粮比价变化不大，由上周的8.1:1略降至8.09:1，连续6周维持在绿色正常区域（6：1-8.5：1）运行。</p>-->
		</div>

		<!--结束-->
		<!---->
	</f7-page>
</template>

<script>
	export default {
		data(){
			return {
				dataInfos:[],
			}
		},
		mounted:function(){
			this.dataInfosData();
		},
		methods:{
			dataInfosData: function(){
				//获取任务填报数据
				this.$ajax.NoticeDetail().then(res => {
					this.dataInfos = [...res.dataInfo];
				})
			},
		},
		components:{}
	}
</script>