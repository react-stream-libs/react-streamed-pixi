"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pixi_js_1 = require("pixi.js");
var ReactPixi = require("react-pixi");
var events_1 = require("./events");

var PixiGraphicsWithStream = function (_pixi_js_1$Graphics) {
    _inherits(PixiGraphicsWithStream, _pixi_js_1$Graphics);

    function PixiGraphicsWithStream() {
        _classCallCheck(this, PixiGraphicsWithStream);

        return _possibleConstructorReturn(this, (PixiGraphicsWithStream.__proto__ || Object.getPrototypeOf(PixiGraphicsWithStream)).apply(this, arguments));
    }

    return PixiGraphicsWithStream;
}(pixi_js_1.Graphics);

exports.PixiGraphicsWithStream = PixiGraphicsWithStream;
function subscribeDrawables(args) {
    var graphicsWithStream = args.graphicsWithStream,
        drawableStream = args.drawableStream;

    graphicsWithStream.subscription = drawableStream.subscribe(function (drawables) {
        // FIXME: implement diffing logic here (faster re-render)
        graphicsWithStream.clear();
        drawables.forEach(function (drawable) {
            return drawable.drawOn(graphicsWithStream);
        });
    });
}
exports.subscribeDrawables = subscribeDrawables;
function unsubscribeDrawables(args) {
    args.graphicsWithStream.subscription.unsubscribe();
}
exports.unsubscribeDrawables = unsubscribeDrawables;
var StreamedGraphics = ReactPixi.CustomPIXIComponent({
    customDisplayObject: function customDisplayObject(props) {
        var graphicsWithStream = new PixiGraphicsWithStream();
        graphicsWithStream.alpha = props.alpha || 1;
        graphicsWithStream.interactive = events_1.hasInteractivity(props);
        events_1.applyInteractivity(graphicsWithStream, props);
        subscribeDrawables({
            graphicsWithStream: graphicsWithStream,
            drawableStream: props.drawableStream
        });
        return graphicsWithStream;
    },
    customApplyProps: function customApplyProps(graphicsWithStream, oldProps, newProps) {
        graphicsWithStream.interactive = events_1.hasInteractivity(newProps);
        graphicsWithStream.alpha = newProps.alpha || 1;
        events_1.unapplyInteractivity(graphicsWithStream, oldProps);
        events_1.applyInteractivity(graphicsWithStream, newProps);
        if (oldProps.drawableStream != newProps.drawableStream) {
            unsubscribeDrawables({ graphicsWithStream: graphicsWithStream });
            subscribeDrawables({
                graphicsWithStream: graphicsWithStream, drawableStream: newProps.drawableStream
            });
        }
    },
    customWillDetach: function customWillDetach(graphicsWithStream) {
        unsubscribeDrawables({ graphicsWithStream: graphicsWithStream });
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StreamedGraphics;