let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const gridContainer = document.querySelector(".container");

let btn = document.createElement("button");
document.body.append(btn);
btn.innerText = "START SKETCH";
let userValue;

btn.addEventListener('click', () => {
    userValue = prompt("Enter the pixel from 10 to 100");
    userValue = parseInt(userValue);

    let isDrawing;
if (userValue >10 && userValue <100){
    const sqaureSize = userValue;
    const gridSize = 16;
    const containerSize = sqaureSize * gridSize;

for(let i=0; i< gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    
    square.addEventListener('mousedown', () => {
        isDrawing = true;
        square.style.backgroundColor = 'black';
    });
        square.addEventListener('mouseup', () => {
            isDrawing = false;
             
            square.addEventListener('mouseover', () => {
                if (isDrawing) {
                square.style.backgroundColor = 'black';
            }    });
    });
    square.addEventListener('mouseout', () => {
        if (isDrawing) {
        square.style.backgroundColor = 'black';   
        }
});
        
        square.style.width = userValue + "px";
        square.style.height = userValue + "px";
        gridContainer.appendChild(square);

}
    gridContainer.style.width = containerSize + "px";
    gridContainer.style.height = containerSize + "px";
}



});