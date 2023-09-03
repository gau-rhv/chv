// This is a function called redirectToCollectionsPage, and it takes one input parameter called "filter."
function redirectToCollectionsPage(filter) {
    // Get the current web page's full address (URL) and store it in the "currentPageURL" variable.
    const currentPageURL = window.location.href;

    // Set the address of the collections page you want to go to in the "collectionsPageURL" variable.
    const collectionsPageURL = "collections.html";

    // Create a new URL object called "url" by combining the current page's URL with the collections page's URL.
    const url = new URL(collectionsPageURL, currentPageURL);

    // Add or set a new query parameter called "filter" to the "url" object with the value provided as the "filter" parameter.
    url.searchParams.set("filter", filter);

    // Change the web page's address (URL) to the one stored in the "url" object, effectively redirecting to the collections page with the specified filter.
    window.location.href = url.toString();
}
