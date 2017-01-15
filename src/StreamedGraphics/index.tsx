import * as React from 'react';
import * as Rx from 'rxjs';
import {
  Graphics,
  Rectangle as PixiRectangle,
  interaction,
} from 'pixi.js';
import * as _ from 'lodash';
import ReactPixi = require('react-pixi');
import {
  EventsHandlerType,
  hasInteractivity,
  applyInteractivity, unapplyInteractivity,
} from './events';
import IDrawable from './drawables/IDrawable';

export type GraphicsStreamType = Rx.Observable<Array<IDrawable>>;

export type PropsType = {
  alpha?: number;
  drawableStream: GraphicsStreamType;

  x?: number; y?: number; width?: number; height?: number;
} & EventsHandlerType;

export class PixiGraphicsWithStream extends Graphics {
  subscription: Rx.Subscription;
}

export function subscribeDrawables(args: {
  graphicsWithStream: PixiGraphicsWithStream,
  drawableStream: GraphicsStreamType;
}) {
  const {
    graphicsWithStream,
    drawableStream,
  } = args;
  graphicsWithStream.subscription = drawableStream
    .subscribe((drawables) => {
      // FIXME: implement diffing logic here (faster re-render)
      graphicsWithStream.clear();
      _.forEach(drawables, drawable => drawDrawable({ graphicsWithStream, drawable }));
    });
}

export function drawDrawable(args: {
  graphicsWithStream: PixiGraphicsWithStream,
  drawable: IDrawable,
}) {
  const {
    graphicsWithStream,
    drawable,
  } = args;
  drawable.draw(graphicsWithStream);
}

export function unsubscribeDrawables(args: {
  graphicsWithStream: PixiGraphicsWithStream,
}) {
  args.graphicsWithStream.subscription
    .unsubscribe();
}

const StreamedGraphics = ReactPixi.CustomPIXIComponent<PropsType, PixiGraphicsWithStream>({
  customDisplayObject(props) {
    const graphicsWithStream = new PixiGraphicsWithStream();
    graphicsWithStream.alpha = props.alpha || 1;
    graphicsWithStream.interactive = hasInteractivity(props);
    applyInteractivity(graphicsWithStream, props);
    subscribeDrawables({
      graphicsWithStream,
      drawableStream: props.drawableStream
    });
    return graphicsWithStream;
  },
  customApplyProps(graphicsWithStream, oldProps, newProps) {
    graphicsWithStream.interactive = hasInteractivity(newProps);
    graphicsWithStream.alpha = newProps.alpha || 1;
    unapplyInteractivity(graphicsWithStream, oldProps);
    applyInteractivity(graphicsWithStream, newProps);
    if (oldProps.drawableStream != newProps.drawableStream) {
      unsubscribeDrawables({ graphicsWithStream });
      subscribeDrawables({
        graphicsWithStream, drawableStream: newProps.drawableStream
      });
    }
  },
  customWillDetach(graphicsWithStream) {
    unsubscribeDrawables({ graphicsWithStream });
  }
});

export default StreamedGraphics;