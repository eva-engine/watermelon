import { GameObject } from '@eva/eva.js';
import { Event } from '@eva/plugin-renderer-event';
import { Text } from '@eva/plugin-renderer-text';

export default function createBackPanel() {
  const backPanel = new GameObject('back', {
    position: {
      x: 50,
      y: 100,
    },
    size: {
      width: 300,
      height: 100,
    },
  });
  backPanel.addComponent(
    new Text({
      text: '返回',
      style: {
        fontSize: 40,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fill: ['#ffffff'],
      },
    })
  );

  const backEvt = backPanel.addComponent(new Event());
  backEvt.on('tap', () => {
    // xsand.goBack();
  });
  return backPanel;
}
