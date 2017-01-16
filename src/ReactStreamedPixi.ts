import StreamedGraphics, {
  GraphicsStreamType,
} from './StreamedGraphics';
import * as drawables from './StreamedGraphics/drawables';


import * as reactPixi from 'react-pixi';

export type StagePropsType = reactPixi.StagePropsType;
export const Stage = reactPixi.Stage;

export type TilingSpritePropsType = reactPixi.TilingSpritePropsType;
export const TilingSprite = reactPixi.TilingSprite;

export type TextPropsType = reactPixi.TextPropsType;
export const Text = reactPixi.Text;

export type DisplayObjectContainerPropsType = reactPixi.DisplayObjectContainerPropsType;
export const DisplayObjectContainer = reactPixi.DisplayObjectContainer;

export const CustomPixiComponentClass = reactPixi.CustomPixiComponentClass;
export interface CustomPixiComponentClassFactory<CustomProps, PixiComponent>
  extends reactPixi.CustomPixiComponentClassFactory<CustomProps, PixiComponent> {};
export const CustomPIXIComponent = reactPixi.CustomPIXIComponent;


export {
  StreamedGraphics,
  GraphicsStreamType,
  drawables,
};