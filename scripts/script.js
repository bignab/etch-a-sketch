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
                element.classList.add("hoveredCell")
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
            currentValue.classList.remove("hoveredCell");
        }
    });
}