/// <reference types="pixi.js" />
import { Graphics, Point } from 'pixi.js';
export declare type GraphicsProperties = {
    alpha?: number;
    boundsPadding?: number;
    fillAlpha?: number;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    tabIndex?: number;
    rotation?: number;
    skew?: Point;
};
export declare function applyGraphicsProperties(g: Graphics, props: GraphicsProperties): void;
