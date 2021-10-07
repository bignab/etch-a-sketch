function createDivGrid(gridSizeX, gridSizeY) {
    let divGrid = [];
    for (let i = 0; i < gridSizeX; i++) {
        let divGridRow = [];
        for (let j = 0; j < gridSizeY; j++) {
            let element = document.createElement("div");
            let divID = "" + (i+1) + "," + (j+1);
            element.classList.add("gridCell")
            element.id = divID;
            // element.textContent = divID;
            element.style.gridColumnStart = (j+1);
            element.style.gridColumnEnd = (j+2);
            element.style.gridRowStart = (i+1);
            element.style.gridRowEnd = (i+2);
            element.addEventListener('mouseover', () => {
                changeColourOfDiv(element);
            });

            divGridRow.push(element);
        }
        divGrid.push(divGridRow);
    }
    placeDivGridIntoDOM(gridSizeX, gridSizeY, divGrid);
}

function placeDivGridIntoDOM(gridSizeX, gridSizeY, filledDivGrid) {
    const container = document.querySelector('#container');
    for (let i = 0; i < gridSizeX; i++) {
        for (let j = 0; j < gridSizeY; j++) {
            container.appendChild(filledDivGrid[i][j]);
        }
    }
}

function clearDivGrid() {
    const container = document.querySelector('#container');
    let containerChildren = container.childNodes;
    containerChildren.forEach(function(currentValue) {
        if (currentValue.nodeType === Node.ELEMENT_NODE) {
            currentValue.style.backgroundColor = "white";
        }
    });
}

function changeColourOfDiv(divElement) {
    const monochromeButton = document.querySelector('#monochromeButton');
        if (monochromeButton.classList.contains("monochromeToggle")) {
            divElement.style.backgroundColor = "#7036B1";
        }
        else {
            let randomColour = "#" + Math.floor(Math.random()*16777215).toString(16);
            divElement.style.backgroundColor = randomColour;
        }
}

const monochromeButton = document.querySelector('#monochromeButton');
const colourButton = document.querySelector('#colourButton');
const clearButton = document.querySelector('#clearButton');
const myRangeSlider = document.querySelector('#myRange');
const setGridButton = document.querySelector('#setGridButton');

monochromeButton.addEventListener('click', () => {
    monochromeButton.classList.add("monochromeToggle");
    colourButton.classList.remove("colourToggle");
});

colourButton.addEventListener('click', () => {
    monochromeButton.classList.remove("monochromeToggle");
    colourButton.classList.add("colourToggle");
});

clearButton.addEventListener('click', () => {
    clearDivGrid();
});

setGridButton.addEventListener('click', () => {
    resetDivGrid();
});

myRangeSlider.addEventListener('mousemove', () => {
    let myRangeSliderValue = myRangeSlider.value;
    document.getElementById("gridSizeText").textContent = myRangeSliderValue + " x " + myRangeSliderValue;
});

function resetDivGrid() {
    const container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let myRangeSliderValue = myRangeSlider.value;
    createDivGrid(myRangeSliderValue, myRangeSliderValue);
}
