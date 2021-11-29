//*** timer ***

let showTime;

function startTimer(duration, display) {
    let timer = duration;
    let minutes;
    let seconds;

    showTime = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            clearInterval(showTime);
        }

    }, 1000);
}

//*** date ***

const dateNow = document.querySelector("#date-now");

function date(show) {
    const date = new Date();

    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    let Y = date.getFullYear();
    let M = month[date.getMonth()];
    let D = date.getDate();

    return show.textContent = `${M} ${D}, ${Y}`;
}

window.onload = function () {
    let tenMinutes = 60 * 10;
    let display = document.querySelector("#time");
    startTimer(tenMinutes, display);

    date(dateNow)
};


//*** yakar-link ***

$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    let anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 40
    }, 50);
});


//*** paralax eff ***

$(window).on('scroll', function () {
    let top = $(this).scrollTop()
    parallax(top)
})

function parallax(top) {

    if (top <= 1000) {
        $('.paralax__elem').css(
            'transform', 'translateY(' + (top / -4) + 'px)'
        );
    }
}

//*** owl carousel ***

// _____slide-line_____
$(document).ready(function () {
    let owl = $(".slide-line");

    owl.on('initialized.owl.carousel', function() {
        setTimeout(function(){
            owl.trigger('next.owl.carousel', [19900])
        },100);
    });

    owl.owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        autoplay: true,
        rewind: false,
        autoWidth: true,
        slideTransition: "linear",
        autoplayTimeout: 20000,
        autoplaySpeed: 20000,
    });
})

//______quotes-owl_____
$('.quotes-owl').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout: 6000,
    autoplaySpeed: 2000,
})

