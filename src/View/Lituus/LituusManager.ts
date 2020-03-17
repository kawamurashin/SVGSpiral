///<reference path="LituusGraphManager.ts"/>
namespace View.Lituus
{
    import SpiralManager = View.Spiral.SpiralManager;
    export class LituusManager extends SpiralManager{
        constructor() {
            super();
            this._svgKey = "Lituus";
            this._rotationSliderKey = "LituusRotationSlider";
            this._rotationValueKey = "LituusRotationValue";
            this._startAngleSliderKey = "LituusStartAngleSlider";
            this._startAngleValueKey = "LituusStartAngleValue";
            this._radioKey = "LituusClockwiseRadio";

            this.init();

            this._graph = new LituusGraphManager();
            /*
            this._rotationInput = <HTMLInputElement>document.getElementById("LituusRotationSlider");
            this._startAngleInput  = <HTMLInputElement>document.getElementById("LituusStartAngleSlider");
            this._clockwiseList = document.getElementsByName("LituusClockwiseRadio");
            this._rotationValue = document.getElementById("LituusRotationValue");
            this._startAngleValue = document.getElementById("LituusStartAngleValue");

             */

        }
    }
}