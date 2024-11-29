document.addEventListener('DOMContentLoaded', () => {
    const n = 4;
    const Index = (n % 10) + 1;

    const firstElement = document.getElementById(`item${Index}`);
    firstElement.addEventListener('click', () => {
        toggleColors(firstElement, 'blue', 'white');
    });

    const nextElement = document.querySelector(`#item${Index + 1}`);
    nextElement.addEventListener('click', () => {
        toggleColors(nextElement, 'green', 'white');
    });

    function toggleColors(element, bgColor, textColor) {
        element.style.backgroundColor =
            element.style.backgroundColor === bgColor ? 'red' : bgColor;
        element.style.color =
            element.style.color === textColor ? 'white' : textColor;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.querySelector("a");
    const image = document.getElementById("main-image");
    const addButton = document.getElementById("add-button");
    const increaseButton = document.getElementById("increase-button");
    const decreaseButton = document.getElementById("decrease-button");
    const removeButton = document.getElementById("remove-button");

    addButton.addEventListener("click", () => {
        if (!document.querySelector("#dynamic-image")) {
            const newImage = document.createElement("img");
            newImage.id = "dynamic-image";
            newImage.src = "Church-of-Saint-Lazarus-Larnaca.webp";
            newImage.alt = "Ларнака";
            newImage.style.width = "300px";
            imageContainer.appendChild(newImage);
        }
    });

    increaseButton.addEventListener("click", () => {
        const img = document.querySelector("#dynamic-image") || image;
        const currentWidth = parseInt(img.style.width);
        img.style.width = currentWidth + 20 + "px";
    });

    decreaseButton.addEventListener("click", () => {
        const img = document.querySelector("#dynamic-image") || image;
        const currentWidth = parseInt(img.style.width);
        if (currentWidth > 50) img.style.width = currentWidth - 20 + "px";
    });

    removeButton.addEventListener("click", () => {
        const img = document.querySelector("#dynamic-image");
        if (img) img.remove();
    });
});
