$(document).ready(function() {
	$("#CntctFrm0-t2usubmit").on("click", function(){

        const nameval = document.getElementById('CntctFrm0-t2unameField').value;
        const emailval = document.getElementById('CntctFrm0-t2uemailField').value;
        const phoneval = document.getElementById('CntctFrm0-t2uphoneField').value;
        const themeval = document.getElementById('CntctFrm0-t2usubjectField').value;
        const timeval = document.getElementById('CntctFrm0-t2umessageField').value;
        const compval = document.getElementById('CntctFrm0-t2ucompanyField').value;

        const check = document.getElementById('CntctFrm0-t2usubjectField1').value;
        const checkLength = check.length;

        const mailvalid = validateEmail(emailval);
        const phonevalid = validatePhone(phoneval);
        const namevalid = validateName(nameval);

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