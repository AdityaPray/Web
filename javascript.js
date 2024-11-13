//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");
function klikMenu(){
    tombolMenu.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle();
    });
}
$(document).ready(function () {
    var width = $(window).width();
    if (width < 990){
        klikMenu();
    }
})

//check lebar
$(window).resize(function(){
    var width = $(window).width();
    if(width > 990){
        menu.css("display","block");
    }else{
        menu.css("display","none");
    }
    klikMenu();
});

//efek scroll
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0) {
            $("nav").addClass("Putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("Putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })

});
 // Fungsi untuk mendapatkan tahun saat ini dan memasukkannya ke dalam elemen footer
 document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    document.getElementById("footer").querySelector(".footer-bottom p").innerHTML = `&copy; ${year} Pariwisata Indonesia. All rights reserved.`;
});