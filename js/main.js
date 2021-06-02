const nextIcon = '<img class="arrows" src="./images/right-arrow.svg" alt="right">';
const prevIcon = '<img class="arrows" src="./images/left-arrow.svg" alt="left" >';

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  margin:10,
  nav: true,
  navText: [
  prevIcon,
  nextIcon
],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

$(document).ready(function(){
    $(this).scrollTop(0);
});

//fade in on scroll for comeright1
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".comeright1");

for (var i = 0; i < tags.length; i++) {
var comeright1 = tags[i];

if ($(comeright1).position().top < pageBottom) {
$(comeright1).addClass("visible");
} else {
$(comeright1).removeClass("visible");
}
}
});

//fade in on scroll for comeright2
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".comeright2");

for (var i = 0; i < tags.length; i++) {
var comeright2 = tags[i];

if ($(comeright2).position().top < pageBottom) {
$(comeright2).addClass("visible");
} else {
$(comeright2).removeClass("visible");
}
}
});



//fade in on scroll for comeright3
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".comeright3");

for (var i = 0; i < tags.length; i++) {
var comeright3 = tags[i];

if ($(comeright3).position().top < pageBottom) {
$(comeright3).addClass("visible");
} else {
$(comeright3).removeClass("visible");
}
}
});

//fade in on scroll for topin
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".topin");

for (var i = 0; i < tags.length; i++) {
var topin = tags[i];

if ($(topin).position().top < pageBottom) {
$(topin).addClass("visible");
} else {
$(topin).removeClass("visible");
}
}
});

//fade in on scroll for comeup
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".comeup");

for (var i = 0; i < tags.length; i++) {
var comeup = tags[i];

if ($(comeup).position().top < pageBottom) {
$(comeup).addClass("visible");
} else {
$(comeup).removeClass("visible");
}
}
});

//fade in on scroll for worksDown
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".worksDown");

for (var i = 0; i < tags.length; i++) {
var worksDown = tags[i];

if ($(worksDown).position().top < pageBottom) {
$(worksDown).addClass("visible");
} else {
$(worksDown).removeClass("visible");
}
}
});

//fade in on scroll for worksUp
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".worksUp");

for (var i = 0; i < tags.length; i++) {
var worksUp = tags[i];

if ($(worksUp).position().top < pageBottom) {
$(worksUp).addClass("visible");
} else {
$(worksUp).removeClass("visible");
}
}
});

//fade in on scroll for comeleft
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".comeleft");

for (var i = 0; i < tags.length; i++) {
var comeleft = tags[i];

if ($(comeleft).position().top < pageBottom) {
$(comeleft).addClass("visible");
} else {
$(comeleft).removeClass("visible");
}
}
});

//fade in on scroll for timeDown
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".timeDown");

for (var i = 0; i < tags.length; i++) {
var timeDown = tags[i];

if ($(timeDown).position().top < pageBottom) {
$(timeDown).addClass("visible");
} else {
$(timeDown).removeClass("visible");
}
}
});

//fade in on scroll for fadin
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".fadin");

for (var i = 0; i < tags.length; i++) {
var fadin = tags[i];

if ($(fadin).position().top < pageBottom) {
$(fadin).addClass("visible");
} else {
$(fadin).removeClass("visible");
}
}
});

//fade in on scroll for conUp
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".conUp");

for (var i = 0; i < tags.length; i++) {
var conUp = tags[i];

if ($(conUp).position().top < pageBottom) {
$(conUp).addClass("visible");
} else {
$(conUp).removeClass("visible");
}
}
});

//fade in on scroll for conUp2
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".conUp2");

for (var i = 0; i < tags.length; i++) {
var conUp2 = tags[i];

if ($(conUp2).position().top < pageBottom) {
$(conUp2).addClass("visible");
} else {
$(conUp2).removeClass("visible");
}
}
});

//fade in on scroll for conUp3
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".conUp3");

for (var i = 0; i < tags.length; i++) {
var conUp3 = tags[i];

if ($(conUp3).position().top < pageBottom) {
$(conUp3).addClass("visible");
} else {
$(conUp3).removeClass("visible");
}
}
});

//fade in on scroll for conUp4
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".conUp4");

for (var i = 0; i < tags.length; i++) {
var conUp4 = tags[i];

if ($(conUp4).position().top < pageBottom) {
$(conUp4).addClass("visible");
} else {
$(conUp4).removeClass("visible");
}
}
});

//fade in on scroll for conUp5
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".conUp5");

for (var i = 0; i < tags.length; i++) {
var conUp5 = tags[i];

if ($(conUp5).position().top < pageBottom) {
$(conUp5).addClass("visible");
} else {
$(conUp5).removeClass("visible");
}
}
});

//Timeline
//fade in on scroll for comeinrightproj
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".comeinrightproj");

for (var i = 0; i < tags.length; i++) {
var comeinrightproj = tags[i];

if ($(comeinrightproj).position().top < pageBottom) {
$(comeinrightproj).addClass("visible");
} else {
$(comeinrightproj).removeClass("visible");
}
}
});

//fade in on scroll for comeinleftproj
$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".comeinleftproj");

for (var i = 0; i < tags.length; i++) {
var comeinleftproj = tags[i];

if ($(comeinleftproj).position().top < pageBottom) {
$(comeinleftproj).addClass("visible");
} else {
$(comeinleftproj).removeClass("visible");
}
}
});


/*Hover*/


