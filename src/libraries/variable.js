export const isMobile = window.innerWidth < 530;

const topHeight = 55;
const canvasW = window.innerWidth;
const canvasH = window.innerHeight - topHeight;

export const fullCanvas = {
  topHeight,
  canvasW,
  canvasH,
};
