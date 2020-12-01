/* jQuery */
$(function() {
	
	// Mask form
	$('input[name="Lead[phone]"]').mask('8 (999) 999 - 99 - 99');
	$('input[name="Lead[age]"]').mask('99');

	// Focus field 
	$('.form__field_age').on('focus', function(){
		$(this).parent('.form__field-wrap').addClass('focus');
	});

	$('.form__field_age').on('focusout', function(){
		$(this).parent('.form__field-wrap').removeClass('focus');
	});

});


// Counter
let $counter = $("[data-counter]");
let $value = $counter.html(); 
let delayId = setTimeout(() => {
	let timerId = setInterval(() => {
		$value -= 1; 
		$counter.html($value)

		if($value == 1) clearInterval(timerId);
	}, 12000);

}, 3000);


// Animation from GSAP
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
tl.from(".top__space", {duration: 2, delay: 1, scale: 0.5, opacity: 0, ease: "elastic"});
tl.from(".top__subtitle", {duration: 0.7, opacity: 0, x: 150, ease: "power1"});
tl.from(".top__title", {duration: 0.7, opacity: 0, x: 150, ease: "power1"});
tl.from(".top__btn-wrap", {duration: 0.7, opacity: 0, scale: 0, ease: "power1"});


gsap.from(".steps__item", {
  scrollTrigger: {
    trigger: ".steps",
		toggleActions: "play none none none",
		start: "top 90%",
	}, 
	duration: 1.4,
	y: 150,
	stagger: 0.3,
  ease: "power3",
});

gsap.from(".cases__item", {
  scrollTrigger: {
		trigger: ".cases",
		toggleActions: "play none none none",
		start: "top 70%",
	}, 
	duration: 2,
	scale: 0,
	opacity: 0,
	stagger: 0.2,
  ease: "elastic",
});

gsap.from(".action-show", {
  scrollTrigger: {
		trigger: ".action",
		toggleActions: "play none none none",
		start: "top 70%",
	}, 
	duration: 2,
	scale: 0.5,
	opacity: 0,
	stagger: 0.2,
  ease: "elastic",
});

gsap.from(".action-show", {
  scrollTrigger: {
		trigger: ".action",
		toggleActions: "play none none none",
		start: "top 70%",
	}, 
	duration: 1.5,
	stagger: 0.3,
  ease: "power3",
});

gsap.from(".action__subtitle", {
  scrollTrigger: {
		trigger: ".action",
		toggleActions: "play none none none",
		start: "top 70%",
	}, 
	delay: 1,
	duration: 3,
	opacity: 0,
  ease: "expo",
});

gsap.from(".action__form", {
  scrollTrigger: {
		trigger: ".action",
		toggleActions: "play none none none",
		start: "top 80%",
	}, 
	delay: 1,
	duration: 2,
	y: 200,
  ease: "expo",
});