$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#back-top').fadeIn();
            
        } else {
            $('#back-top').fadeOut();
        }
    });
    $('#back-top').click(function () {
        $('html,body').animate(
            { scrollTop: 0 }, 1000
        )
    });
  
    var value = parseInt($('#num-order').attr('value'));
    $('#plus').click(function () {
        value++;
        $('#num-order').attr('value', value);
        return false;

    });
    $('#minus').click(function () {
        if (value > 1) {
            value--;
            $('#num-order').attr('value', value);
        }
        return false;
    });

    $('p.see-more').click(function(){
        $(this).css('display','none');
        $('#detail-product').css('height','auto');
        $('p.compact').css('display','block');
    
    });
    $('p.compact').click(function(){
        $(this).css('display','none');
        $('#detail-product').css('height','600px');
        $('p.see-more').css('display','block');
    });
    $("#eye").click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');

        if($(this).hasClass('open')){
            $(this).prev().attr('type','text');
        }
        else{
            $(this).prev().attr('type','password');
        }

    });
    $("i.responsive-toggle-menu").click(function(){
        $(this).toggleClass('open');
        $(this).next(".wp-main-menu-responsive ul.main-menu-responsive ul.sub-menu").slideToggle();
       
    });
    $(".slide-toggle-menu").click(function(){
        $(this).toggleClass('close');
        $(this).children('i').toggleClass('fa-xmark fa-bars');
        $('#wp-wrapper').toggleClass('open-respon-menu');
        // $(".wp-main-menu-responsive ul.main-menu-responsive ul.sub-menu").slideToggle();
    });
    function hide_responsive_menu(){
        $(".wp-main-menu-responsive ul.main-menu-responsive ul.sub-menu").slideUp();
        $("i.responsive-toggle-menu").removeClass('open');
    }
    $(window).resize(function(){
        $('#wp-wrapper').removeClass('open-respon-menu');

        if($(".slide-toggle-menu i").hasClass('fa-xmark')){
            $(".slide-toggle-menu i").removeClass('fa-xmark');
            $(".slide-toggle-menu i").addClass('fa-bars');
           
        }
        hide_responsive_menu();
    });
    $(window).scroll(function(){
        hide_responsive_menu();
    });
  
   
    
});
