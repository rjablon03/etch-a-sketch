function createGrid() {
    const container = document.querySelector(".container");
    let dimensions = document.querySelector(".dimensions");
    dimensions = parseInt(dimensions.nodeValue);
    console.log(dimensions)

    container.innerHTML = '';
    
    for (let i = 0; i < 16*16; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        container.appendChild(tile);
    }
}

document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('mouseenter', () => {
        tile.classList.add('hovered');
    });
});