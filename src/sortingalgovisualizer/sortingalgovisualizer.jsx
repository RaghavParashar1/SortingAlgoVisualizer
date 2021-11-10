import React from 'react';
import './sortingalgovisualizer.css';

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 350;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#ffcb9a';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({ array });
    }


    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                        }}></div>
                ))}
                <br></br>
                <div className="button-area">
                    <button class="button" onClick={() => this.resetArray()}>Generate New Array</button>
                    <button class="button" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button class="button" onClick={() => this.quickSort()}>Quick Sort</button>
                    <button class="button" onClick={() => this.heapSort()}>Heap Sort</button>
                    <button class="button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button class="button" onClick={() => this.testSortingAlgorithms()}>
                        Test Sorting Algorithms (BROKEN)
                    </button>
                </div>
            </div>
        );
    }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

