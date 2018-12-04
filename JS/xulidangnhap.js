
var ok=false;
var hienthi="chua_dang_nhap";
var taikhoan=["admin","user"];
var matkhau=["123456","123456"];
var quanli="";
for (var i = 0; i<localStorage.length; ++i) 
    	{
			if(localStorage.key(i)=="admin") continue;
			if(localStorage.key(i)=="user") continue;
			if(localStorage.key(i)=="giohang") continue;
			if(localStorage.key(i).indexOf("giohang")!=-1) continue;
			taikhoan.push( localStorage.key(i) );
			matkhau.push(localStorage.getItem ( localStorage.key(i) ));
		}

var demus=0;
for (var i = 0; i<localStorage.length; ++i) 
{
	if(localStorage.key(i)=="admin") continue;
	if(localStorage.key(i)=="user") continue;
	if(localStorage.key(i)=="giohang") continue;
	if(localStorage.key(i).indexOf("giohang")!=-1) continue;
	demus++;
	
	if(demus%2){
	quanli+=
	'<div style="width:auto;">'
			
			+'<div style="float:left;background-color:LightGray;width:40%;border-right:solid 1px">'
			+localStorage.key(i)+'</div>'
			+'<div style="float:left;background-color:LightGray; width:40%">'+localStorage.getItem ( localStorage.key(i) )+'</div>'
			+'<div style="float:left;background-color:LightGray; ">'+'<button onclick="xoalocal('+i+')">Xóa</button>'+'</div>'
			+'<div style="float:left;background-color:LightGray; ">'+'<button onclick="tdmklocal('+i+')">Reset mật khẩu về 123456</button>'+'</div>'
			+'</div>'
	;
	}
	else{
		
		quanli+='<div style="width:auto;">'
			
			+'<div style="float:left;width:40%;border-right:solid 1px">'
			+localStorage.key(i)+'</div>'
			+'<div style="float:left; width:40%">'+localStorage.getItem ( localStorage.key(i) )+'</div>'
			+'<div style="float:left; ">'+'<button onclick="xoalocal('+i+')">Xóa</button>'+'</div>'
			+'<div style="float:left; ">'+'<button onclick="tdmklocal('+i+')">Reset mật khẩu về 123456</button>'+'</div>'
			+'</div>'
	;
		}
		
}

function xoalocal(i)
{
	localStorage.removeItem(localStorage.key(i));
	location.reload();
}
function tdmklocal(i)
{
	localStorage.setItem(localStorage.key(i),"123456");
	location.reload();
}
function Login()
{
var	tk = document.getElementById("userName").value;
var	mk  = document.getElementById("login").value;
	
	
	var i;

	for(i=0;i<taikhoan.length;++i)
		{//alert(taikhoan[i]);
			if(taikhoan[i]==tk)
			break;
		}
	if(i==taikhoan.length){
		alert("tai khoan khong ton tai");
		return false;
	}
	
	
	if(matkhau[i]==mk)
	{
		dadangnhap();
		if(tk=="admin")
		document.getElementById("dangnhap").action="admin/index.html";
		else 
		{
			localStorage.setItem("user",taikhoan[i]);
			document.getElementById("dangnhap").action="khachhang/index.html";
		}
		return true;
	
	}
	alert("sai mat khau");
	return false;
}

function dadangnhap()
{
	ok=true;
	hienthi=document.getElementById("userName").value;
}

function dangxuat()
{
	ok=false;
	hienthi="chua_dang_nhap";
}

function checkpw1()
{
	var str1 = document.getElementById("password1").value;
	if(str1.length<6)
	{	alert("password quá ngắn");
		return false;
	}
	return true;
}
function validateForm()
{
 	var str1 = document.getElementById("password1").value;
 	var str2 = document.getElementById("password2").value;
 	 if(str1!=str2){
		alert("passwork không trùng khớp");
		return false;
  	}
	return true;	
}
function pushtk(tk,mk)
{
	
	 for (var i = 0; i<localStorage.length; ++i) 
    	{
			taikhoan.push(localStorage.getItem(localStorage.key(i)));
		}
	
	for(var i=0;i<taikhoan.length;++i)
	{
		if(tk==taikhoan[i])
		{
			alert("tk đã tồn tại");
			return false;
		}
	}
	
	var str1 = document.getElementById("password1").value;
	var str2 = document.getElementById("password2").value;
 	if(str1.length<6){
		alert("password quá ngắn");
		return false;
  	}else if(str1!=str2){
		alert("passwork không trùng khớp");
		return false;
  	}
	
	localStorage.setItem(tk,mk);
	alert("bạn đã tạo tk thành công. Vui lòng đăng nhập để được mua hàng nhé !!!!!!");
	document.getElementById("dangky").action="index.html";
	
}