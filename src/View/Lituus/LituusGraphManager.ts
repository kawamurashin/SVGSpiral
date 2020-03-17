namespace View.Lituus
{
    import GraphManager = View.Spiral.GraphManager;

    export class LituusGraphManager extends GraphManager{
        constructor() {
            super();
            this._svg = document.getElementById("Lituus");
            this.init();
        }
        public draw():void
        {
            super.draw();

            let input:HTMLInputElement = <HTMLInputElement>document.getElementById("LituusRotationSlider");
            let rotation: number = Number(input.value);
            const a: number = 50*((-10 + this._centerX) / (2 * Math.PI * rotation));

            input = <HTMLInputElement>document.getElementById("LituusStartAngleSlider");
            let startAngle:number = Number(input.value);
            let startTheta:number =startAngle *Math.PI /180;

            input = document.querySelector("input:checked[name=LituusClockwiseRadio]") as HTMLInputElement;
            let clockwise = Number(input.value);


            let value: string = "";
            let n: number = rotation * 360;
            for (let i: number = 1; i < n; i++) {
                let theta: number =  i * (Math.PI / 180);
                let radius:number = a / theta;
                let rad:number = startTheta + i * (Math.PI / 180) * clockwise;
                let x = this._centerX + radius * Math.cos(rad);
                let y = this._centerY + radius * Math.sin(rad);
                value += x + "," + y + " ";
            }
            this._polyline.setAttributeNS(null, "points", value);
        }
    }
}