(function ($) {
	"use strict";
	
	$(document).on("ready", function () {
		
		var bgImgs = ["img/bg/img_1.jpg", "img/bg/img_2.jpg", "img/bg/img_3.jpg"];
		$("#home").css("background-image", "url(" + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ")");

		$("a[href*=#]").click(function() {
			if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
				var targetOffset, $target = $(this.hash);
				$target = $target.length && $target || $("[name=" + this.hash.slice(1) + "]");
				
				if ($target.length) {
					targetOffset = $target.offset().top;
					$("html, body").animate({
						scrollTop: targetOffset
					}, 500);

					return false;
				}
			}
		});	
	});

	$(document).on("scroll", function (event) {
		var scrollTop = $(document).scrollTop(),
			scrollMod = scrollTop / ($(document).height() - 80) * 4;

		$(".nav ul li").each(function (index) {
			if (index === Math.floor(scrollMod)) {
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
		});
	});

	$(".nav span").on("click", function (e) {
		e.preventDefault();
		$(".nav").toggleClass("visible");
		$(".nav span").toggleClass("giro");
	});

}(jQuery));


