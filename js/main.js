$( document ).ready(function() {
	$('#burger-btn').click(function(){
		$(this).toggleClass('open');
		$(".main-menu").slideToggle("fast");
		$("body").toggleClass('fixed');
	});
	$( ".toggle-title" ).each(function() {
		$(this).click(function(){
			$(this).parents(".about__row").toggleClass('toggled');
			$(this).next().slideToggle("fast");
		});
	});

	$( ".our-work__filter-items .our-work__filter-item" ).each(function() {
		$(this).click(function(){
			$(this).toggleClass('active');
		});
	});

	$( ".ionic-tech .ionic-tech__tab-title" ).each(function() {
		$(this).click(function(){
			var dataNum = $(this).attr("data-num");
			$( ".ionic-tech .ionic-tech__tab-title" ).removeClass("active");
			$( ".ionic-tech .ionic-tech__subtitle" ).removeClass("active");
			$( ".ionic-tech .ionic-tech__subtitle[data-num='"+ dataNum + "']").addClass("active");
			$( ".ionic-tech .ionic-tech__title" ).removeClass("active");
			$( ".ionic-tech .ionic-tech__title[data-num='"+ dataNum + "']").addClass("active");
			$( ".ionic-tech .ionic-tech__row-container" ).removeClass("active");
			$( ".ionic-tech .ionic-tech__row-container[data-num='"+ dataNum + "']").addClass("active");
			$(this).addClass("active");
		});
	});

	$( ".discover-process .discover-process__tab" ).each(function() {
		$(this).click(function(){
			var dataNum = $(this).attr("data-num");
			$( ".discover-process .discover-process__tab" ).removeClass("active");
			$( ".discover-process .discover-process__tab-content" ).removeClass("active")
			$( ".discover-process .discover-process__tab[data-num='"+ dataNum + "']").addClass("active");
			$( ".discover-process .discover-process__tab-content[data-num='"+ dataNum + "']").addClass("active");
			$(this).addClass("active");
		});
	});

	$( ".discover-process__tab-content-tab" ).each(function() {
		$(this).click(function(){
			var dataNum = $(this).attr("data-num-sub");
			$( this ).parents(".discover-process__tab-content-tabs").find(".discover-process__tab-content-tab").removeClass("active");
			$( this ).parents(".discover-process__tab-content-tabs").find(".discover-process__tab-content-tab-content").removeClass("active");
			$( this ).parents(".discover-process__tab-content-tabs").find( ".discover-process__tab-content-tab-content[data-num-sub='"+ dataNum + "']").addClass("active");
			$(this).addClass("active");
		});
	});

	$( ".estimate-btn" ).each(function() {
		$(this).click(function(e){
			e.preventDefault();
			$(".request-form").fadeIn();
			$("body").addClass("fixed-form");
		});
	});

	$( ".request-form__close" ).each(function() {
		$(this).click(function(e){
			e.preventDefault();
			$("body").removeClass("fixed-form");
			$(".request-form").fadeOut();
		});
	});

	function processToggle() {
		if ($(window).width() < 991) {
			$(".process-mobile-toggle").each(function() {
				$(this).off("click").on("click", function() {
					$(this).find(".toggle-process-title").toggleClass("open");
					$(this).find(".toggle-process-content").slideToggle("slow");
				});
			});
		} else {
			$(".process-mobile-toggle").off("click");
		}
	}
	processToggle();
	$(window).resize(processToggle);

	$(".file-upload input[type=file]").change(function(){
		var filename = $(this).val().replace(/.*\\/, "");
		$("#filename").text(filename);
	});

	$(document).on('click', 'a[href^="#explore"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 2000);
	});

	const horizontalSections = gsap.utils.toArray('section.horizontal');

	horizontalSections.forEach(function (sec, i) {
	  var thisPinWrap = sec.querySelector('.pin-wrap');
	  var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
	  var rotateElements = thisAnimWrap.querySelectorAll('.anim-circle');

	  var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

	  gsap.fromTo(thisAnimWrap, {
	    x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()
	  }, {
	    x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
	    ease: "none",
	    scrollTrigger: {
	      trigger: sec,
	      start: "top top",
	      end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
	      pin: thisPinWrap,
	      invalidateOnRefresh: true,
	      scrub: true,
	      //markers: true,
	      onUpdate: function (scrollTrigger) {
	        // Calculate the rotation based on the scroll progress
	        var progress = scrollTrigger.progress; // Get the progress of the scroll animation (0 to 1)
	        var rotationValue = progress * 360; // Map the progress to a rotation value (0 to 360)

	        // Apply the rotation to the rotate-element
	        rotateElements.forEach(function (element) {
	          element.style.transform = `rotate(${rotationValue}deg)`;
	        });
	      }
	    }
	  });
	});

	var swiperPartners = new Swiper(".partners-slider", {
	slidesPerView: 9,
	autoplay: {
		delay: 2000,
	},
	grid: {
		rows: 1,
	},
	spaceBetween: 32,
	breakpoints: {
			300: {
				grid: {
					rows: 2,
				},
				slidesPerView: 2,
				spaceBetween: 32,
			},
			575: {
				grid: {
					rows: 2,
				},
				slidesPerView: 3,
				spaceBetween: 80,
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 5,
				grid: {
					rows: 1,
				},
				spaceBetween: 24,
			},
			// when window width is >= 640px
			991: {
				slidesPerView: 6,
				grid: {
					rows: 1,
				},
				spaceBetween: 30,
			},
			1200: {
				grid: {
					rows: 1,
				},
				slidesPerView: 9,
				spaceBetween: 32,
			}
		}
	});

	var swiperReviews = new Swiper(".reviews__slider", {
		slidesPerView: 1,
		spaceBetween: 32,
		loop: true,
		navigation: {
		 nextEl: '.reviews-next',
		 prevEl: '.reviews-prev',
		},
	});

	var swiperIonic = new Swiper(".ionic-tech__slider", {
		slidesPerView: 3,
		spaceBetween: 16,
		breakpoints: {
			300: {
				slidesPerView: 1.5,
				spaceBetween: 16,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 16,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 16,
			}
		}
	});
	
	AOS.init();
	$(document).click(function(){
		AOS.refresh();
	});
	Fancybox.bind("[data-fancybox]", {});
});