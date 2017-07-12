import axios from 'axios'
import qs from 'qs'
// axios 配置
axios.defaults.timeout = 30000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.defaults.baseURL = 'http://192.168.1.251:8034/warnapps/app';

//POST传参序列化
axios.interceptors.request.use((config) => {
	if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
	}
	f7.showIndicator();
	console.log("start ajax");
    return config;
},(error) =>{
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
	f7.hideIndicator();
    return res.data;
}, (error) => {
	f7.hideIndicator();
	if(error.toString().indexOf('500') > 0){
		f7.alert("服务器错误:500");
	}else{
		f7.alert("网络错误");
	}
	return Promise.reject(error);
});

function fetch(url, params) {
	return new Promise((resolve, reject) => {
	    axios.post(url, params)
	        .then(response => {
	            resolve(response);
	       }).catch(error => {
	            reject(error) ;
	        })
	})
}
function fetchGet(url,params) {
	return new Promise((resolve, reject) => {
	    axios.get(url,{
			params:params
			})
	        .then(response => {
	            resolve(response);
	        }).catch(error => {
	            reject(error) ;
	        })
	})
}
export default {
    /**
     * 用户登录
     */
    Login(params) {
        return  new fetch('/common/getPublicKey').then(res =>{
        	
        	var rsaKey = new RSAKey();

			rsaKey.setPublic(b64tohex(res.modulus), b64tohex(res.exponent));
	
			var enPassword = hex2b64(rsaKey.encrypt(params.loginPwd));
			
			console.log(enPassword);
			
			return fetch('/framework/loginAppUser' , { loginName:params.loginName,password:enPassword,onlyCode:res.onlyCode} );			
        });
    },
    /**
     * 用户退出
     */
    exitLogin(params){
    	return fetch('/framework/signOutUser' , { token:params } );
    },
   	 /**
     * 暂存数据
     */
    Savedata(params){
    	return fetch('/support/temporarySave.do',{ json : JSON.stringify(params) });
    },
    UpdateData(params){
    	return fetch('/support/submitSave.do',{ json : JSON.stringify(params) });
    },
    getInitForm(){
    	return fetchGet('/getInitFormDataForObj.do');
    },
    /**
     * 获取任务填报列表
     */
	taskListWrite(token,object_Id){ return fetch('/Fill/findListFill', { costoken:token, objectId:375} )},
    /**
     * 获取任务退回
     */
    taskListReturn(token,object_Id){return fetch('/Fill/findReturnList' , { costoken:token, objectId:4199} )},
    /**
     * 获取任务完成
     */
    taskListCompleted(token,object_Id){return fetch('/Fill/findCompletedList' , { costoken:token, objectId:2028} )},
    /**
     * 获取个人信息
     */
    personalInformation(token,account_Id){return fetch('/Personal/findInformation' , { costoken:token, accountId:33})},
	/**
	 * 通知公告列表
	 */
	NoticeList (){ return fetch('/findNoticeList.do')},
	/**
	 * 通知公告详情
	 */
	NoticeDetail (){return fetch('/loadNoticeById.do')},
}

