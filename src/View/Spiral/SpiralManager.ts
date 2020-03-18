///<reference path="BallManager.ts"/>
namespace View.Spiral
{
    import Vector2 = View.Geom.Vector2;
    export class SpiralManager {
        protected _name:string;
        protected _svgKey:string;
        protected _rotationSliderKey:string;
        protected _rotationValueKey:string;
        protected _startAngleSliderKey:string;
        protected _startAngleValueKey:string;
        protected _radioKey:string;
        protected _speedSliderKey:string;
        protected _speedValueKey:string;
        //
        protected _graph:GraphManager;
        //
        private _rotationInput:HTMLInputElement;
        private _rotationValue:HTMLElement;
        private _startAngleInput:HTMLInputElement;
        private _startAngleValue:HTMLElement;
        private _clockwiseList:NodeList;
        private _speedInput:HTMLInputElement;
        private _speedValue:HTMLElement;
        //
        private _ballManager:BallManager;
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
            element.innerHTML = this._name + "<br>"

            let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("id", this._svgKey);
            svg.setAttribute("class", "svg");
            svg.setAttribute("width", "480");
            svg.setAttribute("height", "480");
            svg.setAttribute("viewBox", "0 0 480 480");
            element.appendChild(svg);

            //回転数
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

            //開始角
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

            //方向
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
            //スピード
            child = document.createElement('div');
            element.appendChild(child);
            label = document.createElement('label');
            label.setAttribute("for", this._speedSliderKey);
            label.setAttribute("class", "title-head");
            label.innerHTML = "Speed";
            child.appendChild(label);
            this._speedInput = document.createElement('input');
            this._speedInput.setAttribute("type", "range");
            this._speedInput.setAttribute("id", this._speedSliderKey);
            this._speedInput.setAttribute("value", "5");
            this._speedInput.setAttribute("min", "1");
            this._speedInput.setAttribute("max", "20");
            child.appendChild(this._speedInput);

            this._speedValue = document.createElement('span');
            this._speedValue.setAttribute("id", this._speedValueKey);
            child.appendChild(this._speedValue);

            //events
            this._rotationInput.addEventListener("change" , change);
            this._rotationInput.addEventListener("mousemove" , mousemove);

            this._startAngleInput.addEventListener("change" , change);
            this._startAngleInput.addEventListener("mousemove" , mousemove);

            this._speedInput.addEventListener("change" , change);
            this._speedInput.addEventListener("mousemove" , mousemove);

            let n:number = this._clockwiseList.length;
            for(let i:number = 0;i<n;i++)
            {
                let check:HTMLElement = <HTMLElement>this._clockwiseList[i];
                check.addEventListener("change" , change);
            }

            //ball
            const click = () =>
            {
                this.screenClickHandler();
            };
            svg.addEventListener("click" , click);
            let layer:SVGElement = document.createElementNS("http://www.w3.org/2000/svg","g");
            svg.appendChild(layer);
            this._ballManager = new BallManager(layer);
        }
        public enterFrame():void
        {
            this._ballManager.enterFrame();
        }

        protected draw():void
        {
            this.setInputValue();
            //
            this._graph.draw();
            let pointList:Vector2[] = this._graph.pointList;

            this._ballManager.setPointList(pointList);
        }
        private changeHandler():void
        {
            this.draw();
        }
        private mousemoveHandler():void
        {
            this.draw();
        }
        private setInputValue():void
        {
            this._rotationValue.textContent = this._rotationInput.value;
            this._startAngleValue.textContent = this._startAngleInput.value + "°";
            this._speedValue.textContent = this._speedInput.value;

            this._ballManager.setSpeed(this._speedInput.value);
        }

        private screenClickHandler():void
        {
            this._ballManager.start()
        }
    }
}