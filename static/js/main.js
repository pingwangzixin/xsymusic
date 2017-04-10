$(function(){
        var music=document.getElementById("bfq")
        
        $(".gongsijianjie").typetype("北京新星音乐工作室隶属于北京弦尚乐文化传媒发展有限公司，拥有国内一线制作团队。主要以制作、编配高品质音乐为主。公司主营项目:作曲、编曲、混音、游戏配乐、微电影、广告、宣传片配乐等。风格类目:流行乐、民谣、爵士乐、交响乐、舞蹈音乐、影视音乐、游戏音乐等，具体以客户需求为主，与此同时可根据歌曲需求拍摄MTV。我们会用最真诚的态度给您提供最好的服务！",{
            t:200,
            e:0.05,
        })
        
        //点击换歌
        $(".bofanglist ul li").on("click",function(){
            $(this).addClass("xuanzhong").siblings().removeClass("xuanzhong")
            var mp3=$(this).attr("music")
            var geming=$(this).html();
            $(".zhengzaibofang").html(geming)
            $("#bfq").attr("src",mp3)
            music.pause();
            var zs=$(".gundong").parent().attr("tagName")
            if(zs=="marquee"){
                $(".gundong").unwrap("<marquee tagName='marquee'></marquee>")
            }
            
            $(".bofang").css({"background":"url(./static/img/xs-bf-zanting.png)no-repeat"});
        })
    //bofangqi
         $(".bofang").click(function(){
                if(music.paused){
                    $(".bofang").css({"background":"url(./static/img/xs-bf-kaishi.png)no-repeat"});
                    $(".gundong").wrap("<marquee tagName='marquee'></marquee>")
                    music.play();
                }else{
                    $(".bofang").css({"background":"url(./static/img/xs-bf-zanting.png)no-repeat"});
                    $(".gundong").unwrap("<marquee tagName='marquee'></marquee>")
                    music.pause();
                }
         })
         
         music.addEventListener("ended",function(){
             $(".bofang").css({"background":"url(./static/img/xs-bf-zanting.png)no-repeat"});
                    $(".gundong").unwrap("<marquee tagName='marquee'></marquee>")
                    music.pause();
         },false)
    
        $(".jita").mouseenter(function(){
            $(this).addClass("rotateIn")
        }).mouseleave(function(){
            $(this).removeClass("rotateIn")
        })
        
        $(".guangpan").mouseenter(function(){
            $(this).addClass("rotateIn")
        }).mouseleave(function(){
            $(this).removeClass("rotateIn")
        })
        
        $(".gangqin").mouseenter(function(){
            $(this).addClass("rotateIn")
        }).mouseleave(function(){
            $(this).removeClass("rotateIn")
        })
        
        
        $(".fullpage").fullpage({
            verticalCentered: false,
            anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7'],
            menu:'#menu',
            navigation: true,
            navigationColor:'#09c',
            keyboardScrolling:true,
            afterLoad: function(anchorLink, index){
                
                if(index == 2){
                        $('.gongsijianjie').addClass("bounceInRight animated").removeClass("bounceOutLeft")
                    }

                if(index == 3){
                    $(".youshi1 img").addClass("swing animated").removeClass("bounceOut")
                    $(".youshi2 img").addClass("swing animated").removeClass("bounceOut")
                    $(".youshi3 img").addClass("swing animated").removeClass("bounceOut")
                    $(".gqjs").addClass("bounceInUp animated").removeClass("bounceOutLeft")
                    $(".xiangxijs").addClass("bounceInUp animated").removeClass("bounceOutRight")
                }

                if(index == 4){
                    $(".yinyue1").addClass("bounceInLeft animated").removeClass("bounceOutLeft")
                    $(".bofanglist").addClass("bounceInRight animated").removeClass("bounceOutRight")
                }
                
                if(index == 5){
                    $(".whycon1").addClass("bounceInLeft animated").removeClass("bounceOutLeft")
                    $(".whycon2").addClass("bounceInUp animated").removeClass("bounceOutUp")
                    $(".whycon3").addClass("bounceInRight animated").removeClass("bounceOutRight")
                }
                
                if(index == 6){
                    $(".page6con").addClass("fadeInDown animated").removeClass("fadeOutDown")
                }
                
                if(index == 7){
                    $(".lianxiwomen h1").addClass("tada animated").removeClass("bounceOutUp")
                    $(".lianxiwomen h2").addClass("bounceInUp animated").removeClass("bounceOutUp")
                    $(".erweima").addClass("bounceInRight animated").removeClass("bounceOutUp")
                }
            },
            
            onLeave: function(index, direction){

                if(index == 2){
                        $('.gongsijianjie').addClass("bounceOutLeft animated")
                    }

                if(index == 3){
                    $(".youshi1 img").addClass("bounceOut animated")
                    $(".youshi2 img").addClass("bounceOut animated")
                    $(".youshi3 img").addClass("bounceOut animated")
                    $(".gqjs").addClass("bounceOutLeft animated")
                    $(".xiangxijs").addClass("bounceOutRight animated")
                }

                if(index == 4){
                    $(".yinyue1").addClass("bounceOutLeft animated");
                    $(".bofanglist").addClass("bounceOutRight animated")
                }
                
                if(index == 5){
                    $(".whycon1").addClass("bounceOutLeft animated")
                    $(".whycon2").addClass("bounceOutUp animated")
                    $(".whycon3").addClass("bounceOutRight animated")
                }
                
                if(index == 6){
                    $(".page6con").addClass("fadeOutDown animated")
                }
                
                if(index == 7){
                    $(".lianxiwomen h1").addClass("bounceOutUp animated")
                    $(".lianxiwomen h2").addClass("bounceOutUp animated")
                    $(".erweima").addClass("bounceOutUp animated")
                }
            }
            
        })
        
        $(".page1yinfu1").plaxify({"xRange":20,"yRange":40})
        $(".page1yinfu2").plaxify({"xRange":30,"yRange":40,"invert":true})
        $(".page1hengfuimg").plaxify({"xRanfe":30,"yRange":30,"invert":true})
        $.plax.enable()
    })