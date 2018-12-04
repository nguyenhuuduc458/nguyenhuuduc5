// JavaScript Document




var listASUS=["1.VivoBook&nbsp;Series","2.ZenBook&nbsp;Series","3.ASUS&nbsp;NoteBook"];
var chuoi="";
	for(i=0;i<listASUS.length;++i)
		{
			var s='index.html?'+i;
			chuoi=chuoi+"<a href="+s+"&0&0>"+"<div class='leftmenu-child'>"+listASUS[i]+"</div>"+"</a>";
					
		}


var listLENOVO = new Array("1.ThinkPad Series","2.Yoga Series","3.IdeaPad Series");

var chuoi2="";
	for(i=0;i<listLENOVO.length;++i)
		{
			var s="index.html?"+i;
			chuoi2=chuoi2+"<a href="+s+"&1&0>"+"<div class='leftmenu-child'>"+listLENOVO[i]+"</div>"+"</a>";
					
		}

var listMSI = new Array("1.GS series","2.GP Series","3.GL Series");

var chuoi3="";
	for(i=0;i<listMSI.length;++i)
		{
			var s="index.html?"+i;
			chuoi3=chuoi3+"<a href="+s+"&2&0>"+"<div class='leftmenu-child'>"+listMSI[i]+"</div>"+"</a>";
					
		}

var listDELL = new Array("1.XPS Series","2.Inspiron Series","3.Vostro Series");
var chuoi4="";
	for(i=0;i<listDELL.length;++i)
		{
			var s="index.html?"+i;
			chuoi4=chuoi4+"<a href="+s+"&3&0><div class='leftmenu-child'>"+listDELL[i]+"</div></a>";
					
		}

var listACER = ["1.Nitro Series","2.Predator Series","3.Aspire Series","4.Spin Series"];

var chuoi5="";
	for(i=0;i<listACER.length;++i)
		{
			var s="index.html?"+i;
			chuoi5=chuoi5+"<a href="+s+"&4&0>"+"<div class='leftmenu-child'>"+listACER[i]+"</div>"+"</a>";
					
		}
var lie="";
var listvivo=["VV30UA-EJ870T","VV530UA-BQ176T","VV510UN-EJ463T","VV330UA-EY023T","VV10UA-BQ222T","VV10UN-BQ319T","VV10UN-EB210T","VS678UA-EJ8702"];
var listvivoPrice=["10.590.000₫","10.790.000₫","10.890.000₫","13.590.000₫","14.590.000₫","15.590.000₫","16.590.000₫","17.650.000₫"];
var listzen=["ZZS30UA-TDR99T","ZZUX40UA-DS763T","ZZUX490UA","ZZS330UA-EY023T","ZZS510UA-BQ222T","ZZS510UN-BQ319T","ZZS410UN-EB210T","Z411-EB210T"];

var listnote=["NT3380-UEA897","NT3381-UEA123","NT3382-UEA456","NT3383-UE","NT3384-UEA999","NTN33885-UEA999","NTN33886-UEA999","NTN3387-UEA897"];
var listthink=["E480-T112","L380-Y678","S330UA-EY023T","S510UA-BQ222T","S510UN-BQ319T","S410UN-EB210T","T3389-UEA220"];
var listyoga=["UES3380-EJ875","S510UA-BQ222T","S510UN-BQ319T","S410UN-EB210T","SS10UN-BQ339U","Y567-POT888","Y789-POT888"];
var listideapad=["I100-TU100","I101-TU100","I102-TU100","I103-TU100","I104-TU100","I105-TU100","I106-TU100","I107-TU100"];
var listGS = ["G100-TA100"];
var listGP = ["G100-TA101","G101-TA102","G102-TA103","G103-TA104"];
var listGL =  ["G100-TA111","G101-TA112","G102-TA113","G103-TA114","G104-TA115","G105-TA116","G106-TA117","G107-TA118"];
var listXPs = ["X100-TA100","X101-TA100","X102-TA100"];
var listInspiron = ["X100-TA101","X101-TA102","X102-TA103","X103-TA104","X104-TA105","X105-TA106","X106-TA107","X107-TA108"];

