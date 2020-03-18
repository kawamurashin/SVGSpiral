namespace View.Spiral
{
    export class BallObject {

        set x(value: number) {
            this._x = value;
            this._circle.cx.baseVal.value = value;
        }
        set y(value: number) {
            this._y = value;
            this._circle.cy.baseVal.value = value;
        }
        public count:number = 0;

        private _circle:SVGCircleElement;
        private _x:number = 0;
        private _y:number = 0;
        private _layer:SVGElement;
        constructor(layer:SVGElement) {
            this._layer = layer;
            //
            this._circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
            this._circle.r.baseVal.value = 3;
            this._circle.style.setProperty("fill", "#fff");
            this._layer.appendChild(this._circle);
        }

        remove() {
            this._layer.removeChild(this._circle);
        }
    }
}