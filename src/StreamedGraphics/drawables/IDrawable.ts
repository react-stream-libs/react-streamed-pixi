import {
  Graphics,
} from 'pixi.js';

interface IDrawable {
  drawOn: (gl: Graphics) => void
};

export default IDrawable;