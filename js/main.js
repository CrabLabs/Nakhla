(function ($) {
	"use strict";
	
	$(document).on("ready", function () {
		var bgImgs = ["img/bg/img_1.jpg", "img/bg/img_2.jpg", "img/bg/img_3.jpg"];
		$("#home").css("background-image", "url(" + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ")");
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

	var win = $(window),
	    doc = $(document),
	    bodyH = doc.height() - win.height(),
	    three = $('#three');

	win.scrollTop(bodyH);

	$("#history").on('DOMMouseScroll mousewheel', function(e, delta) {
	    delta = delta || -e.originalEvent.detail / 3 || e.originalEvent.wheelDelta / 120;

	    if(delta < 0) {
	        if(win.scrollLeft() > three.offset().right && win.scrollTop() !== 0) {
	            win.scrollTop(win.scrollTop() + delta * 30);
	        } else {
	            win.scrollLeft(win.scrollLeft() - delta * 30);
	        }
	    } else {
	        if(win.scrollLeft() < three.offset().right && (win.scrollTop() > 0 || win.scrollTop() === 0) && win.scrollTop() !== bodyH) {
	            win.scrollTop(win.scrollTop() + delta * 30);
	        } else {
	            win.scrollLeft(win.scrollLeft() - delta * 30);
	        }
	    }

	    e.preventDefault();
	});

}(jQuery));


