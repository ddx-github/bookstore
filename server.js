function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
function check(thisform) {
	var name=document.getElementById("name").value;
	var pass=document.getElementById("pass").value;
	if (name=="admin" && pass=="abcd1234") {
		alert("登录成功！");
    localStorage.setItem("bookadmin",name);
    localStorage.setItem("bookpwd",pass);
    var target = getQueryString("callBack");
    if (target == null){
		  window.document.f.action="/bookstore";
    } else {
      window.document.f.action=target;
    }
		window.document.f.submit();
	}
	else{
		alert("用户名或密码错误！");
	}
}
