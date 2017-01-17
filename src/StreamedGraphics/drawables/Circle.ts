import IDrawable from './IDrawable';
import { Graphics } from 'pixi.js';
import { getLineStyle, setLineStyle, LineStyleType } from './lineStyleStore';

export type CircleProps = {
  x: number, y: number,
  radius: number,
  color: number,
  lineStyle?: LineStyleType,
};
export default class Circle implements IDrawable {
  props: CircleProps;
  constructor(args: CircleProps) {
    this.props = args;
  }
  draw(g: Graphics) {
    const prevLineStyle = getLineStyle(g);
    setLineStyle(g, this.props.lineStyle);
    g.beginFill(this.props.color);
    g.drawCircle(this.props.x, this.props.y, this.props.radius);
    g.endFill();
    setLineStyle(g, prevLineStyle);
  }
}