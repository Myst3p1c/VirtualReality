let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [];
window.addEventListener("DOMContentLoaded",function() {

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let rocket = new Rocket(x,y,z);

    rocket = document.querySelector("#rocket");
    rocket.a = 1;
    rocket.da = 0.01;
    loop();
})
function loop(){
  rocket.a += rocket.da;
  rocket.setAttribute("position",{x:3, y:rocket.a, z:-4});
  window.requestAnimationFrame(loop);

}