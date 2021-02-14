$(function(){
	$(".navbar a, footer a").on("click", function(event){
		event.preventDefault();
		var hash = this.hash;
		$('body,html').animate({scrollTop: $(hash).offset().top}, 900, function(){window.location.hash = hash;})
	});
	$('#myNavbar a, footer span').on("click", function(){
		$('#myNavbar').collapse('hide');
	});

	$(".typed").typed({
		strings: ["Entrepreneur ", "Développeur Web Junior ", "Elève ingénieur informatique "],
		typeSpeed: 50,
		//startDelay: 1000, //Delai de debut de saisie
		//backSpeed: 100, //Delai de suppression de caractere
		backDelay: 1000, //Delai d'arret
		loop: true,
    });

    $('#contact-form').submit(function(e){
		e.preventDefault();
		$('.comments').empty();
		var postdata = $('#contact-form').serialize();

		$.ajax({
			type: 'POST',
			url: 'php/contact.php',
			data: postdata,
			dataType: 'json',
			success: function(result){
				if (result.isSuccess) {
					$("#contact-form").append("<p class='thank-you' >Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
					$("#contact-form")[0].reset();
				}
				else{
					$("#firstname + .comments").html(result.firstnameError);
					$("#name + .comments").html(result.nameError);
					$("#email + .comments").html(result.emailError);
					$("#phone + .comments").html(result.phoneError);
					$("#subject + .comments").html(result.subjectError);
					$("#message + .comments").html(result.messageError);

				}
			}
		});
	});
});


