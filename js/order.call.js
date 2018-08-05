$(document).ready(function() {
    $("#order-call").on("submit", function(){
        const nameval = document.getElementById('input1').value;
        const compval = document.getElementById('input2').value;
        const emailval = document.getElementById('input2').value;
        const phoneval = document.getElementById('input3').value;
        const themeval = document.getElementById('input4').value;
        const timeval = document.getElementById('textarea1').value;

		console.log("Имя: ", nameval);
		console.log("Телефон: ", phoneval);
		console.log("E-mail: ", emailval);
        const msgval = "Название компании: " + compval + ". " + "Тема: " + themeval + ". " + "Удобное время: " + timeval;
        console.log(msgval);

		$.ajax({
				url: 'http://www.company.su/ajax.html',
				data: {
					name: nameval,
					phone: phoneval,
					email: emailval,
					msg: msgval
				},
				dataType: 'jsonp',
				jsonp : 'callback',
				headers: {'X-Requested-With': 'XMLHttpRequest'},
				timeout: 5000,
				crossDomain: true,
			}).done(function(response){
				console.log("Done");
				//console.log(response);

			}).fail(function(error){
				console.log("Fail");
				//console.log(error.statusText);
			});

        $("#order-call-button").replaceWith("<em>Сообщение отправлено</em>");// скрывается кнопка отправки
        return false;
	});
 });