(function ($) {
	"use strict";
	
	$(document).on("ready", function () {
		var bgImgs = ["img/bg/img_1.jpg", "img/bg/img_2.jpg"];
		$("#home").css("background-image", "url(" + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ")");		
	});

	$(".nav span").on("click", function (e) {
		e.preventDefault();
		$(".nav").toggleClass("visible");
		$(".nav span").toggleClass("giro");
	});

}(jQuery));
