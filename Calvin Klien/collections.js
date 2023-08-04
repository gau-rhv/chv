const bubbleButtons = document.querySelectorAll(".bubble-button");
const cards = document.querySelectorAll(".card");


const urlParams = new URLSearchParams(window.location.search);
const filterParam = urlParams.get("filter");


if (filterParam) {
    filterCards(filterParam);
    const correspondingButton = document.querySelector(`.bubble-button[data-filter="${filterParam}"]`);
    if (correspondingButton) {
        toggleActiveButton(correspondingButton);
    }
}

bubbleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        filterCards(filter);
        toggleActiveButton(button);
    });
});

function filterCards(category) {
    cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (category === "all" || category === cardCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function toggleActiveButton(button) {
    bubbleButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
}
