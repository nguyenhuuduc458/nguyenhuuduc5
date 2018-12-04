// JavaScript Document
var tien=0;
var s="";
	if(sessionStorage.length==0)
		s="<h3 style='text-align:center'>!!! bạn chưa chọn món hàng nào !!!</h3>";
	else
	for (var i = 0; i<sessionStorage.length; ++i) 
    	{
			var mau="";
			if(i%2)
			{
			var x=sessionStorage.key(i).split('.');
			s+=
			'<div style="width:auto;">'
			
			+'<div style="float:left;background-color:LightGray;width:50%;border-right:solid 1px">'+i+'.'
			+x[1]+'</div>'
			+'<div style="float:left;background-color:LightGray; width:40%">'+sessionStorage.getItem(sessionStorage.key(i))+'</div>'
			+'<div style="float:left;background-color:LightGray; ">'+'<button onclick="xoa('+i+')">Xóa</button>'+'</div>'
			+'</div>'
			;}
			else{
				var x=sessionStorage.key(i).split('.');
			s+=
			'<div style="width:auto;">'
			
			+'<div style="float:left; width:50%;border-right:solid 1px">'+i+'.'
			+x[1]+'</div>'
			+'<div style="float:left; width:40%">'+sessionStorage.getItem(sessionStorage.key(i))+'</div>'
			+'<div style="float:left; ">'+'<button onclick="xoa('+i+')">Xóa</button>'+'</div>'
			
			+'</div>'
			;
				}
		}
	for (var i = 0; i<sessionStorage.length; ++i) 
    	{
			var x=sessionStorage.getItem(sessionStorage.key(i)).split('.');
			tien+=parseFloat(x[0])*1000000+parseFloat(x[1])*1000;	
		}
	var ttien=tien.toString();
	var tongtien="";
var dem=0;
	for(i=ttien.length-1;i>=0;--i)
	{	
		if(dem%3==0 && dem!=0) tongtien="."+tongtien;
		dem++;
		tongtien=ttien[i]+tongtien;
	}
function xoa(x) {
    
    var r = confirm("Bạn muốn xóa món hàng này ư!");
    if (r == true) {
        sessionStorage.removeItem(sessionStorage.key(x));
		location.reload();
    }
}

function thanhtoan()
{
	if(tien==0)alert("Bạn chưa chọn hàng T.T")
	else{
		    var r = confirm("Bắt đầu thanh toán?");
	if(r==true){
	capnhatlocalgiohang();
	sessionStorage.clear();
	var xxx = document.getElementById("snackbar");
    xxx.className = "show";
	setTimeout(function(){location.reload() }, 3001);
    setTimeout(function(){ xxx.className = xxx.className.replace("show", ""); }, 3000);}
	}
}
function capnhatlocalgiohang()
{
	var tao=localStorage.getItem("user");
	var dh=1;
	for (var i = 0; i<localStorage.length; ++i) 
    	{
			if(localStorage.key(i).indexOf(tao)!=-1) dh++;

		}

var ss="";
for (var i = 0; i<sessionStorage.length; ++i) 
    	{
			var mau="";
			if(i%2)
			{
			var x=sessionStorage.key(i).split('.');
			ss+=
			'<div style="width:auto;">'
			
			+'<div style="float:left;background-color:LightGray;width:50%;border-right:solid 1px">'+i+'.'
			+x[1]+'</div>'
			+'<div style="float:left;background-color:LightGray; width:40%">'+sessionStorage.getItem(sessionStorage.key(i))+'</div>'
			+'<div style="float:left;background-color:LightGray; ">'+'</div>'
			+'</div>'
			;}
			else{
				var x=sessionStorage.key(i).split('.');
			ss+=
			'<div style="width:auto;">'
			
			+'<div style="float:left; width:50%;border-right:solid 1px">'+i+'.'
			+x[1]+'</div>'
			+'<div style="float:left; width:40%">'+sessionStorage.getItem(sessionStorage.key(i))+'</div>'
			+'<div style="float:left; ">'+'</div>'
			
			+'</div>'
			;
				}
		}
		localStorage.setItem("giohang."+tao+"."+dh.toString()+"."+tien.toString(),ss);
	
}