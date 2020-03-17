namespace View.LogarithmicSpiralManager
{
    import GraphManager = View.Spiral.GraphManager;
    import Vector2 = View.Geom.Vector2;
    export class LogarithmicGraphManager extends GraphManager {
        constructor() {
            super();
            this._svg = document.getElementById("LogarithmicSpiral");
            this.init();
        }

        public draw():void
        {
            super.draw();
            this._pointList = [];
            let input:HTMLInputElement = <HTMLInputElement>document.getElementById("LogarithmicRotationSlider");
            let rotation: number = Number(input.value);

            input = <HTMLInputElement>document.getElementById("LogarithmicStartAngleSlider");
            let startAngle:number = Number(input.value);
            let startTheta:number =startAngle *Math.PI /180;

            input = document.querySelector("input:checked[name=LogarithmicClockwiseRadio]") as HTMLInputElement;
            let clockwise = Number(input.value);
            let a:number = 1;
            let b:number = Math.log((this._centerY - 10) / a) / (2*Math.PI *rotation);
            let value: string = this._centerX + "," + this._centerY + " ";
            let n: number = rotation * 360;
            for (let i: number = 0; i < n; i++) {
                let count: number = i * (Math.PI / 180);
                let radius:number = Math.pow(Math.E , b * count);
                let theta:number = startTheta + i * (Math.PI / 180) * clockwise;
                let vector2:Vector2 = new Vector2();
                vector2.x = this._centerX + radius * Math.cos(theta);
                vector2.y = this._centerY + radius * Math.sin(theta);
                value += vector2.x + "," + vector2.y + " ";
                //
                this._pointList.push(vector2);
            }
            this._polyline.setAttributeNS(null, "points", value);
        }
    }
}