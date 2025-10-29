class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.x = y;
        this.x = z;
        this.dy = 0.01;
        this.obj = document.createElement("a-entity");

        let body = document.createElement("a-cylinder");
            body.setAttribute("color","#d3d3d3");
            body.setAttribute("radius","1");
            body.setAttribute("height","10");
            body.setAttribute("position",{x:0, y:0 z:0});
            this.obj.append( body );
            
        let tip = document.createElement("a-cone");
            tip.setAttribute("color","#d3d3d3");
            tip.setAttribute("radius-bottom","1");
            tip.setAttribute("radius-top","0");
            tip.setAttribute("height","7");
            tip.setAttribute("position",{x:0, y:7, z:0});
            this.obj.append( tip );
            
        let cross = document.createElement("a-sphere");
            cross.setAttribute("color", "#d3d3d3");
            cross.setAttribute("position",{x:0, y:2, z:0});
            cross.setAttribute("scale",{x:0.5, y:2, z:0});
            cross.setAttribute("radius","3");
            this.obj.append(cross);

        let cross2 = document.createElement("a-sphere");
            cross2.setAttribute("color", "#d3d3d3");
            cross2.setAttribute("position",{x:0, y:2, z:0});
            cross2.setAttribute("scale",{x:0, y:2, z:0.5});
            cross2.setAttribute("radius","3");
            this.obj.append(cross);

        let layer = document.createElement("a-cylinder");
            layer.setAttribute("color", "white");
            layer.setAttribute("position",{x:0, y:3, z:0});
            layer.setAttribute("radius","1.02");
            layer.setAttribute("height","5")
            this.obj.append( layer );

        let layer2 = document.createElement("a-cylinder");
            layer2.setAttribute("color", "#8A7F80");
            layer2.setAttribute("position",{x:0, y:-3, z:0});
            layer2.setAttribute("radius","1.5");
            layer2.setAttribute("height","7")
            this.obj.append( layer2 );

        let layer3 = document.createElement("a-cylinder");
            layer3.setAttribute("color", "#8A7F80");
            layer3.setAttribute("position",{x:1, y:-3, z:1});
            layer3.setAttribute("radius","0.5");
            layer3.setAttribute("height","4");
            this.obj.append( layer3 );

        let layer4 = document.createElement("a-cylinder");
            layer4.setAttribute("color", "#8A7F80");
            layer4.setAttribute("position",{x:-1, y:-3, z:-1});
            layer4.setAttribute("radius","0.5");
            layer4.setAttribute("height","4")
            this.obj.append( layer4 );

        let layer5 = document.createElement("a-cylinder");
            layer5.setAttribute("color", "#8A7F80");
            layer5.setAttribute("position",{x:-1, y:-3, z:1});
            layer5.setAttribute("radius","0.5");
            layer5.setAttribute("height","4")
            this.obj.append( layer5 );

        let layer6 = document.createElement("a-cylinder");
            layer6.setAttribute("color", "#8A7F80");
            layer6.setAttribute("position",{x:-1, y:-3, z:1});
            layer6.setAttribute("radius","0.5");
            layer6.setAttribute("height","4")
            this.obj.append( layer6 );

        let layer7 = document.createElement("a-cylinder");
            layer7.setAttribute("color", "gray");
            layer7.setAttribute("position",{x:0, y:-5, z:0});
            layer7.setAttribute("radius","0.5");
            layer7.setAttribute("height","4")
            this.obj.append( layer7 );

        let tip2 = document.createElement("a-cone");
            tip2.setAttribute("color","#8A7F80");
            tip2.setAttribute("radius-bottom","0.5");
            tip2.setAttribute("radius-top","0");
            tip2.setAttribute("position",{x:1, y:-0.5, z:1});
            this.obj.append( tip2 );

         let tip3 = document.createElement("a-cone");
            tip3.setAttribute("color","#8A7F80");
            tip3.setAttribute("radius-bottom","0.5");
            tip3.setAttribute("radius-top","0");
            tip3.setAttribute("position",{x:1, y:-0.5, z:-1});
            this.obj.append( tip3 );
        
         let tip4 = document.createElement("a-cone");
            tip4.setAttribute("color","#8A7F80");
            tip4.setAttribute("radius-bottom","0.5");
            tip4.setAttribute("radius-top","0");
            tip4.setAttribute("position",{x:-1, y:-0.5, z:-1});
            this.obj.append( tip4 );

        let tip5 = document.createElement("a-cone");
            tip5.setAttribute("color","#8A7F80");
            tip5.setAttribute("radius-bottom","0.5");
            tip5.setAttribute("radius-top","0");
            tip5.setAttribute("position",{x:-1, y:-0.5, z:1});
            this.obj.append( tip5 );

        let dividor = document.createElement("a-cone");
            dividor.setAttribute("color","black");
            dividor.setAttribute("radius-bottom","1.5");
            dividor.setAttribute("radius-top","0.35");
            dividor.setAttribute("position",{x:0, y:1, z:0});
            this.obj.append( dividor );

        let jet = document.createElement("a-cone");
            jet.setAttribute("color","gray");
            jet.setAttribute("radius-bottom","1");
            jet.setAttribute("radius-top","0");
            jet.setAttribute("position",{x:0, y:-7, z:0});
            this.obj.append( jet );

        let fire = document.createElement("a-cone");
            fire.setAttribute("color","orange");
            fire.setAttribute("radius-bottom","0.8");
            fire.setAttribute("radius-top","0");
            fire.setAttribute("position",{x:0, y:-9.5, z:0});
            fire.setAttribute("opacity","0.7")
            fire.setAttribute("rotaion",{x:-180, y:0, z:0});
            this.obj.append( fire );

        let fire2 = document.createElement("a-sphere");
            fire2.setAttribute("color", "orange");
            fire2.setAttribute("position",{x:0, y:-8, z:0});
            fire2.setAttribute("radius","0.8");
            fire2.setAttribute("opacity","0.7")
            this.obj.append( fire2 );

        let fire3 = document.createElement("a-cone");
            fire3.setAttribute("color","orange");
            fire3.setAttribute("radius-bottom","0.5");
            fire3.setAttribute("radius-top","0");
            fire3.setAttribute("position",{x:1, y:-6.5, z:1});
            fire3.setAttribute("opacity","0.7")
            fire3.setAttribute("rotaion",{x:-180, y:0, z:0});
            fire5.setAttribute("height","4");
            this.obj.append( fire3 );

        let fire4 = document.createElement("a-cone");
            fire4.setAttribute("color","orange");
            fire4.setAttribute("radius-bottom","0.5");
            fire4.setAttribute("radius-top","0");
            fire4.setAttribute("position",{x:-1, y:-6.5, z:-1});
            fire4.setAttribute("opacity","0.7")
            fire4.setAttribute("rotaion",{x:-180, y:0, z:0});
            fire5.setAttribute("height","4");
            this.obj.append( fire4 );

        let fire5 = document.createElement("a-cone");
            fire5.setAttribute("color","orange");
            fire5.setAttribute("radius-bottom","0.5");
            fire5.setAttribute("radius-top","0");
            fire5.setAttribute("position",{x:1, y:-6.5, z:-1});
            fire5.setAttribute("opacity","0.7")
            fire5.setAttribute("rotaion",{x:-180, y:0, z:0});
            fire5.setAttribute("height","4");
            this.obj.append( fire5 );

        let fire6 = document.createElement("a-cone");
            fire6.setAttribute("color","orange");
            fire6.setAttribute("radius-bottom","0.5");
            fire6.setAttribute("radius-top","0");
            fire6.setAttribute("position",{x:-1, y:-6.5, z:1});
            fire6.setAttribute("opacity","0.7")
            fire6.setAttribute("rotaion",{x:-180, y:0, z:0});
            fire6.setAttribute("height","4");
            this.obj.append( fire6 );
    }
}
