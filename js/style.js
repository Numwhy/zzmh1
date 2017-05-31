$(function(){
    /**************标题***************/
    $('#tit').children('p').animate({
        'width' : '1440px'
    },2000)
    /**************菜单栏***************/
    $('.bgcolor').css('color','#1e90ff');
    /**************图片轮播***************/
    //首页
    var slide = $('.slide'),
        oUl = slide.children('ul'),
        aLi = oUl.children('li'),
        aSpan = $('.cb-right-bt').children('span'),
        iNum = 0,
        timer = '';
    //旅游页
    var lyNews = $('.lynews-box1-left'),
        lyNewsUl = lyNews.children('ul'),
        lyNewsLi = lyNewsUl.children('li'),
        aSpan2 = $('.lynews-box1-anniu span');
    aSpan2.css('background','#ccc');//设置按钮颜色
    //财经页
    var cjnewsRt = $('.cjnews-right-top'),
        cjnewsRtul = cjnewsRt.children('ul'),
        cjnewsRtli = cjnewsRtul.children('li'),
        cjnewsRtspan = $('.cjnews-right-bt').children('span');
    //慈善公益页
    var csnews = $('.csnews-left'),
        csnewsUl = csnews.children('ul'),
        csnewsLi = csnewsUl.children('li'),
        csnewsAs = $('.cs-nexPrev').children('a');
    csnewsAs.eq(0).css('background','#ff0000');
    //鼠标悬浮暂停
    hov2(slide,aLi,aSpan);
    hov2(lyNews,lyNewsLi,aSpan2);
    hov2(cjnewsRt,cjnewsRtli,cjnewsRtspan);
    hov2(csnews,csnewsLi,csnewsAs);
    function hov2(obj,obj1,obj2){
        obj.hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(function(){
                slide1(obj1,obj2);
            },5000);
        })
    }
    //页面转换
    if(lyNewsLi.length == 0 && cjnewsRtli.length == 0 && csnewsLi.length == 0){
        timer = setInterval(function(){
            slide1(aLi,aSpan);
        },5000);
    }else if(aLi.length == 0 && cjnewsRtli.length == 0 && csnewsLi.length == 0){
        timer = setInterval(function(){
            slide1(lyNewsLi,aSpan2);
        },5000);
    }else if(lyNewsLi.length == 0 && aLi.length == 0 && csnewsLi.length == 0){
        timer = setInterval(function(){
            slide1(cjnewsRtli,cjnewsRtspan);
        },5000);
    }else if(lyNewsLi.length == 0 && aLi.length == 0 && cjnewsRtli.length == 0){
        timer = setInterval(function(){
            slide1(csnewsLi,csnewsAs);
        },5000);
    }
    //图片切换
    function slide1(obj,obj1){
        iNum++;
        if(iNum > obj.length - 1){
            iNum = 0;
        }
        obj.eq(iNum).animate({
            'opacity' : '1',
            'z-index' : '1'
        }).siblings().animate({
            'opacity': '0',
            'z-index': '0'
        })
        obj1.eq(iNum).css({
            'background' : '#ff0000'
        }).siblings().css({
            'background' : '#ccc'
        })
    }
    //按钮切换
    anqh(aSpan,aLi);
    anqh(aSpan2,lyNewsLi);
    anqh(cjnewsRtspan,cjnewsRtli);
    anqh(csnewsAs,csnewsLi);
    function anqh(obj,obj1){
        obj.hover(function(){
            $(this).css({
                'background' : '#ff0000'
            }).siblings().css({
                'background' : '#ccc'
            })
            iNum = $(this).index();
            obj1.eq(iNum).animate({
                'opacity' : '1',
                'z-index' : '1'
            }).siblings().animate({
                'opacity': '0',
                'z-index': '0'
            });
            obj1.stop(true,true);
        })
    }
    /***************商讯&大豫网新闻%旅游新闻&慈善&体育&房产&健康&汽车***************/
    var oUl3 = $('.cb3-txt1-ul'),
        aLi1 = oUl3.children('li'),
        aLiw = aLi1.eq(0).outerWidth(true,true),
        prev = $('.prev'),
        next = $('.next'),
        iNum1 = 0;
//大象网新闻
    var oUl4 = $('.dynews-left-slide').children('ul'),
        aLi4 = oUl4.children('li'),
        aLiw4 = aLi4.eq(0).width(),
        prev1 = $('.prev1'),
        next1 = $('.next1'),
        timer1 = '';
