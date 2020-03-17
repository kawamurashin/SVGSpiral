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

/*
            let element = document.createElement('div');
            let wrapper = document.getElementById("wrapper");
            wrapper.appendChild(element);
            element.innerHTML = "Logarithmic Spiral<br>"

            let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("id", "LogarithmicSpiral");
            svg.setAttribute("class", "svg");
            svg.setAttribute("width", "480");
            svg.setAttribute("height", "480");
            svg.setAttribute("viewBox", "0 0 480 480");
            element.appendChild(svg);



            let child = document.createElement('div');
            element.appendChild(child);
            let label = document.createElement('label');
            label.setAttribute("for", this._rotationSliderKey);
            label.setAttribute("class", "title-head");
            label.innerHTML = "Rotation";
            child.appendChild(label);
            this._rotationInput = document.createElement('input');
            this._rotationInput.setAttribute("type", "range");
            this._rotationInput.setAttribute("id", this._rotationSliderKey);
            this._rotationInput.setAttribute("value", "5");
            this._rotationInput.setAttribute("min", "2");
            this._rotationInput.setAttribute("max", "50");
            this._rotationInput.setAttribute("step", "0.1");
            child.appendChild(this._rotationInput);

            this._rotationValue = document.createElement('span');
            this._rotationValue.setAttribute("id", this._rotationValueKey);
            child.appendChild(this._rotationValue)

            child = document.createElement('div');
            element.appendChild(child);
            label = document.createElement('label');
            label.setAttribute("for", this._startAngleSliderKey);
            label.setAttribute("class", "title-head");
            label.innerHTML = "Starting Angle";
            child.appendChild(label);
            this._startAngleInput = document.createElement('input');
            this._startAngleInput.setAttribute("type", "range");
            this._startAngleInput.setAttribute("id", this._startAngleSliderKey);
            this._startAngleInput.setAttribute("value", "0");
            this._startAngleInput.setAttribute("min", "0");
            this._startAngleInput.setAttribute("max", "360");
            child.appendChild(this._startAngleInput);

            this._startAngleValue = document.createElement('span');
            this._startAngleValue.setAttribute("id", this._startAngleValueKey);
            child.appendChild(this._startAngleValue);

            child = document.createElement('div');
            element.appendChild(child);


            let radio = document.createElement('input');
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", this._radioKey);
            radio.setAttribute("value", "1");
            radio.checked = true;
            child.appendChild(radio);
            child.innerHTML +="clockwise ";

            radio = document.createElement('input');
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", this._radioKey);
            radio.setAttribute("value", "-1");

            child.appendChild(radio);
            child.innerHTML +="anticlockwise";
            this._clockwiseList = document.getElementsByName(this._radioKey);
            let radioElement:HTMLInputElement = <HTMLInputElement>this._clockwiseList[0];
            radioElement.checked  = true;

 */

            this.init();
            this._graph = new LogarithmicGraphManager();
            /*
            this._graph = new LogarithmicGraphManager();
            this._rotationInput = <HTMLInputElement>document.getElementById("LogarithmicRotationSlider");
            this._startAngleInput = <HTMLInputElement>document.getElementById("LogarithmicStartAngleSlider");
            this._clockwiseList = document.getElementsByName("LogarithmicClockwiseRadio");
            this._rotationValue = document.getElementById("LogarithmicRotationValue");
            this._startAngleValue = document.getElementById("LogarithmicStartAngleValue");*/

        }
    }
}