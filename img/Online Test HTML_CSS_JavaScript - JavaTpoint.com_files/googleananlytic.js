function runInfo(){document.getElementById("imglocation").innerHTML='<img src="/opr/loader.gif" style="float:left;width:25px;height:25px" alt="loader image"/>';var e=document.vinform.code.value;e=e.split("%").join("%25");e=e.split("+").join("%2b");e=e.split("*").join("%2a");var t=document.vinform.filename.value;if(window.XMLHttpRequest){request=new XMLHttpRequest}else if(window.ActiveXObject){request=new ActiveXObject("Microsoft.XMLHTTP")}try{request.onreadystatechange=getInfo;request.open("POST","run.jsp",true);request.setRequestHeader("Content-type","application/x-www-form-urlencoded");request.setRequestHeader("Connection","close");request.send("val="+e+"&filename="+t)}catch(n){alert("Unable to connect to server")}}function getInfo(){if(request.readyState==4){var e=request.responseText;document.getElementById("outputweb").contentWindow.document.write(e);document.getElementById("outputweb").contentWindow.document.close();document.getElementById("imglocation").innerHTML="";}}var request