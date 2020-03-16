///<reference path="View/ViewManager.ts"/>
import ViewManager = View.ViewManager;

class Main
{
    constructor()
    {
        console.log(("hoge"));
        let viewManager = new ViewManager();

    }
}

window.addEventListener("load", () => {
    new Main();
});
