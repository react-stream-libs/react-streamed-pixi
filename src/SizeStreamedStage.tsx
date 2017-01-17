import * as React from 'react';
import { Stage } from 'react-pixi';
import { Observable, Subscription } from 'rxjs';

export type PropsType = {
  sizeStream: Observable<{width: number, height: number}>;
};
export type StateType = {
  width?: number, height?: number,
};
export default class SizeStreamedStage extends React.Component <PropsType, StateType> {
  sizeSubscription: Subscription;
  componentDidMount() {
    this.sizeSubscription = this.props.sizeStream
      .subscribe(size => this.setState(size))
  }
  componentWillUnmount() {
    this.sizeSubscription.unsubscribe();
  }
  render() {
    return (
      <Stage
        width={this.state.width} height={this.state.height}
      >
        {this.props.children}
      </Stage>
    );
  }
}