namespace View.Spiral
{
    export class GraphManager {
        protected _polyline;
        protected _svg;
        protected _centerX:number;
        protected _centerY:number;
        constructor() {

        }
        public init():void
        {
            this._polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
            this._svg.appendChild(this._polyline);
            this._polyline.setAttributeNS(null, "stroke", "#FFF");
            this._polyline.setAttributeNS(null, "stroke-width", "2");
            this._polyline.setAttributeNS(null, "fill", "none");

            let width: number = Number(this._svg.getAttribute("width"));
            let height: number = Number(this._svg.getAttribute("height"));
            this._centerX = width * 0.5;
            this._centerY = height * 0.5;
        }

        public draw()
        {

        }
    }
}