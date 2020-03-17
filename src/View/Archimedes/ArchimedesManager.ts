///<reference path="ArchimedesGraphManager.ts"/>
///<reference path="../Spiral/SpiralManager.ts"/>
namespace View.Archimedes {
    import ArchimedesGraphManager = View.Archimedes.Spiral.ArchimedesGraphManager;
    import SpiralManager = View.Spiral.SpiralManager;
    export class ArchimedesManager extends SpiralManager{
        //private readonly _spiral:ArchimedesGraphManager;
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
            this._graph = new ArchimedesGraphManager();
            this._graph.draw();
            this.setInputValue();

            let input:HTMLInputElement = <HTMLInputElement>document.getElementById("ArchimedesRotationSlider");
            input.addEventListener("change" , change);
            input.addEventListener("mousemove" , mousemove);

            input =  <HTMLInputElement>document.getElementById("ArchimedesStartAngleSlider");
            input.addEventListener("change" , change);
            input.addEventListener("mousemove" , mousemove);

            let checkOption = document.getElementsByName("ArchimedesClockwiseRadio");
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
            this._spiral.draw();
        }
        private mousemoveHandler():void
        {
            this.setInputValue();
            //
            this._spiral.draw();
        }*/
        protected setInputValue():void
        {
            super.setInputValue();
            let input:HTMLInputElement = <HTMLInputElement>document.getElementById("ArchimedesRotationSlider");
            document.getElementById("ArchimedesRotationValue").textContent = input.value;

            input = <HTMLInputElement>document.getElementById("ArchimedesStartAngleSlider");
            document.getElementById("ArchimedesStartAngleValue").textContent = input.value + "°";
        }
    }
}