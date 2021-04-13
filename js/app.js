window.onload = function() {
    
    document.getElementById('loader').style.display = 'none';
    document.body.style.position = 'static';
    init();
    document.getElementById('content').style.display = 'block';
    setTimeout(sliderInit, 1500);
}
function sliderInit(){
    document.getElementById('slider').classList.add('backward');
    console.log("inside Slider init")

}

// const hello = document.querySelectorAll("#hello-outline path");
// for (let i = 0; i<hello.length; i++){
//     console.log(`Letter ${i} id ${hello[i].getTotalLength()}`); 
// }

const controller = new ScrollMagic.Controller();
const holdStars = new ScrollMagic.Scene({
    duration: 500,
    triggerHook: 0,
    reverse: true,
    offset: 0.1,
}).addIndicators()
.setPin("#intro", {pushFollowers: false})
.addTo(controller);

const sliderScene = new ScrollMagic.Scene({
    duration: 200,
    triggerHook: 0,
    reverse: true,
    offset: 20,
})
.on('enter', function (e) {
    if (e.scrollDirection == "FORWARD"){
        document.getElementById('slider').classList.remove('backward');
        document.getElementById('slider').classList.add('forward');
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
    }
})
.addIndicators()
.addTo(controller);

