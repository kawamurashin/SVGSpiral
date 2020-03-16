///<reference path="Spiral/ArchimedesSpiralManager.ts"/>
namespace View.Archimedes {
    import ArchimedesSpiralManager = View.Archimedes.Spiral.ArchimedesSpiralManager;
    export class ArchimedesManager {
        private readonly _spiral:ArchimedesSpiralManager;
        constructor() {
            const change = () =>
            {
                this.changeHandler();
            };
            const mousemove = () =>
            {
                this.mousemoveHandler();
            };
            this._spiral = new ArchimedesSpiralManager();
            this._spiral.draw();
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
            let input:HTMLInputElement = <HTMLInputElement>document.getElementById("ArchimedesRotationSlider");
            document.getElementById("ArchimedesRotationValue").textContent = input.value;

            input = <HTMLInputElement>document.getElementById("ArchimedesStartAngleSlider");
            document.getElementById("ArchimedesStartAngleValue").textContent = input.value + "°";
        }
    }
}