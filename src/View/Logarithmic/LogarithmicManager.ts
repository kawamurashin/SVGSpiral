///<reference path="Spiral/LogarithmicSpiralManager.ts"/>
namespace View.Logarithmic
{
    import LogarithmicSpiralManager = View.LogarithmicSpiralManager.LogarithmicSpiralManager;

    export class LogarithmicManager {
        //private readonly _polyline;

        private _spiral:LogarithmicSpiralManager;
        constructor() {
            const change = () =>
            {
                this.changeHandler();
            };
            const mousemove = () =>
            {
                this.mousemoveHandler();
            };

            this._spiral = new LogarithmicSpiralManager();
            this._spiral.draw();
            this.setInputValue();

            let input:HTMLInputElement = <HTMLInputElement>document.getElementById("LogarithmicRotationSlider");
            input.addEventListener("change" , change);
            input.addEventListener("mousemove" , mousemove);

            input = <HTMLInputElement>document.getElementById("LogarithmicStartSlider");
            input.addEventListener("change" , change);
            input.addEventListener("mousemove" , mousemove);

            let checkOption = document.getElementsByName("LogarithmicClockwiseRadio");
            let n:number = checkOption.length;
            for(let i:number = 0;i<n;i++)
            {
                let check = checkOption[i];
                check.addEventListener("change" , change);
            }
            /*
            let svg = document.getElementById("LogarithmicSpiral");
            this._polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
            svg.appendChild(this._polyline);
            this._polyline.setAttributeNS(null, "stroke", "#FFF");
            this._polyline.setAttributeNS(null, "stroke-width", "2");
            this._polyline.setAttributeNS(null, "fill", "none");


            let width: number = Number(svg.getAttribute("width"));
            let height: number = Number(svg.getAttribute("height"));
            const cx: number = width * 0.5;
            const cy: number = height * 0.5;

            const rotation:number = 3;
            let a:number = 1;
            let b:number = Math.log((width*0.5 - 10) / a) / (2*Math.PI *rotation);

            let value: string = cx + "," + cy + " ";
            let n: number = rotation * 360;
            for (let i: number = 0; i < n; i++) {
                let count: number = i * (Math.PI / 180);

                let radius:number = Math.pow(Math.E , b * count);
                let theta:number = i * (Math.PI / 180);


                let x = cx + radius * Math.cos(theta);
                let y = cy + radius * Math.sin(theta);
                value += x + "," + y + " "
            }
            this._polyline.setAttributeNS(null, "points", value);

             */
        }
        private changeHandler():void
        {
            this.setInputValue();
            //
            this._spiral.draw();
        }
        private mousemoveHandler():void
        {
            this.setInputValue();
            //
            this._spiral.draw();
        }
        private setInputValue():void
        {
            let input:HTMLInputElement = <HTMLInputElement>document.getElementById("LogarithmicRotationSlider");
            document.getElementById("LogarithmicRotationValue").textContent = input.value;

            input = <HTMLInputElement>document.getElementById("LogarithmicStartSlider");
            document.getElementById("LogarithmicStartAngleValue").textContent = input.value + "°";

            /*
            input = document.querySelector("input:checked[name=ArchimedesClockwiseRadio]") as HTMLInputElement;
            console.log(input.value);

             */
        }
    }
}