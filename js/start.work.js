 function validateEmail(email) { 
    var reg = /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,6}$/;
    return reg.test(email);
 }
 function validatePhone(phone) {
    var reg = /^\d[\d() -]{4,14}\d$/;	//Только цифры, пробелы, дефисы от 4 до 14
    return reg.test(phone);
 }
 function validateName(name){
    var reg = /^[a-zA-ZА-Яа-яЁё ]{3,40}$/;	//только буквы от 3 до 40
    return reg.test(name);
 }

 $(document).ready(function() {
    $("#contact").submit(function() { return false; });//TODO interesting
    $("#send").on("click", function(){
        const workplval = document.getElementById('workplace').value;
        const nameval = document.getElementById('forename').value;
        const emailval = document.getElementById('email').value;
        const phoneval = document.getElementById('phone').value;
        const msgval = document.getElementById('msg').value;
        const comvar = document.getElementById('company').value;

        const check = document.getElementById('Name').value;
        const checkLength = check.length;

        const mailvalid = validateEmail(emailval);
        const phonevalid = validatePhone(phoneval);
        const namevalid = validateName(nameval);

        if(mailvalid === true && phonevalid === true && namevalid === true && checkLength === 0) {
            console.log("Имя: ", nameval);
            console.log("Телефон: ", phoneval);
            console.log("E-mail: ", emailval);
            const resultMsg = "Число рабочих мест: " + workplval + ". Компания: " + comvar + ". " + "Сообщение: " + msgval;
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