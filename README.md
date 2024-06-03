# webflow-dark-light-switch

This JavaScript code performs the following actions:

Strict Mode: The script begins with "use strict"; to enforce stricter parsing and error handling.

Load jQuery: Creates a <script> element to load jQuery from the Google CDN and appends it to the document's head. Once jQuery is loaded, it runs a function to ensure no conflicts with other libraries.

Encapsulation: Wraps the main functionality in an anonymous function to avoid polluting the global namespace.

Webflow Integration: Ensures the Webflow array exists and pushes a function into it. This function will run when Webflow is ready.

Dark-Light Mode Toggle: Defines a function toggleDarkLightMode to switch between dark and light modes:

Checks the localStorage for the current mode.
Updates the page's background color, text color, and various other elements' styles based on the mode.
Sets appropriate images for dark and light modes.
Adds or removes CSS classes for dark mode.
Initial Mode Setup: On document ready, calls toggleDarkLightMode to apply the correct mode based on localStorage.

Button Click Event: Adds a click event listener to the .dark-light-button to toggle the dark-light mode and update localStorage.

Page Unload Event: Stores the current mode in localStorage when the user navigates away from the page to maintain the setting.

In summary, this code dynamically loads jQuery and sets up a dark-light mode toggle feature that remembers the user's preference using localStorage.