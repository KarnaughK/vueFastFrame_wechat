let routes = [
  {
    path: "",
    name: "Home",
    component: resolve => require(['@/components/home'], resolve),
    alias: "/home",
    children: [
      {
        path: '',
        alias: 'driver',
        component: resolve => require(['@/components/home/driver'], resolve),
        meta: {tabbarIndex: 0}
      },
      {
        path: 'mine',
        component: resolve => require(['@/components/home/mine'], resolve),
        meta: {tabbarIndex: 1}
      }
    ]
  },
  {
    path: '/author',
    component: resolve => require(['@/components/author/list'], resolve)
  },
  {
    path: '/author/add_captain',
    component: resolve => require(['@/components/author/add_captain'], resolve)
  },
  {
    path: '/author/add_skipper',
    component: resolve => require(['@/components/author/add_skipper'], resolve)
  },
  {
    path: '/author/driver_list',
    component: resolve => require(['@/components/author/driver_list'], resolve)
  },
  {
    path: "/driver/user/:driverId?",
    component: resolve => require(['@/components/driver/user'], resolve)
  },
  {
    path: '/driver/account/list',
    component: resolve => require(['@/components/driver/account/list'], resolve)
  },
  {
    path: '/driver/account/add',
    component: resolve => require(['@/components/driver/account/add'], resolve)
  },
  {
    path: "/driver/audit",
    component: resolve => require(['@/components/driver/audit/main'], resolve),
    children: [
      {
        path: 'user_list/:tabIndex?',
        alias: '',
        component: resolve => require(['@/components/driver/audit/user_list'], resolve)
      },
      {
        path: 'car_list/:tabIndex?',
        component: resolve => require(['@/components/driver/audit/car_list'], resolve)
      }
    ]
  },
  {
    path: '/driver/audit/user_audit',
    component: resolve => require(['@/components/driver/audit/user_audit'], resolve)
  },
  {
    path: '/driver/audit/car_audit',
    component: resolve => require(['@/components/driver/audit/car_audit'], resolve)
  },
  {
    path: "/driver/order",
    component: resolve => require(['@/components/driver/order/main'], resolve),
    children: [
      {
        path: '',
        alias: 'list_error',
        component: resolve => require(['@/components/driver/order/list_error'], resolve)
      },
      {
        path: 'list_success',
        component: resolve => require(['@/components/driver/order/list_success'], resolve)
      }
    ]
  },
  {
    path: "/driver/order/detail/:orderId?",
    component: resolve => require(['@/components/driver/order/detail'], resolve)
  },
  {
    path: "/driver/online",
    component: resolve => require(['@/components/driver/online/main'], resolve),
    children: [
      {
        path: '',
        alias: 'map',
        component: resolve => require(['@/components/driver/online/map'], resolve)
      },
      {
        path: 'list/:tabIndex?',
        component: resolve => require(['@/components/driver/online/list'], resolve)
      }
    ]
  },
  {
    path: "/driver/online/search",
    component: resolve => require(['@/components/driver/online/search'], resolve)
  },
  {
    path: "/login",
    name: "Login",
    component: resolve => require(['@/components/login'], resolve)
  }
];

export default routes;
