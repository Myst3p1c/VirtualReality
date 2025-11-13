let mech1Template,scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  let m = new mech(x, -3, z);
  mech = document.getElementById("mech1");
  mech = this.document.querySelector("#mechTemplate");
   for(let i = 0; i < 100; i++){
    let x = rnd(-100, 100);
    let z = rnd(-100, 100);
    let m = new Mech(x, -3, z);
   }
  mechs.push( m );
  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}

