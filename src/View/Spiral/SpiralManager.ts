namespace View.Spiral
{
    export class SpiralManager {
        protected _graph:GraphManager;
        protected _rotationInput:HTMLInputElement;
        protected _startAngleInput:HTMLInputElement;
        protected _clockwiseList:NodeList;
        //
        protected _rotationValue:HTMLElement;
        protected _startAngleValue:HTMLElement;


        protected _svgKey:string;
        protected _rotationSliderKey:string;
        protected _rotationValueKey:string;
        protected _startAngleSliderKey:string;
        protected _startAngleValueKey:string;
        protected _radioKey:string;
        constructor() {

        }
        protected init():void
        {
            const change = () =>
            {
                this.changeHandler();
            };
            const mousemove = () =>
            {
                this.mousemoveHandler();
            };
            let element = document.createElement('div');
            let wrapper = document.getElementById("wrapper");
            wrapper.appendChild(element);
            element.innerHTML = "Logarithmic Spiral<br>"

            let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("id", this._svgKey);
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



            this._rotationInput.addEventListener("change" , change);
            this._rotationInput.addEventListener("mousemove" , mousemove);

            this._startAngleInput.addEventListener("change" , change);
            this._startAngleInput.addEventListener("mousemove" , mousemove);

            let n:number = this._clockwiseList.length;
            for(let i:number = 0;i<n;i++)
            {
                let check:HTMLElement = <HTMLElement>this._clockwiseList[i];
                check.addEventListener("change" , change);
            }

            this.setInputValue();
        }
        protected changeHandler():void
        {
            this.setInputValue();
            //
            this._graph.draw();
        }
        protected mousemoveHandler():void
        {
            this.setInputValue();
            //
            this._graph.draw();
        }
        protected setInputValue():void
        {
            this._rotationValue.textContent = this._rotationInput.value;
            this._startAngleValue.textContent = this._startAngleInput.value + "°";
        }
    }
}