
if($("#nav_menu")[0]) {
//	var voidtypeli = $(".m-nav-head-list").children("li");
//	var width = 0;
//	voidtypeli.each(function(){
//		width +=  parseInt($(this).width());
//	});
	
//	width +=10;
	
//	$("#nav_menu .m-nav-head-list").css({
//		width: width
	//});
	var indexMenu = new iScroll("nav_menu", {
		hScroll: !0,
		vScroll: !1,
		bounce: !0,
		momentum: !0
	});
	$(window).on("resize", function() {
	//	$("#nav_menu .m-nav-head-list").css({
	//		width: ""
	//	});
	//	var a = $(".m-nav-head").width() + 30;
	//	$("#nav_menu .m-nav-head-list").css({
	//		width: a
	//	});
		indexMenu.refresh()
	});
//	if($("#nav_menu a.selected")[0]) {
//		console.log($("#nav_menu a.selected")[0]);
//		var screenWidth = $(".headerbar").width(),
//			left = $("#nav_menu a.selected").offset().left,
//			scrollLeft = parseInt(screenWidth - left);
//		30 > scrollLeft && indexMenu.scrollTo(-screenWidth)
//	}
};

if($(".m-sortList-wrap")[0]) {
	
//	varsortArr = $("#sort_menu .m-sortList");
//	varsortArr.each(function(){
//		var voidtypeli = $(this).children("li");
//		var width = 0;
//		voidtypeli.each(function(){
//		width +=  parseInt($(this).width());
//		});
//		width += 10;
//		$(this).css({
//			width: width
//		});
//		
//	});

	var indexMenu_Sorting = new iScroll("sort_menu_Sorting", {
		hScroll: !0,
		vScroll: !1,
		bounce: !0,
		momentum: !0
	});
	var indexMenu_Type = new iScroll("sort_menu_type", {
		hScroll: !0,
		vScroll: !1,
		bounce: !0,
		momentum: !0
	});
	var indexMenu_Area = new iScroll("sort_menu_area", {
		hScroll: !0,
		vScroll: !1,
		bounce: !0,
		momentum: !0
	});
	var indexMenu_Year = new iScroll("sort_menu_year", {
		hScroll: !0,
		vScroll: !1,
		bounce: !0,
		momentum: !0
	});
	
	
	$(window).on("resize", function() {
//		$("#sort_menu .m-sortList").css({
//			width: ""
//		});
//		var a = $("#nav_menu").width() + 30;
//		$("#sort_menu .m-sortList").css({
//			width: a
//		});
		indexMenu.refresh();
		indexMenu_Sorting.refresh();
		indexMenu_Type.refresh();
		indexMenu_Area.refresh();
		indexMenu_Year.refresh();
		
		
	});
//	if($("#nav_menu a.cur")[0]) {
//		var screenWidth = $(".headerbar").width(),
//			left = $("#nav_menu a.cur").offset().left,
//			scrollLeft = parseInt(screenWidth - left);
//		30 > scrollLeft && indexMenu.scrollTo(-screenWidth)
//	}
};

if($(".m-tab-num")[0]) {
	
	var indexMenu_playfrom = new iScroll("playfrom", {
		hScroll: !0,
		vScroll: !1,
		bounce: !0,
		momentum: !0
	});
	
	
	
	$(window).on("resize", function() {
		indexMenu_playfrom.refresh();
	});

};

if($("#mayYlike")[0]) {
	
	var indexMenu_mayYlikes = new iScroll("mayYlikes", {
		hScroll: !0,
		vScroll: !1,
		bounce: !0,
		momentum: !0
	});
	
	
	
	$(window).on("resize", function() {
		indexMenu_mayYlikes.refresh();
	});

};

var sliderTimeout, timeOut = 5000,
	bodyWidth = 0,
	changeValue;


function setHeight(element) {
	
	element.css({
		height: ""
	});
	changeValue = bodyWidth = document.body.clientWidth;
	var a = Math.round(192 * bodyWidth / 480);

	element.css({
		height: a
	});
	clearTimeout(sliderTimeout);
	sliderTimeout = setTimeout(autoPlay, timeOut)
}


