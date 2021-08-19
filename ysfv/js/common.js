1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
366
367
368
369
370
371
372
373
374
375
376
377
378
379
380
381
382
383
384
385
386
387
388
389
390
391
392
393
394
395
396
397
398
399
400
401
402
403
404
405
406
407
408
409
410
411
412
413
414
415
416
417
418
419
420
421
422
423
424
425
426
427
428
429
430
431
432
433
434
435
436
437
438
439
440
441
442
443
444
445
446
447
448
449
450
451
452
453
454
455
456
457
458
459
460
461
462
463
464
465
466
467
468
469
470
471
472
473
474
475
476
477
478
479
480
481
482
483
484
485
486
487
488
489
490
491
492
493
494
495
496
497
498
499
500
501
502
503
504
505
506
507
508
509
510
511
512
513
514
515
516
517
518
519
520
521
522
523
524
525
526
527
528
529
530
531
532
533
534
535
536
537
538
539
540
541
542
543
544
545
546
547
548
549
550
551
552
553
554
555
556
557
558
559
560
561
562
563
564
565
566
567
568
569
570
571
572
573
574
575
576
577
578
579
580
581
582
583
584
585
586
587
588
589
590
591
592
593
594
595
596
597
598
599
600
601
602
603
604
605
606
607
608
609
610
611
612
613
614
615
616
617
618
619
620
621
622
623
624
625
626
627
628
629
630
631
632
633
634
635
636
637
638
639
640
641
642
643
644
645
646
647
648
649
650
651
652
653
654
655
656
657
658
659
660
661
662
663
664
665
666
667
668
669
670
671
672
673
674
675
676
677
678
679
680
681
682
683
684
685
686
687
688
689
690
691
692
693
694
695
696
697
698
699
700
701
702
703
704
705
706
707
708
709
710
711
712
713
714
715
716
717
718
719
720
721
722
723
724
725
726
727
728
729
730
731
732
733
734
735
736
737
738
739
740
741
742
743
744
745
746
747
748
749
750
751
752
753
754
755
756
757
758
759
760
761
762
763
764
765
766
767
768
769
770
771
772
773
774
775
776
777
778
779
780
781
782
783
784
785
786
787
788
789
790
791
792
793
794
795
796
797
798
799
800
801
802
803
804
805
806
807
808
809
810
811
812
813
814
815
816
817
818
819
820
821
822
823
824
825
826
827
828
829
830
831
832
833
834
835
836
837
838
839
840
841
842
843
844
845
846
847
848
849
850
851
var action_size = 0;
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
function pagego($url,$total){
    $page=$('#page').val();
    if($page>0&&($page<=$total)){
        if($page>1 || document.URL.indexOf('?')>-1){
            $url=$url.replace('{pg}',$page);
        }
        else{
            if($page==1){
                $url=$url.replace('-{pg}','').replace('{pg}','');
            }
        }
        location.href=$url;
    }
    return false;
}
function base64encode(str) {
  var out, i, len;
  var c1, c2, c3;
  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt((c1 & 0x3) << 4);
      out += "==";
      break
    }
    c2 = str.charCodeAt(i++);
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
      out += base64EncodeChars.charAt((c2 & 0xF) << 2);
      out += "=";
      break
    }
    c3 = str.charCodeAt(i++);
    out += base64EncodeChars.charAt(c1 >> 2);
    out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
    out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
    out += base64EncodeChars.charAt(c3 & 0x3F)
  }
  return out
}
 
function base64decode(str) {
  var c1, c2, c3, c4;
  var i, len, out;
  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    do {
      c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
    } while (i < len && c1 == -1);
    if (c1 == -1) break;
    do {
      c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
    } while (i < len && c2 == -1);
    if (c2 == -1) break;
    out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
    do {
      c3 = str.charCodeAt(i++) & 0xff;
      if (c3 == 61) return out;
      c3 = base64DecodeChars[c3]
    } while (i < len && c3 == -1);
    if (c3 == -1) break;
    out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
    do {
      c4 = str.charCodeAt(i++) & 0xff;
      if (c4 == 61) return out;
      c4 = base64DecodeChars[c4]
    } while (i < len && c4 == -1);
    if (c4 == -1) break;
    out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
  }
  return out
}
 
function utf16to8(str) {
  var out, i, len, c;
  out = "";
  len = str.length;
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if ((c >= 0x0001) && (c <= 0x007F)) {
      out += str.charAt(i)
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
    } else {
      out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
    }
  }
  return out
}
 
