/// <reference types="react" />
import StreamedGraphics, { GraphicsStreamType } from './StreamedGraphics';
import * as drawables from './StreamedGraphics/drawables';
import SizeStreamedStage from './SizeStreamedStage';
import * as reactPixi from 'react-pixi';
export declare type StagePropsType = reactPixi.StagePropsType;
export declare const Stage: typeof reactPixi.Stage;
export declare type TilingSpritePropsType = reactPixi.TilingSpritePropsType;
export declare const TilingSprite: typeof reactPixi.TilingSprite;
export declare type TextPropsType = reactPixi.TextPropsType;
export declare const Text: typeof reactPixi.Text;
export declare type DisplayObjectContainerPropsType = reactPixi.DisplayObjectContainerPropsType;
export declare const DisplayObjectContainer: React.StatelessComponent<reactPixi.DisplayObjectContainerPropsType>;
export declare const CustomPixiComponentClass: typeof reactPixi.CustomPixiComponentClass;
export interface CustomPixiComponentClassFactory<CustomProps, PixiComponent> extends reactPixi.CustomPixiComponentClassFactory<CustomProps, PixiComponent> {
}
export declare const CustomPIXIComponent: typeof reactPixi.CustomPIXIComponent;
export { StreamedGraphics, SizeStreamedStage, GraphicsStreamType, drawables };
