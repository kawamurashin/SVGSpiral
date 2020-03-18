///<reference path="LituusGraphManager.ts"/>
namespace View.Lituus
{
    import SpiralManager = View.Spiral.SpiralManager;
    export class LituusManager extends SpiralManager{
        constructor() {
            super();
            this._name = "Lituus";
            this._svgKey = "Lituus";
            this._rotationSliderKey = "LituusRotationSlider";
            this._rotationValueKey = "LituusRotationValue";
            this._startAngleSliderKey = "LituusStartAngleSlider";
            this._startAngleValueKey = "LituusStartAngleValue";
            this._radioKey = "LituusClockwiseRadio";
            this._speedSliderKey = "LituusSpeedSlider";
            this._speedValueKey = "LituusSpeedValue";
            this.init();
            this._graph = new LituusGraphManager();
            //
            this.draw();
        }
    }
}