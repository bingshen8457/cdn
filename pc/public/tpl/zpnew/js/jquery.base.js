islogin=0;
function checkcookie(){
	if(document.cookie.indexOf('auth=')>=0){
		islogin=1;
		return true;
	}
	return false;
}
checkcookie();
$(function($){
    $.fn.changeList = function(options){	
        var defaults = {
                    tag : 'li', // tab name
                    subName : '.utilTabSub', // sub class name
                    eventType : 'click', // event type
                    num : 4,
                    showType : 'show' // show effect type
                },
                opts = $.extend({}, defaults, options),
                that = $(this),
                subUl = that.find(opts.subName),
                subItems = subUl.find('li'),
                size = subItems.length,
                liW = subItems.outerWidth(true),
                ulW = liW * size,
                page = size + 1,
                n = opts.num,
                randNum = 0,
                m = 0;

        if(size > n){
            that.find(opts.tag)[opts.eventType](function() {
                randNum = mathRand(n, size);
                subItems.hide();
                $.each(randNum, function (i, el) {
                    subItems.eq(el).fadeIn(800);
                });
            });
        }
    };
}(jQuery));
function Copy()  {
 if (window.clipboardData) {
   var txtObj=document.getElementById("neirong"); 
   var text=txtObj.value;  
   window.clipboardData.setData("Text",text);  
   alert("复制成功！");   
   //var clipValue=window.clipboardData.getData("text");//text is not case sensitive  
  //alert(clipValue);  
  }
  else {
  document.getElementById("neirong").focus();   
  alert('你使用的浏览器不支持复制功能，请使用 Ctrl+C 或鼠标右键');  
  }  
} 
// 全站通栏模块切换
function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"current":"";
		con.style.display=i==cursel?"block":"none";
	}
}
function vodTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("vod_"+name+"_"+i);
		menu.className=i==cursel?"current btn":"";
		con.style.display=i==cursel?"block":"none";
	}
}
//栏目页面周期显示
function weekTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("week_"+name+"_"+i);
		menu.className=i==cursel?"current":"";
		con.className=i==cursel?"current":"";
	}
}
$(function(){ 						   
if($('.top-boxs,.top-box').get(0)) {
   var movieHeaderSearch = $('.top-boxs,.top-box'); 
   var headerNav = $('.header');
   function suspend(){
     //滚动条大于 40
     if ( $(window).scrollTop() > 60 ) {
         movieHeaderSearch.addClass('mhs-position');
         headerNav.show();
         headerNav.hover(function() {
           navBtn.addClass('mbNone');
         }, function() {
           navBtn.removeClass('mbNone');
         })

     }else{
         movieHeaderSearch.removeClass('mhs-position');
     }

    //浏览器宽度小于 1200
    if ( $(window).width() <= 1200 ) {
         searchTxt.css('margin-left','');
         headerNav.hide();
       }
   }
   
    suspend();

   //浏览器滚动的时候
   $(window).scroll(function(){
      suspend();
   })
   
  //浏览器缩小的时候
   $(window).resize(function(){
      suspend();
   })

}	
})
$(document).ready(function(){
	$("img.loading").lazyload({
		effect : "fadeIn",
		failurelimit : 1000,
		skip_invisible : false
		//event : "mouseover"
	});						   
	$("#code").qrcode({
	render: "table", //table方式
	width: 150, //宽度
	height:150, //高度
	text: Siteurl //任意内容
    });						   
	$("#ncode").qrcode({
	render: "canvas", //table方式
	width: 150, //宽度
	height:150, //高度
	text: Mvodurl //任意内容
    });	
     $(".vod-em,.qr,.qr-code-ico,.qr-code").hover(function() {	
		$html = $(this).html();
		$(".qr-code").show();
		$(".vod-em").toggleClass("jon");
	  },function(){
		$(".qr-code").hide();

	});	
		$(".play-nav-more .aMore,.morename").hover(function() {	
		$html = $(this).html();
		$(".morename").toggleClass("sourceMoreList");
		
	});
		
		$(".play-juji,.player-juqing").hover(function() {	
		$html = $(this).html();
		$(".play-juji").toggleClass("jon");
		$(".juqing-txt").toggleClass("player-jqon");
	});
	$(".header .more,.nav_more").hover(function() {	
		$html = $(this).html();
		$(".nav_more").toggle();
		$(".header .more").toggleClass("more_on");
	});		
	
	$("#loginbarx,.drop-box").hover(function() {	
		$html = $(this).html();
		$(".drop-box").toggle();
	});
		$(".recor,.watch-list").hover(function() {	
		$html = $(this).html();
		$(".watch-list").toggle();
		$(".recor").toggleClass("on");
	});
	$("#index-top .qrcode_box,#index-top .qrcode").hover(function() {	
		$html = $(this).html();
		$("#index-top .qrcode").toggle();
	});		
		$("#login2").click(function(){								
		$.colorbox({
        inline: true,
        href: "#login-dialog",
        width: '570px',
		height: '415px'

    });});
	$("#login1").click(function(){								
		$.colorbox({
        inline: true,
        href: "#login-dialog",
        width: '570px',
		height: '360px'

    });});	
//内容页面播放列表切换
	$(".play-nav ul li a").each(function(j,div){
			$(this).click(function(){
		//$("html,body").animate({scrollTop:$("#"+listid).offset().top}, 500); //我要平滑
		        if ($(this).parent().hasClass("on") ){
					return;
                }
				$(this).parent().nextAll().removeClass("on");
				$(this).parent().prevAll().removeClass("on");
				$(this).parent().addClass("on")
				$('.playerlist ul').hide().css("opacity",0);
				$('.playerlist ul:eq('+j+')').show().animate({"opacity":"1"});
	});		
	});
	
	  $('.downmore').find('a').live('click', function(e){
        e.preventDefault();
        var self = $(this),
            allNum = self.attr('re'),
            sta = self.attr('sta'),
            hideItem = $('#downul').find('li[rel="h"]');
        if(sta == undefined || sta == 0){
			hideItem.removeClass('n');
            hideItem.addClass('d');
            self.text('收起部分地址');
            self.attr('sta', 1);
			jQuery(".thunder_url").each(function(){
		    var allParentObjWidth,firstObjWidth,lastObjWidth,parentObjWidth;
		    parentObjWidth=jQuery(this).parent();
		    allParentObjWidth=parentObjWidth.parent().width();
		    firstObjWidth=parentObjWidth.prev(".down_url").outerWidth(true);
		    lastObjWidth=parentObjWidth.next("span").outerWidth(true);
		    parentObjWidth.width(allParentObjWidth-firstObjWidth-lastObjWidth-10);
		    jQuery(this).width(parentObjWidth.width()-jQuery(this).prev().outerWidth(true)-16);
		    var thunderUrl=BeyondDecode(parentObjWidth.prev(".down_url").val());
		    jQuery(this).val(thunderUrl);
        	});
			
        }
        else{
			hideItem.removeClass('d');
            hideItem.addClass('n');
            self.text('展开全部'+allNum+'集');
            self.attr('sta', 0);
			jQuery(".thunder_url").each(function(){
		    var allParentObjWidth,firstObjWidth,lastObjWidth,parentObjWidth;
		    parentObjWidth=jQuery(this).parent();
		    allParentObjWidth=parentObjWidth.parent().width();
		    firstObjWidth=parentObjWidth.prev(".down_url").outerWidth(true);
		    lastObjWidth=parentObjWidth.next("span").outerWidth(true);
		    parentObjWidth.width(allParentObjWidth-firstObjWidth-lastObjWidth-10);
		    jQuery(this).width(parentObjWidth.width()-jQuery(this).prev().outerWidth(true)-16);
		    var thunderUrl=BeyondDecode(parentObjWidth.prev(".down_url").val());
		    jQuery(this).val(thunderUrl);
        	});
        }
    });
//下载更多展示	  
 $('.actorlist .mores').find('a').live('click', function(e){
        e.preventDefault();
        var self = $(this),
            allNum = self.attr('re'),
			buNum = self.attr('re')-7,
            sta = self.attr('sta'),
            hideItem = $('.actorlist ul').find('li[rel="h"]');
        if(sta == undefined || sta == 0){
            hideItem.show(200);
            self.text('收起部分'+buNum+'个角色');
            self.attr('sta', 1);
        }
        else{
            hideItem.hide(200);
            self.text('查看全部'+allNum+'个角色');
            self.attr('sta', 0);
        }

    });	
 $('.rolebox-list .mores').find('a').live('click', function(e){
        e.preventDefault();
        var self = $(this),
            allNum = self.attr('re'),
			buNum = self.attr('re')-7,
            sta = self.attr('sta'),
            hideItem = $('.rolebox-list').find('li[rel="h"]');
        if(sta == undefined || sta == 0){
            hideItem.show(200);
            self.text('收起部分'+buNum+'个角色');
            self.attr('sta', 1);
        }
        else{
            hideItem.hide(200);
            self.text('查看全部'+allNum+'个角色');
            self.attr('sta', 0);
        }

    });	

$(".roleinfo #star").click(function() {$("html,body").animate({scrollTop:$("#starinfo").offset().top - 150},500);});
$(".play-tool span.s1 em").click(function() {					 
		$html = $(this).html();
		try {
			if ($html == '关灯') {
				$(this).html('开灯')
			} else {
				$(this).html('关灯')
			}
		} catch (e) {}
		$(".playopen").toggle(300);
		$(".play-tool").toggleClass("son");
		$(".player-top h1").toggleClass("on");
		$(".player").toggleClass("playertop")
	});
	$(".play-tool span.s2 em").click(function() {
		$html = $(this).html();
		try {
			if ($html == '关闭广告') {
				$(this).html('显示广告')
			} else {
				$(this).html('关闭广告')
			}
		} catch (e) {}
		$(".player-right").toggleClass("adon");
		$(".player_zanpian").toggleClass("playall");
		$(".player_zanpian").toggleClass("w900");
		$(this).toggleClass("son")
	});	
   /**表情***/
    if ($(".emotion").length > 0) {
        $(".emotion").on('click', function(){
            var left = $(this).offset().left;
            var top = $(this).offset().top;
            var id = $(this).attr("data-id");
            $("#smileBoxOuter").css({
                "left": left,
                "top": top + 20
            }).show().attr("data-id", id)
        });
        $("#smileBoxOuter,.emotion").hover(function() {
            $("#smileBoxOuter").attr("is-hover", 1)
        },
                function() {
                    $("#smileBoxOuter").attr("is-hover", 0)
                });
        $(".emotion,#smileBoxOuter").blur(function() {
            var is_hover = $("#smileBoxOuter").attr("is-hover");
            if (is_hover != 1) {
                $("#smileBoxOuter").hide()
            }
        });
        $(".smileBox").find("a").click(function() {
            var textarea_id = $("#smileBoxOuter").attr("data-id");
            var textarea_obj = $("#reply_" + textarea_id).find("textarea");
            var textarea_val = textarea_obj.val();
            if (textarea_val == "发布评论") {
                textarea_obj.val("")
            }
            var title = "[" + $(this).attr("title") + "]";
            textarea_obj.val(textarea_obj.val() + title).focus();
            $("#smileBoxOuter").hide()
        });
        $("#smileBoxOuter").find(".smilePage").children("a").click(function() {
            $(this).addClass("current").siblings("a").removeClass("current");
            var index = $(this).index();
            $("#smileBoxOuter").find(".smileBox").eq(index).show().siblings(".smileBox").hide()
        });
        $(".comment_blockquote").hover(function() {
            $(".comment_action_sub").css({
                "visibility": "hidden"
            });
            $(this).find(".comment_action_sub").css({
                "visibility": "visible"
            })
        }, function() {
            $(".comment_action_sub").css({
                "visibility": "hidden"
            })
        })
    }
	$(window).scroll(function() {
		var a = document.getElementById('plays').offsetTop;
		var b = document.getElementById('playboot').offsetTop;
		if (a > ($(window).scrollTop())) {
			document.getElementById('playlist').className = 'playgd';
		} else {
			document.getElementById('playlist').className = 'playpf';
		}
	})	
});
var WidthScreen = true;
function series(div,n1,n2){     //更多剧集方法
	var len = div.find("a").length;
	var n = WidthScreen ? n1:n2;
	if(len>100){    //超过100集时的方法
		var Nps = Math.ceil(len/100);    //得出百的倍数
		for(var i=0;i<Nps;i++){    //添加节点n个百集节点
			div.append("<div class='fortab'></div>");
		}
		for(var j=1;j<=Nps;j++){    //将所有剧集移到对应的fortab节点
			var ln = j==Nps ? len-Nps*100+100:100;
			div.find("a:lt("+ln+")").appendTo(div.find(".fortab").eq(j-1));
		}
		if(typeof TooLength != "undefined"){TooLength++;}    //增加太长id号
		else{window.TooLength = 1;}    //未定义id号是设为1
		$("body").append("<div class='Df' id='TooLength"+TooLength+"' style='display:none'></div>");    //添加id节点，将移入div用来默认显示
		div.find("a:lt("+(n2+18)+")").clone().appendTo($("#TooLength"+TooLength));    //添加前面集数
		div.find("a:gt("+(len-((n1/2)-2)/2-1)+")").clone().appendTo($("#TooLength"+TooLength));    //添加后面几集
		$("#TooLength"+TooLength).prependTo(div);    //默认显示id移入div
		div.find(".Df").show();
		var opBtn = "<a target='_self' href='javascript:void(0)' class='btn more open'>更多剧集<i class='iconfont'>&#xe639;</i></a>";    //给默认显示盒加个open按钮
		div.find(".Df a").eq(n2+17).after(opBtn);    //添加open按钮
		var closeBtn = "<a target='_self' href='javascript:void(0)' class='btn more close'>收起剧集<i class='iconfont'>&#xe636;</i></a>";
		for(var k=0;k<Nps;k++){div.find(".fortab").eq(k).append(closeBtn);}    //给所有fortab盒子加close按钮
		var Navs = "<div class='play-ji clearfix' style='display:none;'>";    //创建第n-n+100的导航栏节点
		for(var l=0;l<Nps;l++){
			var min = l*100+1;
			var max = l==Nps-1 ? len:(l+1)*100;
			if(l==0){Navs += "<a target='_self' href='javascript:void(0)' class='btn more active'>"+min+"-"+max+"</a>";}
			else{Navs += "<a target='_self' href='javascript:void(0)' class='btn more'>"+min+"-"+max+"</a>";}
		}
		Navs += "</div>";
		div.find(".Df").after(Navs);    //添加导航节点，html结构到此完善
		var showPg = 0;    //默认页为0,即第一页，下面的是方法
		var DfBox = div.find(".Df");
		var navBox = div.find(".play-ji");
		var tabBox = div.find(".fortab");
		div.find(".open").click(function(){
			DfBox.hide();
			navBox.show();
			tabBox.eq(showPg).show();
		});
		div.find(".close").click(function(){
			DfBox.show();
			navBox.hide();
			tabBox.eq(showPg).hide();
		});
		div.find(".play-ji a").click(function(){
			if($(this).hasClass("active")) return;
			var _i = $(this).index();
			tabBox.eq(showPg).hide();
			tabBox.eq(_i).show();
			$(this).addClass("active").siblings(".active").removeClass("active");
			showPg = _i;
		})
		div.css("height","auto");
	}
	else if(len>40){
		for(var i=n2+18;i<len-((n1/2)-2)/2;i++){div.find("a").eq(i).addClass("hide");}
		var t_m = "<a target='_self' href='javascript:void(0)' class='btn more open'>更多剧集<i class='iconfont'>&#xe639;</i></a>";
		div.find("a").eq(n2+18).after(t_m);
		var more = div.find(".more");
		var _open = false;
		div.css("height","auto");
		more.click(function(){
			if(_open){
				div.find(".hide").hide();
				$(this).html("更多剧集<i class='iconfont'>&#xe639;</i>");
				$(this).removeClass("close");
				$(this).addClass("open");
				$(this).insertAfter(div.find("a").eq(n2+17));
				_open = false;
			}
			else{
				div.find(".hide").show();
				$(this).html("收起剧集<i class='iconfont'>&#xe636;</i>");
				$(this).removeClass("open");
				$(this).addClass("close");
				$(this).insertAfter(div.find("a:last"));
				_open = true;
			}
		})
	}
}

