// JavaScript Document
var s="đã thêm vào giỏ hàng";
function themvaogiohang(x,y)
{
	var xx=x.toString();
	
	var ss=xx.split('.');
	var ten,gia;
	var i=parseInt(ss[0]);

	gia=listvivoPrice[i];

	if(ss[1]=='1')
		ten=listvivo[i];
	else if (ss[1]=='2')
		ten=listzen[i];
	else if (ss[1]=='3')
		ten=listnote[i];
	else if (ss[1]=='4')
		ten=listthink[i];
	else if (ss[1]=='5')
		ten=listyoga[i];
	else if (ss[1]=='6')
		ten=listideapad[i];
	else if (ss[1]=='7')
		ten=listGS[i];
	else if (ss[1]=='8')
		ten=listGP[i];
	else if (ss[1]=='9')
		ten=listGL[i];
	else if (ss[1]=='11')
		ten=listXPs[i];
	else if (ss[1]=='12')
		ten=listInspiron[i];
	else if (ss[1]=='13')
		ten=listVos[i];
		

	else if (ss[1]=='15')
		ten=listPre[i];
	else if (ss[1]=='16')
		ten=listAsp[i];
	else if (ss[1]=='17')
		ten=listSpin[i];
	else
		ten=listNitro[i];
	var tten=sessionStorage.length.toString()+'.'+ten;
	sessionStorage.setItem(tten,gia);
	
	var xxx = document.getElementById("snackbar");
    xxx.className = "show";
    setTimeout(function(){ xxx.className = xxx.className.replace("show", ""); }, 1500);
	
	//location.reload();
}
