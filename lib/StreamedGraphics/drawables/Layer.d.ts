/// <reference types="pixi.js" />
import IDrawable from './IDrawable';
import { Graphics } from 'pixi.js';
import { EventsHandlerType } from '../events';
export declare type LayerProps = {
    x: number;
    y: number;
    children: Array<IDrawable>;
} & EventsHandlerType;
export default class Layer implements IDrawable {
    props: LayerProps;
    constructor(args: LayerProps);
    drawOn(g: Graphics): void;
}
