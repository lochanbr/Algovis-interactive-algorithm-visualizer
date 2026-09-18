# Algovis - Interactive Algorithm Visualizer

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/lochanbr/Algovis-interactive-algorithm-visualizer?style=social)](https://github.com/lochanbr/Algovis-interactive-algorithm-visualizer/stargazers)

## 🎯 Project Overview

`Algovis` is a browser-based educational tool that makes algorithm concepts concrete through animated visualizations and step-by-step execution. It supports core sorting, searching, and graph traversal algorithms with controls, pseudocode, and complexity analysis.

### Why use Algovis?
- Learn algorithm behavior visually with real-time steps
- Interact with the execution via play/pause/step controls
- Compare algorithms under the same input and speed settings
- No install or backend required: open directly in a web browser

## ✨ Features

- Algorithm visualizations in real-time
- Play, pause, step-forward, and reset controls
- Adjustable input size, data randomization, and animation speed
- Pseudocode for each algorithm (async with trace)
- Time complexity & space complexity guidance
- Responsive UI built for clean learning

## 🧠 Algorithms

### Sorting
- Bubble Sort
- Insertion Sort
- Selection Sort
- Quick Sort
- Merge Sort

### Searching
- Linear Search
- Binary Search

### Array operations (in UI flow)
- Insert element
- Delete element

### Graph traversal
- BFS (Breadth-First Search)
- DFS (Depth-First Search)

## 🚀 Getting Started

### Prerequisites
- Modern browser (Chrome, Firefox, Edge, Safari)
- Optional: Git for cloning

### 1. Clone repository

```bash
git clone https://github.com/lochanbr/Algovis-interactive-algorithm-visualizer.git
cd Algovis-interactive-algorithm-visualizer
```

### 2. Open locally

#### Windows
```bash
start index.html
```
#### macOS
```bash
open index.html
```
#### Linux
```bash
xdg-open index.html
```

or drag `index.html` into the browser.

## 🎮 Usage

1. Select algorithm from dropdown.
2. Set input size and animation speed.
3. Click **Generate array** to reinitialize sample data.
4. Use **Play**, **Pause**, **Step**, **Reset** controls.
5. Review pseudocode and complexity values while visualizing.

## 🏗 Project Structure

```
./
├── index.html                # Landing page + visualizer UI
├── comparison.html           # Algorithm comparison view
├── dual-comparison.html      # Side-by-side comparison mode
├── visualizer.html           # Visualizer core layout
├── js/
│   ├── main.js              # Main controller
│   ├── algorithms/          # Sorting/search/traversal code
│   ├── visualizer.js        # DOM/render engine
│   └── controls.js          # Input & controls logic
├── css/
│   └── styles.css           # Styling
├── assets/                  # Icons, screenshots, assets
└── README.md
```

## 🛠 Tech Stack & Architecture

- HTML5 + CSS3 + JavaScript (ES6+)
- Modular JS architecture (logic, renderer, algorithms separated)
- Timer-based animation loop, clear state transitions
- Focused on readability and minimal dependencies

## 🎓 Learning Outcomes

- Step-by-step data transformation for each algorithm
- Visual comparison of O(n²) vs O(n log n) behavior
- Graph traversal order and queue/stack behavior
- Algorithmic tradeoffs and complexity reasoning

## 🤝 Contributing

Contributions are welcome!

1. Fork
2. `git checkout -b feature/your-feature`
3. `git commit -m "Add ..."`
4. `git push origin feature/your-feature`
5. Open PR

### Ideas
- Add more algorithms (heap sort, quickselect, dijkstra)
- Add dark mode
- Improve accessibility (ARIA labels, keyboard nav)
- Add path highlighting and result summaries

## 🧪 Testing

No test framework included; manual validation in-browser.

### Quick manual test
- Open app; verify algorithm selection works
- Adjust speed and size; verify animation updates
- Step through algorithms; verify correctness and state

## 📄 License

MIT License. See `LICENSE`.

## 📧 Contact

- Maintainer: `lochanbr`
- Repo: https://github.com/lochanbr/Algovis-interactive-algorithm-visualizer

> ⭐ If this project helped you, please star it on GitHub!
t

