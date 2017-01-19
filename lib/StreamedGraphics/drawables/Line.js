"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lineStyleStore_1 = require("./lineStyleStore");

var Line = function () {
    function Line(args) {
        _classCallCheck(this, Line);

        this.props = args;
    }

    _createClass(Line, [{
        key: "drawOn",
        value: function drawOn(g) {
            var prevLineStyle = lineStyleStore_1.getLineStyle(g);
            lineStyleStore_1.setLineStyle(g, this.props);
            g.beginFill(0, 0);
            g.moveTo(this.props.x1, this.props.y1);
            g.lineTo(this.props.x2, this.props.y2);
            g.endFill();
            lineStyleStore_1.setLineStyle(g, prevLineStyle);
        }
    }]);

    return Line;
}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Line;