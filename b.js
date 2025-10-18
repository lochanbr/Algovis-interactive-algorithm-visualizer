const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');

const generateBtn = document.getElementById('generateBtn');
const sortBtn = document.getElementById('sortBtn');

const canvasWidth = 800;
const canvasHeight = 400;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

let array = [];
let arraySize = 50;
let barWidth;
let isSorting = false;

// Function to generate a new random array
function generateArray() {
    array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * canvasHeight) + 1);
    }
    barWidth = canvasWidth / array.length;
    drawArray(array);
}

// Function to draw the array on the canvas
function drawArray(arr, compareIndex1 = -1, compareIndex2 = -1) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    for (let i = 0; i < arr.length; i++) {
        const barHeight = arr[i];
        const x = i * barWidth;
        const y = canvasHeight - barHeight;

        // Set bar color
        if (i === compareIndex1 || i === compareIndex2) {
            ctx.fillStyle = 'red'; // Highlight bars being compared
        } else {
            ctx.fillStyle = 'lightblue';
        }
        
        ctx.fillRect(x, y, barWidth - 1, barHeight);
    }
}

// Bubble Sort algorithm with visualization
async function bubbleSort() {
    isSorting = true;
    let n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            drawArray(array, j, j + 1);
            await new Promise(resolve => setTimeout(resolve, 50)); // Control animation speed

            if (array[j] > array[j + 1]) {
                // Swap elements
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    drawArray(array); // Final sorted array
    isSorting = false;
}

// Event listeners
generateBtn.addEventListener('click', () => {
    if (!isSorting) {
        generateArray();
    }
});

sortBtn.addEventListener('click', () => {
    if (!isSorting) {
        bubbleSort();
    }
});

// Initial array generation
generateArray();
