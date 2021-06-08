// Intro - 0
// About - 40
// Education - 240
// Contact - 440

window.onload = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    setTimeout(function (){
        document.getElementById('loader').classList.add('slide');
        document.getElementById('slider').classList.add('backward');
    }, 500);
    setTimeout(function(){
        document.getElementById('menu-bar').classList.add('slide');
        document.getElementById('social-media').classList.add('slide');
        document.getElementById('up-arrow').classList.add('slide');
        document.getElementById('sub-heading').classList.add('slide');
    },4000)
    document.body.style.position = 'static';
    init();

    // Typewriter
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
}

// save for later
// const hello = document.querySelectorAll("#title-small path");
// for (let i = 0; i<hello.length; i++){
//     console.log(`Letter ${i} id ${hello[i].getTotalLength()}`); 
// }

const controller = new ScrollMagic.Controller();
const holdStars = new ScrollMagic.Scene({
    duration: 900,
    triggerHook: 0,
    reverse: true,
    offset: 0.1,
}).addIndicators({
    colorEnd: "#ffffff",
})
.setPin("#content", {pushFollowers: false})
.on('enter', function (e) {
    if(e.scrollDirection == "REVERSE") {
        document.getElementById('slider').classList.remove('fix');
    }
})
.on('leave', function (e) {
    if (e.scrollDirection == "FORWARD"){
        document.getElementById('slider').classList.add('fix');
    }
})
.addTo(controller);

const sliderScene = new ScrollMagic.Scene({
    duration: 200,
    triggerHook: 0,
    reverse: true,
    offset: 30,
})
.on('enter', function (e) {
    if (e.scrollDirection == "FORWARD"){
        document.getElementById('slider').classList.remove('backward', 'getintoleftBackward', 'getintoleft');
        document.getElementById('slider').classList.add('forward');
        document.getElementById('text-box').classList.add('slide');
        document.getElementById('up-arrow').classList.remove('slide');
        addRemoveAboutSlide(true);
    } else if(e.scrollDirection == "REVERSE") {
        document.getElementById('slider').classList.remove('getintoleft');
        document.getElementById('slider').classList.add('getintoleftBackward');
        addRemoveAboutSlide(true);
    }
})
.on('leave', function (e) {
    if (e.scrollDirection == "FORWARD"){
        document.getElementById('slider').classList.remove('getintoleftBackward');
        document.getElementById('slider').classList.add('getintoleft');
        addRemoveAboutSlide(false);
    } else if(e.scrollDirection == "REVERSE") {
        document.getElementById('slider').classList.remove('forward', 'getintoleftBackward', 'getintoleft');
        document.getElementById('slider').classList.add('backward');
        document.getElementById('text-box').classList.remove('slide');
        document.getElementById('up-arrow').classList.add('slide');
        addRemoveAboutSlide(false);
    }
})
.addIndicators({
    colorEnd: "#ffffff",
})
.addTo(controller);

const educationSection = new ScrollMagic.Scene({
    duration: 200,
    triggerHook: 0,
    reverse: true,
    offset: 270,
})
.on('enter', function (e) {
    if (e.scrollDirection == "FORWARD"){
        addRemoveEducationSlide(true);
    } else if(e.scrollDirection == "REVERSE") {
    }
})
.on('leave', function (e) {
    if (e.scrollDirection == "FORWARD"){
    } else if(e.scrollDirection == "REVERSE") {
        addRemoveEducationSlide(false);
    }
})
.addIndicators({
    colorEnd: "#ffffff",
})
.addTo(controller);




// collapsible menu
document.getElementById('menu-icon').addEventListener("click", function () {
    document.getElementById('nav-icon3').classList.toggle('open');
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = '75%';
      console.log(content.scrollHeight);
    }
});

//menu highlight
function clearActive() {
    document.getElementById('intro-icon').classList.remove('active');
    document.getElementById('about-icon').classList.remove('active');
    document.getElementById('portfolio-icon').classList.remove('active');
    document.getElementById('contact-icon').classList.remove('active');
}
document.getElementById('intro-icon-a').addEventListener('click',function(){
    clearActive();
    document.getElementById('intro-icon').classList.add('active');
});
document.getElementById('about-icon-a').addEventListener('click',function(){
    clearActive();
    document.getElementById('about-icon').classList.add('active');
});
document.getElementById('portfolio-icon-a').addEventListener('click',function(){
    clearActive();
    document.getElementById('portfolio-icon').classList.add('active');
});
document.getElementById('contact-icon-a').addEventListener('click',function(){
    clearActive();
    document.getElementById('contact-icon').classList.add('active');
});

function addRemoveAboutSlide(add) {
    if (add) {
        document.getElementById('about-me').classList.add('slide');
        document.getElementById('profile-img').classList.add('slide');
        document.getElementById('about-quote').classList.add('slide');
        document.getElementById('about-content-container').classList.add('slide');
    } else {
        document.getElementById('about-me').classList.remove('slide');
        document.getElementById('profile-img').classList.remove('slide');
        document.getElementById('about-quote').classList.remove('slide');
        document.getElementById('about-content-container').classList.remove('slide');
    }
}

function addRemoveEducationSlide(add) {
    if (add) {
        document.getElementById('education-title').classList.add('slide');
    } else {
        document.getElementById('education-title').classList.remove('slide');
    }
}


// Typewrite
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

// window.onload = function() {
    
// };