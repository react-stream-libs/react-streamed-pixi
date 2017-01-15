import IDrawable from './IDrawable';
import { Graphics } from 'pixi.js';

export type RectangleProps = {
  x: number, y: number,
  width: number, height: number,
  color: number,
};
export default class Rectangle implements IDrawable {
  props: RectangleProps;
  constructor(args: RectangleProps) {
    this.props = args;
  }
  draw(g: Graphics) {
    g.beginFill(this.props.color);
    g.drawRect(this.props.x, this.props.y, this.props.width, this.props.height);
    g.endFill();
  }
}