$(function(){
    /***************商讯***************/

    var oUl = $('.cb3-txt1-ul'),
        aLi = oUl.children('li'),
        aLiw = aLi.eq(0).outerWidth(true,true),
        prev = $('.prev'),
        next = $('.next'),
        iNum = 0;

    oUl.css('width', aLiw * aLi.length);

    oUl.hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            slide(oUl)
        },3000);
    })

    var timer = setInterval(function(){
        slide(oUl)
    },3000);

    function slide(obj){
        iNum++;
        if(iNum > aLi.length - 2){
            iNum = 0;
        }
        obj.animate({
            'left' : -aLiw * iNum
        })
    }
//后退
    prev.click(function(){
        if(iNum > 0){
            iNum--;
        }
        oUl.animate({
            'left' : -aLiw * iNum
        })
        oUl.stop(true,true);
    })
    //前进
    next.click(function(){
        slide(oUl);
        oUl.stop(true,true);
    });
})
