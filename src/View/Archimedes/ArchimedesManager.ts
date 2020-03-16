namespace View.Archimedes {
    export class ArchimedesManager {

        private readonly _polyline;
        constructor() {
            let svg = document.getElementById("ArchimedesSpiral");
            this._polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
            svg.appendChild(this._polyline);
            this._polyline.setAttributeNS(null, "stroke", "blue");
            this._polyline.setAttributeNS(null, "stroke-width", "2");
            this._polyline.setAttributeNS(null, "fill", "none");
            let width: number = Number(svg.getAttribute("width"));
            let height: number = Number(svg.getAttribute("height"));
            const cx: number = width*0.5;
            const cy: number = height*0.5;

            let value: string = cx + "," + cy + " ";
            let n: number = 2000;
            for (let i: number = 0; i < n; i++) {
                let r: number = i * (Math.PI / 180);

                let x = cx + 10 * r * Math.cos(r);
                let y = cy + 10 * r * Math.sin(r);
                value += x + "," + y + " "
            }
            this._polyline.setAttributeNS(null, "points", value);
        }

    }
}