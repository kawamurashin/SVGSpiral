///<reference path="../Geom/Vector2.ts"/>
namespace View.Spiral
{
    import Vector2 = View.Geom.Vector2;

    export class BallManager {
        private circleList:SVGElement;
        private _pointList:Vector2[];
        private _layer:SVGElement;
        constructor(layer:SVGElement) {
            this._layer = layer;
        }
        public start():void
        {
            let num = Math.floor(this._pointList.length * Math.random());
            let vector2 = this._pointList[num];
            console.log(num)
            let ball:BallObject = new BallObject(this._layer);
            ball.x = vector2.x;
            ball.y = vector2.y;
        }
        public enterFrame():void
        {

        }

        setPointList(pointList: Vector2[]) {
            this._pointList = pointList;



        }
    }
}