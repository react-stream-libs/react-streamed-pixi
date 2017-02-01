import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { autoDetectRenderer } from 'pixi.js';
import * as ReactivePixi from 'reactive-pixi'
import { Observable, Subscription } from 'rxjs';

export type PropsType = {
  width: number, height: number,
  pixiStream: Observable<ReactivePixi.RootRenderableType>,
};

export type StateType = {

}
export default class ReactStreamedPixi
    extends React.Component<PropsType, StateType> {
  pixiSubscription: Subscription;
  renderer: ReactivePixi.Renderer;
  refs: {
    [key: string]: React.ReactInstance;
    canvasRef: HTMLCanvasElement;
  }
  componentDidMount() {
    const canvasDOM = findDOMNode<HTMLCanvasElement>(this.refs.canvasRef);
    this.renderer = new ReactivePixi.Renderer({
      renderer: autoDetectRenderer(this.props.width, this.props.height, {
        view: canvasDOM,
      }),
    });
    this.pixiSubscription = this.props.pixiStream
      .subscribe(rootRenderable => {
        this.renderer.render(rootRenderable);
      });
  }
  render() {
    return (
      <canvas ref="canvasRef" />
    );
  }
  componentWillUnmount() {
    this.pixiSubscription.unsubscribe();
    delete this.renderer;
  }
}