"use strict";
const React = require("react");
const react_dom_1 = require("react-dom");
const pixi_js_1 = require("pixi.js");
const ReactivePixi = require("reactive-pixi");
class ReactStreamedPixi extends React.Component {
    componentDidMount() {
        const canvasDOM = react_dom_1.findDOMNode(this.refs.canvasRef);
        this.renderer = new ReactivePixi.Renderer({
            renderer: pixi_js_1.autoDetectRenderer(this.props.width, this.props.height, {
                view: canvasDOM,
            }),
        });
        this.pixiSubscription = this.props.pixiStream
            .subscribe(rootRenderable => {
            this.renderer.render(rootRenderable);
        });
    }
    render() {
        return (React.createElement("canvas", { ref: "canvasRef" }));
    }
    componentWillUnmount() {
        this.pixiSubscription.unsubscribe();
        delete this.renderer;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReactStreamedPixi;
