

            $('.button>.next').on('click',function(){
                var $target = $(this);
                var n=current; //다음에 보여져야 할 img index
                if($target.index()){
                    // next
                    n=current+1;
                    if(n>2) n=0;
                }
                else{
                    //pre
                    n=current-1;
                    if(n<0) n=2;
                }
                $button.eq(n).trigger('click');//event 강제 발생 시킬 때 trigger 사용
            });
            

            