import IDrawable from './IDrawable';
import { Graphics } from 'pixi.js';
import {
  applyInteractivity,
  EventsHandlerType,
} from '../events';

export type LayerProps = {
  x: number, y: number,
  children: Array<IDrawable>,
} & EventsHandlerType;
export default class Layer implements IDrawable {
  props: LayerProps;
  constructor(args: LayerProps) {
    this.props = args;
  }
  drawOn(g: Graphics) {
    const layer = new Graphics();
    applyInteractivity(layer, this.props);
    this.props.children.forEach(child => child.drawOn(layer));
  }
}