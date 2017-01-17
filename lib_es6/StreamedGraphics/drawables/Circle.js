"use strict";
const lineStyleStore_1 = require("./lineStyleStore");
class Circle {
    constructor(args) {
        this.props = args;
    }
    draw(g) {
        const prevLineStyle = lineStyleStore_1.getLineStyle(g);
        lineStyleStore_1.setLineStyle(g, this.props.lineStyle);
        g.beginFill(this.props.color, this.props.alpha || 1);
        g.drawCircle(this.props.x, this.props.y, this.props.radius);
        g.endFill();
        lineStyleStore_1.setLineStyle(g, prevLineStyle);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Circle;
