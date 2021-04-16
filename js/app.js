window.onload = function() {
    setTimeout(function (){
        document.getElementById('loader').classList.add('slide');
        document.getElementById('slider').classList.add('backward');
    }, 500);
    setTimeout(function(){
        document.getElementById('menu-bar').classList.add('slide');
        document.getElementById('social-media').classList.add('slide');
        document.getElementById('up-arrow').classList.add('slide');
    },2000)
    document.body.style.position = 'static';
    init();
}

// save for later
// const hello = document.querySelectorAll("#hello-outline path");
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
.setPin("#intro", {pushFollowers: false})
.addTo(controller);

const sliderScene = new ScrollMagic.Scene({
    duration: 100,
    triggerHook: 0,
    reverse: true,
    offset: 50,
})
.on('enter', function (e) {
    if (e.scrollDirection == "FORWARD"){
        document.getElementById('slider').classList.remove('backward');
        document.getElementById('slider').classList.add('forward');
        document.getElementById('text-box').classList.add('slide');
        document.getElementById('up-arrow').classList.remove('slide');
    } else if(e.scrollDirection == "REVERSE") {
        document.getElementById('slider').style.width = '90%';
    }
})
.on('leave', function (e) {
    if (e.scrollDirection == "FORWARD"){
        document.getElementById('slider').style.width = '90%';
    } else if(e.scrollDirection == "REVERSE") {
        document.getElementById('slider').classList.remove('forward');
        document.getElementById('slider').classList.add('backward');
        document.getElementById('text-box').classList.remove('slide');
        document.getElementById('up-arrow').classList.add('slide');
    }
})
.addIndicators({
    colorEnd: "#ffffff",
})
.addTo(controller);


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