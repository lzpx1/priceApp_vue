<template>
	<f7-page navbar-fixed no-tabbar no-page-content data-page="TaskWrite" @page:beforeanimation="pageInit">
		<!--导航-->
		<f7-navbar v-if="$theme.ios">
			<f7-nav-left sliding>
				<a class="back" href="#">
					<i class="iconfont icon-zuo"></i>
				</a>
			</f7-nav-left>
			<f7-nav-center sliding>广东省国际大宗商品价格监测日报</f7-nav-center>
			<f7-nav-right>
				<i class="iconfont d-copy" @click="autoFill">&#xe608;</i>
			</f7-nav-right>
		</f7-navbar>
		<!--内容-->
		<div class="page-content swiperHidden">
			<div class="swiper-nav swiper-container swiper-free-mode taskSwiperNav TabSwiperNav">
				<div class="swiper-wrapper">
					<div class="swiper-slide swiper-slide-visible swiper-slide-active active"><span>能源化工</span></div>
					<div class="swiper-slide swiper-slide-visible"><span>基本金属</span></div>
					<div class="swiper-slide swiper-slide-visible"><span>农产品</span></div>
					<div class="swiper-slide swiper-slide-visible"><span>黄金</span></div>
				</div>
			</div>

			<div class="swiper-pages swiper-container taskSwiperPages TabSwiperPages">
				<div class="swiper-wrapper">

					<div id="Dtab0" class="active swiper-slide swiper-slide-visible swiper-slide-active infinite-scroll">
						<div class="content-block taskBox">
							<div class="taskList taskLine-3">
								<ul>
									<li v-for="(ProductItem,index) in DataList" >
										<!--<a href="javascript:;" class="row">
											<div class="col-20"><img src="../../static/food.png" /></div>
											<div class="row col-80">
												<h3>天然气（纽约）<label class="right d-remark"><i class="iconfont">&#xe608;</i>备注</label></h3>
												<p class="col-50 a-pre">上期：<span>3.45</span></p>
												<p class="col-50">涨跌幅：<span class="color-dgreen">-23%</span></p>
												<p class="col-50 a-current">本期：<input type="text" /></p>
												<p class="col-50 d-details"  @click="showDetail">详情<i class="iconfont">&#xe64a;</i></p>
											</div>
										</a>
										<div class="row taskDetails" :style="{display: detailShow}">
											<p class="col-50">规格等级：新鲜一级</p>
											<p class="col-50">计价单位：美元/吨</p>
											<p class="col-50">全省均价：3.45元</p>
											<p class="col-50">产地品牌：广州</p>
										</div>-->
										<TaskWriteLi  :ProductItem="ProductItem" :index="index" @hasFilled="hasFilled" @ShowRemarksBox="ShowRemarksBox"></TaskWriteLi>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div id="Dtab1" class="swiper-slide">
						<div class="content-block taskBox">
							<div class="taskList taskLine-3">
								<ul>
									<li>
										<a href="javascript:;" class="row">
											<div class="col-20"><img src="../../static/food.png" /></div>
											<div class="row col-80">
												<h3>天然气（纽约）<label class="right d-remark"><i class="iconfont">&#xe608;</i>备注</label></h3>
												<p class="col-50 a-pre">上期：<span>3.66</span></p>
												<p class="col-50">涨跌幅：<span class="color-dgreen">-23%</span></p>
												<p class="col-50 a-current">本期：<input type="text" /></p>
												<p class="col-50 d-details">详情<i class="iconfont">&#xe64a;</i></p>
											</div>
										</a>
										<div class="row taskDetails">
											<p class="col-50">规格等级：新鲜一级</p>
											<p class="col-50">计价单位：美元/吨</p>
											<p class="col-50">全省均价：3.66元</p>
											<p class="col-50">产地品牌：广州</p>
										</div>
									</li>
									<li>
										<a href="javascript:;" class="row">
											<div class="col-20"><img src="../../static/food.png" /></div>
											<div class="row col-80">
												<h3>天然气（纽约）<label class="right d-remark"><i class="iconfont">&#xe608;</i>备注</label></h3>
												<p class="col-50 a-pre">上期：<span>3.77</span></p>
												<p class="col-50">涨跌幅：<span class="color-dgreen">-23%</span></p>
												<p class="col-50 a-current">本期：<input type="text" /></p>
												<p class="col-50 d-details">详情<i class="iconfont">&#xe64a;</i></p>
											</div>
										</a>
										<div class="row taskDetails">
											<p class="col-50">规格等级：新鲜一级</p>
											<p class="col-50">计价单位：美元/吨</p>
											<p class="col-50">全省均价：3.77元</p>
											<p class="col-50">产地品牌：广州</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div id="Dtab2" class="swiper-slide">
						<div class="content-block">
							<div class="list-block h_news">
								<ul>2</ul>
							</div>
						</div>
					</div>
					<div id="Dtab3" class="swiper-slide">
						<div class="content-block">
							<div class="list-block h_news">
								<ul>3</ul>
							</div>
						</div>
					</div>

				</div>
			</div>

			<!--填写暂存-->
			<div class="taskToolbarBox">
				<div class="row no-gutter taskToolbar">
					<div class="col-40 btn d-TaskList" @click="filledTask">
						<label>16</label>
						<p class="title">已填写</p>
						<p class="text">可进行修改</p>
					</div>
					<div class="col-30 btn" @click = "SaveData">暂存</div>
					<div class="col-30 btn">提交</div>
				</div>
				<div class="taskList" v-show="filled">
					<ul>
						<li v-for="(item,index) in filledDataList" @click="changeFilled(index)">
							<a href="#" class="row no-gutter">
								<p class="col-40 title">{{item.mercName}}</p>
								<p class="col-30">上期：{{item.priorPrice}}</p>
								<p class="col-30">本期：{{item.price}}</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<!--遮罩  默认2，可加class：z-index10 -->
			<div class="d-fullscreen" v-show="filled" @click="filledTask"></div>
			
			<div class="d-fullscreen" v-show="remarksBox" @click="CloseRemarksBox"></div>
			
			<!--上传图片-->
			<div class="uploadBox" style="display: none">
				<form>
					<div class="uploadDiv"><img src="images/food.png" /></div>
					<div class="uploadBtn">
						<input type="file" value="上传图片" />
						<a href="javascript:;" class="button">上传图片</a>
					</div>
				</form>
			</div>
			<!--备注-->
			<div class="remarksBox" v-show="remarksBox">
				<form>
					<h3>{{ mercName }}</h3>
					<div class="line">
						波动类型
						<!--<select name="" id="">
							<option value="成本">成本</option>
							<option value="供给">供给</option>
							<option value="需求">需求</option>
							<option value="综合">综合</option>
							<option value="其他">其他</option>
						</select>-->
						<select v-model="selected">
							<option v-for="option in options" v-bind:value="option.value">
								{{ option.text }}
							</option>
						</select>
					</div>
					<div class="line">
						波动原因
						<textarea rows="5" placeholder="原因" v-model="merctext"></textarea>
					</div>
					<div class="line">
						<input type="submit" value="确定" @click.prevent = "mercReason"/>
					</div>
				</form>
			</div>
		</div>
		<!--结束-->
		<!---->
	</f7-page>
