import store from '@/store'

let onBeforeEach = function (to, from, next) {
  // console.log('router.beforeEach');
  // console.log(from);
  // console.log(to);
  // 是否登录
  if (to.path !== '/login' && !store.state.user.userId) {
    next({
      path: '/login',
      query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  }
  next()
};

export default onBeforeEach;
