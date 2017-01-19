/// <reference types="pixi.js" />
import * as Rx from 'rxjs';
import { Graphics } from 'pixi.js';
import * as ReactPixi from 'react-pixi';
import { EventsHandlerType } from './events';
import IDrawable from './drawables/IDrawable';
export declare type GraphicsStreamType = Rx.Observable<Array<IDrawable>>;
export declare type PropsType = {
    alpha?: number;
    drawableStream: GraphicsStreamType;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
} & EventsHandlerType;
export declare class PixiGraphicsWithStream extends Graphics {
    subscription: Rx.Subscription;
}
export declare function subscribeDrawables(args: {
    graphicsWithStream: PixiGraphicsWithStream;
    drawableStream: GraphicsStreamType;
}): void;
export declare function unsubscribeDrawables(args: {
    graphicsWithStream: PixiGraphicsWithStream;
}): void;
declare const StreamedGraphics: ReactPixi.CustomPixiComponentClassFactory<PropsType, PixiGraphicsWithStream>;
export default StreamedGraphics;
