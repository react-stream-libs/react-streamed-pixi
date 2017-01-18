"use strict";

const lineStyleStore_1 = require("./lineStyleStore");
class Line {
    constructor(args) {
        this.props = args;
    }
    drawOn(g) {
        const prevLineStyle = lineStyleStore_1.getLineStyle(g);
        lineStyleStore_1.setLineStyle(g, this.props);
        g.beginFill(0, 0);
        g.moveTo(this.props.x1, this.props.y1);
        g.lineTo(this.props.x2, this.props.y2);
        g.endFill();
        lineStyleStore_1.setLineStyle(g, prevLineStyle);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Line;