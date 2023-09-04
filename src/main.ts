import { canvas, ctx, config } from './canvas';
import { Circle } from './components';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

const state = {
  isDrag: false,
  isDrop: true
};

const mouse = {
  x: 0,
  y: 0
}

const centerPoint = {
  x: canvas.width / 2,
  y: canvas.height / 2
};

const circle = new Circle(centerPoint.x, centerPoint.y, 70, "Orange");
circle.draw(ctx);

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

window.addEventListener('mousedown', (event: MouseEvent) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  if(state.isDrop && mouse.x >= circle.x - circle.r && mouse.x <= circle.x + circle.r && mouse.y >= circle.y - circle.r && mouse.y <= circle.y + circle.r) {
    state.isDrag = true;
  }
});

window.addEventListener('mousemove', (event: MouseEvent) => {
  if(state.isDrag) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    clear();
    circle.update(mouse.x, mouse.y);
    circle.draw(ctx);
  }
});

window.addEventListener('mouseup', (event: MouseEvent) => {
  if(!state.isDrag) return;
  state.isDrag = false;
  state.isDrop = true;
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  clear();
  circle.update(mouse.x, mouse.y);
  circle.draw(ctx);
});
