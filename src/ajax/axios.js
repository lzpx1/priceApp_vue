//import axios from 'axios'
//
////axios 配置
//axios.defaults.timeout = 3000;
//
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//
//axios.defaults.baseURL = 'http://192.168.2.251:8034/warnapps/app';
////请求开始拦截器
//axios.interceptors.request.use(config => {
//// loading
//return config
//}, error => {
//return Promise.reject(error)
//})
////响应拦截器
//axios.interceptors.response.use(response => {
//	return response
//}, error => {
//	return Promise.resolve(error.response)
//})
//
//function checkStatus (response) {
//// loading
//// 如果http状态码正常，则直接返回数据
//if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
//  return response
//  // 如果不需要除了data之外的数据，可以直接 return response.data
//}
//// 异常状态下，把错误信息返回去
//return {
//  status: -404,
//  msg: '网络异常'
//}
//}
//
//function checkCode (res) {
//// 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
//if (res.status === -404) {
//  f7.alert(res.msg)
//}
////if (res.data && (!res.data.success)) {
////  alert(res.data.error_msg)
////}
//return res
//}
//
//export function fetchPost(url, params) {
//  return new Promise((resolve, reject) => {
//				axios({
//			      method: 'post',
//			      url,
//			      params,
//				}).then( response => {
//      			var res =  checkStatus(response);
//							resolve(checkCode(response));
//   		})
//  })
//}
//
//export function fetchGet(url, params) {
//  return new Promise((resolve, reject) => {
//					axios({
//				      method: 'get',
//				      url,
//				      params,
//					}).then( (response) => {
//							var res =  checkStatus(response);
//							resolve(checkCode(res));
//	     	});
//  })
//}
//
//export default {
//   /**
//   * 用户登录
//   */
//  Login(params) {
//      return fetchGet('/common/getPublicKey')
//  }
//}