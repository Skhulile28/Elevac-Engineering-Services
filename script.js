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

/* ============================= */
/* PAGE LOADER LOGIC */
/* ============================= */
// Wait for the entire page (including images and CSS) to fully load
window.addEventListener('load', function() {
    const loader = document.querySelector('.page-loader');
    
    if (loader) {
        // Add the 'hidden' class to trigger the CSS fade-out transition
        loader.classList.add('hidden');
        
        // Optional: Remove it completely from the DOM after the fade transition (500ms)
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500000000);
    }
});