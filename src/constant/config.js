let BaseUrl;
let WebsiteUrl;

if (process.env.NODE_ENV === 'production') {
  // 正式服务器
  BaseUrl = 'http://api.sdhd1.com/sdhd/';
  // 正式网址
  WebsiteUrl = 'http://html.sdhd1.com';
} else {
  // 测试服务器
  BaseUrl = 'http://dev.sdhd1.com:8080/sdhd/';
  // 测试网址
  WebsiteUrl = 'http://devhtml.sdhd1.com';
}

export default {
  BaseUrl,
  WebsiteUrl
};
