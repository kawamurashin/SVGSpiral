var View;
(function (View) {
    var Archimedes;
    (function (Archimedes) {
        var Spiral;
        (function (Spiral) {
            var ArchimedesSpiralManager = (function () {
                function ArchimedesSpiralManager() {
                    var svg = document.getElementById("ArchimedesSpiral");
                    this._polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                    svg.appendChild(this._polyline);
                    this._polyline.setAttributeNS(null, "stroke", "#FFF");
                    this._polyline.setAttributeNS(null, "stroke-width", "2");
                    this._polyline.setAttributeNS(null, "fill", "none");
                }
                ArchimedesSpiralManager.prototype.draw = function () {
                    var svg = document.getElementById("ArchimedesSpiral");
                    var width = Number(svg.getAttribute("width"));
                    var height = Number(svg.getAttribute("height"));
                    var cx = width * 0.5;
                    var cy = height * 0.5;
                    var input = document.getElementById("ArchimedesRotationSlider");
                    var rotation = Number(input.value);
                    var radius = ((-10 + width * 0.5) / (2 * Math.PI * rotation));
                    input = document.getElementById("ArchimedesStartAngleSlider");
                    var startAngle = Number(input.value);
                    var startTheta = startAngle * Math.PI / 180;
                    input = document.querySelector("input:checked[name=ArchimedesClockwiseRadio]");
                    var clockwise = Number(input.value);
                    var value = cx + "," + cy + " ";
                    var n = 360 * rotation;
                    for (var i = 0; i < n; i++) {
                        var count = i * (Math.PI / 180);
                        var theta = startTheta + i * (Math.PI / 180) * clockwise;
                        var x = cx + radius * count * Math.cos(theta);
                        var y = cy + radius * count * Math.sin(theta);
                        value += x + "," + y + " ";
                    }
                    this._polyline.setAttributeNS(null, "points", value);
                };
                return ArchimedesSpiralManager;
            }());
            Spiral.ArchimedesSpiralManager = ArchimedesSpiralManager;
        })(Spiral = Archimedes.Spiral || (Archimedes.Spiral = {}));
    })(Archimedes = View.Archimedes || (View.Archimedes = {}));
})(View || (View = {}));
var View;
(function (View) {
    var Archimedes;
    (function (Archimedes) {
        var ArchimedesSpiralManager = View.Archimedes.Spiral.ArchimedesSpiralManager;
        var ArchimedesManager = (function () {
            function ArchimedesManager() {
                var _this = this;
                this._spiral = new ArchimedesSpiralManager();
                this._spiral.draw();
                this.setInputValue();
                var change = function () {
                    _this.changeHandler();
                };
                var mousemove = function () {
                    _this.mousemoveHandler();
                };
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
            }
            ArchimedesManager.prototype.changeHandler = function () {
                this.setInputValue();
                this._spiral.draw();
            };
            ArchimedesManager.prototype.mousemoveHandler = function () {
                this.setInputValue();
                this._spiral.draw();
            };
            ArchimedesManager.prototype.setInputValue = function () {
                var input = document.getElementById("ArchimedesRotationSlider");
                document.getElementById("ArchimedesRotationValue").textContent = input.value;
                input = document.getElementById("ArchimedesStartAngleSlider");
                document.getElementById("ArchimedesStartAngleValue").textContent = input.value + "°";
            };
            return ArchimedesManager;
        }());
        Archimedes.ArchimedesManager = ArchimedesManager;
    })(Archimedes = View.Archimedes || (View.Archimedes = {}));
})(View || (View = {}));
var View;
(function (View) {
    var LogarithmicSpiralManager;
    (function (LogarithmicSpiralManager_1) {
        var LogarithmicSpiralManager = (function () {
            function LogarithmicSpiralManager() {
                var svg = document.getElementById("LogarithmicSpiral");
                this._polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                svg.appendChild(this._polyline);
                this._polyline.setAttributeNS(null, "stroke", "#FFF");
                this._polyline.setAttributeNS(null, "stroke-width", "2");
                this._polyline.setAttributeNS(null, "fill", "none");
            }
            LogarithmicSpiralManager.prototype.draw = function () {
                var svg = document.getElementById("LogarithmicSpiral");
                var width = Number(svg.getAttribute("width"));
                var height = Number(svg.getAttribute("height"));
                var cx = width * 0.5;
                var cy = height * 0.5;
                var input = document.getElementById("LogarithmicRotationSlider");
                var rotation = Number(input.value);
                input = document.getElementById("LogarithmicStartSlider");
                var startAngle = Number(input.value);
                var startTheta = startAngle * Math.PI / 180;
                input = document.querySelector("input:checked[name=LogarithmicClockwiseRadio]");
                var clockwise = Number(input.value);
                var a = 1;
                var b = Math.log((width * 0.5 - 10) / a) / (2 * Math.PI * rotation);
                var value = cx + "," + cy + " ";
                var n = rotation * 360;
                for (var i = 0; i < n; i++) {
                    var count = i * (Math.PI / 180);
                    var radius = Math.pow(Math.E, b * count);
                    var theta = startTheta + i * (Math.PI / 180) * clockwise;
                    var x = cx + radius * Math.cos(theta);
                    var y = cy + radius * Math.sin(theta);
                    value += x + "," + y + " ";
                }
                this._polyline.setAttributeNS(null, "points", value);
            };
            return LogarithmicSpiralManager;
        }());
        LogarithmicSpiralManager_1.LogarithmicSpiralManager = LogarithmicSpiralManager;
    })(LogarithmicSpiralManager = View.LogarithmicSpiralManager || (View.LogarithmicSpiralManager = {}));
})(View || (View = {}));
var View;
(function (View) {
    var Logarithmic;
    (function (Logarithmic) {
        var LogarithmicSpiralManager = View.LogarithmicSpiralManager.LogarithmicSpiralManager;
        var LogarithmicManager = (function () {
            function LogarithmicManager() {
                var _this = this;
                var change = function () {
                    _this.changeHandler();
                };
                var mousemove = function () {
                    _this.mousemoveHandler();
                };
                this._spiral = new LogarithmicSpiralManager();
                this._spiral.draw();
                this.setInputValue();
                var input = document.getElementById("LogarithmicRotationSlider");
                input.addEventListener("change", change);
                input.addEventListener("mousemove", mousemove);
                input = document.getElementById("LogarithmicStartSlider");
                input.addEventListener("change", change);
                input.addEventListener("mousemove", mousemove);
                var checkOption = document.getElementsByName("LogarithmicClockwiseRadio");
                var n = checkOption.length;
                for (var i = 0; i < n; i++) {
                    var check = checkOption[i];
                    check.addEventListener("change", change);
                }
            }
            LogarithmicManager.prototype.changeHandler = function () {
                this.setInputValue();
                this._spiral.draw();
            };
            LogarithmicManager.prototype.mousemoveHandler = function () {
                this.setInputValue();
                this._spiral.draw();
            };
            LogarithmicManager.prototype.setInputValue = function () {
                var input = document.getElementById("LogarithmicRotationSlider");
                document.getElementById("LogarithmicRotationValue").textContent = input.value;
                input = document.getElementById("LogarithmicStartSlider");
                document.getElementById("LogarithmicStartAngleValue").textContent = input.value + "°";
            };
            return LogarithmicManager;
        }());
        Logarithmic.LogarithmicManager = LogarithmicManager;
    })(Logarithmic = View.Logarithmic || (View.Logarithmic = {}));
})(View || (View = {}));
var View;
(function (View) {
    var ArchimedesManager = View.Archimedes.ArchimedesManager;
    var LogarithmicManager = View.Logarithmic.LogarithmicManager;
    var ViewManager = (function () {
        function ViewManager() {
            var archimedesManager = new ArchimedesManager();
            var logarithmicManager = new LogarithmicManager();
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