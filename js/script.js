$(function() {
    var faqCard = $(".card .card-header");

    faqCard.on("click" , function() {
        $(this).find("i").toggleClass("fa-chevron-up");
        $(this).find("i").toggleClass("fa-chevron-down")
    });

    // Wow Js
    var wow = new WOW({mobile : false});
    wow.init();


    // Scroll To Top
    var backToUp = $(".back-to-top-icon ");

    $(window).on('scroll' , function() {

        
        if($(window).scrollTop() > 200) {
            if(backToUp.is(':hidden')) {
                backToUp.css("display" , "flex")
            }
        }else {
            backToUp.fadeOut(500);
        }
    
    
    });


    //   PaddingTop To Body (Because Navbar is Fixed)

    $("body").css("paddingTop" , $(".top-bar").innerHeight());

    $(window).resize(function() {
        $("body").css("paddingTop" , $(".top-bar").innerHeight());
    });


    // Pricing (Show All)
    $(".show-more-item.hide").nextAll("li").css("display" , "none");

    
    $(".show-more-item.hide").on("click" , function() {

        if ($(".show-more-item").hasClass("hide")) {
            $(this).nextAll("li").toggle(150);
            $(this).css("display" , "none");
            $("show-more-item.hide.show").css("display" , "block")
        }
    })

    $(".show-more-item.show").on("click" , function() {

        $(this).siblings(".show-more-item.hide").nextAll().toggle(150);
        $(".show-more-item.hide").css("display" , "block");
    });

    $(".footer .payment a").on('click' ,function(e) {
        e.preventdefault()
    });

    $(".faq-link").on("click" , function() {
        location.href = "/#faq"
    });

    $(".nav-feat").on("click" , function() {
        location.href = "/#features"
    });

    
    


})


