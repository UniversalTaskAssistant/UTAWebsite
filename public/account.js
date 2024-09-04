$(document).ready(function() {
    let accounts = ['john.doe1234@gmail.com', 'emily.smith5678@gmail.com', 'alex.james7890@gmail.com', 'sarah.jones3456@gmail.com', 'michael.lee9876@gmail.com']
    let paswds = ['P7xL2nV9', 'Z3kJ9bT6', 'D6rM4qW8', 'H8nF2xC7', 'T9pL6yQ3']

    $('#delete-yes').click(function() {
        $('.account-container').slideUp()
        $('#success-message').fadeIn();
    });

    $('#submit').click(function (){
        // Get the values of username and password
        var username = $('#username').val().trim();
        var password = $('#password').val().trim();
        setTimeout(function (){
            // Check if username or password is empty
            if (username === '' || password === '') {
                alert('Username and password cannot be empty!');
            }
            else{
                const index = accounts.indexOf(username)
                if (index === -1){
                    alert('User account does not exist!')
                }
                else if(password !== paswds[index]){
                    alert('Incorrect password!')
                }
                else{
                    $('#confirmModal').modal('show')
                }
            }
        }, 1000)
    })
});