(()=>{
    //当屏幕滚动出轮播图后固定头部
    window.addEventListener("scroll",function(){
        var scrollTop=
            document.documentElement.scrollTop
            ||document.body.scrollTop;
        // console.log(scrollTop);
        //如果scrollTop>=652
        if(scrollTop>=652){
            //让header变为fixed定位，固定在文档显示区顶部
            $("#header").addClass("fixed");
            $(".content span").css("color","#666");
            $(".h-right>ul>li>a").css("color","#666");
        }else{
            //让header变回原定位方式
            $("#header").removeClass("fixed");
            $(".content span").css("color","#fff");
            $(".h-right>ul>li>a").css("color","#fff");
        }

    });

    //动态加载进度条

    //a 底色，b 加载色 , w 展示宽度，h 展示高度
    var a="#5AC3D8";
    var b="#dfdfdf";
    var w="728px";
    var h="4px";
    var div=$(".progress_line");//进度条要插入的地方
    var barb=function(){
        div.each(function(){
            var width=$(this).attr('w');
            var barbox='<dl class="barbox"><dd class="barline"><div w="'+width+'" class="charts" style="width:0px"></div></dd></dl>';
            $(this).append(barbox);
        })
    }

    var amimeat=function(){
        $(".charts").each(function(i,item){
            var wi=parseInt($(this).attr("w"));
            $(item).animate({width: wi+"%"},1000,function(){//一天内走完
                $(this).children('d').html(wi+"%");
            });
        });
    }
    var barbCss=function(a,b){
        $(".barbox").css({
            "height":h,
            "line-height":h,
            "text-align":"center",
            "color":"#fff",
        })
        $(".barbox>dd").css({
            "float":"left"
        })
        $(".barline").css({
            "width":w,
            "background":b,
            "height":h,
            "overflow":"hidden",
            "display":"inline",
            "position":"relative",
            "border-radius":"8px",
        })
        $(".barline>d").css({
            "position":"absolute",
            "top":"0px",
        })
        $(".charts").css({
            "background":a,
            "height":h,
            "width":"0px",
            "overflow":"hidden",
            "border-radius":"8px"
        })
    }
    barb();
    amimeat();
    barbCss(a,b);
})()

