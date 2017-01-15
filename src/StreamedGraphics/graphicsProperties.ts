import {
  Graphics,
  Point,
} from 'pixi.js';

export type GraphicsProperties = {
  alpha?: number;
  boundsPadding?: number;
  fillAlpha?: number;

  width?: number; height?: number;
  x?: number; y?: number;

  tabIndex?: number;

  rotation?: number;
};