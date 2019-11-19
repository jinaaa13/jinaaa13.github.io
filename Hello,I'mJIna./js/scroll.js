
$(document).ready(function()
{
    var elm = "article";
    //각각의 오프셋 top 값을 먼저 읽어온다.
    var arrelmTop = [];
    var $target = $(elm);    
    for( var i=0 ; i<$target.length ; i++ ){
        arrelmTop[i] = $target.eq(i).offset().top;
        
    }      
    
    $target.each(function (index) {             
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
            } 
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if (  arrelmTop[index+1] > 0 ) {
                    moveTop = arrelmTop[index+1];
                }
            // 마우스휠을 아래에서 위로
            } else {
                if (  arrelmTop[index-1] >= 0 ) {
                    moveTop = arrelmTop[index-1];
                    
                }
            }
            
            // 화면 이동 0.5초(500)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 600, complete: function () {
                }
            });
        });
    });
});


var scrollUpDelay = 1;
var scrollUpSpeed = 30;
function scrollUp()
{
	if(document.body.scrollTop<1)
	{
		return;
	}
	document.body.scrollTop=document.body.scrollTop-scrollUpSpeed;
	setTimeout('scrollUp()',scrollUpDelay);
}

