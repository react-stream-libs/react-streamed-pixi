/// <reference types="pixi.js" />
import { Graphics } from 'pixi.js';
interface IDrawable {
    draw: (gl: Graphics) => void;
}
export default IDrawable;