$(document).ready(function(){
//搜索框下拉更多
if ($(".search-input").get(0)) {
    var searchList = $('.search-list');
    var searchText =  $(".search-input");
    var searchListUl = $('#search-list-ul');
    var slrInner = $('#slr-inner');
    var searchListLeft = $('.search-list-left');
    var searchListRight = $('.search-list-right');
    var timer , dataText , keyNum = 0;
    searchText.bind('keyup',function(event){
           //获得输出的li数据的个数
           var searchListLiLen = $('#search-list-ul li').length;
           //keyNum数据函数
           function keyNumDataFun(){
             //keyNum为多少的时候那么就当前的添加样式
            $('#search-list-ul li').eq(keyNum).addClass('searchListUl').siblings().removeClass('searchListUl');
                //按上下键的时候对应相应的数据
                var keyNumData = '<a class="search-list-pic" href="' + dataText[keyNum].vod_readurl + '"><img class="loading" src="' + dataText[keyNum].vod_picurl + '" width="140" height="190px"/></a><div class="search-list-txt"><h3>' + dataText[keyNum].vod_name + '</h3><p>状态：' + dataText[keyNum].vod_title + '</p><p>年代：' + dataText[keyNum].vod_year + '</p><p>演员:' + dataText[keyNum].vod_actor + '年</p></div>';
                    slrInner.html(keyNumData);
                //搜索框显示上下键搜索的名字
                searchText.val(dataText[keyNum].vod_name);  
            }
           //上键选择的时候
           if(event.keyCode == 38){

                if ( keyNum == 0 ) {
                     keyNum = searchListLiLen - 1;
                }else{
                     --keyNum;
                }

                keyNumDataFun();
            
            //下键选择的时候
            }else if(event.keyCode == 40){

                if ( keyNum == searchListLiLen - 1 ) {
                     keyNum = 0;
                }else{
                     ++keyNum;
                }

                keyNumDataFun();       

            }else{

           //清除延时
           clearTimeout(timer);
           //先清空内容
           searchListUl.html('');
           //获取当前的val值来拉升数据
           var thisVal = $(this).val();
           if (thisVal == '') {
            searchList.hide();
            return;
           }
        
            $.ajax({
                type : "GET",
                url : "/index.php?s=home-search-ajax-limit-10-wd-"+thisVal,
                dataType : "jsonp",
                jsonp: 'callback',
                success : function(data){

                //获得data数据让上下键控制的时候好获取
                dataText = data;
               //获取对象的个数
               var dataLen = data.length;   
               if (dataLen == 0 || thisVal == '') {
                searchList.hide();
               }else{
                searchList.show();
                //遍历所有的对象内容插入到相应内容中
                var mvLi = '';
                 for(var i = 0 ; i < 10 ; i++){
                  //当名字为空的时候那么就显示为其它;
                    mvLi += '<li><a href="' + data[i].vod_readurl + '"><em class="mvName">' + data[i].vod_name + '</em><span>' + ( data[i].list_name == null ? data[i].list_name = '其它' :  data[i].list_name ) + '</span></a><i class="iconfont">&#xe61f;</i></li>';
                    searchListUl.html(mvLi);
                    //第一个先得到显示
                    var slrInnerFirst = '<a class="search-list-pic" href="' + data[0].vod_readurl + '"><img class="loading" src="' + data[0].vod_picurl + '"/></a><div class="search-list-txt"><h3>' + data[0].vod_name + '</h3><p>状态:' + data[0].vod_title + '</p><p>年代:' + data[0].vod_year + '</p><p>分类:' + data[0].list_name + '</p><p>演员:' + data[0].vod_actor + '</p></div>';
                    slrInner.html(slrInnerFirst);
                    //鼠标触发的时候执行的动作
                    searchListUl.children().on('mouseover',function(){

                      $(this).addClass('searchListUl').siblings().removeClass('searchListUl');
                      //对应的索引
                      var thisIndex = $(this).index();
                      //搜索框显示对应的名字
                      searchText.val(dataText[thisIndex].vod_name);  
                      //keyNum要同步
                      keyNum = thisIndex;
                      //显示右边的内容
                      var slrInnerChild = '<a class="search-list-pic" href="'+ data[thisIndex].vod_readurl + '"><img class="loading" src="' + data[thisIndex].vod_picurl + '"/></a><div class="search-list-txt"><h3>' + data[thisIndex].vod_name +'</h3><p>状态：'+ data[thisIndex].vod_title + '</p><p>年代：'+ data[thisIndex].vod_year + '</p><p>分类:' + data[thisIndex].list_name +'</p><p>演员:'+ data[thisIndex].vod_actor +'</p></div>'
                      slrInner.html(slrInnerChild);

                    });

                    //第一个添加样式
                    $('#search-list-ul li:first-child').addClass('searchListUl');
                    //当重新输出的时候，那么 keyNum 再次归零
                    keyNum = 0;

                  }
               }
            }
        })

    }
    }).bind('blur',function(){
        //鼠标聚焦离开的时候来个延时
        timer = setTimeout(function(){
         searchList.hide(); 
        },100)
      });
}//搜索框下拉更多结束符

$(window).on('scroll',function(){
		var st = $(document).scrollTop();
		if( st>0 ){
			if( $('#main-container').length != 0  ){
				var w = $(window).width(),mw = $('#main-container').width();
				if( (w-mw)/2 > 70 )
					$('#index-top').css({'left':(w-mw)/2+mw+20});
				else{
					$('#index-top').css({'left':'auto'});
				}
			}
			$('#index-top').fadeIn(function(){
				$(this).removeClass('wmin');
			});
		}else{
			$('#index-top').fadeOut(function(){
				$(this).addClass('wmin');
			});
		}	
	});
	$('#index-top .top').on('click',function(){
		$('html,body').animate({'scrollTop':0},500);
	});
	
	$(".top-box,.top-boxs").posfixed({
		distance:0,
		pos:"top",
		type:"while",
		hide:false
	}); 
	
 if ($('.brief').get(0)) {
  //获取其内容
  var synopsis = $('.brief');
  var synopsisHtml = synopsis.html();
  var synopsisLen = synopsisHtml.length;
  var num = 0;
  var unfold = '... <a class="unfold-btn" href="javascript:;">查看更多<i class="iconfont">&#xe637;</i></a>';
  var packUp = ' <a class="unfold-btn" href="javascript:;">收起部分<i class="iconfont">&#xe638;</i></a>';
  var detailsContent =  $('.details-content');
  //如果大于这个数的话更多按钮才显示.
  if ( synopsisLen > 100 ) {
    var result =  synopsisHtml.substr(0,110);
    synopsis.html(result + unfold);
  }
      //展开按钮
     var btn = $('.unfold-btn');
      btn.live('click',function(){
        num++;
      if ( num%2 == 0 ) {
         synopsis.html(result + unfold);
         /*synopsis.css('margin-bottom','');
         detailsContent.css('height','');*/
          }else{
         synopsis.html(synopsisHtml+packUp);
         /*synopsis.css('margin-bottom','61px');
         detailsContent.css('height','auto');*/
       }
     });
  }; 

});