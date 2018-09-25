$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});

// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

// Book Now Button
$(document).ready(function(){
    $("#book-now-btn").on('click',function(){
        window.open('contact-us.html');
    });
});

// // Learn More Button
// $(document).ready(function(){
//     $("#learn-more-btn").on('click',function(){
//         window.open('home.html');
//     });
// });

// Learn More Button
$(document).ready(function(){
    $("#submit-btn").on('click',function(){
        if($('#form-name, #form-email').val()==''){
            alert("Input can not be left blank");
            return false;
        }
    });
});
