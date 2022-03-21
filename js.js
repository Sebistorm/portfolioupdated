

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



// projects

fetch("json/projects.json")
.then(Response => Response.json())
.then(projects =>{
    console.log(projects);
    // div containers
    const mmd_projects = document.getElementById("mmd_projects");
    console.log(mmd_projects)

    // loop igennem projekter
    projects.forEach(project => {
        console.log(project);
        const projectHtml =  
        `<div class="project w-30">
            <a href="${project.url}" class="w-100">
                <div class="col-12">
                    <img src="${project.thumbnail}" alt="${project.title}" class="col-12">
                    <h3 class="text-center titel_portfolio"> ${project.title}</h3>
                </div>
            </a>
        </div>`;
        //console.log(projectHtml);
        
        switch (project.education) {
            case "mmd":
                console.log("hej")
                //mmd_projects.append(projectHtml);
                mmd_projects.insertAdjacentHTML("beforeend",projectHtml )

        }
             

    });
})




