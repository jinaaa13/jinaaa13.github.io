
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
                delta = event.wheelDelta / 300;
                delta = event.wheelDelta;
            } 
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);

            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if (  arrelmTop[index+1] > 0 ) {
                    moveTop = arrelmTop[index+1];
                    // changeMenuColor(index+1);
                }
                else if (arrelmTop[index+1] == undefined){
                    return false;
                }

            // 마우스휠을 아래에서 위로
            } else {
                if (  arrelmTop[index-1] >= 0 ) {
                    moveTop = arrelmTop[index-1];
                    // changeMenuColor(index-1);
                    
                }
                else if (arrelmTop[index-1] == undefined){
                    return false;
                }
            }
            
            // 화면 이동 0.5초(500)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }/*,  {
                duration: 600, complete: function () {
                }
            } */);
            // changeMenuColor(index+1);
        });
    });



$(".dropdown").click(function(){
    $(".tabcontent").toggle();
});





//font color change
// function changeMenuColor(idx) {
//     if(idx>0){
//         $("#vmenu ul li a").css("color", "black");
//         $("#hello p a").css("color", "black");
//         $("#hello").css("color", "#16709e");
//         console.log('hey')

//     }else if(idx==0){
    
//         $("#vmenu ul li a").css("color", "#f9e9e2");
//         $("#hello p a").css("color", "#f9e9e2");
//         $("#hello").css("color", "#f03c3c");
//         console.log('gday')
//     }
// }


});

function changeV(){
    var vLists = document.querySelectorAll('.ori');
    var hello = document.querySelector('#hello p a');
    var page1Position = document.querySelector('#page1').getBoundingClientRect().top;
   

    // console.log(page1Position)
    if(page1Position < 0){
    for(var g=0; g<vLists.length; g++){
        vLists[g].classList.remove('colorPink')
    }
    hello.style.color = "#000";
}else if(page1Position == 0){
    for(var g=0; g<vLists.length; g++){
        vLists[g].classList.add('colorPink')
}
hello.style.color = "#f9e9e2";
}
}

window.addEventListener('scroll', changeV)
