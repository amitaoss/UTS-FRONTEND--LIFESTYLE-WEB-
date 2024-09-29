$(document).ready(function() {

    // hide video dan memunculkannya ketika button di click based on the days
    $('.workout-vid').hide(); 

    
    $('.toggle-video').on('click', function() {
        var day = $(this).data('day'); 
        $('.' + day + '-videos .workout-vid').slideToggle(); 
    });

    // show pop-up message after submitting the form
    $('.signup-form').on('submit', function(event) {
        alert("Thank you for signing up! We are excited to start your Fit Lifestyle journey.");
    });
});

