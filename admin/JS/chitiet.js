// JavaScript Document\
var listvivo=["SS30UA-EJ870T","S530UA-BQ176T","A510UN-EJ463T","S330UA-EY023T","S510UA-BQ222T","S510UN-BQ319T","S410UN-EB210T","VS678UA-EJ8702"];
var listvivoPrice=["10.590.000₫","10.790.000₫","10.890.000₫","13.590.000₫","14.590.000₫","15.590.000₫","16.590.000₫","17.650.000₫"];
var listzen=["SS30UA-TDR99T","UX40UA-DS763T","UX490UA"," S330UA-EY023T","S510UA-BQ222T","S510UN-BQ319T","S410UN-EB210T","Z411-EB210T"];

var listnote=["NT3380-UEA897","NT3381-UEA123","NT3382-UEA456","NT3383-UE","NT3384-UEA999","NTN33885-UEA999","NTN33886-UEA999","NTN3387-UEA897"];
var listthink=["E480-T112","L380-Y678","S330UA-EY023T","S510UA-BQ222T","S510UN-BQ319T","S410UN-EB210T","T3389-UEA220"];
var listyoga=["UES3380-EJ875","S510UA-BQ222T","S510UN-BQ319T","S410UN-EB210T","SS10UN-BQ339U","Y567-POT888","Y789-POT888"];
var listideapad=["I100-TU100","I101-TU100","I102-TU100","I103-TU100","I104-TU100","I105-TU100","I106-TU100","I107-TU100"];
var listGS = ["G100-TA100"];
var listGP = ["G100-TA101","G101-TA102","G102-TA103","G103-TA104"];
var listGL =  ["G100-TA111","G101-TA112","G102-TA113","G103-TA114","G104-TA115","G105-TA116","G106-TA117","G107-TA118"];
var listXPs = ["X100-TA100","X101-TA100","X102-TA100",];
var listInspiron = ["X100-TA101","X101-TA102","X102-TA103","X103-TA104","X104-TA105","X105-TA106","X106-TA107","X107-TA108"];
var listVos =  ["X100-TA111","X101-TA112","X102-TA113","X103-TA114","X104-TA115","X105-TA116","X106-TA117","X107-TA118"];
var listNitro =["N100-TA100","N101-TA100","N102-TA100","N103-TA100","N104-TA100","N105-TA100"];
var listPre =["P100-TA100","P101-TA100","P102-TA100","P103-TA100"];
var listAsp = ["A100-TA100","A101-TA100","A102-TA100","A103-TA100"];
var listSpin = ["S100-TA100","S101-TA100","S102-TA100"];
var okchitiet="";

var i1='<div style="margin-left:40px;">'    
	  +'<table width="650" height="325" border="1" border-collapse:collapse style="border:solid">'
	    +'<tr>'
	    +'<td width="204"><ul>'
	        +'<ul>'
	          +'<li>Operating System:</li>'
            +'</ul>'
          +'</ul></td>'
	      +'<td width="430"><p>Window 7 Profecssional 32-bit</p></td>'
        +'</tr>'
	    +'<tr>'
	      +'<td><ul>'
	        +'<ul>'
	          +'<li>Language:</li>'
            +'</ul>'
          +'</ul></td>'
	      +'<td><p>English</p></td>'
        +'</tr>'
	    +'<tr>'
	      +'<td><ul>'
	        +'<ul>'
	          +'<li>System Manufacture:</li>'
            +'</ul>'
          +'</ul></td>'
	      +'<td><p>Compaq-Presario</p></td>'
        +'</tr>'
	    +'<tr>'
	      +'<td><ul>'
	        +'<ul>'
	          +'<li>BIOS:</li>'
            +'</ul>'
          +'</ul></td>'
	      +'<td><p>BIOS Date 11/27/09</p></td>'
        +'</tr>'
	    +'<tr>'
	      +'<td><ul>'
	        +'<ul>'
	          +'<li>Processor:</li>'
            +'</ul>'
          +'</ul></td>'
	      +'<td><p>Pentium(R) Dual-Core CPU E6500 @ 2.93GHz(2CPUs),~2.9GHz</p></td>'
        +'</tr>'
	    +'<tr>'
	      +'<td><ul>'
	        +'<ul>'
	          +'<li>Memory:</li>'
            +'</ul>'
          +'</ul></td>'
	      +'<td><p>2048MB RAM</p></td>'
        +'</tr>'
	    +'<tr>'
	      +'<td><ul>'
	        +'<ul>'
	          +'<li>DirectX Version:</li>'
            +'</ul>'
          +'</ul></td>'
	      +'<td><p>DirectX 11</p></td>'
        +'</tr>'
      +'</table>'
	+'</div>'

function xuatchitiet(x,y,z)
{
	
	var ii;
	if(z=="vivo")
		ii=0.1;
	else if(z=="zen")
		ii=0.2;
		else if(z=="note")
		ii=0.3;
		else if(z=="think")
		ii=0.4;
		else if(z=="yoga")
		ii=0.5;
		else if(z=="idea")
		ii=0.6;
		else if(z=="gs")
		ii=0.7;
		else if(z=="gp")
		ii=0.8;
		else if(z=="gl")
		ii=0.9;
		else if(z=="xps")
		ii=0.11;
		else if(z=="inspiron")
		ii=0.12;
		else if(z=="vos")
		ii=0.13;
	
		else if(z=="pre")
		ii=0.15;
		else if(z=="asp")
		ii=0.16;
		else if(z=="spin")
		ii=0.17;
		else ii=0.14;
	
	ii=parseInt(y)+ii;
	
	okchitiet='<div style="float:left; margin-left:40px	; border: dodgerBlue solid 1px;	 width:250px;">'+
				
				'<div style="float:left; width:250px;" >'
				+'<img src="Images/'+z+y+'.jpg" width="150px" height="150px" alt="Máy tính xách tay/ laptop'+x+'(I5-8250U) (Vàng)" title="Máy tính xách tay/ Laptop '+x+' (I5-8250U) (Vàng)"/>'
				
				+'<div class="product-name">Máy tính xách tay/ Laptop  '+x+' (I5-8250U) (Vàng) </div>'
				+'<div class="price">'+listvivoPrice[y]+'</div>'
				+'</div></a>'
				
				+'<div align="center"><form>'
		
+'<input type="button" name="" onclick=themvaogiohang('+ii+') value=Thêm&nbsp;vào&nbsp;giỏ&nbsp;hàng>'

				+'</form></div>'
				+'</div>'
				+i1
				;
}