$(document).ready(function(){
    $('.navigate .content .left .search').click(function(){
        $('#search').slideToggle(500)
    });
    $('.help .bottom').hover(function(){
        $('.help .top').show(500)
    } , function(){
        $('.help .top').hide(500)
    });
    $('.cars .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        loop:true,
        rtl :  true ,
        margin:0,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.ad .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        loop:true,
        rtl: true,
        margin:0,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.proud .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        loop:true,
        rtl: true,
        margin:44,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
    $('.arbon-vech .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        loop:true,
        rtl: true,
        margin:0,
        nav:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.bi-eye-fill').hide()
    $('.arbon-new .formm .input-group .pass span').click(function(){
        $(this).children().toggle()
    });
    $('.arbon-vech .content .sec .ads a .cont ').hover(function(){
        $(this).find('.sear').show()
    }, function(){
        $(this).find('.sear').hide()
    });
    $('.arbon-ads .tabs .content .right .tabb').click(function(){
        $(this).css({
            "background-color" : "#E8E8E8" , 
            "color" : "var(--main-color)"
        }).siblings().css({
            "background-color" : "#FFFFFF" , 
            "color" : "#585858"
        })
    });
    $('.arbon-ads .tabs .content .right  .ads').click()
    $('.arbon-ads .tabs .content .right  .ads').click(function(){
        $('#ads').show().siblings().hide()
    })
    $('.arbon-ads .tabs .content .right  .mess').click(function(){
        $('#mess').show().siblings().hide()
        $('.arbon-ads .tabs .content').css({
            "gap" : "20px"
        })
    });
    $('.arbon-ads .tabs .content .right  .informm').click(function(){
        $('#informm').show().siblings().hide()
        $('.arbon-ads .tabs .content').css({
            "gap" : "20px"
        })
    });
    $('.arbon-ads .tabs .content .right  .user').click(function(){
        $('#user').show().siblings().hide()
        $('.arbon-ads .tabs .content').css({
            "gap" : "20px"
        })
    });
    $('.arbon-ads .tabs .content .left .messages .cont').click(function(){
        $('#messd').show().siblings().hide()
    })
    $('.arbon-ads .tabs .content .left .messd .first h5').click(function(){
        $('#mess').show().siblings().hide()
        $('.arbon-ads .tabs .content .right  .mess').css({
            "background-color" : "#E8E8E8" , 
            "color" : "var(--main-color)"
        }).siblings().css({
            "background-color" : "#FFFFFF" , 
            "color" : "#585858"
        })
    })
    $('.arbon-ads .tabs .content .right  .noti').click(function(){
        $('#noti').show().siblings().hide()
        $('.arbon-ads .tabs .content').css({
            "gap" : "20px"
        })
    });
    $('.arbon-ads .tabs .content .right  .sol').click(function(){
        $('#sol').show().siblings().hide()
        $('.arbon-ads .tabs .content').css({
            "gap" : "20px"
        })
    });
    $('.arbon-ads .tabs .content .left .inform  .pottom .cad .cont').hover(function(){
        $(this).find('.two').css({
            "display" : "flex"
        })
    } , function(){
        $(this).find('.two').css({
            "display" : "none"
        })
    })
    $('.arbon-ads .tabs .content .left .inform  .pottom .acco .cont').hover(function(){
        $(this).find('.two').css({
            "display" : "flex"
        })
    } , function(){
        $(this).find('.two').css({
            "display" : "none"
        })
    })
    $('.arbon-ads .tabs .content .left .inform .tob .con').click(function(){
        $(this).css({
            "background-color" : "var(--main-color)" , 
            "color" : "white"
        }).siblings().css({
            "background-color" : "white" , 
            "color" : "#888888"
        })
    })
    $('.arbon-ads .tabs .content .left .inform  .tob .turnin').click(function(){
        $('#turnin').show().siblings().hide()
    })
    $('.arbon-ads .tabs .content .left .inform  .tob .cardd').click(function(){
        $('#cardd').show().siblings().hide()
    })
    $('.arbon-ads .tabs .content .left .inform  .tob .acc').click(function(){
        $('#acc').show().siblings().hide()
    })
    
})
