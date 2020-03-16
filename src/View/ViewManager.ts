///<reference path="Archimedes/ArchimedesManager.ts"/>
///<reference path="Logarithmic/LogarithmicManager.ts"/>
namespace View
{
    import ArchimedesManager = View.Archimedes.ArchimedesManager;
    import LogarithmicManager = View.Logarithmic.LogarithmicManager;
    export class ViewManager {
        constructor() {
            let archimedesManager = new ArchimedesManager();
            let logarithmicManager = new LogarithmicManager();
        }
    }
}