var listVos =["X100-TA111","X101-TA112","X102-TA113","X103-TA114","X104-TA115","X105-TA116","X106-TA117","X107-TA118"];
var listNitro =["N100-TA910","NT151-TA100","N102-TA100","N103-TA100","N104-TA100","N105-TA100"];
var listPre =["P100-TA100","P101-TA100","P102-TA100","P103-TA100"];
var listAsp = ["A100-TA100","A101-TA100","A102-TA100","A103-TA100"];
var listSpin = ["S100-TA100","S101-TA100","S102-TA100"];
var lienket="";

function sanpham(ten,gia,vitri,loai,giohang,hang,sosanh) {
  this.ten = ten;
  this.gia = gia;
  this.vitri=vitri;
  this.loai=loai;
  this.giohang=giohang;
  this.hang=hang;
  this.sosanh=sosanh;
}

var sp=new Array();
//vivo
sp[0]= new sanpham("VV30UA-EJ870T","10.590.000₫",0,"vivo",0.1,"ASUS",10590000);
sp[1]= new sanpham("VV530UA-BQ176T","10.790.000₫",1,"vivo",1.1,"ASUS",10790000);
sp[2]= new sanpham("VV510UN-EJ463T","10.890.000₫",2,"vivo",2.1,"ASUS",10890000);
sp[3]= new sanpham("VV330UA-EY023T","13.590.000₫",3,"vivo",3.1,"ASUS",13590000);
sp[4]= new sanpham("VV10UA-BQ222T","14.590.000₫",4,"vivo",4.1,"ASUS",14590000);
sp[5]= new sanpham("VV10UN-BQ319T","15.590.000₫",5,"vivo",5.1,"ASUS",15590000);
sp[6]= new sanpham("VV10UN-EB210T","16.590.000₫",6,"vivo",6.1,"ASUS",16590000);
sp[7]= new sanpham("VS678UA-EJ8702","17.650.000₫",7,"vivo",7.1,"ASUS",17650000);
//zen
sp[8]= new sanpham("ZZS30UA-TDR99T","10.590.000₫",0,"zen",0.2,"ASUS",10590000);
sp[9]= new sanpham("ZZUX40UA-DS763T","10.790.000₫",1,"zen",1.2,"ASUS",10790000);
sp[10]= new sanpham("ZZUX490UA","10.890.000₫",2,"zen",2.2,"ASUS",10890000);
sp[11]= new sanpham("ZZS330UA-EY023T","13.590.000₫",3,"zen",3.2,"ASUS",13590000);
sp[12]= new sanpham("ZZS510UA-BQ222T","14.590.000₫",4,"zen",4.2,"ASUS",14590000);
sp[13]= new sanpham("ZZS510UN-BQ319T","15.590.000₫",5,"zen",5.2,"ASUS",15590000);
sp[14]= new sanpham("ZZS410UN-EB210T","16.590.000₫",6,"zen",6.2,"ASUS",16590000);
sp[15]= new sanpham("Z411-EB210T","17.650.000₫",7,"zen",7.2,"ASUS",17650000);
//note
sp[16]= new sanpham("NT3380-UEA897","10.590.000₫",0,"note",0.3,"ASUS",10590000);
sp[17]= new sanpham("NT3381-UEA123","10.790.000₫",1,"note",1.3,"ASUS",10790000);
sp[18]= new sanpham("NT3382-UEA456","10.890.000₫",2,"note",2.3,"ASUS",10890000);
sp[19]= new sanpham("NT3383-UE","13.590.000₫",3,"note",3.3,"ASUS",13590000);
sp[20]= new sanpham("NT3384-UEA999","14.590.000₫",4,"note",4.3,"ASUS",14590000);
sp[21]= new sanpham("NTN33885-UEA999","15.590.000₫",5,"note",5.3,"ASUS",15590000);
sp[22]= new sanpham("NTN33886-UEA999","16.590.000₫",6,"note",6.3,"ASUS",16590000);
sp[23]= new sanpham("NTN3387-UEA897","17.650.000₫",7,"note",7.3,"ASUS",17650000);
//think
sp[19]= new sanpham("NT3380-UEA897","10.590.000₫",0,"think",0.4,"LENOVO",10590000);
sp[20]= new sanpham("NT3381-UEA123","10.790.000₫",1,"think",1.4,"LENOVO",10790000);
sp[21]= new sanpham("NT3382-UEA456","10.890.000₫",2,"think",2.4,"LENOVO",10890000);
sp[22]= new sanpham("NT3383-UE","13.590.000₫",3,"think",3.4,"LENOVO",13590000);
sp[23]= new sanpham("NT3384-UEA999","14.590.000₫",4,"think",4.4,"LENOVO",14590000);
sp[24]= new sanpham("NTN33885-UEA999","15.590.000₫",5,"think",5.4,"LENOVO",15590000);
sp[25]= new sanpham("NTN33886-UEA999","16.590.000₫",6,"think",6.4,"LENOVO",16590000);
sp[26]= new sanpham("NTN3387-UEA897","17.650.000₫",7,"think",7.4,"LENOVO",17650000);
//yoga
sp[27]= new sanpham("UES3380-EJ875","10.590.000₫",0,"yoga",0.5,"LENOVO",10590000);
sp[28]= new sanpham("S510UA-BQ222T","10.790.000₫",1,"yoga",1.5,"LENOVO",10790000);
sp[29]= new sanpham("S510UN-BQ319T","10.890.000₫",2,"yoga",2.5,"LENOVO",10890000);
sp[30]= new sanpham("S410UN-EB210T","13.590.000₫",3,"yoga",3.5,"LENOVO",13590000);
sp[31]= new sanpham("SS10UN-BQ339U","14.590.000₫",4,"yoga",4.5,"LENOVO",14590000);
sp[32]= new sanpham("Y567-POT888","15.590.000₫",5,"yoga",5.5,"LENOVO",15590000);
sp[33]= new sanpham("Y789-POT888","16.590.000₫",6,"yoga",6.5,"LENOVO",16590000);
//idea
sp[34]= new sanpham("I100-TU100","10.590.000₫",0,"idea",0.6,"LENOVO",10590000);
sp[35]= new sanpham("I101-TU100","10.790.000₫",1,"idea",1.6,"LENOVO",10790000);
sp[36]= new sanpham("I102-TU100","10.890.000₫",2,"idea",2.6,"LENOVO",10890000);
sp[37]= new sanpham("I103-TU100","13.590.000₫",3,"idea",3.6,"LENOVO",13590000);
sp[38]= new sanpham("I104-TU100","14.590.000₫",4,"idea",4.6,"LENOVO",14590000);
sp[39]= new sanpham("I105-TU100","15.590.000₫",5,"idea",5.6,"LENOVO",15590000);
sp[40]= new sanpham("I106-TU100","16.590.000₫",6,"idea",6.6,"LENOVO",16590000);
sp[41]= new sanpham("I107-TU100","17.650.000₫",7,"idea",7.6,"LENOVO",17650000);
//GS
sp[42]= new sanpham("G100-TA100","10.590.000₫",0,"GS",0.7,"MSI",10590000);
//GP
sp[43]= new sanpham("G100-TA101","10.590.000₫",0,"GP",0.8,"MSI",10590000);
sp[44]= new sanpham("G101-TA102","10.790.000₫",1,"GP",1.8,"MSI",10790000);
sp[45]= new sanpham("G102-TA103","10.890.000₫",2,"GP",2.8,"MSI",10890000);
sp[46]= new sanpham("G103-TA104","13.590.000₫",3,"GP",3.8,"MSI",13590000);
//GL
sp[47]= new sanpham("G100-TA111","10.590.000₫",0,"GL",0.9,"MSI",10590000);
sp[48]= new sanpham("G101-TA112","10.790.000₫",1,"GL",1.9,"MSI",10790000);
sp[49]= new sanpham("G102-TA113","10.890.000₫",2,"GL",2.9,"MSI",10890000);
sp[50]= new sanpham("G103-TA114","13.590.000₫",3,"GL",3.9,"MSI",13590000);
sp[51]= new sanpham("G104-TA115","14.590.000₫",4,"GL",4.9,"MSI",14590000);
sp[52]= new sanpham("G105-TA116","15.590.000₫",5,"GL",5.9,"MSI",15590000);
sp[53]= new sanpham("G106-TA117","16.590.000₫",6,"GL",6.9,"MSI",16590000);
sp[54]= new sanpham("G107-TA118","17.650.000₫",7,"GL",7.9,"MSI",17650000);
//xps
sp[55]= new sanpham("X100-TA100","10.590.000₫",0,"XPS",0.11,"DELL",10590000);
sp[56]= new sanpham("X101-TA100","10.790.000₫",1,"XPS",1.11,"DELL",10790000);
sp[57]= new sanpham("X102-TA100","10.890.000₫",2,"XPS",2.11,"DELL",10890000);
//ins
sp[58]= new sanpham("X100-TA101","10.590.000₫",0,"Inspiron",0.12,"DELL",10590000);
sp[59]= new sanpham("X101-TA102","10.790.000₫",1,"Inspiron",1.12,"DELL",10790000);
sp[60]= new sanpham("X102-TA103","10.890.000₫",2,"Inspiron",2.12,"DELL",10890000);
sp[61]= new sanpham("X103-TA104","13.590.000₫",3,"Inspiron",3.12,"DELL",13590000);
sp[62]= new sanpham("X104-TA105","14.590.000₫",4,"Inspiron",4.12,"DELL",14590000);
sp[63]= new sanpham("X105-TA106","15.590.000₫",5,"Inspiron",5.12,"DELL",15590000);
sp[64]= new sanpham("X106-TA107","16.590.000₫",6,"Inspiron",6.12,"DELL",16590000);
sp[65]= new sanpham("X107-TA108","17.650.000₫",7,"Inspiron",7.12,"DELL",17650000);
//Vos
sp[66]= new sanpham("X100-TA111","10.590.000₫",0,"Vos",0.13,"DELL",10590000);
sp[67]= new sanpham("X101-TA112","10.790.000₫",1,"Vos",1.13,"DELL",10790000);
sp[68]= new sanpham("X102-TA113","10.890.000₫",2,"Vos",2.13,"DELL",10890000);
sp[69]= new sanpham("X103-TA114","13.590.000₫",3,"Vos",3.13,"DELL",13590000);
sp[70]= new sanpham("X104-TA115","14.590.000₫",4,"Vos",4.13,"DELL",14590000);
sp[71]= new sanpham("X105-TA116","15.590.000₫",5,"Vos",5.13,"DELL",15590000);
sp[72]= new sanpham("X106-TA117","16.590.000₫",6,"Vos",6.13,"DELL",16590000);
sp[73]= new sanpham("X107-TA118","17.650.000₫",7,"Vos",7.13,"DELL",17650000);
//nitro
sp[74]= new sanpham("N100-TA910","10.590.000₫",0,"Nitro",0.14,"ACER",10590000);
sp[75]= new sanpham("NT151-TA100","10.790.000₫",1,"Nitro",1.14,"ACER",10790000);
sp[76]= new sanpham("N102-TA100","10.890.000₫",2,"Nitro",2.14,"ACER",10890000);
sp[77]= new sanpham("N103-TA100","13.590.000₫",3,"Nitro",3.14,"ACER",13590000);
sp[78]= new sanpham("N104-TA100","14.590.000₫",4,"Nitro",4.14,"ACER",14590000);
sp[79]= new sanpham("N105-TA100","15.590.000₫",5,"Nitro",5.14,"ACER",15590000);
//PRE
sp[80]= new sanpham("P100-TA100","10.590.000₫",0,"Pre",0.15,"ACER",10590000);
sp[81]= new sanpham("P101-TA100","10.790.000₫",1,"Pre",1.15,"ACER",10790000);
sp[82]= new sanpham("A102-TA100","10.890.000₫",2,"Pre",2.15,"ACER",10890000);
sp[63]= new sanpham("A103-TA100","13.590.000₫",3,"Pre",3.15,"ACER",13590000);
//ASP
sp[83]= new sanpham("A100-TA100","10.590.000₫",0,"Asp",0.16,"ACER",10590000);
sp[84]= new sanpham("A101-TA100","10.790.000₫",1,"Asp",1.16,"ACER",10790000);
sp[85]= new sanpham("A102-TA100","10.890.000₫",2,"Asp",2.16,"ACER",10890000);
sp[86]= new sanpham("A103-TA100","13.590.000₫",2,"Asp",2.16,"ACER",13590000);
//SPIN
sp[87]= new sanpham("S00-TA100","10.590.000₫",0,"Spin",0.17,"ACER",10590000);
sp[88]= new sanpham("S101-TA100","10.790.000₫",1,"Spin",1.17,"ACER",10790000);
sp[89]= new sanpham("S102-TA100","10.890.000₫",2,"Spin",2.17,"ACER",10890000);

