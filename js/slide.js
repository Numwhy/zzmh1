$(function(){
    //游戏
    var gameBox = $('.gbl-top1'),
        gameUl = $('.gbl-top'),
        gameLi = gameUl.children('li'),
        gameLiW = gameLi.eq(0).width(),
        gamePre = $('.game-prev1'),
        gameNex = $('.game-next1'),
        timer1 = '',
        iNum1 = 0;
    //美食
    var food4 = $('.food-slide'),
        food4Ul = food4.children('ul'),
        foodLi4 = food4Ul.children('li'),
        food4LiW = foodLi4.eq(0).outerWidth(true,true),
        foodPre = $('.foodnews-prev1'),
        foodNex = $('.foodnews-next1');
    hov3(gameBox,gameUl,gameLi,gameLiW);
    hov3(food4,food4Ul,foodLi4,food4LiW);
    function hov3(obj,obj1,obj2,obj3){
        obj.hover(function(){
            clearInterval(timer1);
        },function(){
            timer1 = setInterval(function(){
                slide2(obj1,obj2,obj3);
            },5000);
        })
    }
    if(gameLi.length != 0){
        timer1 = setInterval(function(){
            slide2(gameUl,gameLi,gameLiW);
        },5000);
    }else if(foodLi4.length != 0){
        timer1 = setInterval(function(){
            slide2(food4Ul,foodLi4,food4LiW);
        },3000);
    }
    //函数封装
    function slide2(obj,ali,liW){
        iNum1++;
        if(iNum1 > ali.length - 1){
            iNum1 = 0;
        }
        obj.animate({
            'left' : -liW * iNum1
        })
    }
    ht(gameUl,gamePre,gameLiW);
    function ht(obj,obj1,liW){
        obj1.click(function(){
            if(iNum1 > 0){
                iNum1--;
            }
            obj.animate({
                'left' : -liW * iNum1
            })
            obj.stop(true,true);
        })
    }
    qj(gameUl,gameNex,gameLi,gameLiW);
    function qj(obj,obj1,aLi,liW){
        obj1.click(function(){
            slide2(obj,aLi,liW);
            obj.stop(true,true);
        })
    }
})