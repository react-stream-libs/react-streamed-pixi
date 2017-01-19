"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pixi_js_1 = require("pixi.js");

var GraphicsWithLineAlpha = function (_pixi_js_1$Graphics) {
    _inherits(GraphicsWithLineAlpha, _pixi_js_1$Graphics);

    function GraphicsWithLineAlpha() {
        _classCallCheck(this, GraphicsWithLineAlpha);

        return _possibleConstructorReturn(this, (GraphicsWithLineAlpha.__proto__ || Object.getPrototypeOf(GraphicsWithLineAlpha)).apply(this, arguments));
    }

    return GraphicsWithLineAlpha;
}(pixi_js_1.Graphics);

exports.GraphicsWithLineAlpha = GraphicsWithLineAlpha;
;
function getLineStyle(g) {
    var graphicsWithLineAlpha = g;
    return {
        color: graphicsWithLineAlpha.lineColor,
        width: graphicsWithLineAlpha.lineWidth,
        alpha: graphicsWithLineAlpha.lineAlpha
    };
}
exports.getLineStyle = getLineStyle;
function setLineStyle(g, lineStyle) {
    var _lineStyle = lineStyle || {};
    g.lineStyle(_lineStyle.width || 0, _lineStyle.color || 0, _lineStyle.alpha || 1);
}
exports.setLineStyle = setLineStyle;