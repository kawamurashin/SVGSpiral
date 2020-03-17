///<reference path="LogarithmicGraphManager.ts"/>
///<reference path="../Spiral/SpiralManager.ts"/>
namespace View.Logarithmic
{
    import LogarithmicGraphManager = View.LogarithmicSpiralManager.LogarithmicGraphManager;
    import SpiralManager = View.Spiral.SpiralManager;
    export class LogarithmicManager extends SpiralManager{

        constructor() {
            super();
            this._svgKey = "LogarithmicSpiral";
            this._rotationSliderKey = "LogarithmicRotationSlider";
            this._rotationValueKey = "LogarithmicRotationValue";
            this._startAngleSliderKey = "LogarithmicStartAngleSlider";
            this._startAngleValueKey = "LogarithmicStartAngleValue";
            this._radioKey = "LogarithmicClockwiseRadio";
            this.init();
            this._graph = new LogarithmicGraphManager();
        }
    }
}