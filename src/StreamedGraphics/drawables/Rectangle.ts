import IDrawable from './IDrawable';
import { Graphics } from 'pixi.js';
import { getLineStyle, applyLineStyle } from './lineStyleStore';

export type RectangleProps = {
  x: number, y: number,
  width: number, height: number,
  color: number,
  lineColor?: number, lineWidth?: number, lineAlpha?: number,
};
export default class Rectangle implements IDrawable {
  props: RectangleProps;
  constructor(args: RectangleProps) {
    this.props = args;
  }
  draw(g: Graphics) {
    const prevLineStyle = getLineStyle(g);
    g.lineStyle(
      this.props.lineWidth || 0,
      this.props.lineColor || 0,
      this.props.lineAlpha || 1
    );
    g.beginFill(this.props.color);
    g.drawRect(this.props.x, this.props.y, this.props.width, this.props.height);
    g.endFill();
    applyLineStyle(g, prevLineStyle);
  }
}