 $(document).ready(function() {
    $("#contact").on("submit", function(){
        const workplval = document.getElementById('workplace').value;
        const nameval = document.getElementById('forename').value;
        const emailval = document.getElementById('email').value;
        const phoneval = document.getElementById('phone').value;
        const msgval = document.getElementById('msg').value;
        const comvar = document.getElementById('company').value;

        console.log("Имя: ", nameval);
        console.log("Телефон: ", phoneval);
        console.log("E-mail: ", emailval);
        const resultMsg = "Число рабочих мест: " + workplval + ". Компания: " + comvar + ". " + "Сообщение: " + msgval;
        console.log(resultMsg);

        $.ajax({
            url: 'http://www.company.su/ajax.html',
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

        return false;
    });
 });