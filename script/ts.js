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
    var Spiral;
    (function (Spiral) {
        var GraphManager = (function () {
            function GraphManager() {
            }
            GraphManager.prototype.init = function () {
                this._polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                this._svg.appendChild(this._polyline);
                this._polyline.setAttributeNS(null, "stroke", "#FFF");
                this._polyline.setAttributeNS(null, "stroke-width", "2");
                this._polyline.setAttributeNS(null, "fill", "none");
                var width = Number(this._svg.getAttribute("width"));
                var height = Number(this._svg.getAttribute("height"));
                this._centerX = width * 0.5;
                this._centerY = height * 0.5;
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
        var Spiral;
        (function (Spiral) {
            var GraphManager = View.Spiral.GraphManager;
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
                        var x = this._centerX + radius * Math.cos(rad);
                        var y = this._centerY + radius * Math.sin(rad);
                        value += x + "," + y + " ";
                    }
                    this._polyline.setAttributeNS(null, "points", value);
                };
                return ArchimedesGraphManager;
            }(GraphManager));
            Spiral.ArchimedesGraphManager = ArchimedesGraphManager;
        })(Spiral = Archimedes.Spiral || (Archimedes.Spiral = {}));
    })(Archimedes = View.Archimedes || (View.Archimedes = {}));
})(View || (View = {}));
var View;
(function (View) {
    var Spiral;
    (function (Spiral) {
        var SpiralManager = (function () {
            function SpiralManager() {
            }
            SpiralManager.prototype.changeHandler = function () {
                this.setInputValue();
                this._graph.draw();
            };
            SpiralManager.prototype.mousemoveHandler = function () {
                this.setInputValue();
                this._graph.draw();
            };
            SpiralManager.prototype.setInputValue = function () {
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
        var ArchimedesGraphManager = View.Archimedes.Spiral.ArchimedesGraphManager;
        var SpiralManager = View.Spiral.SpiralManager;
        var ArchimedesManager = (function (_super) {
            __extends(ArchimedesManager, _super);
            function ArchimedesManager() {
                var _this = _super.call(this) || this;
                var change = function () {
                    _this.changeHandler();
                };
                var mousemove = function () {
                    _this.mousemoveHandler();
                };
                _this._graph = new ArchimedesGraphManager();
                _this._graph.draw();
                _this.setInputValue();
                var input = document.getElementById("ArchimedesRotationSlider");
                input.addEventListener("change", change);
                input.addEventListener("mousemove", mousemove);
                input = document.getElementById("ArchimedesStartAngleSlider");
                input.addEventListener("change", change);
                input.addEventListener("mousemove", mousemove);
                var checkOption = document.getElementsByName("ArchimedesClockwiseRadio");
                var n = checkOption.length;
                for (var i = 0; i < n; i++) {
                    var check = checkOption[i];
                    check.addEventListener("change", change);
                }
                return _this;
            }
            ArchimedesManager.prototype.setInputValue = function () {
                _super.prototype.setInputValue.call(this);
                var input = document.getElementById("ArchimedesRotationSlider");
                document.getElementById("ArchimedesRotationValue").textContent = input.value;
                input = document.getElementById("ArchimedesStartAngleSlider");
                document.getElementById("ArchimedesStartAngleValue").textContent = input.value + "°";
            };
            return ArchimedesManager;
        }(SpiralManager));
        Archimedes.ArchimedesManager = ArchimedesManager;
    })(Archimedes = View.Archimedes || (View.Archimedes = {}));
})(View || (View = {}));
var View;
(function (View) {
    var LogarithmicSpiralManager;
    (function (LogarithmicSpiralManager) {
        var GraphManager = View.Spiral.GraphManager;
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
                    var x = this._centerX + radius * Math.cos(theta);
                    var y = this._centerY + radius * Math.sin(theta);
                    value += x + "," + y + " ";
                }
                this._polyline.setAttributeNS(null, "points", value);
            };
            return LogarithmicGraphManager;
        }(GraphManager));
        LogarithmicSpiralManager.LogarithmicGraphManager = LogarithmicGraphManager;
    })(LogarithmicSpiralManager = View.LogarithmicSpiralManager || (View.LogarithmicSpiralManager = {}));
})(View || (View = {}));
var View;
(function (View) {
    var Logarithmic;
    (function (Logarithmic) {
        var LogarithmicGraphManager = View.LogarithmicSpiralManager.LogarithmicGraphManager;
        var SpiralManager = View.Spiral.SpiralManager;
        var LogarithmicManager = (function (_super) {
            __extends(LogarithmicManager, _super);
            function LogarithmicManager() {
                var _this = _super.call(this) || this;
                var change = function () {
                    _this.changeHandler();
                };
                var mousemove = function () {
                    _this.mousemoveHandler();
                };
                _this._graph = new LogarithmicGraphManager();
                _this._graph.draw();
                _this.setInputValue();
                var rotationInput;
                var startAngleInput;
                rotationInput = document.getElementById("LogarithmicRotationSlider");
                rotationInput.addEventListener("change", change);
                rotationInput.addEventListener("mousemove", mousemove);
                startAngleInput = document.getElementById("LogarithmicStartAngleSlider");
                startAngleInput.addEventListener("change", change);
                startAngleInput.addEventListener("mousemove", mousemove);
                var checkOption = document.getElementsByName("LogarithmicClockwiseRadio");
                var n = checkOption.length;
                for (var i = 0; i < n; i++) {
                    var check = checkOption[i];
                    check.addEventListener("change", change);
                }
                return _this;
            }
            LogarithmicManager.prototype.setInputValue = function () {
                _super.prototype.setInputValue.call(this);
                var input = document.getElementById("LogarithmicRotationSlider");
                document.getElementById("LogarithmicRotationValue").textContent = input.value;
                input = document.getElementById("LogarithmicStartAngleSlider");
                document.getElementById("LogarithmicStartAngleValue").textContent = input.value + "°";
            };
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
                    var x = this._centerX + radius * Math.cos(rad);
                    var y = this._centerY + radius * Math.sin(rad);
                    value += x + "," + y + " ";
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
                var change = function () {
                    _this.changeHandler();
                };
                var mousemove = function () {
                    _this.mousemoveHandler();
                };
                _this._graph = new Lituus.LituusGraphManager();
                _this._graph.draw();
                _this.setInputValue();
                var input = document.getElementById("LituusRotationSlider");
                input.addEventListener("change", change);
                input.addEventListener("mousemove", mousemove);
                input = document.getElementById("LituusStartAngleSlider");
                input.addEventListener("change", change);
                input.addEventListener("mousemove", mousemove);
                var checkOption = document.getElementsByName("LituusClockwiseRadio");
                var n = checkOption.length;
                for (var i = 0; i < n; i++) {
                    var check = checkOption[i];
                    check.addEventListener("change", change);
                }
                return _this;
            }
            LituusManager.prototype.setInputValue = function () {
                _super.prototype.setInputValue.call(this);
                var input = document.getElementById("LituusRotationSlider");
                document.getElementById("LituusRotationValue").textContent = input.value;
                input = document.getElementById("LituusStartAngleSlider");
                document.getElementById("LituusStartAngleValue").textContent = input.value + "°";
            };
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
            var archimedesManager = new ArchimedesManager();
            var logarithmicManager = new LogarithmicManager();
            var lituusManager = new LituusManager();
        }
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
//# sourceMappingURL=ts.js.map