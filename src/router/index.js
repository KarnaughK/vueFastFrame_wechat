import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/router'
import beforeEach from '@/router/beforeEach'

Vue.use(Router);

// 路由列表
let router = new Router({
  // 模式
  // mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return {x: 0, y: 0}
  }
});

// 开屏授权页逻辑 暂无
router.beforeEach(beforeEach);

export default router;
