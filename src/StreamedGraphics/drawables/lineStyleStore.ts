import { Graphics } from 'pixi.js';

export class GraphicsWithLineAlpha extends Graphics {
  lineAlpha: number;
};

export type LineStyle = {
  color: number,
  width: number,
  alpha: number,
}
export function getLineStyle(g: Graphics) {
  const graphicsWithLineAlpha = g as GraphicsWithLineAlpha;
  return {
    color: graphicsWithLineAlpha.lineColor,
    width: graphicsWithLineAlpha.lineWidth,
    alpha: graphicsWithLineAlpha.lineAlpha,
  };
}

export function applyLineStyle(g: Graphics, lineStyle: LineStyle) {
  g.lineStyle(lineStyle.width, lineStyle.color, lineStyle.alpha);
}