function utf8to16(str) {
  var out, i, len, c;
  var char2, char3;
  out = "";
  len = str.length;
  i = 0;
  while (i < len) {
    c = str.charCodeAt(i++);
    switch (c >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        out += str.charAt(i - 1);
        break;
      case 12:
      case 13:
        char2 = str.charCodeAt(i++);
        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
        break;
      case 14:
        char2 = str.charCodeAt(i++);
        char3 = str.charCodeAt(i++);
        out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
        break
    }
  }
  return out
}
var MAC = {
  'Hits': function (tab, id) {
    $.get(SitePath + "inc/ajax.php?ac=hits&tab=" + tab + "&id=" + id, function (r) {
      $('#hits').html(r)
    })
  },
  'Cookie': {
    'Set': function (name, value, days) {
      var exp = new Date();
      exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
      var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
      document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toUTCString();
    },
    'Get': function (name) {
      var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
      if (arr != null) {
        return unescape(arr[2]);
        return null;
      }
    },
    'Del': function (name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = this.Get(name);
      if (cval != null) {
        document.cookie = name + "=" + escape(cval) + ";path=/;expires=" + exp.toUTCString();
      }
    }
  },
};
 
function uaredirect(f) {
  try {
    if (document.getElementById("bdmark") != null) {
      return
    }
    var b = false;
    if (arguments[1]) {
      var e = window.location.host;
      var a = window.location.href;
      if (isSubdomain(arguments[1], e) == 1) {
        f = f + "/#v/" + a;
        b = true
      } else {
        if (isSubdomain(arguments[1], e) == 2) {
          f = f + "/#v/" + a;
          b = true
        } else {
          f = a;
          b = false
        }
      }
    } else {
      b = true
    }
    if (b) {
      var c = window.location.hash;
      if (!c.match("mobile")) {
        if (!(navigator.userAgent.match(/(iPhone|iPod|ipad|Android|mobile|blackberry|webos|incognito|webmate|bada|nokia|lg|ucweb|ios|skyfire)/i))) {
          location.replace(f)
        }
      }
    }
  } catch (d) {}
}
 
function isSubdomain(c, d) {
  this.getdomain = function (f) {
    var e = f.indexOf("://");
    if (e > 0) {
      var h = f.substr(e + 3)
    } else {
      var h = f
    }
    var g = /^www\./;
    if (g.test(h)) {
      h = h.substr(4)
    }
    return h
  };
  if (c == d) {
    return 1
  } else {
    var c = this.getdomain(c);
    var b = this.getdomain(d);
    if (c == b) {
      return 1
    } else {
      c = c.replace(".", "\\.");
      var a = new RegExp("\\." + c + "$");
      if (b.match(a)) {
        return 2
      } else {
        return 0
      }
    }
  }
};
 
function changeorder(e) {
  $("#list .Drama li").each(function () {
    $(this).prependTo($(this).parent())
  });
  $(e).text($(e).text() == "正序↑" ? "倒序↓" : "正序↑");
  return false
}
 
function serchAction() {
  var keyword = $("#searInput").val();
  if (keyword != "") {
    location.href = "vod-search-wd-" + keyword + "-by-time.html"
  } else {
    alert("请输入关键词")
  }
}
 
function Stype() {
  $(".classBox .classopen ul").css("display", "none");
  $(".classBox .OperaBar li").removeClass("cur");
  $("#Clicktype").css("display", "block");
  $("#yc a").css("display", "block");
  $("#type").addClass("cur")
}
 
function juqing() {
  $(".classBox .classopen ul").css("display", "none");
  $(".classBox .OperaBar li").removeClass("cur");
  $("#Clickjuqing").css("display", "block");
  $("#yc a").css("display", "block");
  $("#juqing").addClass("cur")
}
 
function year() {
  $(".classBox .classopen ul").css("display", "none");
  $(".classBox .OperaBar li").removeClass("cur");
  $("#Clickyear").css("display", "block");
  $("#yc a").css("display", "block");
  $("#year").addClass("cur")
}
 
function area() {
  $(".classBox .classopen ul").css("display", "none");
  $(".classBox .OperaBar li").removeClass("cur");
  $("#Clickarea").css("display", "block");
  $("#yc a").css("display", "block");
  $("#area").addClass("cur")
}
 
