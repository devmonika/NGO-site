// $(document).ready(function(){
//     $(".navbar-toggler").click(function(){
//         $(".navbar-toggler").toggleClass("change");
//     })
// })

$('.team-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: false,
    dots: false,
   
    responsive: {
        0: {
            items: 1
        },
        // 440:{
        //   items:2
        // },
        576: {
            items: 2
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});
