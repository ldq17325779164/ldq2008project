"use strict";$(".nav-right-left").mousemove(function(){window.event;$(".app").css({display:"block"})}),$(".nav-right-left").mouseout(function(){$(".app").css({display:"none"})}),$(".city").mousemove(function(){window.event;$(".city-list").css({display:"block"})}),$(".city").mouseout(function(){$(".city-list").css({display:"none"})}),$("#news").mousemove(function(){window.event;$(".news-list").css({display:"block"})}),$("#news").mouseout(function(){$(".news-list").css({display:"none"})});var login=localStorage.getItem("login");login&&$(".not-login").html(login).css({color:"blue"});var reg=/id=(\d+)/;reg.test(location.search)||(location.href="./listcake.html");var id=reg.exec(location.search)[1];function renderHtml(n){n='<div class="box">\n\n    \n    <div class="show">\n        <img src="'+n.cake_photo+'">\n        <div class="mask"></div>\n        <div class="big"><img src="'+n.cake_photo+'" alt="" class="bigImg"></div>\n    </div>\n    <div class="enlarge"> <img src="'+n.cake_photo+'">\n    </div>\n    <div class="masage">\n        <h2>￥'+n.cake_price+'/454g(1 0磅)</h2>\n        <p><span>约12.5x12.5cm</span><span> 3-4人</span><span>含5套餐具 (蜡烛需单独订购)</span></p>\n        <p>最早今天21:30配送</p>\n        <div class="hezi"><button class="buy">立即购买</button><button class="add-car">加入购物车</button></div>\n        <h3 class="tip"></h3>\n    </div>\n</div>\n<div class="big-img"><img src="'+n.big_img+'" alt="">\n<img src="'+n.big_img2+'" alt="">\n<img src="'+n.big_img3+'" alt="">\n</div>';$("#content").html(n)}console.log(id),$.ajax({url:"../api/getDetail.php",method:"get",data:{id:id},dataType:"json",async:!0,success:function(n){console.log(n),renderHtml(n.detail)},error:function(n){console.log(n)}}),$("#content").on("click",".buy",function(){var n=localStorage.getItem("login");location.href=n?"./shoppingcar.html?id="+id:"./login.html"}),$("#content").on("click",".add-car",function(){var n,t=localStorage.getItem("login");t?($.ajax({url:"../api/addCarData.php",method:"get",data:{id:id,username:t},dataType:"json",async:!0,success:function(n){console.log(n)},error:function(n){console.log(n)}}),$(".tip").html("加入成功"),n=setInterval(function(){$(".tip").html(""),clearInterval(n)},1e3)):location.href="./login.html"}),$("#content").on("mouseover",".show",function(){$("#content").find(".mask").show(),$("#content").find(".big").show(),$("#content").find(".enlarge").css({opacity:0})}),$("#content").on("mouseout",".show",function(){$("#content").find(".mask").hide(),$("#content").find(".big").hide(),$("#content").find(".enlarge").css({opacity:1})}),$("#content").on("mousemove",".show",function(){var n=window.event,t=n.pageX-this.offsetLeft,o=n.pageY-this.offsetTop,i=t-$("#content").find(".mask").width()/2,n=o-$("#content").find(".mask").height()/2,t=$("#content").find(".show").width()-$("#content").find(".mask").width(),o=$("#content").find(".show").height()-$("#content").find(".mask").height();i<=0?i=0:t<=i&&(i=t),n<=0?n=0:o<=n&&(n=o),$("#content").find(".mask").css("left",i+"px"),$("#content").find(".mask").css("top",n+"px");t=i*($("#content").find(".bigImg").width()-$("#content").find(".big").width())/t,o=n*($("#content").find(".bigImg").height()-$("#content").find(".big").height())/o;$("#content").find(".bigImg").css("left",-t+"px"),$("#content").find(".bigImg").css("top",-o+"px")});