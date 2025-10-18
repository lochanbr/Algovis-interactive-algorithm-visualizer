const canvas = document.getElementById('algoCanvas');
const ctx = canvas.getContext('2d');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stepBtn = document.getElementById('stepBtn');
const resetBtn = document.getElementById('resetBtn');

let array = [50, 24, 12, 78, 36, 90, 45, 63];
let i = 0;
let j = 0;
let isSorting = false;
let animationFrameId;

function drawArray() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = canvas.width / array.length;
    for (let k = 0; k < array.length; k++) {
        const barHeight = array[k] * 4; // Scale factor for visualization
        const x = k * barWidth;
        const y = canvas.height - barHeight;

        ctx.fillStyle = 'blue';
        if (k === j || k === j + 1) {
            ctx.fillStyle = 'red'; // Highlight elements being compared
        }
        if (i < array.length && k >= array.length - i) {
            ctx.fillStyle = 'green'; // Highlight sorted elements
        }

        ctx.fillRect(x, y, barWidth - 2, barHeight);
    }
}

function bubbleSortStep() {
    if (i < array.length) {
        if (j < array.length - i - 1) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap
            }
            j++;
        } else {
            j = 0;
            i++;
        }
    } else {
        isSorting = false;
        cancelAnimationFrame(animationFrameId);
    }
    drawArray();
}

function animate() {
    if (isSorting) {
        bubbleSortStep();
        animationFrameId = requestAnimationFrame(animate);
    }
}

playBtn.addEventListener('click', () => {
    if (!isSorting) {
        isSorting = true;
        animate();
    }
});

pauseBtn.addEventListener('click', () => {
    isSorting = false;
    cancelAnimationFrame(animationFrameId);
});

stepBtn.addEventListener('click', () => {
    if (!isSorting) {
        bubbleSortStep();
    }
});

resetBtn.addEventListener('click', () => {
    isSorting = false;
    cancelAnimationFrame(animationFrameId);
    array = [50, 24, 12, 78, 36, 90, 45, 63];
    i = 0;
    j = 0;
    drawArray();
});

// Initial draw
drawArray();