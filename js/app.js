window.onload = function() {
    
    document.getElementById('loader').style.display = 'none';
    document.body.style.position = 'static';
    init();
    document.getElementById('content').style.display = 'block';
    var offset = document.getElementById('hero').style.height;
    console.log(offset);
}

// const hello = document.querySelectorAll("#hello-outline path");
// for (let i = 0; i<hello.length; i++){
//     console.log(`Letter ${i} id ${hello[i].getTotalLength()}`); 
// }

const controller = new ScrollMagic.Controller();

const scenee = new ScrollMagic.Scene({
    duration: 200,
    triggerHook: 0,
    reverse: true,
    offset: 50
})
.setClassToggle('.slider', 'move')
.addIndicators()
.setPin("#intro", {pushFollowers: false})
.addTo(controller);

// const controller = new ScrollMagic.Controller();


// const scenee = new ScrollMagic.Scene({
//     duration: 2000,
//     triggerHook: 0.1,
//     reverse: true,
//     offset: document.getElementById('hero').style.height,
// })
// .setClassToggle('.slider', 'move')
// .addIndicators()
// .setPin("#intro", {pushFollowers: true})
// .addTo(controller);



// var SM = {
//     sceneHeights: document.getElementById('hero').style.height, // has to be initialized with the scene heights
//     scenePinLengths: 0, // has to be initilized with "0"s
//     mainPinEl: "#intro",
//     smController: new ScrollMagic.Controller()
//   }


//   function _sceneOffset(sceneIndex){
//     var total = 0;
//     total = SM.sceneHeights + SM.scenePinLengths;
//     return total;
//   }

//   var pinLength = 2000;
//   var newSMScene = new ScrollMagic.Scene({
//         duration: pinLength,
//         triggerHook: 0.1,
//         offset: _sceneOffset()
//       }).setClassToggle('.slider', 'move')
//         .addIndicators()
//         .setPin(SM.mainPinEl, {pushFollowers: false})
//         .addTo(SM.smController); // assign the scene to the controller

//   SM.scenePinLengths = pinLength; // updating the scene pinning length