$(document).on("ready", function() {
    $(".box").each(function () {
        
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function(event) {

            var delta = 0;
            var moveTop = null;
            var boxMax = $(".box").length - 1;

            var winEvent = "";

            if(!winEvent) {
                winEvent = window.event;
            }

            if(winEvent.wheelDelta) {

                delta = winEvent.wheelDelta / 120;
                if(window.opera) {
                    delta = -delta;
                }
            }

            else if(winEvent.detail) {
                delta = -winEvent.detail / 3;
            }
            
            // 마우스휠을 위에서 아래로 이동
            if(delta < 0) {

                // 마지막 BOX 보다 순서값이 작은 경우에 실행
                if($(this).index() < boxMax) {
                    
                    console.log("▼");
                    if($(this).next() != undefined) {
                        moveTop = $(this).next().offset().top;
                    }
                }

                // 마지막 BOX보다 더 아래로 내려가려고 하는경우 알림창 출력
                else {
                    alert("마지막 페이지 입니다.");
                    return false;
                }
            }

            // 마우스휠을 아래에서 위로 이동
            else {

                // 첫번째 BOX 보다 순서값이 큰 경우에 실행
                if($(this).index() > 0) {

                    console.log("▲");
                    if($(this).prev() != undefined) {
                        moveTop = $(this).prev().offset().top;
                    }
                }

                // 첫번째 BOX 더 위로 올라가려고 하는 경우 알림창 출력
                else {
                    alert("첫번째 페이지 입니다.");
                    return false;
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop : moveTop + "px"
            }
            , {
                duration: 800, complete : function () { }
            });
        });
    });
});