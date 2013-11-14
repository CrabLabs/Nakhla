(function ($) {
	"use strict";
	var windowHeight,
		bgImgs;

	$(document).on("ready", function () {
		bgImgs = ["img/bg/01.jpg", "img/bg/02.jpg", "img/bg/03.jpg", "img/bg/04.jpg", "img/bg/05.jpg"];
		$("#home").css("background-image", "url(" + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ")");
	});

	//$(document, window).on("ready resize", function () {
	//	windowHeight = $(window).height();
	//	$(".step").height(windowHeight);
	//	$(".horizontal_steps").height($(window).width() * 6);
	//});

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

		if (scrollTop > 300) {
			$("#logo").addClass("hide");
		} else {
			$("#logo").removeClass("hide");
		}

		//if (scrollTop > windowHeight * 4 && scrollTop < windowHeight * 4 + $(window).width() * 5) {
		//	$(".horizontal_steps .horizontal_placeholder").css({
		//		"left": "-" + (scrollTop - windowHeight * 4) + "px",
		//		"position": "fixed",
		//		"top": "40px"
		//	});
		//} else {
		//	if (scrollTop > windowHeight * 4) {
		//		$(".horizontal_steps .horizontal_placeholder").css({
		//			"bottom": "0px",
		//			"left": "auto",
		//			"right": $(window).width() * 4 + "px",
		//			"position": "absolute",
		//			"top": "auto"
		//		});
		//	} else {
		//		$(".horizontal_steps .horizontal_placeholder").css("position", "static");	
		//	}
		//}

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
