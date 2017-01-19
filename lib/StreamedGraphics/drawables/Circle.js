"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lineStyleStore_1 = require("./lineStyleStore");

var Circle = function () {
    function Circle(args) {
        _classCallCheck(this, Circle);

        this.props = args;
    }

    _createClass(Circle, [{
        key: "drawOn",
        value: function drawOn(g) {
            var prevLineStyle = lineStyleStore_1.getLineStyle(g);
            lineStyleStore_1.setLineStyle(g, this.props.lineStyle);
            g.beginFill(this.props.color, this.props.alpha || 1);
            g.drawCircle(this.props.x, this.props.y, this.props.radius);
            g.endFill();
            lineStyleStore_1.setLineStyle(g, prevLineStyle);
        }
    }]);

    return Circle;
}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Circle;