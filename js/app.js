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
    },2000)
    document.body.style.position = 'static';
    init();
}

// save for later
const hello = document.querySelectorAll("#title-small path");
for (let i = 0; i<hello.length; i++){
    console.log(`Letter ${i} id ${hello[i].getTotalLength()}`); 
}

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

// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('#menu-center a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('#menu-center ul li a').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
// }

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

