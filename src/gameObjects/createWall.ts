import { GameObject } from '@eva/eva.js';
import { Physics, PhysicsType } from '@eva/plugin-matterjs';
import { Graphics } from '@eva/plugin-renderer-graphics';
import { GAME_HEIGHT } from '../CONST';

export default function createWall() {
  const bottomWall = createGameObjectAddGraphicsRect(
    375,
    GAME_HEIGHT - 10,
    750,
    20,
    0xff0000
  );
  const leftWall = createGameObjectAddGraphicsRect(
    0,
    GAME_HEIGHT / 2,
    10,
    GAME_HEIGHT,
    0xff0000
  );
  const rightWall = createGameObjectAddGraphicsRect(
    750,
    GAME_HEIGHT / 2,
    10,
    GAME_HEIGHT,
    0xff0000
  );

  const go = new GameObject('wall')
  go.addChild(bottomWall)
  go.addChild(leftWall)
  go.addChild(rightWall)
  return go
}


function createGameObjectAddGraphicsRect(
  x: number,
  y: number,
  width: number,
  height: number,
  color: number
) {
  const gameObject = new GameObject('gameObject', {
    position: {
      x,
      y,
    },
    size: {
      width,
      height,
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
  });
  const { graphics } = gameObject.addComponent(new Graphics());
  graphics.beginFill(color, 1);
  graphics.drawRect(
    0,
    0,
    gameObject.transform.size.width,
    gameObject.transform.size.height
  );
  graphics.endFill();
  gameObject.addComponent(
    new Physics({
      type: PhysicsType.RECTANGLE,
      bodyOptions: {
        isStatic: true,
      },
    })
  );
  return gameObject;
}
