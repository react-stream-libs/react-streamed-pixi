"use strict";
const pixi_js_1 = require("pixi.js");
const _ = require("lodash");
const ReactPixi = require("react-pixi");
const events_1 = require("./events");
class PixiGraphicsWithStream extends pixi_js_1.Graphics {
}
exports.PixiGraphicsWithStream = PixiGraphicsWithStream;
function subscribeDrawables(args) {
    const { graphicsWithStream, drawableStream, } = args;
    graphicsWithStream.subscription = drawableStream
        .subscribe((drawables) => {
        // FIXME: implement diffing logic here (faster re-render)
        graphicsWithStream.clear();
        _.forEach(drawables, drawable => drawDrawable({ graphicsWithStream, drawable }));
    });
}
exports.subscribeDrawables = subscribeDrawables;
function drawDrawable(args) {
    const { graphicsWithStream, drawable, } = args;
    drawable.draw(graphicsWithStream);
}
exports.drawDrawable = drawDrawable;
function unsubscribeDrawables(args) {
    args.graphicsWithStream.subscription
        .unsubscribe();
}
exports.unsubscribeDrawables = unsubscribeDrawables;
const StreamedGraphics = ReactPixi.CustomPIXIComponent({
    customDisplayObject(props) {
        const graphicsWithStream = new PixiGraphicsWithStream();
        graphicsWithStream.alpha = props.alpha || 1;
        graphicsWithStream.interactive = events_1.hasInteractivity(props);
        events_1.applyInteractivity(graphicsWithStream, props);
        subscribeDrawables({
            graphicsWithStream,
            drawableStream: props.drawableStream
        });
        return graphicsWithStream;
    },
    customApplyProps(graphicsWithStream, oldProps, newProps) {
        graphicsWithStream.interactive = events_1.hasInteractivity(newProps);
        graphicsWithStream.alpha = newProps.alpha || 1;
        events_1.unapplyInteractivity(graphicsWithStream, oldProps);
        events_1.applyInteractivity(graphicsWithStream, newProps);
        if (oldProps.drawableStream != newProps.drawableStream) {
            unsubscribeDrawables({ graphicsWithStream });
            subscribeDrawables({
                graphicsWithStream, drawableStream: newProps.drawableStream
            });
        }
    },
    customWillDetach(graphicsWithStream) {
        unsubscribeDrawables({ graphicsWithStream });
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StreamedGraphics;
