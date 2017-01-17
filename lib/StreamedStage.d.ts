/// <reference types="react" />
import * as React from 'react';
import { StagePropsType } from 'react-pixi';
import { Observable, Subscription } from 'rxjs';
export declare type PropsType = {
    propsStream: Observable<StagePropsType>;
};
export declare type StateType = {
    props?: StagePropsType;
};
export default class StreamedStage extends React.Component<PropsType, StateType> {
    propsSubscription: Subscription;
    constructor(props: PropsType);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
