$(document).ready(function(){
    var elm = "section";
    var arrelmTop = [];
    var $target = $(elm);
    for( var i=0; i<$target.length; i++) {
        arrelmTop[i] = $target.eq(i).offset().top;
    }
    var secTextColor=["#f9e9e2","black","black","black"];
    var mdotBgColor = ["#f03c3c","#f03c3c","#8d8583","#f03c3c"];

    $target.each(function (index) {
        //개별적으로 Wheel 이벤트 적용
        
        $(this).on("mousewheel DOMMouseScroll", function(e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 100;
            }
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
        
            
            
            //마우스휠을 위에서 아래로
            if ( delta < 0 ) {
                if ( arrelmTop[index+1] > 0 ) {
                    moveTop = arrelmTop[index+1];
                    changeMenuColor(index+1);
                }
            }
            //마우스 휠을 아래에서 위로
            else {
                if ( arrelmTop[index-1] >= 0 ) {
                    moveTop = arrelmTop[index-1];
                    changeMenuColor(index-1);
                }
            }

            //화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            });
            
        });

        function changeMenuColor(idx) {
            $(".menu li a").css("background-color", secBgColor[idx]);
            $(".menu li a").css("color", secTextColor[idx]);
            $(".menu li a").mouseover(function(){
                $(this).css("background-color", hoverBgColor[idx]);
                $(this).css("color", hoverTextColor[idx]);
            });
            $(".menu li a").mouseout(function(){
                $(".menu li a").css("background-color", secBgColor[idx]);
                $(".menu li a").css("color", secTextColor[idx]);
            });

        }
    });
    
    
});