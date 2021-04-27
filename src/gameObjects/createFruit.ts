import { GameObject } from '@eva/eva.js';
import { Img } from '@eva/plugin-renderer-img';
import { CAN_USE_TYPE, FRUIT_RADIUS } from '../CONST';
import store from '../store'

export function createFruit() {
  const randomIndex = Math.floor(Math.random() * CAN_USE_TYPE.length);
  store.currentType = CAN_USE_TYPE[randomIndex];
  store.currentFruit = randomFruit(store.currentType);
  return store.currentFruit
}


export function randomFruit(type: string) {
  return buildFruit(type, 375, 150, FRUIT_RADIUS[type].radius, type);
}


function buildFruit(
  name: string,
  x: number,
  y: number,
  radius: number,
  type: string
) {
  const gameObject = new GameObject(name, {
    position: {
      x,
      y,
    },
    size: {
      width: 2 * radius,
      height: 2 * radius,
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
  });
  gameObject.addComponent(
    new Img({
      resource: type,
    })
  );
  return gameObject;
}
