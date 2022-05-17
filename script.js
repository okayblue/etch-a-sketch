const gridContainer = document.querySelector('.gridContainer');
gridContainer.setAttribute('style', 'background-color: grey;');

for (let i = 0; i < 16*16; i++) {
    let div = document.createElement('div');
    div.setAttribute('id', 'square');
    gridContainer.appendChild(div);
};


