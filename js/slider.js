$(document).ready(function() {
	$('.slider-wrapper .product').each(function (index, value){
		var sync1 = $(this).find(".slider-for");
		var sync2 = $(this).find(".slider-nav");
		var slidesPerPage = 4;
		var syncedSecondary = true;

		sync1.owlCarousel({
			items: 1,
			slideSpeed: 2000,
			nav: true,
			autoplay: false, 
			dots: true,
			loop: true,
			responsiveRefreshRate: 200,
		}).on('changed.owl.carousel', syncPosition);

		sync2
			.on('initialized.owl.carousel', function() {
				sync2.find(".owl-item").eq(0).addClass("current");
			})
			.owlCarousel({
				items: slidesPerPage,
				dots: false,
				nav: false,
				autoWidth:true,
				smartSpeed: 200,
				slideSpeed: 500,
				slideBy: slidesPerPage,
				responsiveRefreshRate: 100
			}).on('changed.owl.carousel', syncPosition2);

		function syncPosition(el) {
			var count = el.item.count - 1;
			var current = Math.round(el.item.index - (el.item.count / 2) - .5);

			if (current < 0) {
				current = count;
			}
			if (current > count) {
				current = 0;
			}
			
			sync2
				.find(".owl-item")
				.removeClass("current")
				.eq(current)
				.addClass("current");
			var onscreen = sync2.find('.owl-item.active').length - 1;
			var start = sync2.find('.owl-item.active').first().index();
			var end = sync2.find('.owl-item.active').last().index();

			if (current > end) {
				sync2.data('owl.carousel').to(current, 100, true);
			}
			if (current < start) {
				sync2.data('owl.carousel').to(current - onscreen, 100, true);
			}
		}

		function syncPosition2(el) {
			if (syncedSecondary) {
				var number = el.item.index;
				sync1.data('owl.carousel').to(number, 100, true);
			}
		}

		sync2.on("click", ".owl-item", function(e) {
			e.preventDefault();
			var number = $(this).index();
			sync1.data('owl.carousel').to(number, 300, true);
		});
	});
});