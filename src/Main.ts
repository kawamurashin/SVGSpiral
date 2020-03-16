///<reference path="View/ViewManager.ts"/>
import ViewManager = View.ViewManager;

class Main
{
    constructor()
    {
        let viewManager = new ViewManager();
    }
}

window.addEventListener("load", () => {
    new Main();
});