</template>

<script>
	import InitPage from '../components/PageInit';
	import TaskWriteLi from "../components/TaskWriteLi"
	export default {
		data(){
			return {
				filled: false,
				Pjson: {
					"objectId":"2028",
				    "taskDireId":"195",
				    "taskReportedId":"37393",
				    "dataList":[
				        {
				            "dataValue":"13.57",
				            "firstAckValue":"110",
				            "secondAckValue":"110",
				            "lastAckValue":"",
				            "indicatorId":"",
				            "mercId":"8",
				            "mercName":"晚籼米",
				            "mercSpec":"优质",
				            "mercGrade":"一等品",
				            "unitName":"500克/元",
				            "unitId":"38",
				            "waveReason":"1",
				            "waveReasonRemark":"超市促销",
				            "dataValueLast":"118",
				            "isProblem":"1",
				            "isError":""
				        }
				    ]
				},
				selected: '0',
				DataList :[],
				filledDataList: [],
				mercName: '',
				mercIndex: '',
				merctext: '',
				remarksBox: false,
				options: [
				    { text: '成本', value: '0' },
				    { text: '供给', value: '1' },
				    { text: '需求', value: '2' },
				    { text: '金融', value: '3' }
			    ]
			}
		},
		methods: {
			//初始化swiper 获取并处理第一页数据
			pageInit: function() {
				InitPage.SwiperInit();
				this.getInitForm();
			},
			//获取并处理第一页数据
			getInitForm: function(){
				this.$ajax.getInitForm().then(res =>{
					//修改后端的测试数据   以后根据实际删除或修改
					for(var key in res.DataList){
						if(res.DataList[key].price == 'null'){
							res.DataList[key].price = '';
							res.DataList[key].waveReason = key;
							res.DataList[key].waveReasonRemark = key;
						}
					}
					this.DataList = res.DataList;
				})
			},
			//暂存事件
			SaveData: function(){
				var token = localStorage.getItem('token');
				this.Pjson.token = token ;
				console.log(this.Pjson);
				this.$ajax.Savedata(this.Pjson).then(res =>{
					console.log(res);
				});
			},
			//打开已填写列表
			filledTask: function(){
				this.filled = !this.filled;
			},
			//填写正确后移到已填报列表
			hasFilled: function(index){
				this.filledDataList.push(this.DataList[index]);
				this.DataList.splice(index,1);
			},
			//修改已填报数据
			changeFilled: function(index){
				this.DataList.unshift(this.filledDataList[index]);
				this.filledDataList.splice(index,1);
			},
			//自动取上期数据
			autoFill: function(){
				for(var key in this.DataList){
					this.DataList[key].price = this.DataList[key].priorPrice;
				}
			},
			//打开备注
			ShowRemarksBox: function(index){
				this.mercIndex = index;
				this.merctext = this.DataList[index].waveReasonRemark;
				this.mercName = this.DataList[index].mercName;
				this.selected = this.DataList[index].waveReason == '' ? this.selected : this.DataList[index].waveReason;
				this.remarksBox = true;
			},
			//关闭备注
			CloseRemarksBox: function(){
				this.remarksBox = false;
			},
			//波动原因填写完毕
			mercReason: function(){
				this.DataList[this.mercIndex].waveReasonRemark = this.merctext;
				this.DataList[this.mercIndex].waveReason = this.selected;
				this.CloseRemarksBox();
			}
		},
		components: { TaskWriteLi }
	}
</script>