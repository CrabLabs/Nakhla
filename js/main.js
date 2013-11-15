(function ($) {
	"use strict";
	var windowHeight,
		bgImgs;

	$(document).on("ready", function () {
		bgImgs = ["img/bg/01.jpg", "img/bg/02.jpg", "img/bg/04.jpg", "img/bg/05.jpg"];
		$("#home").css("background-image", "url(" + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ")");
	});

	$(document).on("scroll", function (event) {
		var scrollTop = $(document).scrollTop(),
			scrollMod = scrollTop / ($(document).height() - 140) * 4;

		$(".nav ul li").each(function (index) {
			if (index === Math.floor(scrollMod)) {
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
		});

		if (scrollTop > 300) {
			$("#logo").addClass("hide");
		} else {
			$("#logo").removeClass("hide");
		}

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
