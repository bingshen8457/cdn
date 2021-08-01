
if (self != top) { 
 $(function(){
$('.v_remarks:empty').css('display','none'); 

var sortResNum = $("#sortResult li").length;
if(sortResNum==0){
	$('#noResult').removeClass('hide');
};

});
}else{
$(function(){
	
if($('#focusUl>li').length == 0){
		$('#topFocus').css('display','none');
};


var sortResNum = $("#sortResult li").length;
if(sortResNum==0){
	$('#noResult').removeClass('hide');
};

var searchResNum = $("#search_results div").length;
if(searchResNum==0){
	$('#noSearchResult').removeClass('hide');
};

$(window).scroll(function(){
    if($(window).scrollTop()>500){
       $(".m-sideBar").css('display','block');  
      }else{
      	 $(".m-sideBar").css('display','none');  
      }
   });

resetDataIfrasrc();
showLoadMor();



});
window.onload = setHeight($(".list-carousel"));

$(window).on("resize", function() {
	setHeight($(".list-carousel"));
});

var focusConArr = $(".list-carousel li"),
	focusTabArr = $(".dot-inner i"),
	focusTitleArr = $(".carousel-title h2"),
	prevIndex = nextIndex = 0,
	focuscListLength = focusConArr.length,
	currentTime = 0,
	durationTime = 50,
	isFocusLoaded = !1;
	animateIng = !1;

if(focusConArr.length > 0){
$(".list-carousel")[0].addEventListener("touchstart", touchstart, !1);
$(".list-carousel")[0].addEventListener("touchmove", touchmove, !1);
$(".list-carousel")[0].addEventListener("touchend", touchend, !1);
}
$(".m-pic-list img").lazyload({
	data_attribute: "src"
});



};
