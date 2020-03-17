///<reference path="Archimedes/ArchimedesManager.ts"/>
///<reference path="Logarithmic/LogarithmicManager.ts"/>
///<reference path="Lituus/LituusManager.ts"/>
namespace View
{
    import ArchimedesManager = View.Archimedes.ArchimedesManager;
    import LogarithmicManager = View.Logarithmic.LogarithmicManager;
    import LituusManager = View.Lituus.LituusManager;
    import SpiralManager = View.Spiral.SpiralManager;
    export class ViewManager {

        private _sprilManagerList:SpiralManager[];
        constructor() {
            this._sprilManagerList = [];
            let archimedesManager = new ArchimedesManager();
            this._sprilManagerList.push(archimedesManager);
            let logarithmicManager = new LogarithmicManager();
            this._sprilManagerList.push(logarithmicManager);
            let lituusManager = new LituusManager();
            this._sprilManagerList.push(lituusManager);

            this.timeoutHandler();
        }
        private timeoutHandler():void
        {
            const timeout = () =>
            {
                this.timeoutHandler();
            };
            let n:number = this._sprilManagerList.length;
            for(let i:number = 0;i<n;i++)
            {
                let spiralManager = this._sprilManagerList[i];
                spiralManager.enterFrame();
            }
            let fps:number = 1000/60;
            setTimeout(timeout,fps)
        }
    }
}