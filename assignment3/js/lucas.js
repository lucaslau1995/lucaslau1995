$(document).ready(function() {
        //console.log("jquery ready");

        //Back To Top Button && Fix top bar
        window.onscroll = function () {
            var bttButton = document.getElementById("btt");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    bttButton.style.display = "block";
                    $("#top").addClass("fixed");
                } else {
                    bttButton.style.display = "none";
                    $("#top").removeClass("fixed");
            }
        };

        //Mobile Menu
        $("#mMenu").click(function() {
            $(".tab").each(function(){
                $(this).toggleClass("responsive");
            });    
        });

        //Tab controller
        $(".tab").click(function(){
            var content = ($(this).attr("value"));
            if (content == "home") {
                    location.href = "http://studentweb.cencol.ca/llau34";
                } else if (content == "productInfo") {
                    location.href = "http://studentweb.cencol.ca/llau34/assignment3/assignment3.html";
                } else {
                    $(".tabc").removeClass("active");
                    $("#" + content).addClass("active");
            }
        });

        //Image Slider
        var productImages = ['product_a.jpg', 'product_b.jpg', 'product_c.jpg', 'product_d.jpg', 'product_e.jpg'];
        var productImagesRef = productImages;
        var url = "images/";
        var index = 0;
        var imgSlider = $("#productSlider");

        $(".next").click(function(change) {
            showProductImages("next");
        })
        $(".prev").click(function() {
            showProductImages("prev");
        })
        $(".color").click(function() {
            if ($(this).attr("value") == "black") {
                    index = 0;
                    imgSlider.attr("src", url + productImages[index]);
                    imgSlider.attr("ref", productImages[index]);
                } else {
                    index = 2;
                    imgSlider.attr("src", url + productImages[index]);
                    imgSlider.attr("ref", productImages[index]);
            }
        })
        
        function showProductImages (change) {
            if (change == "next") {
                    index++;
                    index %= productImages.length;
                } else if (change == "prev") {
                    index--;
                } else {
                    index == 0;
            }
            if (index < 0) {index = productImages.length -1;}
            //console.log(index);
            imgSlider.attr("src", url + productImages[index]);
            imgSlider.attr("ref", productImages[index]);
        }

        //Image detail page
        $("#viewLarge").click(function () {
            console.log("view");
            var viewImg = $("#productSlider").attr("ref");
            window.location.href = "details.html?images="+viewImg;
        })
        
});