"use strict";
const pixi_js_1 = require("pixi.js");
const events_1 = require("../events");
class Layer {
    constructor(args) {
        this.props = args;
    }
    drawOn(g) {
        const layer = new pixi_js_1.Graphics();
        events_1.applyInteractivity(layer, this.props);
        this.props.children.forEach(child => child.drawOn(layer));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Layer;
