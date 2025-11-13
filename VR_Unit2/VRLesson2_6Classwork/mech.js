class Mech1{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
        this.obj= mechTemplate.cloneNode(true);
        scen.append(this.obj);
    }
}