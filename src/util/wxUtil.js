// 设置cookie
function setWxCookie(cName, value, expiredays) {
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = cName + "=" + escape(value) +
    ((expiredays === null) ? "" : ";expires=" + exdate.toGMTString())
}

// 取回cookie
function getWxCookie(cName) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(cName + "=");
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1;
      let cEnd = document.cookie.indexOf(";", cStart);
      if (cEnd === -1) cEnd = document.cookie.length;
      return unescape(document.cookie.substring(cStart, cEnd))
    }
  }
  return ""
}

let cookies = {
  userId: 'userId',
  loginPhone: 'loginPhone'
};

export {setWxCookie, getWxCookie, cookies};
