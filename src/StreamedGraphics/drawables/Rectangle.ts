import IDrawable from './IDrawable';
import { Graphics } from 'pixi.js';
import { getLineStyle, setLineStyle, LineStyleType } from './lineStyleStore';

export type RectangleProps = {
  x: number, y: number,
  width: number, height: number,
  color: number, alpha?: number,
  lineStyle?: LineStyleType,
};
export default class Rectangle implements IDrawable {
  props: RectangleProps;
  constructor(args: RectangleProps) {
    this.props = args;
  }
  draw(g: Graphics) {
    const prevLineStyle = getLineStyle(g);
    setLineStyle(g, this.props.lineStyle);
    g.beginFill(this.props.color, this.props.alpha || 1);
    g.drawRect(this.props.x, this.props.y, this.props.width, this.props.height);
    g.endFill();
    setLineStyle(g, prevLineStyle);
  }
}