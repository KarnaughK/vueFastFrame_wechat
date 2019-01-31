let BaseUrl;

if (process.env.NODE_ENV === 'production') {
  // 正式服务器
  BaseUrl = '';
} else {
  // 测试服务器
  BaseUrl = '';
}

export default {
  BaseUrl
};
