(function ($) {
	"use strict";
	var windowHeight,
		bgImgs;

	$(document).on("scroll", function (event) {
		var scrollTop = $(document).scrollTop(),
			scrollMod = scrollTop / ($(document).height() - 40) * 6;

		$(".category ul li").each(function (index) {
			if (index === Math.floor(scrollMod)) {
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
		});
	});

	$("#menu_mob").on("click", function (e) {
		e.preventDefault();
		$('.nav').toggleClass('visible');
	});
	$("#btn-history").on("click", function (e) {
		e.preventDefault();
		$('.txt-history').toggleClass('visible');
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
				}, 400);

				// return false;
			}
		}
	});
}(jQuery));
