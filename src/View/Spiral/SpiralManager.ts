namespace View.Spiral
{
    export class SpiralManager {
        protected _graph:GraphManager;
        constructor() {

        }
        protected changeHandler():void
        {
            this.setInputValue();
            //
            this._graph.draw();
        }
        protected mousemoveHandler():void
        {
            this.setInputValue();
            //
            this._graph.draw();
        }
        protected setInputValue():void
        {

        }
    }
}