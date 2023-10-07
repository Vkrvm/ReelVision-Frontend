// Function to handle keyboard arrow key presses
function handleKeyPress(event, slider) {
    if (event.key === 'ArrowLeft') {
        // Trigger a click on the previous button for the specific slider
        slider.find('.owl-prev').click();
    } else if (event.key === 'ArrowRight') {
        // Trigger a click on the next button for the specific slider
        slider.find('.owl-next').click();
    }
}

// Add a keyboard event listener to each movie carousel
jQuery('#movie-carousel-1 .owl-carousel').keydown(function(event) {
    handleKeyPress(event, jQuery('#movie-carousel-1'));
});

jQuery('#movie-carousel-2 .owl-carousel').keydown(function(event) {
    handleKeyPress(event, jQuery('#movie-carousel-2'));
});

jQuery('#movie-carousel-3 .owl-carousel').keydown(function(event) {
    handleKeyPress(event, jQuery('#movie-carousel-3'));
});

jQuery('#movie-carousel-4 .owl-carousel').keydown(function(event) {
    handleKeyPress(event, jQuery('#movie-carousel-4'));
});