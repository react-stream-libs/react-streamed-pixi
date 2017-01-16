import IDrawable from './IDrawable';
import { Graphics } from 'pixi.js';

export type CircleProps = {
  x: number, y: number,
  radius: number,
  color: number,
};
export default class Circle implements IDrawable {
  props: CircleProps;
  constructor(args: CircleProps) {
    this.props = args;
  }
  draw(g: Graphics) {
    g.beginFill(this.props.color);
    g.drawCircle(this.props.x, this.props.y, this.props.radius);
    g.endFill();
  }
}