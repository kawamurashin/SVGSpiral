namespace View.Logarithmic
{
    export class LogarithmicManager {
        private readonly _polyline;

        constructor() {
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
        }

    }
}