function yc() {
  $(".classBox .classopen ul").css("display", "none");
  $("#yc a").css("display", "none");
  $(".classBox .OperaBar li").removeClass("cur")
}
var m_global = {
  document_hei: 200,
  userPhoto: "",
  username: "",
  userId: "",
  isLogin: false,
  isHead: false,
  comicId: "",
  Open: function (obj) {
    $('#' + obj).show();
  },
  closed: function (obj) {
    $('#' + obj).hide();
    $("#HotTag").hide();
    $("#hotTit").hide();
    $("#messagelist").hide();
    $("#searInput").val("");
    $(".show").remove();
    $(".messagSjr").css("padding-bottom", "0px");
  },
  toTop: function () {
    $("html,body").animate({
      "scrollTop": $("body").offset().top
    })
  },
  navStyle: function (index) {
    switch (index) {
      case 0:
        {
          $(".nav li").eq(0).find("a").addClass("cur").parent("li").siblings().find("a").removeClass("cur");
          break;
        }
      case 1:
        {
          $(".nav li").eq(1).find("a").addClass("cur").parent("li").siblings().find("a").removeClass("cur");
          break;
        }
      case 2:
        {
          $(".nav li").eq(2).find("a").addClass("cur").parent("li").siblings().find("a").removeClass("cur");
          break;
        }
      case 3:
        {
          $(".nav li").eq(3).find("a").addClass("cur").parent("li").siblings().find("a").removeClass("cur");
          break;
        }
      case 4:
        {
          $(".nav li").eq(4).find("a").addClass("cur").parent("li").siblings().find("a").removeClass("cur");
          break;
        }
      case 5:
        {
          $(".nav li").find("a").removeClass("cur");
          break;
        }
    }
  }
};
 
function goBack() {
  if (document.referrer == '' || document.referrer.indexOf(window.location.host) == -1) {
    window.location = 'default.htm'
  } else {
    window.history.go(-1);
  }
}
Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S": this.getMilliseconds()
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};
Array.prototype.lastObject = function () {
  var arr_len = this.length;
  if (arr_len == 0) {
    return null;
  }
  return this[arr_len - 1];
};
Array.prototype.firstObject = function () {
  var arr_len = this.length;
  if (arr_len == 0) {
    return null;
  }
  return this[0];
};
Array.prototype.indexOf = function (val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};
Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
 
function openwindow(html) {
  var showBg = $('<div class="show">')
  var layerHtml = $('<div class="layer">');
  $("body").append(showBg).append(layerHtml);
  var top = ($(window).height() - layerHtml.height()) / 2;
  var left = ($(window).width() - layerHtml.width()) / 2;
  layerHtml.css({
    top: top,
    left: left
  });
  showBg.show();
  layerHtml.show().append(html);
  layerHtml.find("#Cancel").click(function () {
    showBg.remove();
    layerHtml.remove();
  })
}
 
function sharwindow() {
  var showBg = $('<div class="show">');
  var sharWin = $(".sharWin");
  var window_h = $(window).height();
  var window_w = $(window).width();
  $("body").append(showBg);
  showBg.show();
  var top = (window_h - sharWin.height()) / 2;
  var left = (window_w - sharWin.width()) / 2;
  sharWin.css({
    top: top
  }).css({
    left: left
  }).show().addClass("layerz");
  sharWin.find(".sharClose").click(function () {
    $(".sharWin").removeClass("layerz").hide();
    showBg.remove();
  })
}
 
function imgStyle() {
  var divWidth = $(".imgBox li").width();
  var divHeight = Math.floor(divWidth / 0.76);
  $(".imgBox li img").css("height", divHeight);
}
function zs_list(num){
    if($('#zs_menu'+num).css('max-height') != 'none') {
      $('#zs_menu'+num).css("max-height","none");
    } else {
      $('#zs_menu'+num).css("max-height","");
    }
  }
