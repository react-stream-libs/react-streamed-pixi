import * as React from 'react';
import { Stage, StagePropsType } from 'react-pixi';
import { Observable, Subscription } from 'rxjs';

export type PropsType = {
  propsStream: Observable<StagePropsType>;
};
export type StateType = {
  props?: StagePropsType;
};
export default class StreamedStage extends React.Component <PropsType, StateType> {
  propsSubscription: Subscription;
  constructor(props: PropsType) {
    super(props);
    this.state = {
      props: {
        width: 1, height: 1,
        transparent: true,
      }
    }
  }
  componentDidMount() {
    this.propsSubscription = this.props.propsStream
      .subscribe(props => this.setState({ props }));
  }
  componentWillUnmount() {
    this.propsSubscription.unsubscribe();
  }
  render() {
    return (
      <Stage
        {...this.state.props}
      >
        {this.props.children}
      </Stage>
    );
  }
}