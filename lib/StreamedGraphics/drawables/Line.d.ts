/// <reference types="pixi.js" />
import IDrawable from './IDrawable';
import { Graphics } from 'pixi.js';
import { LineStyleType } from './lineStyleStore';
export declare type LineProps = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
} & LineStyleType;
export default class Line implements IDrawable {
    props: LineProps;
    constructor(args: LineProps);
    drawOn(g: Graphics): void;
}
