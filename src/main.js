import Vue from 'vue'
import Axios from './http'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, Axios);

// 导入所有的过滤器变量，导出的是对象，可以直接通过key和value来获得过滤器的名和过滤器的方法
import * as custom from './filters/index'

Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key]);
});

import App from './App'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'

sync(store, router);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
