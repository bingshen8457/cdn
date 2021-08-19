//搜索框隐藏和显示
var spic = document.getElementById('spic');
var dom = document.getElementById('scroller');
var divsearch = document.getElementById('divsearch');

spic.addEventListener('touchstart',function(event){
	//
	var displayval = divsearch.getAttribute("style").split(";")[0].split("display:")[1];//获取display值
	if(displayval == " none"){
		divsearch.setAttribute("style", "display: block;")
	}else{
		divsearch.setAttribute("style", "display: none;")
	}
},false);

//上下拉动隐藏搜索框
dom.addEventListener('touchstart',function(event){
	var touch = event.targetTouches[0];
	startY = touch.pageY;
},false);
dom.addEventListener('touchmove',function(event){
	var touch = event.targetTouches[0];
	endY = touch.pageY;
},false);
	dom.addEventListener('touchend',function(event){
	var dis = endY - startY;
	//alert(dis);
	if (dis<-50 || dis>50) {
		divsearch.setAttribute("style", "display: none;")
	}
},false);
