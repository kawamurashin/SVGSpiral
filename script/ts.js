var View;
(function (View) {
    var Archimedes;
    (function (Archimedes) {
        var ArchimedesManager = (function () {
            function ArchimedesManager() {
                var svg = document.getElementById("ArchimedesSpiral");
                this._polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                svg.appendChild(this._polyline);
                this._polyline.setAttributeNS(null, "stroke", "#FFF");
                this._polyline.setAttributeNS(null, "stroke-width", "2");
                this._polyline.setAttributeNS(null, "fill", "none");
                var width = Number(svg.getAttribute("width"));
                var height = Number(svg.getAttribute("height"));
                var cx = width * 0.5;
                var cy = height * 0.5;
                var rotation = 3;
                var radius = ((-10 + width * 0.5) / (2 * Math.PI * rotation));
                var value = cx + "," + cy + " ";
                var n = 360 * rotation;
                for (var i = 0; i < n; i++) {
                    var count = i * (Math.PI / 180);
                    var theta = i * (Math.PI / 180);
                    var x = cx + radius * count * Math.cos(theta);
                    var y = cy + radius * count * Math.sin(theta);
                    value += x + "," + y + " ";
                }
                this._polyline.setAttributeNS(null, "points", value);
            }
            return ArchimedesManager;
        }());
        Archimedes.ArchimedesManager = ArchimedesManager;
    })(Archimedes = View.Archimedes || (View.Archimedes = {}));
})(View || (View = {}));
var View;
(function (View) {
    var Logarithmic;
    (function (Logarithmic) {
        var LogarithmicManager = (function () {
            function LogarithmicManager() {
                var svg = document.getElementById("LogarithmicSpiral");
                this._polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
                svg.appendChild(this._polyline);
                this._polyline.setAttributeNS(null, "stroke", "#FFF");
                this._polyline.setAttributeNS(null, "stroke-width", "2");
                this._polyline.setAttributeNS(null, "fill", "none");
                var width = Number(svg.getAttribute("width"));
                var height = Number(svg.getAttribute("height"));
                var cx = width * 0.5;
                var cy = height * 0.5;
                var rotation = 3;
                var a = 1;
                var b = Math.log((width * 0.5 - 10) / a) / (2 * Math.PI * rotation);
                var value = cx + "," + cy + " ";
                var n = rotation * 360;
                for (var i = 0; i < n; i++) {
                    var count = i * (Math.PI / 180);
                    var radius = Math.pow(Math.E, b * count);
                    var theta = i * (Math.PI / 180);
                    var x = cx + radius * Math.cos(theta);
                    var y = cy + radius * Math.sin(theta);
                    value += x + "," + y + " ";
                }
                this._polyline.setAttributeNS(null, "points", value);
            }
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