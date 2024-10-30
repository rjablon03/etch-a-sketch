function createGrid() {
    const container = document.querySelector(".container");

    container.innerHTML = '';
    
    for (let i = 0; i < 8*8; i++) {
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