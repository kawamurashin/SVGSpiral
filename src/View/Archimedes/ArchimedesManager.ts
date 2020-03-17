///<reference path="ArchimedesGraphManager.ts"/>
///<reference path="../Spiral/SpiralManager.ts"/>
namespace View.Archimedes {
    import ArchimedesGraphManager = View.Archimedes.Spiral.ArchimedesGraphManager;
    import SpiralManager = View.Spiral.SpiralManager;
    export class ArchimedesManager extends SpiralManager{
        constructor() {
            super();
            this._svgKey = "ArchimedesSpiral";
            this._rotationSliderKey = "ArchimedesRotationSlider";
            this._rotationValueKey = "ArchimedesRotationValue";
            this._startAngleSliderKey = "ArchimedesStartAngleSlider";
            this._startAngleValueKey = "ArchimedesStartAngleValue";
            this._radioKey = "ArchimedesClockwiseRadio";

            this.init();

            this._graph = new ArchimedesGraphManager();
            /*
            this._rotationInput = <HTMLInputElement>document.getElementById("ArchimedesRotationSlider");
            this._startAngleInput =  <HTMLInputElement>document.getElementById("ArchimedesStartAngleSlider")
            this._clockwiseList = document.getElementsByName("ArchimedesClockwiseRadio");
            this._rotationValue = document.getElementById("ArchimedesRotationValue");
            this._startAngleValue = document.getElementById("ArchimedesStartAngleValue");

             */

        }
    }
}