///<reference path="LituusGraphManager.ts"/>
namespace View.Lituus
{
    import SpiralManager = View.Spiral.SpiralManager;

    export class LituusManager extends SpiralManager{
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
            this._graph = new LituusGraphManager();
            this._graph.draw();
            this.setInputValue();


            let input:HTMLInputElement = <HTMLInputElement>document.getElementById("LituusRotationSlider");
            input.addEventListener("change" , change);
            input.addEventListener("mousemove" , mousemove);

            input = <HTMLInputElement>document.getElementById("LituusStartAngleSlider");
            input.addEventListener("change" , change);
            input.addEventListener("mousemove" , mousemove);

            let checkOption = document.getElementsByName("LituusClockwiseRadio");
            let n:number = checkOption.length;
            for(let i:number = 0;i<n;i++)
            {
                let check = checkOption[i];
                check.addEventListener("change" , change);
            }
        }
        protected setInputValue():void
        {
            super.setInputValue();
            let input:HTMLInputElement = <HTMLInputElement>document.getElementById("LituusRotationSlider");
            document.getElementById("LituusRotationValue").textContent = input.value;

            input = <HTMLInputElement>document.getElementById("LituusStartAngleSlider");
            document.getElementById("LituusStartAngleValue").textContent = input.value + "°";
        }
    }
}