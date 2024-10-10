$(document).ready(function() {

    // hide video dan memunculkannya ketika button di click based on the days
    $('.workout-vid').hide(); 
    
    $('.toggle-video').on('click', function() {
        var day = $(this).data('day'); 
        $('.' + day + '-videos .workout-vid').slideToggle(); 
    });

    // show pop-up message after submitting the form
    $('.signup-form').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Cek setiap kolom input
        let firstName = $('#first-name').val();
        let lastName = $('#last-name').val();
        let age = $('#age').val();
        let phoneNumber = $('#phone-number').val();
        let emailAddress = $('#email-address').val();
        let gender = $('#gender').val();

        // Menampilkan pesan alert jika ada kolom yang kosong
        if (!firstName) {
            showAlert('You haven\'t filled the First Name column!');
        } else if (!lastName) {
            showAlert('You haven\'t filled the Last Name column!');
        } else if (!age) {
            showAlert('You haven\'t filled the Age column!');
        } else if (!phoneNumber) {
            showAlert('You haven\'t filled the Phone Number column!');
        } else if (!emailAddress) {
            showAlert('You haven\'t filled the Email Address column!');
        } else if (!gender) {
            showAlert('You haven\'t choose your gender!');
        } else {
            alert("Thank you for signing up! We are excited to start your Fit Lifestyle journey.");
            this.submit(); 
        }
    });

    
    function showAlert(message) {
        let alertBox = $('<div class="custom-alert"><i class="fa fa-exclamation-triangle"></i> ' + message + '</div>');
        
        
        $('body').append(alertBox);
        
       
        alertBox.css({
            'position': 'fixed',
            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)',
            'background-color': '#f8d7da',
            'color': '#721c24',
            'padding': '20px',
            'border': '1px solid #f5c6cb',
            'border-radius': '10px',
            'box-shadow': '0 4px 8px rgba(0,0,0,0.1)',
            'z-index': '1000',
            'font-weight': 'bold',
            'text-align': 'center',
            'width': '300px',
            'display': 'none'
        });

        
        alertBox.fadeIn().delay(3000).fadeOut(function() {
            $(this).remove();
        });
    }

});

