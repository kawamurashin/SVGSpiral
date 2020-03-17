///<reference path="LogarithmicGraphManager.ts"/>
namespace View.Logarithmic
{
    import LogarithmicGraphManager = View.LogarithmicSpiralManager.LogarithmicGraphManager;
    import SpiralManager = View.Spiral.SpiralManager;

    export class LogarithmicManager extends SpiralManager{
        private _spiral:LogarithmicGraphManager;
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

            this._spiral = new LogarithmicGraphManager();
            this._spiral.draw();
            this.setInputValue();

            let input:HTMLInputElement = <HTMLInputElement>document.getElementById("LogarithmicRotationSlider");
            input.addEventListener("change" , change);
            input.addEventListener("mousemove" , mousemove);

            input = <HTMLInputElement>document.getElementById("LogarithmicStartSlider");
            input.addEventListener("change" , change);
            input.addEventListener("mousemove" , mousemove);

            let checkOption = document.getElementsByName("LogarithmicClockwiseRadio");
            let n:number = checkOption.length;
            for(let i:number = 0;i<n;i++)
            {
                let check = checkOption[i];
                check.addEventListener("change" , change);
            }
        }
        private changeHandler():void
        {
            this.setInputValue();
            //
            this._spiral.draw();
        }
        private mousemoveHandler():void
        {
            this.setInputValue();
            //
            this._spiral.draw();
        }
        private setInputValue():void
        {
            let input:HTMLInputElement = <HTMLInputElement>document.getElementById("LogarithmicRotationSlider");
            document.getElementById("LogarithmicRotationValue").textContent = input.value;

            input = <HTMLInputElement>document.getElementById("LogarithmicStartSlider");
            document.getElementById("LogarithmicStartAngleValue").textContent = input.value + "°";
        }
    }
}