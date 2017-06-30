 //banner部分
$(function(){
    var bannerImg=['dist/img/banner/banner07.jpg','dist/img/banner/banner02.jpg','dist/img/banner/banner06.jpg','dist/img/banner/banner03.jpg',];
    var index=0;
    var time=2000;
    var leng=bannerImg.length;
    // console.log(leng);
    function bannerImgPlus(){
        index++;
        if(index>leng-1){
            index=0;
        }
    }
    function bannerImgMinus(){
        index--;
        if(index<0){
            index=leng-1;
        }
   }
   function bannerImgCss(){
        $('.banner .bannerTop').css({
            background:'url('+bannerImg[index]+')',
            backgroundSize:'100%',
            transition:'background 1s'
        })
   }
    var bannerImgAuto=setInterval(function(){
        bannerImgPlus();
        bannerImgCss();
    },time)
    $('.banner .bannerTop .bannerBtn .bannerLeft').on('click',function(){
        bannerImgPlus();
        bannerImgCss();
    }); 
    $('.banner .bannerTop .bannerBtn .bannerRight').on('click',function(){
        bannerImgMinus();
        bannerImgCss();
    });

    $('.banner .bannerTop .bannerBtn .bannerLeft').hover(function(){
        clearInterval(bannerImgAuto);
        $(this).addClass('animated bounceIn')
    },function(){
        $(this).removeClass('animated bounceIn');
        
    });
    $('.banner .bannerTop .bannerBtn .bannerRight').hover(function(){
        clearInterval(bannerImgAuto);
        $(this).addClass('animated bounceIn')
    },function(){
        $(this).removeClass('animated bounceIn');
    });
    $('.banner .bannerTop .bannerBtn .see').hover(function(){
         clearInterval(bannerImgAuto);
        $(this).addClass('animated pulse')
    },function(){
        $(this).removeClass('animated pulse')
    });
})


//featured部分
$(function(){
    // var arr=['pre']

    var leng=$('.featured .public .featuredCar .premium').length;//console.log(leng);
    var index=0;
    $('.featured .public .featuredCar .premium').eq(0).css({left:0});
    var featuredCar=$('.featured .public .featuredCar');
    var timeout = 1000;
    function featuredRight(){
        index++;
        if(index>leng-1){
            index=0;
        }
        var premium= featuredCar.find('.premium');
        // 往右++
        // 把第一个移动到最后一个 （因为始终显示的是最后一个） 
        var first = premium.first(); // 第一个premium
        featuredCar.append(first);
        first.stop().css('left',-1180);
        first.stop().animate({
            left:0
        },timeout);
    }

    function featuredLeft(){
        index--;
        if(index<0){
            index=leng-1;
        }
        var premium= featuredCar.find('.premium');
        var last = premium.last();
        last.stop().animate({
            left:-1180
        },timeout,function(){
            last.css('left',0)
            featuredCar.prepend(last);
        });
    }
    var lock = false;
   $('.featured .public .featuredBtnBox .btnAleft').on('click',function(){
        if(!lock)
        {
            featuredLeft();
            lock = true;
            setTimeout(function() {
                lock = false;
            }, timeout);
        }
   })//设置一个开门关门，如果规定时间内点击多次， 仍旧模仿一次
   $('.featured .public .featuredBtnBox .btnARight').on('click',function(){
        if(!lock)
        {
            featuredRight();
            lock = true;
            setTimeout(function() {
                lock = false;
            }, timeout);
        }
       
   })
})