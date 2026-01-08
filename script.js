// Wait for the page to load before running the script
document.addEventListener("DOMContentLoaded", function() {

    // Get the button and the navigation menu
    const navToggle = document.getElementById("nav-toggle-button");
    const mainNav = document.getElementById("primary-nav");

    // Add a click listener to the button
    navToggle.addEventListener("click", function() {
        // When clicked, add or remove the 'nav-open' class from the menu
        mainNav.classList.toggle("nav-open");
    });
});