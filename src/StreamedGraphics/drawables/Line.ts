import IDrawable from './IDrawable';
import { Graphics } from 'pixi.js';
import { getLineStyle, setLineStyle, LineStyleType } from './lineStyleStore';

export type LineProps = {
  x1: number, y1: number,
  x2: number, y2: number,
} & LineStyleType;
export default class Line implements IDrawable {
  props: LineProps;
  constructor(args: LineProps) {
    this.props = args;
  }
  drawOn(g: Graphics) {
    const prevLineStyle = getLineStyle(g);
    setLineStyle(g, this.props);
    g.beginFill(0, 0);
    g.moveTo(this.props.x1, this.props.y1);
    g.lineTo(this.props.x2, this.props.y2);
    g.endFill();
    setLineStyle(g, prevLineStyle);
  }
}