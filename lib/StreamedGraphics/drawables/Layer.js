"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pixi_js_1 = require("pixi.js");
var events_1 = require("../events");

var Layer = function () {
    function Layer(args) {
        _classCallCheck(this, Layer);

        this.props = args;
    }

    _createClass(Layer, [{
        key: "drawOn",
        value: function drawOn(g) {
            var layer = new pixi_js_1.Graphics();
            events_1.applyInteractivity(layer, this.props);
            this.props.children.forEach(function (child) {
                return child.drawOn(layer);
            });
        }
    }]);

    return Layer;
}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Layer;