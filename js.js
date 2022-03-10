// Initialize affix and add an offset to add affix class on scroll
$('#mainNav').affix({
    offset: {
        top: 100
    }
});

$('.logo_menubar').affix({
    offset: {
        top: 100
    }
});

$('.navbar-default .navbar-nav>li>a').affix({
    offset: {
        top: 100
    }
});


$("#kyoto").animatedModal();


$(function () {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


// anchor point


// typing carousel

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 500;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #ffffff }";
    document.body.appendChild(css);
};







// scrollReveal
window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'top'
});
sr.reveal('.mig', {
    duration: 2000,
    origin: 'top',
    distance: '300px',
    viewFactor: 0.30
});

sr.reveal('.skrivebord2', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px',
    viewFactor: 0.9
});

sr.reveal('.hojre_om', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.30
});

sr.reveal('.diagram_overblik', {
    duration: 2000,
    origin: 'bottom',
    viewFactor: 0.5
});

sr.reveal('.raekke_1', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.99
});

sr.reveal('.raekke_2', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.99,
    delay: 1500
});



sr.reveal('#Kontakt div', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px',
    viewFactor: 0.1,
});