function timsanphamcoban()
{
	var chuoi="0,";
	var sse=document.getElementById("timkiem").value;
	var se=sse.toUpperCase();
	
	for(var i=0;i<sp.length;++i)
	{
		var tt=sp[i].loai.toUpperCase();
		if(sp[i].ten.indexOf(se)!=-1|| se.indexOf(sp[i].ten)!=-1 || tt.indexOf(se)!=-1 || se.indexOf(tt)!=-1|| sp[i].hang.indexOf(se)!=-1 || se.indexOf(sp[i].hang)!=-1)
			chuoi+=i.toString()+",";
			
	}
	localStorage.setItem("admin",chuoi);
	xuattimkiem(0);
}
function timsanphamnangcao()
{
	var chuoi="0,";
	var sse=document.getElementById("tkten").value;
	var mmin=document.getElementById("tkmin").value;
	var mmax=document.getElementById("tkmax").value;
	var loai=document.getElementById("tkloai").value;
	var se=sse.toUpperCase();

	for(var i=0;i<sp.length;++i)
	{
		var tt=sp[i].loai.toUpperCase();
		
		if(sp[i].ten.indexOf(se)!=-1|| se.indexOf(sp[i].ten)!=-1 || tt.indexOf(se)!=-1 || se.indexOf(tt)!=-1|| sp[i].hang.indexOf(se)!=-1 || se.indexOf(sp[i].hang)!=-1)
			{

				if(sp[i].sosanh>=mmin && sp[i].sosanh<=mmax )
					if(sp[i].hang==loai || loai=="ALL")
					chuoi+=i.toString()+",";
			}
			
	}
	localStorage.setItem("admin",chuoi);
	xuattimkiem(0);
}
function xuattimkiem(x)
{
	var lies="";
	var lienkets="";
	var slp=localStorage.getItem("admin");
	var s=slp.split(',');
	
	if(s[1]=="") {
		lies='<h1>Không có sản phẩm</h1>';
		
			document.getElementById("listeach").innerHTML=lies;
				document.getElementById("sotrang").innerHTML="";	
		return;
	}
	var vitri=x+1;
	var i=vitri;
	var dem=0;

	for(;i<s.length-1;++i)
	{
		dem++;
		
		lies+=
		'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+sp[s[i]].ten  +'?'+ sp[s[i]].vitri+'?'+sp[s[i]].loai+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/'+sp[s[i]].loai+sp[s[i]].vitri+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop Asus SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+sp[s[i]].ten +' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop '+sp[s[i]].hang+' '+sp[s[i]].ten +' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+sp[s[i]].gia+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+sp[s[i]].giohang+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';
		if(dem==4) break;
	}
	
	
	document.getElementById("listeach").innerHTML=lies;
	var sotrang=Math.ceil((s.length-2)/4);
	
	for(var i=1;i<=sotrang;i++)
	{
							
			var t=(i-1)*4;
			localStorage.setItem("admin",s);
			lienkets=lienkets+
		'<div style="display:inline-block;width:auto; height:auto;"><button style="border:solid 1px dodgerBlue; font-size:26px; background-color:white;padding:5px 10px" onclick="xuattimkiem('+ t+')"><span>'+i+'</span></button></div>';
														
	}
	document.getElementById("sotrang").innerHTML=lienkets;	
}


