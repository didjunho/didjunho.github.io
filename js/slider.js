var slider = function (sliderElement) {

	var pages = [];
	var currentSlide = 1;

	var init = function () {
		// set up page and build visual indicators
		var indicatorContainer = document.createElement('div');
		indicatorContainer.classList.add('slider__indicators');

		var index = 1;

		[].forEach.call(document.querySelectorAll(sliderElement + ' > *'), function (section) {
			var indicator = document.createElement('a');
			indicator.classList.add('slider__indicator')
			indicator.setAttribute('data-slider-target-index', index);
			indicatorContainer.appendChild(indicator);
			index++;
		});

		document.body.appendChild(indicatorContainer);
		document.querySelector('a[data-slider-target-index = "' + currentSlide +'"]').classList.add('slider__indicator--active');

	};

	// we have lift off
	if (document.readyState === 'complete') {
		init();
	} else {
		window.addEventListener('onload', init(), false);
	}

	window.onscroll = function() {myFunction()};

	function myFunction() {
	  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	  var scrolled = (winScroll / height) * 100;
	  var currentSlide = 1;
	  if (scrolled < 10) {
			currentSlide = 1;
	  }
	  else if (scrolled >= 10 && scrolled < 27) {
		  currentSlide = 2;
	  }
	  else if (scrolled >= 27 && scrolled < 55) {
			currentSlide = 3;
	  }
	  else if (scrolled >= 55 && scrolled < 90) {
			currentSlide = 4;
	  }
	  else if (scrolled >= 90 && scrolled < 95){
		  currentSlide = 5;
	  }
	  else {
	  	currentSlide = 6;
	  }
	  document.querySelector('a.slider__indicator--active').classList.remove('slider__indicator--active');
	  document.querySelector('a[data-slider-target-index="' + currentSlide +'"]').classList.add('slider__indicator--active');
	}
};
