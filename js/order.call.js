$(document).ready(function() {
	$("#CntctFrm0-t2usubmit").on("click", function(){

		var nameval = document.getElementById('CntctFrm0-t2unameField').value;
		var emailval = document.getElementById('CntctFrm0-t2uemailField').value;
		var phoneval = document.getElementById('CntctFrm0-t2uphoneField').value;
		var themeval = document.getElementById('CntctFrm0-t2usubjectField').value;
		var timeval = document.getElementById('CntctFrm0-t2umessageField').value;
		var compval = document.getElementById('CntctFrm0-t2ucompanyField').value;

		var check = document.getElementById('CntctFrm0-t2usubjectField1').value;
		var checkLength = check.length;

		var mailvalid = validateEmail(emailval);
		var phonevalid = validatePhone(phoneval);
		var namevalid = validateName(nameval);

		if(namevalid === false) {
			$("#CntctFrm0-t2unameField").addClass("error");
			$("#correct_name").css('display', 'inline');
		} else {
			$("#CntctFrm0-t2unameField").removeClass("error");
			$("#correct_name").css('display', 'none');
		}

		if(phonevalid === false) {
			$("#CntctFrm0-t2uphoneField").addClass("error");
			$("#correct_phone").css('display', 'inline');
		} else {
			$("#CntctFrm0-t2uphoneField").removeClass("error");
			$("#correct_phone").css('display', 'none');
		}

		if(mailvalid === false) {
			$("#CntctFrm0-t2uemailField").addClass("error");
			$("#correct_email").css('display', 'inline');
		} else {
			$("#CntctFrm0-t2uemailField").removeClass("error");
			$("#correct_email").css('display', 'none');
		}


		if(mailvalid === true && phonevalid === true && namevalid === true && checkLength === 0) {
			console.log("Имя: ", nameval);
			console.log("Телефон: ", phoneval);
			console.log("E-mail: ", emailval);
			var msgval = "Название компании: " + compval + ". " + "Тема: " + themeval + ". " + "Удобное время: " + timeval;
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

			$("#send_text").css('display', 'inline');
			$("#CntctFrm0-t2usubmit").replaceWith($("#send_text"));
		}
	});
 });