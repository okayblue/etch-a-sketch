const gridContainer = document.querySelector('.gridContainer');
gridContainer.setAttribute('style', 'background-color: grey;');

for (let i = 0; i < 16*16; i++) {
    let div = document.createElement('div');
    div.setAttribute('id', 'square');
    gridContainer.appendChild(div);
};

const square = document.querySelectorAll('#square');

// mouseenter event to change div color
square.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.setAttribute('style', 'background-color: black;');
    });
});