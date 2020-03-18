///<reference path="../Geom/Vector2.ts"/>
namespace View.Spiral
{
    import Vector2 = View.Geom.Vector2;
    export class BallManager {
        private _ballList:BallObject[];
        private _pointList:Vector2[];
        private _layer:SVGElement;
        private _speed:number;
        constructor(layer:SVGElement) {
            this._layer = layer;
            this._ballList = [];
            this._pointList = [];
        }
        public start():void
        {
            let vector2 = this._pointList[0];
            let ball:BallObject = new BallObject(this._layer);
            ball.x = vector2.x;
            ball.y = vector2.y;
            this._ballList.push(ball);
        }
        public enterFrame():void
        {
            let n:number = this._ballList.length;
            for(let i:number = 0;i<n;i++)
            {
                let ballObject = this._ballList[i];
                ballObject.count += this._speed;
            }
            this.checkPosition();
            n = this._ballList.length;
            for(let i:number = 0;i<n;i++)
            {
                let ballObject = this._ballList[i];
                let vector2 = this._pointList[ballObject.count];
                ballObject.x = vector2.x;
                ballObject.y = vector2.y;
            }
        }


        setPointList(pointList: Vector2[]) {
            /*
            if(this._pointList.length == pointList.length)
            {
                return;
            }
            if(this._pointList[this._pointList.length-1].x == pointList)


             */
            this._pointList = pointList;
            let n:number = this._ballList.length;
            for(let i:number = 0;i<n;i++)
            {
                let ballObject = this._ballList[i];
                ballObject.remove();
            }
            this._ballList = [];
        }

        private checkPosition():void
        {
            let n:number = this._ballList.length;
            for(let i:number = 0;i<n;i++)
            {
                let ballObject = this._ballList[i];
                if(ballObject.count >= this._pointList.length)
                {
                    this._ballList.splice(i,1);
                    ballObject.remove();
                    this.checkPosition();
                    break;
                }

            }
        }

        setSpeed(value: string) {
            this._speed = Number(value);
        }
    }
}