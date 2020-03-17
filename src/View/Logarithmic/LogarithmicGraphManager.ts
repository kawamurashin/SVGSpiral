namespace View.LogarithmicSpiralManager
{
    import GraphManager = View.Spiral.GraphManager;
    export class LogarithmicGraphManager extends GraphManager {
        constructor() {
            super();
            this._svg = document.getElementById("LogarithmicSpiral");
            this.init();
        }

        public draw():void
        {
            super.draw();
            let input:HTMLInputElement = <HTMLInputElement>document.getElementById("LogarithmicRotationSlider");
            let rotation: number = Number(input.value);

            input = <HTMLInputElement>document.getElementById("LogarithmicStartSlider");
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
                let x = this._centerX + radius * Math.cos(theta);
                let y = this._centerY + radius * Math.sin(theta);
                value += x + "," + y + " ";
            }
            this._polyline.setAttributeNS(null, "points", value);
        }
    }
}