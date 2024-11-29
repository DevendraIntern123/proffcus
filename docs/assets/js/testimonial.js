$(document).ready(function () {
	$(".testimonial-carousel").owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		nav: true,
		navText: ["<div class='arrow-left'></div>", "<div class='arrow-right'></div>"],
		onInitialized: function () {
			var items = $(".owl-item");
			items.css("opacity", 0);
			items.each(function (i, el) {
				$(el).animate({ opacity: 1 }, 600 * i);
			});
		},
		onTranslated: function () {
			var items = $(".owl-item");
			items.each(function (i, el) {
				$(el).animate({ opacity: 1 }, 600 * i);
			});
		},
	});
});