//旅游新闻
    var lyNewsBox2 = $('.lynews-box2-bottom-ly'),
        lyUl = lyNewsBox2.children('ul'),
        lyLi = '',
        lyLiW = '';
    lyUl.each(function(){
        lyLi = $(this).children('li');
        lyLiW = lyLi.eq(0).outerWidth(true,true);
    });
//慈善
    var csnewsBox = $('.csnews-box2-right'),
        csnewsRtUl = csnewsBox.children('ul'),
        csnewsRtLi = csnewsRtUl.children('li'),
        csnewsRtLiW = csnewsRtLi.eq(0).width(),
        csPre1 = $('.cs-prev1'),
        csNex1 = $('.cs-next1');
//体育
    var spnewsBox = $('.sportnews-box1-right'),
        spnewsBoxUl = spnewsBox.children('ul'),
        spnewsBoxLi = spnewsBoxUl.children('li'),
        spnewsBoxLiW = spnewsBoxLi.eq(0).width(),
        spPrev1 = $('.sp-prev1'),
        spNext1 = $('.sp-next1');
//房产
    var housenewsBox = $('.housenews-box1-left'),
        housenewsUl = housenewsBox.children('ul'),
        housenewsLi = housenewsUl.children('li'),
        housenewsLiW = housenewsLi.eq(0).width(),
        housePre = $('.house-prev1'),
        houseNex = $('.house-next1');
//健康
    var healthBox = $('.healthnews-box1-left'),
        healthUl = healthBox.children('ul'),
        healthLi = healthUl.children('li'),
        healthLiW = healthLi.eq(0).width(),
        healthPre = $('.health-prev1'),
        healthNex = $('.health-next1');
//汽车
    var carnewsBox = $('.carnews-box1-left'),
        carnewsUl = carnewsBox.children('ul'),
        carnewsLi = carnewsUl.children('li'),
        carnewsLiW = carnewsLi.eq(0).width(),
        carnewsPre = $('.carnews-prev1'),
        carnewsNex = $('.carnews-next1');
//家居
    var homeBox = $('.home-box1'),
        homeUl = homeBox.children('ul'),
        homeLi = homeUl.children('li'),
        homeLil = homeUl.find('.home-right'),
        homeLiW = homeBox.width(),
        homePre = $('.home-prev1'),
        homeNex = $('.home-next1');
//鼠标滑过暂停
    hov3(oUl3,oUl3,aLi1,aLiw);
    hov3(oUl4,oUl4,aLi4,aLiw4);
    hov3(csnewsBox,csnewsRtUl,csnewsRtLi,csnewsRtLiW);
    hov3(spnewsBox,spnewsBoxUl,spnewsBoxLi,spnewsBoxLiW);
    hov3(housenewsBox,housenewsUl,housenewsLi,housenewsLiW);
    hov3(healthBox,healthUl,healthLi,healthLiW);
    hov3(carnewsBox,carnewsUl,carnewsLi,carnewsLiW);
    hov3(homeBox,homeUl,homeLil,homeLiW);
    function hov3(obj,obj1,obj2,obj3){
        obj.hover(function(){
            clearInterval(timer1);
        },function(){
            timer1 = setInterval(function(){
                slide2(obj1,obj2,obj3);
            },5000);
        })
    }
    lyNewsBox2.each(function(){
        $(this).hover(function(){
            clearInterval(timer1);
        },function(){
            timer1 = setInterval(function(){
                slide2(lyUl,lyLi,lyLiW);
            },3000);
        });
    });
