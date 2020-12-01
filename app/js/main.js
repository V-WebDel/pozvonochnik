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

/* Javascript */

// Этот медиа-запрос нацелен на области просмотра, которые имеют минимальную ширину 320 пикселей
const mQuery = window.matchMedia('(min-width: 540px)')

function handleMobilePhoneResize(e) {   
   // Проверяем, верен ли медиа-запрос
	if (e.matches) {     
		// Затем выводим в консоль следующее сообщение
		console.log('Media Query Matched!')   
	} 
} 

// Настраиваем слушателя событий
mQuery.addListener(handleMobilePhoneResize)