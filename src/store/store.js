/**
 * Created by Administrator on 2016/11/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		Area: {
			DefaultArea: '广州',
			AreaDisplay :'none',
		},
		headNav: 'head-nav1'
	},
	getters: {	
		head: state => state.head,
		audioLoadding: state => state.audioLoadding,
		detailPlayerFlag: state => state.detailPlayerFlag,
		showPlayer: state => state.showPlayer,
		isPlay: state => state.isPlay
	},
	mutations: {
		areaToChange: (state) => {
			if(state.Area.AreaDisplay == 'none'){
				state.Area.AreaDisplay = 'flex'
			} else {
				state.Area.AreaDisplay = 'none'
			}
		},
		selectArea: (state,areaName) => {
			state.Area.DefaultArea = areaName;
		},
		initArea: (state) => {
			state.Area.DefaultArea = '广州';
			state.Area.AreaDisplay = 'none';
		},
		setAudio(state, audio) {
			if(!state.listenCount) {
				state.showPlayer = true; //首次进入应用时不可打开播放详情
			}
			state.listenCount++;
			state.audio = { ...(state.audio), ...audio };
		},
		setAudioTime(state, time) {
			state.audio.currentLength = time;
		},
		setCurrent(state, flag) {
			state.audio.currentFlag = flag;
		},
		showHead(state, flag) {
			state.head.toggle = flag;
		},
		setHeadTitle(state, title) {
			state.head.title = title;
		},
		setHeadStyle(state, style) {
			state.head.style = style;
		},
		resetHeadStyle: state => {
			state.head.style = { 'background': 'rgba(43,162,251,0)' };
		},
		toggleAudioLoadding: (state, flag) => {
			state.audioLoadding = flag;
		},
		setHeadNav: (state, index) => {
			state.headNav = 'head-nav' + index;
		},
		showDetailPlayer: (state, flag) => {
			state.detailPlayerFlag = flag;
		},
		showPlayer: (state, flag) => {
			state.showPlayer = flag;
		},
		isPlay: (state, flag) => {
			state.isPlay = flag;
		},
		setLrc: (state, lrc) => {
			state.audio = { ...(state.audio), lrc }
		},
		setListInfo: (state, { list, index }) => {
			state.listInfo.songList = list;
			state.listInfo.songIndex = index;
		}
	},
	actions: {
		A_SelectArea({ commit, state } , AreaName) {
			commit('selectArea', AreaName);
			commit('areaToChange');
		},
		getSong({ commit, state }, hash) {
			commit('toggleAudioLoadding', true);
			Vue.http.get(`http://cs003.m2828.com/apis/getKugouSong.php?hash=${hash}`).then(res => {
				var json_obj = JSON.parse(res.data);
				var songUrl = json_obj.url,
					imgUrl = json_obj.imgUrl.split('{size}').join('100'),
					title = json_obj.songName,
					singer = json_obj.choricSinger,
					songLength = json_obj.timeLength,
					currentLength = 0,
					audio = { songUrl, imgUrl, title, singer, songLength, currentLength };
				commit('setAudio', audio);
				commit('toggleAudioLoadding', false);
			});
		},
		getLrc({ commit, state }, hash) {
			Vue.http.get(`http://cs003.m2828.com/apis/getLrc.php?hash=${hash}`).then(res => {
				commit('setLrc', res.data);
			})
		},
		prev({ dispatch, state }) {
			var list = state.listInfo.songList;
			if(state.listInfo.songIndex == 0) {
				state.listInfo.songIndex = list.length;
			} else {
				state.listInfo.songIndex--;
			}
			var hash = list[state.listInfo.songIndex].hash;
			dispatch('getSong', hash);
			dispatch('getLrc', hash);
		},
		next({ dispatch, state }) {
			var list = state.listInfo.songList;
			if(state.listInfo.songIndex == list.length - 1) {
				state.listInfo.songIndex = 0
			} else {
				++state.listInfo.songIndex;
			}
			var hash = list[state.listInfo.songIndex].hash;
			dispatch('getSong', hash);
			dispatch('getLrc', hash);
		}
	}
});

export default store