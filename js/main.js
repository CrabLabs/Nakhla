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
		$(".horizontal_steps").css("margin-bottom", windowHeight * 6 + "px");
	});

	$(document).on("scroll", function (event) {
		var scrollTop = $(document).scrollTop(),
			scrollMod = scrollTop / ($(document).height() - 40) * 4;

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
		if (scrollTop > windowHeight * 4 && scrollTop < windowHeight * 11) {
			$(".horizontal_steps .horizontal_placeholder").css({
				"left": "-" + (scrollTop - windowHeight * 4) + "px"
			});
			$(".horizontal_steps .horizontal_placeholder").css("position", "fixed");
		} else {
			$(".horizontal_steps .horizontal_placeholder").css("position", "static");
		}

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
