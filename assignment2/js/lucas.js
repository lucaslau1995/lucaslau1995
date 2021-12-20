//Back To Top Button
window.onscroll = function () {
    var bttButton = document.getElementById("btt");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            bttButton.style.display = "block";
        } else {
            bttButton.style.display = "none";
        }
    }

//Mobile Menu Control
function mopen() {
    document.getElementById("mobileMenu").style.display = "block";
}
  function mclose() {
    document.getElementById("mobileMenu").style.display = "none";
}

//Image Slider
var slideIndex = 1;
showSlides(slideIndex);

function showSlides(a) {
    console.log(slideIndex);
    var i;
    var slides = document.getElementsByClassName("slide");
    console.log(slides);
    if (a > slides.length) {slideIndex = 1};
    if (a < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
function changeSlide (a) {
    showSlides(slideIndex += a);
}
