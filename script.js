function renderGrid() {
    const container = document.querySelector(".container");
    const inputBox = document.querySelector(".text");
    const tile = document.createElement("div");
    tile.className = "tile";

    for (let i = 0; i < parseInt(inputBox.textContent); i++) {
        container.appendChild(tile);
    }
}