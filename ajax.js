//loadxml

function loadXMLDoc(dname)
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",dname,true);
xhttp.send();
return xhttp.responseXML;
}

// Start

function introFunc() {

	intro=new XMLHttpRequest();

	intro.onreadystatechange=function()
	  {
	  if (intro.readyState==4 && intro.status==200)
		{
		document.getElementById("intro").innerHTML=intro.responseText;
		}
	  }
	  
intro.open("GET","start.html", true);
intro.send();


	}

//Attributes 

function attFunc() {


	attIntro=new XMLHttpRequest();

	attIntro.onreadystatechange=function()
	  {
	  if (attIntro.readyState==4 && attIntro.status==200)
		{
		document.getElementById("intro").innerHTML=attIntro.responseText;
		}
	  }
	  
	
	  
	attIntro.open("GET","attribute-intro.html", true);
	attIntro.send();

///////////////////////////////
	
	att = new XMLHttpRequest();
		
		att.onreadystatechange=function()
	  {
	  if (att.readyState==4 && att.status==200)
		{
		attList = att.responseXML;
		var txt = "<ul>";
		
		x = attList.getElementsByTagName("title");
		
		for (var i=0;i < x.length; i++) 
		{
			txt = txt + "<li>" + x[i].childNodes[0].nodeValue + "</li>";
		}
		
		txt=txt+"</ul>";
		alert(txt);
		document.getElementById("statlist").innerHTML=txt;
		
		}
		
		
	  }
		
	att.open("GET","attributes.xml", true);
	att.send();
	
	
		
		
	  

	
}




// 
// 
// traits=new XMLHttpRequest();
// 
// traits.open("GET","traits.xml", true);
// traits.send();
// traitsd=traits.responseXML;

