"use strict";

// Create script element for jQuery
var jQueryScript = document.createElement('script');
jQueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
jQueryScript.onload = function () {
    var $ = $.noConflict(true);

    // Encapsulate jQuery code in an anonymous function
    (function ($) {
        // Ensure Webflow array exists
        window.Webflow = window.Webflow || [];
        // Push function to Webflow array
        window.Webflow.push(() => {
            // Function to toggle dark-light mode
            function toggleDarkLightMode() {
                var darkMode = localStorage.getItem('darkMode') === 'true';
                var body = $('body');
                var textColor = darkMode ? '#ffffff' : '#000000';
                var bgColor = darkMode ? '#061414' : '#ffffff';

                body.css({
                    'background-color': bgColor,
                    'color': textColor
                });

                // Set styles for various elements
                $('.paragraph, .rich-text, .footer-link, .about-title, .title, .h2, .course-labels, .bonus-h2, .true-or-false-text, .slider-arrow-icon').css('color', textColor);
                $('.about-info-wrap').css('background-color', bgColor);
                $('.footer-logo-image').attr('src', darkMode ? 'https://uploads-ssl.webflow.com/65f0d5739b651eae06b2ca56/662831673fd2dec6eba4fecb_FST%20Logo-dark.png' : 'https://uploads-ssl.webflow.com/65f0d5739b651eae06b2ca56/6622cffa219b956a49edd98c_FST%20Logo-footer.png');

                // Add/remove classes for dark mode
                $('.dark-light-button, .icon-circle-dark').toggleClass('opaque-dark', darkMode);
                $('.icon-circle-light').toggleClass('opaque-light', darkMode);

                // Show/hide elements based on dark mode
                if (darkMode) {
                    $('.hero-image-wrap-light').hide();
                    $('.hero-image-wrap-dark').show();
                } else {
                    $('.hero-image-wrap-light').show();
                    $('.hero-image-wrap-dark').hide();
                }

                // Update local storage
                localStorage.setItem('darkMode', darkMode);
            }

            // Check and toggle dark-light mode on page load
            $(document).ready(function () {
                toggleDarkLightMode();
            });

            // Toggle dark-light mode on button click
            $('.dark-light-button').click(function () {
                var darkMode = localStorage.getItem('darkMode') === 'true';
                localStorage.setItem('darkMode', !darkMode);
                toggleDarkLightMode();
            });

            // Store dark-light mode selection in local storage when navigating to a different page
            $(window).on('beforeunload', function () {
                var darkMode = localStorage.getItem('darkMode') === 'true';
                localStorage.setItem('darkMode', darkMode);
            });

        });
    })(jQuery);
}
document.head.appendChild(jQueryScript);
