/// <reference types="react" />
import * as React from 'react';
import * as ReactivePixi from 'reactive-pixi';
import { Observable, Subscription } from 'rxjs';
export declare type PropsType = {
    width: number;
    height: number;
    pixiStream: Observable<ReactivePixi.RootRenderableType>;
};
export declare type StateType = {};
export default class ReactStreamedPixi extends React.Component<PropsType, StateType> {
    pixiSubscription: Subscription;
    renderer: ReactivePixi.Renderer;
    refs: {
        [key: string]: React.ReactInstance;
        canvasRef: HTMLCanvasElement;
    };
    componentDidMount(): void;
    render(): JSX.Element;
    componentWillUnmount(): void;
}