function tab(titId, conId, titClass, conClass, showbg, type) {
  var tabTits = $('#' + titId).children(),
    tabCons = $('#' + conId).children(),
    len = tabTits.length;
  $('.' + showbg).height($(document).height());
  for (var i = 0; i < len; i++) {
    tabTits[i].index = i;
    tabTits[i].onclick = function () {
      $('#' + conId).show();
      for (var i = 0; i < len; i++) {
        tabTits[i].className = '';
        tabCons[i].className = '';
      };
      tabTits[this.index].className = titClass;
      tabCons[this.index].className = conClass;
      $('.' + showbg).show();
    };
    $('.' + showbg).click(function () {
      if (type == 1) {
        $('#' + titId).parent().hide();
        $('.' + showbg).hide()
      } else {
        $('#' + conId).hide();
        $('.' + showbg).hide();
      }
    })
  }
}
(function ($) {
  $.fn.touchSlider = function (settings) {
    settings.supportsCssTransitions = (function (style) {
      var prefixes = ['Webkit', 'Moz', 'Ms'];
      for (var i = 0, l = prefixes.length; i < l; i++) {
        if (typeof style[prefixes[i] + 'Transition'] !== 'undefined') {
          return true;
        }
      }
      return false;
    })(document.createElement('div').style);
    settings = jQuery.extend({
      roll: true,
      flexible: false,
      btn_prev: null,
      btn_next: null,
      paging: null,
      speed: 75,
      view: 1,
      range: 0.15,
      page: 1,
      transition: false,
      initComplete: null,
      counter: null,
      multi: false
    }, settings);
    var opts = [];
    opts = $.extend({}, $.fn.touchSlider.defaults, settings);
    return this.each(function () {
      $.fn.extend(this, touchSlider);
      var _this = this;
      this.opts = opts;
      this._view = this.opts.view;
      this._speed = this.opts.speed;
      this._tg = $(this);
      this._list = this._tg.children().children();
      this._width = parseInt(this._tg.css("width"));
      this._item_w = parseInt(this._list.css("width"));
      this._len = this._list.length;
      this._range = this.opts.range * this._width;
      this._pos = [];
      this._start = [];
      this._startX = 0;
      this._startY = 0;
      this._left = 0;
      this._top = 0;
      this._drag = false;
      this._scroll = false;
      this._btn_prev;
      this._btn_next;
      this.init();
      $(this).bind("touchstart", this.touchstart).bind("touchmove", this.touchmove).bind("touchend", this.touchend).bind("dragstart", this.touchstart).bind("drag", this.touchmove).bind("dragend", this.touchend)
      $(window).bind("orientationchange resize", function () {
        _this.resize(_this);
      });
    });
  };
  var touchSlider = {
    init: function () {
      var _this = this;
      $(this).children().css({
        "width": this._width + "px",
        "overflow": "visible"
      });
      if (this.opts.flexible) this._item_w = this._width / this._view;
      if (this.opts.roll) this._len = Math.ceil(this._len / this._view) * this._view;
      var page_gap = (this.opts.page > 1 && this.opts.page <= this._len) ? (this.opts.page - 1) * this._item_w : 0;
      for (var i = 0; i < this._len; ++i) {
        this._pos[i] = this._item_w * i - page_gap;
        this._start[i] = this._pos[i];
        this._list.eq(i).css({
          "float": "none",
          "display": "block",
          "position": "absolute",
          "top": "0",
          "left": this._pos[i] + "px",
          "width": this._item_w + "px"
        });
        if (this.opts.supportsCssTransitions && this.opts.transition) {
          this._list.eq(i).css({
            "-moz-transition": "0ms",
            "-moz-transform": "",
            "-ms-transition": "0ms",
            "-ms-transform": "",
            "-webkit-transition": "0ms",
            "-webkit-transform": "",
            "transition": "0ms",
            "transform": ""
          });
        }
      }
      timer = setInterval(function () {
        _this.animate(-1, true);
        return false;
      }, 5000);
      $(this).bind("touchstart", function () {
        clearInterval(timer);
      }).bind("touchend", function () {
        timer = setInterval(function () {
          _this.animate(-1, true);
        }, 5000);
      });
      if (this.opts.paging) {
        $(this._list).each(function (i, el) {
          var btn_page = _this.opts.paging.eq(i);
          btn_page.bind("click", function (e) {
            _this.go_page(i, e);
            return false;
          });
        });
      }
      this.counter();
      this.initComplete();
    },
    initComplete: function () {
      if (typeof (this.opts.initComplete) == "function") {
        this.opts.initComplete(this);
      }
    },
    resize: function (e) {
      if (e.opts.flexible) {
        var tmp_w = e._item_w;
        e._width = parseInt(e._tg.css("width"));
        e._item_w = e._width / e._view;
        e._range = e.opts.range * e._width;
        for (var i = 0; i < e._len; ++i) {
          e._pos[i] = e._pos[i] / tmp_w * e._item_w;
          e._start[i] = e._start[i] / tmp_w * e._item_w;
          e._list.eq(i).css({
            "left": e._pos[i] + "px",
            "width": e._item_w + "px"
          });
          if (this.opts.supportsCssTransitions && this.opts.transition) {
            e._list.eq(i).css({
              "-moz-transition": "0ms",
              "-moz-transform": "",
              "-ms-transition": "0ms",
              "-ms-transform": "",
              "-webkit-transition": "0ms",
              "-webkit-transform": "",
              "transition": "0ms",
              "transform": ""
            });
          }
        }
      }
      this.counter();
    },
    touchstart: function (e) {
      if ((e.type == "touchstart" && e.originalEvent.touches.length <= 1) || e.type == "dragstart") {
        this._startX = e.pageX || e.originalEvent.touches[0].pageX;
        this._startY = e.pageY || e.originalEvent.touches[0].pageY;
        this._scroll = false;
        this._start = [];
        for (var i = 0; i < this._len; ++i) {
          this._start[i] = this._pos[i];
        }
      }
    },
    touchmove: function (e) {
      if ((e.type == "touchmove" && e.originalEvent.touches.length <= 1) || e.type == "drag") {
        this._left = (e.pageX || e.originalEvent.touches[0].pageX) - this._startX;
        this._top = (e.pageY || e.originalEvent.touches[0].pageY) - this._startY;
        var w = this._left < 0 ? this._left * -1 : this._left;
        var h = this._top < 0 ? this._top * -1 : this._top;
        if (w < h || this._scroll) {
          this._left = 0;
          this._drag = false;
          this._scroll = true;
        } else {
          e.preventDefault();
          this._drag = true;
          this._scroll = false;
          this.position(e);
        }
        for (var i = 0; i < this._len; ++i) {
          var tmp = this._start[i] + this._left;
          if (this.opts.supportsCssTransitions && this.opts.transition) {
            var trans = "translate3d(" + tmp + "px,0,0)";
            this._list.eq(i).css({
              "left": "",
              "-moz-transition": "0ms",
              "-moz-transform": trans,
              "-ms-transition": "0ms",
              "-ms-transform": trans,
              "-webkit-transition": "0ms",
              "-webkit-transform": trans,
              "transition": "0ms",
              "transform": trans
            });
          } else {
            this._list.eq(i).css("left", tmp + "px");
          }
          this._pos[i] = tmp;
        }
      }
    },
    touchend: function (e) {
      if ((e.type == "touchend" && e.originalEvent.touches.length <= 1) || e.type == "dragend") {
        if (this._scroll) {
          this._drag = false;
          this._scroll = false;
          return false;
        }
        this.animate(this.direction());
        this._drag = false;
        this._scroll = false;
      }
    },
    position: function (d) {
      var gap = this._view * this._item_w;
      if (d == -1 || d == 1) {
        this._startX = 0;
        this._start = [];
        for (var i = 0; i < this._len; ++i) {
          this._start[i] = this._pos[i];
        }
        this._left = d * gap;
      } else {
        if (this._left > gap) this._left = gap;
        if (this._left < -gap) this._left = -gap;
      }
      if (this.opts.roll) {
        var tmp_pos = [];
        for (var i = 0; i < this._len; ++i) {
          tmp_pos[i] = this._pos[i];
        }
        tmp_pos.sort(function (a, b) {
          return a - b;
        });
        var max_chk = tmp_pos[this._len - this._view];
        var p_min = $.inArray(tmp_pos[0], this._pos);
        var p_max = $.inArray(max_chk, this._pos);
        if (this._view <= 1) max_chk = this._len - 1;
        if (this.opts.multi) {
          if ((d == 1 && tmp_pos[0] >= 0) || (this._drag && tmp_pos[0] >= 100)) {
            for (var i = 0; i < this._view; ++i, ++p_min, ++p_max) {
              this._start[p_max] = this._start[p_min] - gap;
              this._list.eq(p_max).css("left", this._start[p_max] + "px");
            }
          } else if ((d == -1 && tmp_pos[0] <= 0) || (this._drag && tmp_pos[0] <= -100)) {
            for (var i = 0; i < this._view; ++i, ++p_min, ++p_max) {
              this._start[p_min] = this._start[p_max] + gap;
              this._list.eq(p_min).css("left", this._start[p_min] + "px");
            }
          }
        } else {
          if ((d == 1 && tmp_pos[0] >= 0) || (this._drag && tmp_pos[0] > 0)) {
            for (var i = 0; i < this._view; ++i, ++p_min, ++p_max) {
              this._start[p_max] = this._start[p_min] - gap;
              this._list.eq(p_max).css("left", this._start[p_max] + "px");
            }
          } else if ((d == -1 && tmp_pos[max_chk] <= 0) || (this._drag && tmp_pos[max_chk] <= 0)) {
            for (var i = 0; i < this._view; ++i, ++p_min, ++p_max) {
              this._start[p_min] = this._start[p_max] + gap;
              this._list.eq(p_min).css("left", this._start[p_min] + "px");
            }
          }
        }
      } else {
        if (this.limit_chk()) this._left = this._left / 2;
      }
    },
    animate: function (d, btn_click) {
      if (this._drag || !this._scroll || btn_click) {
        var _this = this;
        var speed = this._speed;
        if (btn_click) this.position(d);
        var gap = d * (this._item_w * this._view);
        if (this._left == 0 || (!this.opts.roll && this.limit_chk())) gap = 0;
        this._list.each(function (i, el) {
          _this._pos[i] = _this._start[i] + gap;
          if (_this.opts.supportsCssTransitions && _this.opts.transition) {
            var transition = speed + "ms";
            var transform = "translate3d(" + _this._pos[i] + "px,0,0)";
            if (btn_click) transition = "0ms";
            $(this).css({
              "left": "",
              "-moz-transition": transition,
              "-moz-transform": transform,
              "-ms-transition": transition,
              "-ms-transform": transform,
              "-webkit-transition": transition,
              "-webkit-transform": transform,
              "transition": transition,
              "transform": transform
            });
          } else {
            $(this).stop();
            $(this).animate({
              "left": _this._pos[i] + "px"
            }, speed);
          }
        });
        this.counter();
      }
    },
    direction: function () {
      var r = 0;
      if (this._left < -(this._range)) r = -1;
      else if (this._left > this._range) r = 1;
      if (!this._drag || this._scroll) r = 0;
      return r;
    },
    limit_chk: function () {
      var last_p = parseInt((this._len - 1) / this._view) * this._view;
      return ((this._start[0] == 0 && this._left > 0) || (this._start[last_p] == 0 && this._left < 0));
    },
    go_page: function (i, e) {
      var crt = ($.inArray(0, this._pos) / this._view) + 1;
      var cal = crt - (i + 1);
      while (cal != 0) {
        if (cal < 0) {
          this.animate(-1, true);
          cal++;
        } else if (cal > 0) {
          this.animate(1, true);
          cal--;
        }
      }
    },
    counter: function () {
      if (typeof (this.opts.counter) == "function") {
        var param = {
          total: Math.ceil(this._len / this._view),
          current: ($.inArray(0, this._pos) / this._view) + 1
        };
        this.opts.counter(param);
      }
    }
  };
})(jQuery);
$(document).ready(function () {
  $(".main_visual").prev(".nav").css("position", "absolute");
  $dragBln = false;
  $(".main_image").touchSlider({
    flexible: true,
    speed: 200,
    paging: $(".flicking_con a"),
    counter: function (e) {
      $(".flicking_con a").removeClass("on").eq(e.current - 1).addClass("on");
      $(".flicking_conTit span").removeClass("on").eq(e.current - 1).addClass("on");
    }
  });
  focusSize.height = $('.main_visual img').width() * 0.640625;
  focusSize.focusImgWid($('.main_visual img'));
  focusSize.divSize();
})
var focusSize = {
  width: 0,
  height: 0,
  focusImgWid: function (image) {
    image.css('width', '100%');
  },
  divSize: function () {
    var imgDiv = $('.main_visual img')
    focusSize.width = imgDiv.width();
    focusSize.height = imgDiv.width() * 0.640625;
    $(".main_visual").height(focusSize.height)
    $(".main_image").height(focusSize.height)
    $(".main_image ul").height(focusSize.height)
    $(".main_image li").height(focusSize.height)
    $(".main_image li a").height(focusSize.height)
  }
}
$(window).on("orientationchange", function () {
  if (window.orientation == 0 || window.orientation == 180) {
    focusSize.divSize()
  } else {
    focusSize.divSize()
  }
})