const gridContainer = document.querySelector('.gridContainer');
const button = document.querySelector('#squaresBtn');
let num;
let squares = document.querySelectorAll('#square');

// ask for a grid size
button.addEventListener('click', () => {
    num = prompt('Enter number:');
    createGrid(num);
})

function createGrid(number) {
    for (let i = 0; i < number * number; i++) {
        let div = document.createElement('div');
        div.setAttribute('id', 'square');
        div.setAttribute('style', 'flex-basis: ' + (100 / number) + '%');
        gridContainer.appendChild(div);
    };
    squares = document.querySelectorAll('#square');
    coloring();
}


// for (let i = 0; i < 16 * 16; i++) {
//     let div = document.createElement('div');
//     div.setAttribute('id', 'square');
//     gridContainer.appendChild(div);
// };


// // mouseenter event to change div color
function coloring() {
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "black";
        });
    });

}


