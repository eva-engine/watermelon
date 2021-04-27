import { GameObject } from '@eva/eva.js';
import { Text } from '@eva/plugin-renderer-text';

export default function createGradePanel() {
  const gradePanel = new GameObject('grade', {
    position: {
      x: 50,
      y: 150,
    },
    size: {
      width: 300,
      height: 100,
    },
  });
  gradePanel.addComponent(
    new Text({
      text: '0',
      style: {
        fontSize: 66,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fill: ['#ffffff'],
      },
    })
  );
  return gradePanel;
}
