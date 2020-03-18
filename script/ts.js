var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View;
(function (View) {
    var Geom;
    (function (Geom) {
        var Vector2 = (function () {
            function Vector2() {
            }
            return Vector2;
        }());
        Geom.Vector2 = Vector2;
    })(Geom = View.Geom || (View.Geom = {}));
})(View || (View = {}));
var View;
(function (View) {
    var Spiral;
    (function (Spiral) {
        var GraphManager = (function () {
            function GraphManager() {
            }
            Object.defineProperty(GraphManager.prototype, "pointList", {
                get: function () {
                    return this._pointList;
                },
                enumerable: true,
                configurable: true
            });
            GraphManager.prototype.init = function () {
                var _this = this;
                this._polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                this._svg.appendChild(this._polyline);
                this._polyline.setAttributeNS(null, "stroke", "#FFF");
                this._polyline.setAttributeNS(null, "stroke-width", "2");
                this._polyline.setAttributeNS(null, "fill", "none");
                var width = Number(this._svg.getAttribute("width"));
                var height = Number(this._svg.getAttribute("height"));
                this._centerX = width * 0.5;
                this._centerY = height * 0.5;
                var click = function () {
                    _this.clickHandler();
                };
                this._svg.addEventListener("click", click);
            };
            GraphManager.prototype.clickHandler = function () {
            };
            GraphManager.prototype.draw = function () {
            };
            return GraphManager;
        }());
        Spiral.GraphManager = GraphManager;
    })(Spiral = View.Spiral || (View.Spiral = {}));
})(View || (View = {}));
var View;
(function (View) {
    var Archimedes;
    (function (Archimedes) {
        var GraphManager = View.Spiral.GraphManager;
        var Vector2 = View.Geom.Vector2;
        var ArchimedesGraphManager = (function (_super) {
            __extends(ArchimedesGraphManager, _super);
            function ArchimedesGraphManager() {
                var _this = _super.call(this) || this;
                _this._svg = document.getElementById("ArchimedesSpiral");
                _this.init();
                return _this;
            }
            ArchimedesGraphManager.prototype.draw = function () {
                _super.prototype.draw.call(this);
                this._pointList = [];
                var input = document.getElementById("ArchimedesRotationSlider");
                var rotation = Number(input.value);
                var a = ((-10 + this._centerX) / (2 * Math.PI * rotation));
                input = document.getElementById("ArchimedesStartAngleSlider");
                var startAngle = Number(input.value);
                var startTheta = startAngle * Math.PI / 180;
                input = document.querySelector("input:checked[name=ArchimedesClockwiseRadio]");
                var clockwise = Number(input.value);
                var value = this._centerX + "," + this._centerY + " ";
                var n = 360 * rotation;
                for (var i = 0; i < n; i++) {
                    var theta = i * (Math.PI / 180);
                    var radius = a * theta;
                    var rad = startTheta + i * (Math.PI / 180) * clockwise;
                    var vector2 = new Vector2();
                    vector2.x = this._centerX + radius * Math.cos(rad);
                    vector2.y = this._centerY + radius * Math.sin(rad);
                    value += vector2.x + "," + vector2.y + " ";
                    this._pointList.push(vector2);
                }
                this._polyline.setAttributeNS(null, "points", value);
            };
            return ArchimedesGraphManager;
        }(GraphManager));
        Archimedes.ArchimedesGraphManager = ArchimedesGraphManager;
    })(Archimedes = View.Archimedes || (View.Archimedes = {}));
})(View || (View = {}));
var View;
(function (View) {
    var Spiral;
    (function (Spiral) {
        var BallManager = (function () {
            function BallManager(layer) {
                this._layer = layer;
                this._ballList = [];
                this._pointList = [];
            }
            BallManager.prototype.start = function () {
                var vector2 = this._pointList[0];
                var ball = new Spiral.BallObject(this._layer);
                ball.x = vector2.x;
                ball.y = vector2.y;
                this._ballList.push(ball);
            };
            BallManager.prototype.enterFrame = function () {
                var n = this._ballList.length;
                for (var i = 0; i < n; i++) {
                    var ballObject = this._ballList[i];
                    ballObject.count += this._speed;
                }
                this.checkPosition();
                n = this._ballList.length;
                for (var i = 0; i < n; i++) {
                    var ballObject = this._ballList[i];
                    var vector2 = this._pointList[ballObject.count];
                    ballObject.x = vector2.x;
                    ballObject.y = vector2.y;
                }
            };
            BallManager.prototype.setPointList = function (pointList) {
                this._pointList = pointList;
                var n = this._ballList.length;
                for (var i = 0; i < n; i++) {
                    var ballObject = this._ballList[i];
                    ballObject.remove();
                }
                this._ballList = [];
            };
            BallManager.prototype.checkPosition = function () {
                var n = this._ballList.length;
                for (var i = 0; i < n; i++) {
                    var ballObject = this._ballList[i];
                    if (ballObject.count >= this._pointList.length) {
                        this._ballList.splice(i, 1);
                        ballObject.remove();
                        this.checkPosition();
                        break;
                    }
                }
            };
            BallManager.prototype.setSpeed = function (value) {
                this._speed = Number(value);
            };
            return BallManager;
        }());
        Spiral.BallManager = BallManager;
    })(Spiral = View.Spiral || (View.Spiral = {}));
})(View || (View = {}));
var View;
(function (View) {
    var Spiral;
    (function (Spiral) {
        var SpiralManager = (function () {
            function SpiralManager() {
            }
            SpiralManager.prototype.init = function () {
                var _this = this;
                var change = function () {
                    _this.changeHandler();
                };
                var mousemove = function () {
                    _this.mousemoveHandler();
                };
                var mousedown = function () {
                    _this.mousedownHandler();
                };
                var element = document.createElement('div');
                var wrapper = document.getElementById("contents");
                wrapper.appendChild(element);
                element.innerHTML = this._name + "<br>";
                var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("id", this._svgKey);
                svg.setAttribute("class", "svg");
                svg.setAttribute("width", "480");
                svg.setAttribute("height", "480");
                svg.setAttribute("viewBox", "0 0 480 480");
                element.appendChild(svg);
                var child = document.createElement('div');
                element.appendChild(child);
                var label = document.createElement('label');
                label.setAttribute("for", this._rotationSliderKey);
                label.setAttribute("class", "title-head");
                label.innerHTML = "Rotation";
                child.appendChild(label);
                this._rotationInput = document.createElement('input');
                this._rotationInput.setAttribute("type", "range");
                this._rotationInput.setAttribute("id", this._rotationSliderKey);
                this._rotationInput.setAttribute("value", "5");
                this._rotationInput.setAttribute("min", "2");
                this._rotationInput.setAttribute("max", "50");
                this._rotationInput.setAttribute("step", "0.1");
                child.appendChild(this._rotationInput);
                this._rotationValue = document.createElement('span');
                this._rotationValue.setAttribute("id", this._rotationValueKey);
                child.appendChild(this._rotationValue);
                child = document.createElement('div');
                element.appendChild(child);
                label = document.createElement('label');
                label.setAttribute("for", this._startAngleSliderKey);
                label.setAttribute("class", "title-head");
                label.innerHTML = "Starting Angle";
                child.appendChild(label);
                this._startAngleInput = document.createElement('input');
                this._startAngleInput.setAttribute("type", "range");
                this._startAngleInput.setAttribute("id", this._startAngleSliderKey);
                this._startAngleInput.setAttribute("value", "0");
                this._startAngleInput.setAttribute("min", "0");
                this._startAngleInput.setAttribute("max", "360");
                child.appendChild(this._startAngleInput);
                this._startAngleValue = document.createElement('span');
                this._startAngleValue.setAttribute("id", this._startAngleValueKey);
                child.appendChild(this._startAngleValue);
                child = document.createElement('div');
                element.appendChild(child);
                var radio = document.createElement('input');
                radio.setAttribute("type", "radio");
                radio.setAttribute("name", this._radioKey);
                radio.setAttribute("value", "1");
                radio.checked = true;
                child.appendChild(radio);
                child.innerHTML += "clockwise ";
                radio = document.createElement('input');
                radio.setAttribute("type", "radio");
                radio.setAttribute("name", this._radioKey);
                radio.setAttribute("value", "-1");
                child.appendChild(radio);
                child.innerHTML += "anticlockwise";
                this._clockwiseList = document.getElementsByName(this._radioKey);
                var radioElement = this._clockwiseList[0];
                radioElement.checked = true;
                child = document.createElement('div');
                element.appendChild(child);
                label = document.createElement('label');
                label.setAttribute("for", this._speedSliderKey);
                label.setAttribute("class", "title-head");
                label.innerHTML = "Speed";
                child.appendChild(label);
                this._speedInput = document.createElement('input');
                this._speedInput.setAttribute("type", "range");
                this._speedInput.setAttribute("id", this._speedSliderKey);
                this._speedInput.setAttribute("value", "5");
                this._speedInput.setAttribute("min", "1");
                this._speedInput.setAttribute("max", "20");
                child.appendChild(this._speedInput);
                this._speedValue = document.createElement('span');
                this._speedValue.setAttribute("id", this._speedValueKey);
                child.appendChild(this._speedValue);
                this._rotationInput.addEventListener("change", change);
                this._rotationInput.addEventListener("mousedown", mousedown);
                this._startAngleInput.addEventListener("change", change);
                this._startAngleInput.addEventListener("mousedown", mousedown);
                var speed = function () {
                    _this.speedHandler();
                };
                this._speedInput.addEventListener("change", speed);
                this._speedInput.addEventListener("mousemove", speed);
                var n = this._clockwiseList.length;
                for (var i = 0; i < n; i++) {
                    var check = this._clockwiseList[i];
                    check.addEventListener("change", change);
                }
                var click = function () {
                    _this.screenClickHandler();
                };
                svg.addEventListener("click", click);
                var layer = document.createElementNS("http://www.w3.org/2000/svg", "g");
                svg.appendChild(layer);
                this._ballManager = new Spiral.BallManager(layer);
            };
            SpiralManager.prototype.enterFrame = function () {
                this._ballManager.enterFrame();
            };
            SpiralManager.prototype.draw = function () {
                this.setInputValue();
                this._graph.draw();
                var pointList = this._graph.pointList;
                this._ballManager.setPointList(pointList);
            };
            SpiralManager.prototype.setSpeed = function () {
                this._speedValue.textContent = this._speedInput.value;
                this._ballManager.setSpeed(this._speedInput.value);
            };
            SpiralManager.prototype.changeHandler = function () {
                this.draw();
            };
            SpiralManager.prototype.mousedownHandler = function () {
                var _this = this;
                var mousemove = function () {
                    _this.mousemoveHandler();
                };
                var mouseup = function () {
                    window.removeEventListener("mousemove", mousemove);
                    window.removeEventListener("mouseup", mouseup);
                };
                window.addEventListener("mousemove", mousemove);
                window.addEventListener("mouseup", mouseup);
            };
            SpiralManager.prototype.mousemoveHandler = function () {
                this.draw();
            };
            SpiralManager.prototype.speedHandler = function () {
                this.setSpeed();
            };
            SpiralManager.prototype.setInputValue = function () {
                this._rotationValue.textContent = this._rotationInput.value;
                this._startAngleValue.textContent = this._startAngleInput.value + "°";
            };
            SpiralManager.prototype.screenClickHandler = function () {
                this._ballManager.start();
            };
            return SpiralManager;
        }());
        Spiral.SpiralManager = SpiralManager;
    })(Spiral = View.Spiral || (View.Spiral = {}));
})(View || (View = {}));
var View;
(function (View) {
    var Archimedes;
    (function (Archimedes) {
        var ArchimedesGraphManager = View.Archimedes.ArchimedesGraphManager;
        var SpiralManager = View.Spiral.SpiralManager;
        var ArchimedesManager = (function (_super) {
            __extends(ArchimedesManager, _super);
            function ArchimedesManager() {
                var _this = _super.call(this) || this;
                _this._name = "Archimedes' spiral";
                _this._svgKey = "ArchimedesSpiral";
                _this._rotationSliderKey = "ArchimedesRotationSlider";
                _this._rotationValueKey = "ArchimedesRotationValue";
                _this._startAngleSliderKey = "ArchimedesStartAngleSlider";
                _this._startAngleValueKey = "ArchimedesStartAngleValue";
                _this._radioKey = "ArchimedesClockwiseRadio";
                _this._speedSliderKey = "ArchimedesSpeedSlider";
                _this._speedValueKey = "ArchimedesSpeedValue";
                _this.init();
                _this._graph = new ArchimedesGraphManager();
                _this.draw();
                _this.setSpeed();
                return _this;
            }
            return ArchimedesManager;
        }(SpiralManager));
        Archimedes.ArchimedesManager = ArchimedesManager;
    })(Archimedes = View.Archimedes || (View.Archimedes = {}));
})(View || (View = {}));
var View;
(function (View) {
    var Logarithmic;
    (function (Logarithmic) {
        var GraphManager = View.Spiral.GraphManager;
        var Vector2 = View.Geom.Vector2;
        var LogarithmicGraphManager = (function (_super) {
            __extends(LogarithmicGraphManager, _super);
            function LogarithmicGraphManager() {
                var _this = _super.call(this) || this;
                _this._svg = document.getElementById("LogarithmicSpiral");
                _this.init();
                return _this;
            }
            LogarithmicGraphManager.prototype.draw = function () {
                _super.prototype.draw.call(this);
                this._pointList = [];
                var input = document.getElementById("LogarithmicRotationSlider");
                var rotation = Number(input.value);
                input = document.getElementById("LogarithmicStartAngleSlider");
                var startAngle = Number(input.value);
                var startTheta = startAngle * Math.PI / 180;
                input = document.querySelector("input:checked[name=LogarithmicClockwiseRadio]");
                var clockwise = Number(input.value);
                var a = 1;
                var b = Math.log((this._centerY - 10) / a) / (2 * Math.PI * rotation);
                var value = this._centerX + "," + this._centerY + " ";
                var n = rotation * 360;
                for (var i = 0; i < n; i++) {
                    var count = i * (Math.PI / 180);
                    var radius = Math.pow(Math.E, b * count);
                    var theta = startTheta + i * (Math.PI / 180) * clockwise;
                    var vector2 = new Vector2();
                    vector2.x = this._centerX + radius * Math.cos(theta);
                    vector2.y = this._centerY + radius * Math.sin(theta);
                    value += vector2.x + "," + vector2.y + " ";
                    this._pointList.push(vector2);
                }
                this._polyline.setAttributeNS(null, "points", value);
            };
            return LogarithmicGraphManager;
        }(GraphManager));
        Logarithmic.LogarithmicGraphManager = LogarithmicGraphManager;
    })(Logarithmic = View.Logarithmic || (View.Logarithmic = {}));
})(View || (View = {}));
var View;
(function (View) {
    var Logarithmic;
    (function (Logarithmic) {
        var LogarithmicGraphManager = View.Logarithmic.LogarithmicGraphManager;
        var SpiralManager = View.Spiral.SpiralManager;
        var LogarithmicManager = (function (_super) {
            __extends(LogarithmicManager, _super);
            function LogarithmicManager() {
                var _this = _super.call(this) || this;
                _this._name = "Logarithmic Spiral";
                _this._svgKey = "LogarithmicSpiral";
                _this._rotationSliderKey = "LogarithmicRotationSlider";
                _this._rotationValueKey = "LogarithmicRotationValue";
                _this._startAngleSliderKey = "LogarithmicStartAngleSlider";
                _this._startAngleValueKey = "LogarithmicStartAngleValue";
                _this._radioKey = "LogarithmicClockwiseRadio";
                _this._speedSliderKey = "LogarithmicSpeedSlider";
                _this._speedValueKey = "LogarithmicSpeedValue";
                _this.init();
                _this._graph = new LogarithmicGraphManager();
                _this.draw();
                _this.setSpeed();
                return _this;
            }
            return LogarithmicManager;
        }(SpiralManager));
        Logarithmic.LogarithmicManager = LogarithmicManager;
    })(Logarithmic = View.Logarithmic || (View.Logarithmic = {}));
})(View || (View = {}));
var View;
(function (View) {
    var Lituus;
    (function (Lituus) {
        var GraphManager = View.Spiral.GraphManager;
        var Vector2 = View.Geom.Vector2;
        var LituusGraphManager = (function (_super) {
            __extends(LituusGraphManager, _super);
            function LituusGraphManager() {
                var _this = _super.call(this) || this;
                _this._svg = document.getElementById("Lituus");
                _this.init();
                return _this;
            }
            LituusGraphManager.prototype.draw = function () {
                _super.prototype.draw.call(this);
                this._pointList = [];
                var input = document.getElementById("LituusRotationSlider");
                var rotation = Number(input.value);
                var a = 50 * ((-10 + this._centerX) / (2 * Math.PI * rotation));
                input = document.getElementById("LituusStartAngleSlider");
                var startAngle = Number(input.value);
                var startTheta = startAngle * Math.PI / 180;
                input = document.querySelector("input:checked[name=LituusClockwiseRadio]");
                var clockwise = Number(input.value);
                var value = "";
                var n = rotation * 360;
                for (var i = 1; i < n; i++) {
                    var theta = i * (Math.PI / 180);
                    var radius = a / theta;
                    var rad = startTheta + i * (Math.PI / 180) * clockwise;
                    var vector2 = new Vector2();
                    vector2.x = this._centerX + radius * Math.cos(rad);
                    vector2.y = this._centerY + radius * Math.sin(rad);
                    value += vector2.x + "," + vector2.y + " ";
                    this._pointList.push(vector2);
                }
                this._polyline.setAttributeNS(null, "points", value);
            };
            return LituusGraphManager;
        }(GraphManager));
        Lituus.LituusGraphManager = LituusGraphManager;
    })(Lituus = View.Lituus || (View.Lituus = {}));
})(View || (View = {}));
var View;
(function (View) {
    var Lituus;
    (function (Lituus) {
        var SpiralManager = View.Spiral.SpiralManager;
        var LituusManager = (function (_super) {
            __extends(LituusManager, _super);
            function LituusManager() {
                var _this = _super.call(this) || this;
                _this._name = "Lituus";
                _this._svgKey = "Lituus";
                _this._rotationSliderKey = "LituusRotationSlider";
                _this._rotationValueKey = "LituusRotationValue";
                _this._startAngleSliderKey = "LituusStartAngleSlider";
                _this._startAngleValueKey = "LituusStartAngleValue";
                _this._radioKey = "LituusClockwiseRadio";
                _this._speedSliderKey = "LituusSpeedSlider";
                _this._speedValueKey = "LituusSpeedValue";
                _this.init();
                _this._graph = new Lituus.LituusGraphManager();
                _this.draw();
                _this.setSpeed();
                return _this;
            }
            return LituusManager;
        }(SpiralManager));
        Lituus.LituusManager = LituusManager;
    })(Lituus = View.Lituus || (View.Lituus = {}));
})(View || (View = {}));
var View;
(function (View) {
    var ArchimedesManager = View.Archimedes.ArchimedesManager;
    var LogarithmicManager = View.Logarithmic.LogarithmicManager;
    var LituusManager = View.Lituus.LituusManager;
    var ViewManager = (function () {
        function ViewManager() {
            this._sprilManagerList = [];
            var archimedesManager = new ArchimedesManager();
            this._sprilManagerList.push(archimedesManager);
            var logarithmicManager = new LogarithmicManager();
            this._sprilManagerList.push(logarithmicManager);
            var lituusManager = new LituusManager();
            this._sprilManagerList.push(lituusManager);
            this.timeoutHandler();
        }
        ViewManager.prototype.timeoutHandler = function () {
            var _this = this;
            var timeout = function () {
                _this.timeoutHandler();
            };
            var n = this._sprilManagerList.length;
            for (var i = 0; i < n; i++) {
                var spiralManager = this._sprilManagerList[i];
                spiralManager.enterFrame();
            }
            var fps = 1000 / 60;
            setTimeout(timeout, fps);
        };
        return ViewManager;
    }());
    View.ViewManager = ViewManager;
})(View || (View = {}));
var ViewManager = View.ViewManager;
var Main = (function () {
    function Main() {
        var viewManager = new ViewManager();
    }
    return Main;
}());
window.addEventListener("load", function () {
    new Main();
});
var View;
(function (View) {
    var Spiral;
    (function (Spiral) {
        var BallObject = (function () {
            function BallObject(layer) {
                this.count = 0;
                this._x = 0;
                this._y = 0;
                this._layer = layer;
                this._circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                this._circle.r.baseVal.value = 3;
                this._circle.style.setProperty("fill", "#fff");
                this._layer.appendChild(this._circle);
            }
            Object.defineProperty(BallObject.prototype, "x", {
                set: function (value) {
                    this._x = value;
                    this._circle.cx.baseVal.value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BallObject.prototype, "y", {
                set: function (value) {
                    this._y = value;
                    this._circle.cy.baseVal.value = value;
                },
                enumerable: true,
                configurable: true
            });
            BallObject.prototype.remove = function () {
                this._layer.removeChild(this._circle);
            };
            return BallObject;
        }());
        Spiral.BallObject = BallObject;
    })(Spiral = View.Spiral || (View.Spiral = {}));
})(View || (View = {}));
//# sourceMappingURL=ts.js.map