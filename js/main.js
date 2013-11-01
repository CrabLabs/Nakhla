(function ($) {
	"use strict";
	var windowHeight,
		bgImgs;

	$(document).on("ready", function () {
		bgImgs = ["img/bg/img_1.jpg", "img/bg/img_2.jpg", "img/bg/img_3.jpg"];
		$("#home").css("background-image", "url(" + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ")");
	});

	$(document, window).on("ready resize", function () {
		windowHeight = $(window).height();
		$(".step").height(windowHeight);
	});

	$(document).on("scroll", function (event) {
		var scrollTop = $(document).scrollTop(),
			scrollMod = scrollTop / ($(document).height() - 80) * 4;

		// $(".nav ul li").each(function (index) {
		// 	if (index === Math.floor(scrollMod)) {
		// 		$(this).addClass("active");
		// 	} else {
		// 		$(this).removeClass("active");
		// 	}
		// });

		if (scrollTop > 300)
			$("#logo").addClass("hide");
		else
			$("#logo").removeClass("hide");

		// console.log(scrollTop);
		// if (scrollTop > 2643) {
		// 	$(".horizontal_steps").css({
		// 		'top': 
		// 	});
		// }

	});

	$("a[href*=#]").on("click", function (e) {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var targetOffset, 
				$target = $(this.hash);
			$target = $target.length && $target || $("[name=" + this.hash.slice(1) + "]");
			
			if ($target.length) {
				targetOffset = $target.offset().top;
				$("html, body").animate({
					scrollTop: targetOffset
				}, 500);

				// return false;
			}
		}
	});
}(jQuery));
