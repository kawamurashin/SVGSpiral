///<reference path="LogarithmicGraphManager.ts"/>
///<reference path="../Spiral/SpiralManager.ts"/>
namespace View.Logarithmic
{
    import LogarithmicGraphManager = View.LogarithmicSpiralManager.LogarithmicGraphManager;
    import SpiralManager = View.Spiral.SpiralManager;

    export class LogarithmicManager extends SpiralManager{

        constructor() {
            super();
            const change = () =>
            {
                this.changeHandler();
            };
            const mousemove = () =>
            {
                this.mousemoveHandler();
            };

            this._graph = new LogarithmicGraphManager();
            this._graph.draw();
            this.setInputValue();

            let rotationInput:HTMLInputElement;
            let startAngleInput:HTMLInputElement;

            rotationInput= <HTMLInputElement>document.getElementById("LogarithmicRotationSlider");
            rotationInput.addEventListener("change" , change);
            rotationInput.addEventListener("mousemove" , mousemove);

            startAngleInput = <HTMLInputElement>document.getElementById("LogarithmicStartAngleSlider");
            startAngleInput.addEventListener("change" , change);
            startAngleInput.addEventListener("mousemove" , mousemove);

            let checkOption = document.getElementsByName("LogarithmicClockwiseRadio");
            let n:number = checkOption.length;
            for(let i:number = 0;i<n;i++)
            {
                let check = checkOption[i];
                check.addEventListener("change" , change);
            }
        }
        /*
        private changeHandler():void
        {
            this.setInputValue();
            //
            this._graph.draw();
        }
        private mousemoveHandler():void
        {
            this.setInputValue();
            //
            this._graph.draw();
        }*/
        protected setInputValue():void
        {
            super.setInputValue();
            let input:HTMLInputElement = <HTMLInputElement>document.getElementById("LogarithmicRotationSlider");
            document.getElementById("LogarithmicRotationValue").textContent = input.value;

            input = <HTMLInputElement>document.getElementById("LogarithmicStartAngleSlider");
            document.getElementById("LogarithmicStartAngleValue").textContent = input.value + "°";
        }
    }
}