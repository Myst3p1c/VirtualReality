let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  rocket = new Rocket(3,-2, 4);
  // for(let i = 0; i < 100; i++){
    //let x = rnd(-100,100);
    //let z = rnd(-100,100);
    //let rocket = new Rockets(x,y,z);
    //rockets.push(rocket);
//}
    // loop();
}

// function loop(){
  // for(let rockets of rockets){
  //  rocket.fly();
 // }

 // window.requestAnimationFrame(loop);

//}