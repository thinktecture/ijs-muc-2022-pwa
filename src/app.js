import {bresenhamLine, getImage, toBlob} from "./helpers.js";

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d', {
    desynchronized: true
});

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'black';

canvas.addEventListener('pointerdown', event => {});
canvas.addEventListener('pointermove', event => {
    ctx.fillRect(event.offsetX, event.offsetY, 2, 2);
});
canvas.addEventListener('pointerup', () => {});
