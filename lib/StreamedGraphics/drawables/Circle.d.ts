/// <reference types="pixi.js" />
import IDrawable from './IDrawable';
import { Graphics } from 'pixi.js';
import { LineStyleType } from './lineStyleStore';
export declare type CircleProps = {
    x: number;
    y: number;
    radius: number;
    color: number;
    alpha?: number;
    lineStyle?: LineStyleType;
};
export default class Circle implements IDrawable {
    props: CircleProps;
    constructor(args: CircleProps);
    draw(g: Graphics): void;
}
