$(document).ready(function() {
    $("#basic-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                //pattern: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            }
        }
    });
});