// 344格式化电话
let phoneTo344 = (phone) => {
  let text1 = phone.substring(0, 3);
  let text2 = phone.substring(3, 7);
  let text3 = phone.substring(7, 11);
  return text1 + ' ' + text2 + ' ' + text3;
};

export {phoneTo344}
