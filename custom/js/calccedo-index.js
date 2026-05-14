/* 
 * @author: Ibrahim Abdsaid Hanna
 *          ibrahim.seniore@gmail.com
 */

$(document).ready(function () {
    
    $("#home_Link").click(function () {
        $("html, body").animate({scrollTop: $('#home').offset().top}, 1000);
    });
    
    $("#install_Link").click(function () {
        $("html, body").animate({scrollTop: $('#install').offset().top}, 1000);
    });


    $("#features_Link").click(function () {
        $("html, body").animate({scrollTop: $('#features').offset().top}, 1000);
    });


    $("#development_Link").click(function () {
        $("html, body").animate({scrollTop: $('#development').offset().top}, 1000);
    });
    
    
    $("#contact_Link").click(function () {
        $("html, body").animate({scrollTop: $('#contact').offset().top}, 1000);
    });
    
});




