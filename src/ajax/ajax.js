import axios from 'axios'

// axios 配置
axios.defaults.timeout = 15000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.defaults.baseURL = 'http://192.168.1.251:8034/warnapps/app';

//POST传参序列化
axios.interceptors.request.use((config) => {
	console.log("start ajax");
    return config;
},(error) =>{
	console.log("error")
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
//  if(!res.data.success){
//  	return 
//  }
    return res;
}, (error) => {
	f7.alert("网络错误！");
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(response => {
                resolve(response);
            }).catch((error) => {
               reject(error)
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

			rsaKey.setPublic(b64tohex(res.data.modulus), b64tohex(res.data.exponent));
	
			var enPassword = hex2b64(rsaKey.encrypt(params.loginPwd));
			
			console.log(enPassword);
			
			var Url ="/framework/loginAppUser?loginName=";
				Url += params.loginName + "&password=" + enPassword + "&onlyCode=" + res.data.onlyCode;
	
			return fetch(Url);			
        });
    }
}




//exports.install = function (Vue , options) {
//
//  Vue.prototype.ajax = Objajax
//};