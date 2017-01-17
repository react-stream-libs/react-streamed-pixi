"use strict";

const lineStyleStore_1 = require("./lineStyleStore");
class Rectangle {
    constructor(args) {
        this.props = args;
    }
    draw(g) {
        const prevLineStyle = lineStyleStore_1.getLineStyle(g);
        lineStyleStore_1.setLineStyle(g, this.props.lineStyle);
        g.beginFill(this.props.color, this.props.alpha || 1);
        g.drawRect(this.props.x, this.props.y, this.props.width, this.props.height);
        g.endFill();
        lineStyleStore_1.setLineStyle(g, prevLineStyle);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Rectangle;