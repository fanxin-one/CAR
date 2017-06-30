// topbar
$(function(){
    var i=true;
    $(document).scroll(function(){
        var top =$(document).scrollTop();
        if(top>290){
            // console.log(top);
            if(i){
                i=false;
                $('.topBar').css({
                    position:'fixed',
                    top:'60',
                    zIndex:999,
                    background:'rgba(255, 255, 255, 0.43)'
                })
                $('.header').css({
                    paddingatop:'60px'
                })
            }
         }else{
             i=true;
             $('.topBar').css({
                    position:'static',
                    top:'0',
                    zIndex:999,
                    background:'#fff'
                })
                $('.header').css({
                    paddingatop:'0'
                })
         }
    })
})


//header部分
$(function(){
    $('.header .headerUl .headerLi .headerDiv').hover(function(){
        $(this).find('.headerList').slideToggle(500);
    });
})


