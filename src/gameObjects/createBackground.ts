import { GameObject } from '@eva/eva.js';
import { Graphics } from '@eva/plugin-renderer-graphics';
import { GAME_HEIGHT } from '../CONST';

export default function createBackground () {
  const background = new GameObject('background', {
    position: {
      x: 0,
      y: 0,
    },
    size: {
      width: 750,
      height: GAME_HEIGHT,
    },
  });
  const { graphics } = background.addComponent(new Graphics());
  graphics.beginFill(~~(Math.random() * 0xffffff), 0.75);
  graphics.drawRect(
    0,
    0,
    background.transform.size.width,
    background.transform.size.height
  );
  graphics.endFill();
  return background
}