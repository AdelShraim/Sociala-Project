//offcanva navbar:
$('.offvanva-btn').on('click',function(){
$(this).toggleClass('active')
})

//main page
$('.message-btn').on('click' ,function(){
   $('.chat-contact').toggleClass('active')
   $('.main-content').toggleClass('active-chat')
  
})



let navbarHeight = $('.navbar').outerHeight();

$('.sidebar').css({'top' : navbarHeight+'px'})
$('.chat-contact').css({'top' : navbarHeight+'px'})
$('.main-content').css({'padding-top' : navbarHeight+'px'})

let windowWidth = $(window).width();
let sidebarWidth = $('.sidbar').width();

if(windowWidth >= 1600){
    $('.main-content').css({'padding-right' : sidebarWidth+'px' , 'padding-left' : sidebarWidth+'px'})

}else if(windowWidth >= 992 && windowWidth < 1600){
    $('.main-content').css({'padding-right' : 0 , 'padding-left' : sidebarWidth+'px'})

}else if (windowWidth < 992){
    $('.main-content').css({'padding-right' : 0 , 'padding-left' : 0 })


}

$(window).on('resize' , function(){
    let windowWidth = $(window).width();
    if(windowWidth >= 1600){
        $('.main-content').css({'padding-right' : sidebarWidth+'px' , 'padding-left' : sidebarWidth+'px'})
    
    }else if(windowWidth >= 992 && windowWidth < 1600){
        $('.main-content').css({'padding-right' : 0 , 'padding-left' : sidebarWidth+'px'})
    
    }else if(windowWidth < 992){
        $('.main-content').css({'padding-right' : 0 , 'padding-left' : 0 })
    
    
    }
})

// stories coursel

    $(".owl-carousel").owlCarousel({
        margin : 10
    });
  



  