function layurl()
{
	var url=window.location.href;
	var params = url.split('?');
	var chuoicon=params[1];
	
	var dem=0, sotrang=1;
	if(chuoicon==null)
		{
	
			lie='<div style="margin-top:100px"><img src="Images/pccontent.jpg" style="width:100%"/></div>';
			return;
		}
	chuoicon=chuoicon.split('&');
	var sotrang;//alert(url);
	var vitri=chuoicon[2];
	switch(chuoicon[1])
	{
	
		case '0':
		if(chuoicon[0]==0)
		{
		dem=0;
			for(i=vitri;i<listvivo.length;i++)
			{	
				
				dem++;
				
				var ii=0.1;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listvivo[i]+'?'+ i+'?vivo'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/vivo'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop Asus SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listvivo[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop Asus '+listvivo[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';
				if(dem==4)	
				{	
					//congvivo();
					break;
				}
				
				
			}
			
		sotrang=Math.ceil(listvivo.length/4);
			for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket+'<a href="index.html?0&0&'+vitri+'">'
									+'<div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
			break;
		}
		else
		if(chuoicon[0]==1)
		{
		dem=0;
		for(i=vitri;i<listzen.length;i++)
		{	 
			dem++;
				
				var ii=0.2;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listzen[i]+'?'+ i+'?zen'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/zen'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop Asus SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listzen[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop Asus '+listzen[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';
			if(dem==4)
				break;
			}
		sotrang=Math.ceil(listzen.length/4);
		for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket
									+'<a href="index.html?1&0&'+vitri+'">'+'<div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
		break;
		}else if(chuoicon[0]==2){
				dem=0;
		for(i=vitri;i<listnote.length;i++)
		{	 
			dem++;
				
				var ii=0.3;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listnote[i]+'?'+ i+'?note'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/note'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop Asus SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listnote[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop Asus '+listnote[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';
			if(dem==4)
				break;
			}
		sotrang=Math.ceil(listnote.length/4);
		for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket+
								    '<a href="index.html?2&0&'+vitri+'">'
									+'<div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
		break;
		}
		case '1':
		{
			if(chuoicon[0]==0)
			{
			dem=0;
			for(i=vitri;i<listthink.length;i++)
			{	 
				dem++;
				var ii=0.4;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listthink[i]+'?'+ i+'?think'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/think'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop Lenovo SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listthink[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop LENOVO '+listthink[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';
				if(dem==4)
					break;
				}
			sotrang=Math.ceil(listthink.length/4);
			for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket+'<a href="index.html?0&1&'+vitri+'">'
									+'<div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
			break;	
			}
			else if(chuoicon[0]==1){
				dem=0;
			for(i=vitri;i<listyoga.length;i++)
			{	 
				dem++;
				var ii=0.5;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listyoga[i]+'?'+ i+'?yoga'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/yoga'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop LEnovo SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listyoga[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop LENOVO '+listyoga[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';
				if(dem==4)
					break;
				}
			sotrang=Math.ceil(listyoga.length/4);
			for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket+
									'<a href="index.html?1&1&'+vitri+'"><div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
			break;	
			}else if(chuoicon[0]==2){
					dem=0;
			for(i=vitri;i<listideapad.length;i++)
			{	 
				dem++;
				var ii=0.6;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listideapad[i]+'?'+ i+'?idea'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/idea'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop Lenovo SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listideapad[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop lenovo '+listideapad[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';
				if(dem==4)
					break;
				}
			sotrang=Math.ceil(listideapad.length/4);
			for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket
									+'<a href="index.html?2&1&'+vitri+'"><div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
			break;	
			}
		}
		case '2':
		{
			if(chuoicon[0]==0){
						dem=0;
			for(i=vitri;i<listGS.length;i++)
			{	 
				dem++;
				var ii=0.7;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listGS[i]+'?'+ i+'?gs'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/GS'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop MSI SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listGS[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop MSI '+listGS[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';
				if(dem==4)
					break;
				}
			sotrang=Math.ceil(listGS.length/4);
			for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket
									+'<a href="index.html?0&2&'+vitri+'"><div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
			break;		
			} else if(chuoicon[0]==1){
								dem=0;
			for(i=vitri;i<listGP.length;i++)
			{	 
				dem++;
				var ii=0.8;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listGP[i]+'?'+ i+'?gp'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/GP'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop MSI SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listGP[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop MSI '+listGP[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';
				if(dem==4)
					break;
				}
			sotrang=Math.ceil(listGP.length/4);
			for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket
									+'<a href="index.html?1&2&'+vitri+'"><div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
			break;		
			} else if(chuoicon[1]==2){
								dem=0;
			for(i=vitri;i<listGL.length;i++)
			{	 
				dem++;
				var ii=0.9;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listGL[i]+'?'+ i+'?gl'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/GL'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop MSI SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listGL[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop MSI '+listGL[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';
				if(dem==4)
					break;
				}
			sotrang=Math.ceil(listGL.length/4);
			for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket		
									+'<a href="index.html?2&2&'+vitri+'"><div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
			break;		
			}
		}
		case '3':{
			
			if(chuoicon[0]==0){
						dem=0;
			for(i=vitri;i<listXPs.length;i++)
			{	 
				dem++;
				var ii=0.11;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listXPs[i]+'?'+ i+'?xps'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/XPs'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop DELL  (Vàng)" title="Máy tính xách tay/ Laptop '+listXPs[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop DELL '+listXPs[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';
				if(dem==4)
					break;
				}
			sotrang=Math.ceil(listXPs.length/4);
			for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket
									+'<a href="index.html?0&3&'+vitri+'"><div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
			break;		
			} else if(chuoicon[0]==1){
								dem=0;
			for(i=vitri;i<listInspiron.length;i++)
			{	 
				dem++;
				var ii=0.12;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listInspiron[i]+'?'+ i+'?inspiron'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/Inspiron'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop DELL SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listInspiron[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop DELL '+listInspiron[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';
				if(dem==4)
					break;
				}
			sotrang=Math.ceil(listInspiron.length/4);
			for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket
									+'<a href="index.html?1&3&'+vitri+'"><div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
			break;		
			} else if(chuoicon[0]==2){
								dem=0;
			for(i=vitri;i<listVos.length;i++)
			{	 
				dem++;
				var ii=0.13;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listVos[i]+'?'+ i+'?vos'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/Vos'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop DELL SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listVos[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop DELL '+listVos[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';

					if(dem==4)
					break;
				
				}
			sotrang=Math.ceil(listVos.length/4);
			for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket
									+'<a href="index.html?2&3&'+vitri+'"><div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
			break;		
			}
		}
		case '4':{
			
			if(chuoicon[0]==0){
						dem=0;
			for(i=vitri;i<listNitro.length;i++)
			{	 
				dem++;
				var ii=0.14;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listNitro[i]+'?'+ i+'?nitro'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/Nitro'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop ACER SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listNitro[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop ACER '+listNitro[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';

				if(dem==4)
					break;
				}
			sotrang=Math.ceil(listNitro.length/4);
			for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket
									+'<a href="index.html?0&4&'+vitri+'"><div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
		
			break;		
			} else if(chuoicon[0]==1){
								dem=0;
			for(i=vitri;i<listPre.length;i++)
			{	 
				dem++;
				var ii=0.15;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listPre[i]+'?'+ i+'?pre'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/Pre'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop ACER SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listPre[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop ACER '+listPre[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';

				if(dem==4)
					break;
				}
			sotrang=Math.ceil(listPre.length/4);
			for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket
									+'<a href="index.html?1&4&'+vitri+'"><div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
			break;		
			} else if(chuoicon[0]==2){
								dem=0;
			for(i=vitri;i<listAsp.length;i++)
			{	 
				dem++;
				var ii=0.16;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listAsp[i]+'?'+ i+'?asp'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/Asp'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop ACER SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listAsp[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop ACER '+listAsp[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';
				if(dem==4)
					break;
				}
			sotrang=Math.ceil(listSpin.length/4);
			for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket
									
									+'<a href="index.html?2&4&'+vitri+'"><div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
			break;		
			} else if(chuoicon[0]==3){
								dem=0;
			for(i=vitri;i<listSpin.length;i++)
			{	 
				dem++;
				var ii=0.17;
				ii+=i;
				lie=lie+'<div  style="float:left; width:250px;" class="polaroid">'+
				
				'<a href="chitiet_sanpham.html?'+ listSpin[i]+'?'+ i+'?spin'+'"><div style="float:left; width:250px;" >'
				+'<img src="Images/Spin'+i+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ Laptop ACER SS30UA-EJ870T (I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+listSpin[i]+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop ACER '+listSpin[i]+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[i]+'</div>'
				+'</div></a>'
				+'<div><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				
				+'</div>';
				if(dem==4)
					break;
				}
			sotrang=Math.ceil(listSpin.length/4);
			for(i=1;i<=sotrang;i++)
							{
									vitri=(i-1)*4;
									lienket=lienket
									+'<a href="index.html?3&4&'+vitri+'"><div style="display:inline-block;width:29px; height:29px; border-radius:3px dodgerBlue; border: dodgerBlue 1px solid">'+i+'</div></a>'
								
							}
			break;		
			}
		}
		default : break;
	}
	

}