(function ($) {
	"use strict";
	$(document).on("ready", function () {
		$(".nav_btn").on("click", function (e) {
			e.preventDefault();
			$(".nav").toggleClass('visible');
			$('.nav_btn').toggleClass('giro');
		});
	});
}(jQuery));
