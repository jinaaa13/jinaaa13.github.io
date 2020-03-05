

    
var now_img, next_img;
function fade_change(){
    now_img = $(".fade_container img:eq(0)");
    next_img = $(".fade_container img:eq(1)");
    next_img.addClass("active").css("opacity",0).animate({"opacity":1},1000, function(){
         $(".fade_container").append(now_img);           //콜백
        now_img.removeClass("active");
    });
}

var timer = setInterval("fade_change()", 2000)
$("div.fade_container").hover(function(){       
    clearInterval(timer);
}, function(){                                  
    timer = setInterval("fade_change()",2000);
});