///<reference path="Archimedes/ArchimedesManager.ts"/>
///<reference path="Logarithmic/LogarithmicManager.ts"/>
///<reference path="Lituus/LituusManager.ts"/>
namespace View
{
    import ArchimedesManager = View.Archimedes.ArchimedesManager;
    import LogarithmicManager = View.Logarithmic.LogarithmicManager;
    import LituusManager = View.Lituus.LituusManager;
    export class ViewManager {
        constructor() {
            let archimedesManager = new ArchimedesManager();
            let logarithmicManager = new LogarithmicManager();
            let lituusManager = new LituusManager();
        }
    }
}