//	!isFocusLoaded && $(".piclist-img img").each(function() {
//		$(this).attr("data-src") && ($(this).attr("src", $(this).attr("data-src")), $(this).attr("data-src",
//			""));
//		isFocusLoaded = !0
//	});
	
	

function foucsAnimate(a, c, b, d, g, e, f) {
	if($('#focusUl>li').length > 1){
		function h() {
		$(focusConArr[a]).css({
			left: Math.ceil(animateEaseIn(e, 0, -f, g)) + "px"
		});
		$(focusConArr[c]).css({
			left: Math.ceil(animateEaseIn(e, f, -f, g)) + "px"
		});
		e < g ? (e++, setTimeout(h, 5)) : ($(focusConArr[a]).removeClass(d), animateIng = !1, e = 0, sliderTimeout = setTimeout(autoPlay, timeOut), f = Math.abs(f))
	}
	clearTimeout(sliderTimeout);
	!isFocusLoaded && $(".list-carousel img").each(function() {
		$(this).attr("data-src") && ($(this).attr("src", $(this).attr("data-src")), $(this).attr("data-src",
			""));
		isFocusLoaded = !0
	});
	$(focusConArr[a]).css({
		left: "0px"
	}).addClass(d);
	$(focusConArr[c]).css({
		left: b
	}).addClass(d);
	animateIng = !0;
	h();
	
	setTimeout(function () {
	$(focusTabArr[a]).removeClass(d);
	$(focusTabArr[c]).addClass(d);
	$(focusTitleArr[a]).removeClass(d);
	$(focusTitleArr[c]).addClass(d);
	}, 200);
	}
	
}

function animateEaseIn(a, c, b, d) {
	return b * (a /= d) * a + c
}
var startTouchX = endTouchX = 0,
	moveY = 0;

function touchstart(a) {
	clearTimeout(sliderTimeout);
	startTouchX = a.touches[0].pageX;
	moveY = a.touches[0].pageY
}

function touchmove(a) {
	8 > Math.abs(a.touches[0].pageY - moveY) && a.preventDefault();
	endTouchX = a.touches[0].pageX
}

function touchend(a) {
	!1 === animateIng && (changeValue = Math.abs(changeValue), prevIndex = nextIndex, endTouchX > startTouchX + 30 ? (changeValue = -changeValue, nextIndex--, -1 == nextIndex && (nextIndex = focuscListLength - 1), foucsAnimate(prevIndex, nextIndex, bodyWidth, "selected", durationTime, currentTime, changeValue)) : endTouchX + 30 < startTouchX ? (nextIndex++, nextIndex == focuscListLength && (nextIndex = 0), foucsAnimate(prevIndex, nextIndex, bodyWidth, "selected", durationTime, currentTime, changeValue)) : sliderTimeout = setTimeout(autoPlay, timeOut));
	changeValue = Math.abs(changeValue)
}

function autoPlay() {
	prevIndex = nextIndex;
	nextIndex++;
	nextIndex == focuscListLength && (nextIndex = 0);
	foucsAnimate(prevIndex, nextIndex, bodyWidth, "selected", durationTime, currentTime, changeValue)
}

function alltype(){
	var curlink = window.location.search;
	var curvodtypepid = document.getElementById("curvodtypepid").getAttribute("data-curpid");
	var linkbefore = curlink.substring(0,15);
	var linkbehind = curlink.slice(curlink.indexOf("-pg"));
	var link = linkbefore + curvodtypepid + linkbehind;
	window.location.href=link;
};



function resetDataIfrasrc(){
	
 	var curlink = window.location.search;
	var cutend = curlink.indexOf("pg-") + 3;
	var linkbefore = curlink.substring(0,cutend);
	var cutstart = curlink.indexOf("-order");
	var linkbehind = curlink.slice(cutstart);
	var nextPagenum = 2;
	var nextPagelink = linkbefore + nextPagenum + linkbehind;
	$("#dataIframe").attr("src", nextPagelink);

	
};

