$(document).ready(function(){$(document).on("click","a",function(e){e.preventDefault(),window.location=$(this).attr("href")});var e=$("html, body");$(".smooth-scroll").click(function(){return e.animate({scrollTop:$($.attr(this,"href")).offset().top},500),!1}),$(".cv-link").click(function(){$("#homepage-cv").css({opacity:1,height:"auto"}),setTimeout(function(){$("#homepage-project, #homepage-intro").hide(),$(".cv-fullscreen-mask").show(),$(".cv-wrapper").css({opacity:1,height:"auto"})},500)}),$(".cv-fullscreen-mask, .cv-close").click(function(){$(".cv-fullscreen-mask").hide(),$("#homepage-project, #homepage-intro").show(),$(".cv-wrapper").css({opacity:0}),setTimeout(function(){$(".cv-wrapper").css({height:0}),$("#homepage-cv").css({opacity:0})},500),setTimeout(function(){$("#homepage-cv").css({height:0})},1e3)}),$("html").hasClass("touch")?($(".video").attr("controls",!0),$(".play-button").css("display","none")):$(".hih-video-control").css("visibility","hidden"),$(".video-wrapper").click(function(){var e=$(this).find(".video").get(0);return e.paused?e.play():e.pause(),$(this).find(".play-button").css("visibility","hidden"),!1}),$(".video").bind("pause ended",function(){$(this).parent().find(".play-button").css("visibility","visible")}),$(".video").bind("ended",function(){$(this).parent().find(".play-button").css("visibility","visible"),$(this).attr("poster","this.poster")}),$("html").hasClass("touch")&&$(".touch-opt").bind("touchstart touchend",function(){$(this).toggleClass("touched")}),$("html").hasClass("csstransforms3d")?$("html").hasClass("touch")?($("#homepage-project .homepage-project-item").removeClass("nonflip").addClass("touchable"),$("#homepage-project .homepage-project-item").bind("touchstart touchend",function(){$(this).find(".pic").toggleClass("touched")})):($("#homepage-project .homepage-project-item").removeClass("nonflip").addClass("flip"),$("#homepage-project .homepage-project-item.flip").hover(function(){$(this).find(".wrapper").addClass("flipIt")},function(){$(this).find(".wrapper").removeClass("flipIt")})):$("#homepage-project .homepage-project-item").hover(function(){$(this).find(".info").addClass("popup")},function(){$(this).find(".info").removeClass("popup")});var t=$(window).width(),o,s;640>=t?(o=t/3,s=4*o):960>=t?(o=t/4,s=3*o):(o=t/6,s=2*o);var i=0-s;$(".nav-projects .homepage-project-item").css("height",o),$(".nav-projects").css("height",s),$("#masthead").removeClass("notransition"),$(window).resize(function(){t=$(window).width(),$("#masthead").addClass("notransition"),640>=t?(o=t/3,s=4*o):960>=t?(o=t/4,s=3*o):(o=t/6,s=2*o),i=0-s,$(".nav-projects .homepage-project-item").css("height",o),$(".nav-projects").css("height",s),setTimeout(function(){$("#masthead").removeClass("notransition")},1)}),$(document).scroll(function(){var e=$(this).scrollTop();e>0?$(".global-back-home").css("top",20):$(".global-back-home").css("top",-60)}),$("#old_browser_close").click(function(){$("#old_browser_popup").css("display","none")})});