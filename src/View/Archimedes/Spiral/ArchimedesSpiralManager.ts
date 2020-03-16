namespace View.Archimedes.Spiral {
    export class ArchimedesSpiralManager {
        private readonly _polyline;
        constructor() {
            let svg = document.getElementById("ArchimedesSpiral");
            this._polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
            svg.appendChild(this._polyline);
            this._polyline.setAttributeNS(null, "stroke", "#FFF");
            this._polyline.setAttributeNS(null, "stroke-width", "2");
            this._polyline.setAttributeNS(null, "fill", "none");
        }
        public draw(): void {
            let svg = document.getElementById("ArchimedesSpiral");
            const width: number = Number(svg.getAttribute("width"));
            const height: number = Number(svg.getAttribute("height"));
            const cx: number = width * 0.5;
            const cy: number = height * 0.5;

            let input:HTMLInputElement = <HTMLInputElement>document.getElementById("ArchimedesRotationSlider");
            let rotation: number = Number(input.value);
            const radius: number = ((-10 + width * 0.5) / (2 * Math.PI * rotation));

            input = <HTMLInputElement>document.getElementById("ArchimedesStartAngleSlider");
            let startAngle:number = Number(input.value);
            let startTheta:number =startAngle *Math.PI /180;

            input = document.querySelector("input:checked[name=ArchimedesClockwiseRadio]") as HTMLInputElement;
            let clockwise = Number(input.value);

            let value: string = cx + "," + cy + " ";

            let n: number = 360 * rotation;
            for (let i: number = 0; i < n; i++) {
                let count: number = i * (Math.PI / 180);
                let theta: number = startTheta + i * (Math.PI / 180) * clockwise;

                let x = cx + radius * count * Math.cos(theta);
                let y = cy + radius * count * Math.sin(theta);
                value += x + "," + y + " "
            }
            this._polyline.setAttributeNS(null, "points", value);
        }
    }
}