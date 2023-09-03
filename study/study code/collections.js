// Select all elements with the class "bubble-button" and store them in the "bubbleButtons" variable.
const bubbleButtons = document.querySelectorAll(".bubble-button");

// Select all elements with the class "card" and store them in the "cards" variable.
const cards = document.querySelectorAll(".card");

// Create a new URLSearchParams object to handle query parameters in the URL.[ Imagine you have a treasure map (the web page's address), and you want to find a hidden message on it. The code is like a special tool that helps you search the map and find that hidden message. Once you find it, you put it in a special box (the "urlParams" box) so you can use it later if you need it.]
const urlParams = new URLSearchParams(window.location.search);

// Get the value of the "filter" parameter from the URL.
const filterParam = urlParams.get("filter");

// Check if a "filter" parameter exists in the URL.
if (filterParam) {
    // If a "filter" parameter exists, call the "filterCards" function with the filter value.
    filterCards(filterParam);

    // Find the corresponding button with a "data-filter" attribute that matches the filter value.
    const correspondingButton = document.querySelector(`.bubble-button[data-filter="${filterParam}"]`);

    // If a corresponding button is found, call the "toggleActiveButton" function to highlight it.
    if (correspondingButton) {
        toggleActiveButton(correspondingButton);
    }
}

// Add a click event listener to each "bubble-button" element.
bubbleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Get the filter value from the "data-filter" attribute of the clicked button.
        const filter = button.getAttribute("data-filter");

        // Call the "filterCards" function with the selected filter.
        filterCards(filter);

        // Call the "toggleActiveButton" function to highlight the clicked button.
        toggleActiveButton(button);
    });
});

// Function to filter and display cards based on the selected category.
function filterCards(category) {
    cards.forEach((card) => {
        // Get the category of each card from its "data-category" attribute.
        const cardCategory = card.getAttribute("data-category");

        // Check if the selected category matches the card's category or if "all" is selected.
        if (category === "all" || category === cardCategory) {
            // If there's a match, display the card (set its style to "block").
            card.style.display = "block";
        } else {
            // If there's no match, hide the card (set its style to "none").
            card.style.display = "none";
        }
    });
}

// Function to toggle the active state of buttons.
function toggleActiveButton(button) {
    // Remove the "active" class from all "bubble-button" elements.
    bubbleButtons.forEach((btn) => btn.classList.remove("active"));

    // Add the "active" class to the clicked button, highlighting it.
    button.classList.add("active");
}
