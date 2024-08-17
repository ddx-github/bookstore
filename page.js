function logout() {
  if (confirm("你确定要退出吗？")) {
    localStorage.removeItem("bookadmin");
    localStorage.removeItem("bookpwd");
    alert("退出成功！");
    window.location.replace("/bookstore/login.html");
  }
}
var admin = localStorage.getItem("bookadmin");
var pwd = localStorage.getItem("bookpwd");
if (admin == null || admin != "admin" || pwd == null || pwd != "abcd1234") {
  alert("登录过期，请重新登录！");
  var target = window.location.href;
  window.location.replace("/bookstore/login.html?callBack=" + target);
}
