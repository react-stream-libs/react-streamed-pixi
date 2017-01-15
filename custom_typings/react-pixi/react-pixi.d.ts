declare module 'react-pixi' {
  import {
    Component,
    ComponentClass,
    CSSProperties,
    SFC,
    ComponentFactory,
    ClassType,
  } from 'react';
  import * as React from 'react';
  import { render, unmountComponentAtNode } from 'react-dom';
  import {
    Point,
  } from 'pixi.js';

  type StagePropsType = {
    width: number, height: number,
    style?: CSSProperties, backgroundColor?: number,
    transparent?: boolean,
  };
  class Stage extends Component<StagePropsType, void> {}

  type TilingSpritePropsType = {
    image: string, width: number, height: number,
  };
  class TilingSprite extends Component<TilingSpritePropsType, void> {}

  type TextPropsType = {
    text: string,
    x: number, y: number,
    style: CSSProperties,
    anchor: Point,
  };
  class Text extends Component<TextPropsType, void> {}

  type DisplayObjectContainerPropsType = {
    x: number, y: number,
  }
  const DisplayObjectContainer: SFC<DisplayObjectContainerPropsType>;
  class CustomPixiComponentClass<CustomProps, PixiComponent>
      extends React.Component<CustomProps, void> {
    displayObject: PixiComponent;
  }
  interface CustomPixiComponentClassFactory<CustomProps, PixiComponent>
    extends ComponentFactory<CustomProps, CustomPixiComponentClass<CustomProps, PixiComponent>> {
  }
  function CustomPIXIComponent<CustomProps, PixiComponent>(args: {
    customDisplayObject(props: CustomProps): PixiComponent,
    customDidAttach?(displayObject: PixiComponent): void,
    customApplyProps(displayObject: PixiComponent, oldProps: CustomProps, newProps: CustomProps): void,
    customWillDetach?(displayObject: PixiComponent): void,
  }): CustomPixiComponentClassFactory<CustomProps, PixiComponent>

  export = {
    Stage,

    TilingSprite,

    DisplayObjectContainer,
    CustomPixiComponentClass,
    CustomPIXIComponent,

    render,
    unmountComponentAtNode,
  }
}