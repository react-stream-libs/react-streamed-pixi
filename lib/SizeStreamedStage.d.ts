/// <reference types="react" />
import * as React from 'react';
import { Observable, Subscription } from 'rxjs';
export declare type PropsType = {
    sizeStream: Observable<{
        width: number;
        height: number;
    }>;
};
export declare type StateType = {
    width?: number;
    height?: number;
};
export default class SizeStreamedStage extends React.Component<PropsType, StateType> {
    sizeSubscription: Subscription;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
