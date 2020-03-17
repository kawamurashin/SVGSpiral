///<reference path="../Spiral/GraphManager.ts"/>
namespace View.Archimedes.Spiral {
    import GraphManager = View.Spiral.GraphManager;
    export class ArchimedesGraphManager extends GraphManager {
        constructor() {
            super();
            this._svg = document.getElementById("ArchimedesSpiral");
            this.init();
        }

        public draw(): void {
            super.draw();

            let input: HTMLInputElement = <HTMLInputElement>document.getElementById("ArchimedesRotationSlider");
            let rotation: number = Number(input.value);
            const radius: number = ((-10 + this._centerX) / (2 * Math.PI * rotation));

            input = <HTMLInputElement>document.getElementById("ArchimedesStartAngleSlider");
            let startAngle: number = Number(input.value);
            let startTheta: number = startAngle * Math.PI / 180;

            input = document.querySelector("input:checked[name=ArchimedesClockwiseRadio]") as HTMLInputElement;
            let clockwise = Number(input.value);

            let value: string = this._centerX + "," + this._centerY + " ";

            let n: number = 360 * rotation;
            for (let i: number = 0; i < n; i++) {
                let count: number = i * (Math.PI / 180);
                let theta: number = startTheta + i * (Math.PI / 180) * clockwise;

                let x = this._centerX + radius * count * Math.cos(theta);
                let y = this._centerY + radius * count * Math.sin(theta);
                value += x + "," + y + " "
            }
            this._polyline.setAttributeNS(null, "points", value);
        }
    }
}