 function validateEmail(email) { 
    var reg = /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,6}$/;
    return reg.test(email);
 }
 function validatePhone(phone) {
    var reg = /^\d[\d\(\)\ -]{4,14}\d$/;	//Только цифры, пробелы, дефисы от 4 до 14
    return reg.test(phone);
 }
 function validateName(name){
    var reg = /^[a-z A-Z А-Я а-я Ёё]{3,40}$/;	//только буквы от 3 до 40
    return reg.test(name);
 }


 $(document).ready(function() {
    $("#contact").submit(function() { return false; });//TODO interesting

    $("#send").on("click", function(){

        var workplval = document.getElementById('workplace').value;
        var nameval = document.getElementById('forename').value;
        var emailval  = document.getElementById('email').value;
        var phoneval = document.getElementById('phone').value;
        var msgval    = document.getElementById('msg').value;
        var comvar = document.getElementById('company').value;

        var check = document.getElementById('Name').value;
        var checkLength = check.length;

        var mailvalid = validateEmail(emailval);
        var phonevalid = validatePhone(phoneval);
        var namevalid = validateName(nameval);


        if(namevalid === false) {
            $("#forename").addClass("error");
            $("#corr_name").css('display', 'inline');
        } else {
            $("#forename").removeClass("error");
            $("#corr_name").css('display', 'none');
        }


        if(phonevalid === false) {
            $("#phone").addClass("error");
            $("#corr_phone").css('display', 'inline');
        } else {
            $("#phone").removeClass("error");
            $("#corr_phone").css('display', 'none');
        }

        if(mailvalid === false) {
            $("#email").addClass("error");
            $("#corr_email").css('display', 'inline');
        } else {
            $("#email").removeClass("error");
            $("#corr_email").css('display', 'none');
        }

        if(mailvalid === true && phonevalid === true && namevalid === true && checkLength === 0) {
            console.log("Имя: ", nameval);
            console.log("Телефон: ", phoneval);
            console.log("E-mail: ", emailval);
            var resultMsg = "Число рабочих мест: " + workplval + ". Компания: " + comvar + ". " + "Сообщение: " + msgval;
            console.log(resultMsg);

                $.ajax({
                    url: 'http://www.asgor.su/ajax.html',
                    data: {
                        name: nameval,
                        phone: phoneval,
                        email: emailval,
                        msg: resultMsg
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

                $("#send").replaceWith("<em>Сообщение отправлено</em>");// скрывается кнопка отправки
        }
    });
 });