//判断
    if(aLi1.length != 0){
        timer1 = setInterval(function(){
            slide2(oUl3,aLi1,aLiw);
        },3000);
    }else if(aLi4.length != 0){
        timer1 = setInterval(function(){
            slide2(oUl4,aLi4,aLiw4);
        },3000);
    }else if(lyLi.length != 0){
        timer1 = setInterval(function(){
            slide2(lyUl,lyLi,lyLiW);
        },3000);
    }else if(csnewsRtLi.length != 0){
        timer1 = setInterval(function(){
            slide2(csnewsRtUl,csnewsRtLi,csnewsRtLiW);
        },3000);
    }else if(spnewsBoxLi.length != 0){
        timer1 = setInterval(function(){
            slide2(spnewsBoxUl,spnewsBoxLi,spnewsBoxLiW);
        },3000);
    }else if(housenewsLi.length != 0){
        timer1 = setInterval(function(){
            slide2(housenewsUl,housenewsLi,housenewsLiW);
        },3000);
    }else if(healthLi.length != 0){
        timer1 = setInterval(function(){
            slide2(healthUl,healthLi,healthLiW);
        },3000);
    }else if(carnewsLi.length != 0){
        timer1 = setInterval(function(){
            slide2(carnewsUl,carnewsLi,carnewsLiW);
        },3000);
    }else if(homeLi.length != 0){
        timer1 = setInterval(function(){
            slide2(homeUl,homeLil,homeLiW);
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
//后退
    ht(oUl3,prev,aLiw);
    ht(oUl4,prev1,aLiw4);
    ht(csnewsRtUl,csPre1,csnewsRtLiW);
    ht(spnewsBoxUl,spPrev1,spnewsBoxLiW);
    ht(housenewsUl,housePre,housenewsLiW);
    ht(healthUl,healthPre,healthLiW);
    ht(carnewsUl,carnewsPre,carnewsLiW);
    ht(homeUl,homePre,homeLiW);
    $('.prev2').each(function(){
        $(this).click(function(){
            if(iNum1 > 0){
                iNum1--;
            }
            $(this).parent().next('ul').animate({
                'left' : -lyLiW * iNum1
            }).stop(true,true);
        })
    });
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
//前进
    qj(oUl3,next,aLi1,aLiw);
    qj(oUl4,next1,aLi4,aLiw4);
    qj(csnewsRtUl,csNex1,csnewsRtLi,csnewsRtLiW);
    qj(spnewsBoxUl,spNext1,spnewsBoxLi,spnewsBoxLiW);
    qj(housenewsUl,houseNex,housenewsLi,housenewsLiW);
    qj(healthUl,healthNex,healthLi,healthLiW);
    qj(carnewsUl,carnewsNex,carnewsLi,carnewsLiW);
    qj(homeUl,homeNex,homeLil,homeLiW);
    $('.next2').each(function(){
        $(this).click(function(){
            iNum1++;
            if(iNum1 > lyLi.length - 1){
                iNum1 = 0;
            }
            $(this).parent().next('ul').animate({
                'left' : -lyLiW * iNum1
            }).stop(true,true);
        })
    });
    function qj(obj,obj1,aLi,liW){
        obj1.click(function(){
            slide2(obj,aLi,liW);
            obj.stop(true,true);
        })
    }
    /*************新闻选项卡***************/
    var aP = $('.dis-tit1').children('p'),
        aP1 = $('.dis-tit2').children('p'),
        aP2 = $('.dis-tit3').children('p'),
        dis_tit = $('.dis-tit'),
        oUl1 = $('.borT1'),
        oUl2 = $('.borT2'),
        aLi5 = $('.dynews-right-tit>ul>li'),
        dynewsRight = $('.dynews-right-news1');

    function hov(obj1,obj2){
        obj1.hover(function(){
            var num = $(this).index();
            $(this).addClass('dynews-right-bg').siblings().removeClass('dynews-right-bg');

            obj2.eq(num).removeClass('dis').siblings().addClass('dis');
        })
    }
    hov(aP,dis_tit);
    hov(aP1,oUl1);
    hov(aP2,oUl2);
    hov(aLi5,dynewsRight);
    //美食
    var foodLi = $('.foodbox2-left-bd ul li'),
        foodLi1 = $('.foodbox2-left-hd ul li');
    function hovv(obj,obj1){
        obj.hover(function(){
            var num = $(this).index();
            $(this).children('span').show();
            $(this).siblings().children('span').hide();
            obj1.eq(num).removeClass('dis').siblings().addClass('dis');
        })
    }
    hovv(foodLi,foodLi1);
    var foodBox3 = $('.food-box3-news');
        foodBox3.each(function(){
            var foodBox3Ul = $(this).children('ul'),
                food3Hd = foodBox3Ul.eq(1),
                food3Bd = foodBox3Ul.eq(0),
                food3Li = food3Hd.children('li'),
                food3Li1 = food3Bd.children('li');
            //alert(food3Li.length)
            food3Li.hover(function(){
                var num = $(this).index();
                $(this).children('a').css('color','#ff0000');
                $(this).siblings().children('a').css('color','#000');
                food3Li1.eq(num).removeClass('dis').siblings().addClass('dis');
            })
        });
    /***************回到顶部*****************/
    var goTop = $('.goTop');
    goTop.click(function(){
        $('html,body').animate({
            'scrollTop' : 0
        },1000)
    });
    $(window).scroll(function(){
        var winH = $(this).scrollTop();

        if(winH > 200){
            goTop.show(1000);
        }else{
            goTop.hide(1000);
        }
    });
    /***************视频聚焦**************/
    var aLi2 = $('.video1 ul li'),
        aSpan1 = $('.video-tit').children('span'),
        video1 = $('.video1');
    aLi2.click(function(){
        var aHref = aLi2.eq($(this).index()).children('a').attr('href');
        $('.video-left').children('iframe').attr('src',aHref);
        $(this).addClass('bg1').siblings().removeClass('bg1');
    })
    aSpan1.hover(function(){
        aSpanIndex = $(this).index();
        video1.eq(aSpanIndex).addClass('dis').siblings('.video1').removeClass('dis');
        $(this).addClass('bg2').siblings().removeClass('bg2');
    })
    /***************视频评论**************/
    var oUl5 = $('.video-plt').children('ul'),
        textArea = $('.video-txt'),
        videoButton = $('#button'),
        bgColor = ['#fffacd','#fff'];
    function videoPlt(obj,obj1){
        if(textArea.val() == ''){
            alert('请输入正确的内容!');
        }else{
            obj.append('<li>游客:<p>' + textArea.val() +'</p></li>');
            textArea.val('');
        }
    }
    videoButton.click(function(){
        var aLi3 = oUl5.children('li');
        videoPlt(oUl5,aLi3);
        for(var i = 0;i < aLi3.length;i++){
            if(i % 2 == 0){
                aLi3.eq(i).css('background',bgColor[0]);
            }else{
                aLi3.eq(i).css('background',bgColor[1]);
            }
        }
    });
    /*****************大豫网新闻网友声音**********************/
    var dynewsWysyUl = $('.dynews-wysy-txt ul'),
        dynewsWysyLi = dynewsWysyUl.children('li'),
        dynewsWysyA = dynewsWysyLi.children('a');
    //点击改变内容
    dynewsWysyLi.each(function(){
        $(this).click(function(){
            var Num = parseInt($(this).children('span').html());
            $(this).children('span').html(++Num);
        })
    })
    //聚焦河南
    $('.dynews-jjhn-top ul li:last-child a').css('border-right','none');
    //24小时热点
    var dynewsRdLi = $('.dynews-center-24rd ul').children('li');
    for(var ii = 0;ii < dynewsRdLi.length;ii++){
        if(ii < 3){
            dynewsRdLi.eq(ii).children('span').css('background','#649FE1');
        }else{
            dynewsRdLi.eq(ii).children('span').css('background','#666');
        }
    }
    function ho(obj){
        obj.hover(function(){
            $('.dynews-center-24rd').css('display','block');
            $(this).stop(true,true);
        },function(){
            $('.dynews-center-24rd').css('display','none');
        })
    }
    ho($('.dynews-center-rd>a'));
    ho($('.dynews-center-24rd'));
    //河南城事
    var ulBg = $('.dynews-center-center');
    ulBg.each(function(){
        var liBg = $(this).children('li');
        liBg.eq(0).children('a').css({
            'color' :　'#ff0000',
            'font-weight' : 'bold',
            'font-size' : '1.6em'
        })
    });
    /*****************体育页********************/
    var spLogoH = $('.logo').height(),
        spNav = $('.nav').height(),
        spNbox1 = $('.sportnews-box1').height(),
        spNbox2R = $('.spnews-box2-right');
    $(window).scroll(function(){
        var hh1 = spLogoH+spNav+spNbox1,
            hh2 = $(this).scrollTop();
        if(hh2 > hh1+10){
            spNbox2R.css({
                'position' : 'fixed',
                'left' : '50%',
                'margin-left' : '160px'
            })
        }else if(hh2 < hh1+10){
            spNbox2R.css({
                'position' : 'absolute',
                'left' : '50%',
                'margin-left' : '360px'
            })
        }
        if($(window).width() < 1024 && hh2 > hh1+10){
            spNbox2R.css({
                'position' : 'fixed',
                'left' : '50%',
                'margin-left' : '200px'
            })
        }
    })
    /***************汽车新闻****************/
    var carnewsBox3t = $('.carnews-box3-right-txt1'),
        carnewsBox3Li = $('.carnews-box3-right ul').children('li');
    carnewsBox3Li.hover(function(){
        $(this).children('.carnews-box3-right-txt2').show();
        $(this).siblings().children('.carnews-box3-right-txt2').hide();
    })
});