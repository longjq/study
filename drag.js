function drag(id){
	var dom = document.getElementById(id);
	var disX = 0;
	var disY = 0;
	obj.onmousedown=function(){
		alert(1);
		document.onmousemove=function(){
			alert(111111);
		};
	};
}