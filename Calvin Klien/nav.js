function redirectToCollectionsPage(filter) {
    const currentPageURL = window.location.href;
    const collectionsPageURL = "collections.html";
    const url = new URL(collectionsPageURL, currentPageURL);
    url.searchParams.set("filter", filter);
    window.location.href = url.toString();
}