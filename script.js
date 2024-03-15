// script.js

// JavaScript code to change the heading color when clicked
document.addEventListener('DOMContentLoaded', function() {
    var heading = document.querySelector('h1');

    // Event listener to change the heading color when clicked
    heading.addEventListener('click', function() {
        // Generate a random color
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        // Change the heading color to the random color
        heading.style.color = randomColor;
    });
});
