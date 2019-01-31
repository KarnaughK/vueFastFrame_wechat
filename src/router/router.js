let routes = [
  {
    path: '',
    name: 'HelloWorld',
    component: resolve => require(['@/view/HelloWorld'], resolve)
  }
];

export default routes;