function showLoadMor(){
	var fenye = $('#fenyedata').html();
	if(fenye != undefined){
	var curye = fenye.match(/当前:(\S*)\/[1-9]/);
	var allye = fenye.match(/\/(\S*)页&nbsp;<em>首页<\/em>/);
	if(curye[1] == allye[1]){
		$('#loadmore').css('display','none');
	}
	};
};

var nextPagenum = 2;
var curye =2;
function loadMor(){
	var fenye = $('#fenyedata').html();
	var allye = fenye.match(/\/(\S*)页&nbsp;<em>首页<\/em>/);
	if(allye[1] == curye){
		$('#loadmore').css('display','none');
	}
	curye += 1;
	
	var curlink = window.location.search;
	var cutend = curlink.indexOf("pg-") + 3;
	var linkbefore = curlink.substring(0,cutend);
	var cutstart = curlink.indexOf("-order");
	var linkbehind = curlink.slice(cutstart);
	var nextSection = $(window.frames["dataIframe"].document).find("#sortResDiv").html();
	$("#sortResDiv").append(nextSection);
	nextPagenum += 1;
	var nextPagelink = linkbefore + nextPagenum + linkbehind;
	$("#dataIframe").attr("src", nextPagelink);
	$('img').lazyload({
				data_attribute: 'src',
				threshold: 30,
			});

	
};





function loadMoreInfo(){
	var curclass = $("#voidinfo").attr('class');
	if(curclass.indexOf("selected")>0){
		$("#voidinfo").removeClass("selected");
	}else{
		$("#voidinfo").addClass("selected");
	}
};
function selectPlayfrom(id){
	playid = 'playfromNum'+id;
	var playnumclass = $('#'+playid).attr('class');
	if(playnumclass.indexOf("selected")<0){
		var playArr = $('#'+playid).siblings();
		playArr.each(function(){
			$(this).removeClass('selected');
		});
		$('#'+playid).addClass('selected');
		var playnumid = 'playItem'+id;
		var playnumArr = $('#'+playnumid).siblings();
		playnumArr.each(function(){
			$(this).removeClass('selected');
		});
		$('.zanwujuji').css('display','none');
		var isnull = $('#'+playnumid).find("a").length;
		if(!isnull){
			$('.zanwujuji').css('display','block');
		}
		$('#'+playnumid).addClass('selected');
	}
};

function haveMorePlay(){
	if($('.m-tab-num-list').width() > $(window).width()){
		$('.iArrowTips').css('display','inline');
	}
};


function MoreInfo(){
	var curclass = $("#moreinfo").attr('class');
	var infoclass = $('.video-content').attr('class');
	if(curclass.indexOf("selected")>0&&infoclass.indexOf('hide')<0){
		$("#moreinfo").removeClass("selected");
		$('.video-content').addClass('hide');
	}else{
		if(curclass.indexOf("selected")<0&&infoclass.indexOf('hide')>0){
		$("#moreinfo").addClass("selected");
		$('.video-content').removeClass('hide');
		}else{
			alert('系统错误，请刷新后再进行操作');
		}
	}
};

function search(){
	var searchClass = $('.m-header-search').attr('class');
	if(searchClass.indexOf('hide')>0){
		 $('.m-header-search').removeClass('hide');
	}else{
		$('.m-header-search').addClass('hide');
	}
};

function searchChange(){
	console.log($('.search-input').val());
	if($('.search-input').val() != ""){
		$('.c-glyphicon-close').css('display','block');
		$('.btn-search').css('display','inline-block');
		$('.btn-cancle').css('display','none');
	}else{
		$('.c-glyphicon-close').css('display','none');
		$('.btn-search').css('display','none');
		$('.btn-cancle').css('display','inline-block');
	}
};

function clearinput(){
	$('.search-input').val('');
	$('.search-input')[0].focus();
	$('.btn-search').css('display','none');
	$('.btn-cancle').css('display','inline-block');
};


function changeshow(id){
	var showArr = $(".type_"+id);
	showArr.each(function(){
		if($(this).css("display")=="block"){
			$(this).css("display","none");
			console.log($(this).attr("data-node"))
			if($(this).attr("data-node")!="group_2"){
				$(this).next().css('display','block');
				return false;
			}else{
				$(showArr[0]).css('display','block');
				return false;
			}
		}
	});
}





