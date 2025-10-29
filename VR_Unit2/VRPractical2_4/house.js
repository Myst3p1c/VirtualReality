class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let roof = document.createElement("a-cone");
    roof.setAttribute("color","red");
    roof.setAttribute("position","0 1.5 0");
    roof.setAttribute("radius-bottom","1.2");
    roof.setAttribute("radius-top","0");
    roof.setAttribute("height","2");
    this.obj.append( roof );
  
    let base = document.createElement("a-cylinder");
    base.setAttribute("position","0 0 0");
    base.setAttribute("color","white");
    base.setAttribute("radius","1");
    this.obj.append( base );

    let door = document.createElement("a-box");
    door.setAttribute("position", "1, 0.25, 0");
    door.setAttribute("color","brown");
    door.setAttribute("height", "0.1");
    door.setAttribute("width","0.4");
    door.setAttribute("rotation", "90 0 90")
    this.obj.append( door );

     let window = document.createElement("a-box");
    window.setAttribute("position", "0, 0.25, 1");
    window.setAttribute("color","blue");
    window.setAttribute("opacity","0.7")
    window.setAttribute("height", "0.1");
    window.setAttribute("width", "0.25")
    window.setAttribute("rotation", "0 90 90")
    this.obj.append( window );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}