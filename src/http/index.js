import Axios from 'axios'
import Config from '@/constant/config'
import qs from 'qs'
import store from '@/store'
import router from '@/router'

// axios 配置
Axios.defaults.timeout = 5000;

// baseurl
Axios.defaults.baseURL = Config.BaseUrl;

// 请求连接
Axios.interceptors.request.use(
  config => {
    // console.log('request');
    // console.log(config);
    config.data = qs.stringify(config.data);
    // config.headers = {'userSource': 'shipperH5'};
    return config;
  },
  error => {
    return Promise.reject(error);
  });

// 响应连接
Axios.interceptors.response.use(
  response => {
    // console.log(response);
    // 正在登录的号被删了，会返回7008
    if (response.data.code === 7008) {
      store.commit('user/userLogout');
      router.push('/login');
      return;
    }
    return response;
  },
  error => {
    // if (error.response) {
    //   switch (error.response.status) {
    //     case 401:
    //       // 401 清除token信息并跳转到登录页面
    //       store.commit(types.LOGOUT);
    //       router.replace({
    //         path: 'login',
    //         query: {redirect: router.currentRoute.fullPath}
    //       })
    //   }
    // }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  });

export default Axios;
