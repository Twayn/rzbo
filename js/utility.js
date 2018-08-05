<!-- Плавный скрол при переходе к якорям-->
$(document).ready(function() {
    $('a[href^="#"]').click(function(){
        var anchor = $(this);
        var name = anchor.attr("href").replace(new RegExp("#", "gi"), "");
        $('html, body').stop().animate({
            scrollTop: $("a[name=" + name + "]").offset().top
        }, 500);
        return false;
    });
});

<!--Плавная прокрутка наверх-->
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 400);
    });
});

<!-- Смена поля select в списке формы отправки сообщения-->
$(document).ready(function() {
    $("#grant-access").on("click", function () {
        document.getElementById('workplace').options[0].selected = true;
    });
    $("#start-work0").on("click", function () {
        document.getElementById('workplace').options[1].selected = true;
    });
    $("#start-work1").on("click", function () {
        document.getElementById('workplace').options[2].selected = true;
    });
});