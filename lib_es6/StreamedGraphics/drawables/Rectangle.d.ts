/// <reference types="pixi.js" />
import IDrawable from './IDrawable';
import { Graphics } from 'pixi.js';
import { LineStyleType } from './lineStyleStore';
export declare type RectangleProps = {
    x: number;
    y: number;
    width: number;
    height: number;
    color: number;
    alpha?: number;
    lineStyle?: LineStyleType;
};
export default class Rectangle implements IDrawable {
    props: RectangleProps;
    constructor(args: RectangleProps);
    draw(g: Graphics): void;
}
