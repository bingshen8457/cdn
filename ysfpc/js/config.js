document.writeln("<script type=\"text\/javascript\" src=\"\/baidu\/baidu.js\"><\/script>");
//下载地址
//document.getElementById('AppDown').href = 'http://down-1251277365.file.myqcloud.com/abc.apk';
//百度推送
(function() {
  var bp = document.createElement('script');
  var curProtocol = window.location.protocol.split(':')[0];
  if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  } else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
})();

//360推送

//百度统计


//底漂
 $(".d_copy").click(function(){
        //复制内容到剪切板
        new ClipboardJS('.d_copy');
    })