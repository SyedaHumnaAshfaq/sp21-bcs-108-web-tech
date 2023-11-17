$(document).ready(function () {
    $("#subscribe").click(function () {
        $("#subscribeform").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                email: "Please enter a valid email address"
            },

            submitHandler: function (form) {
                
                alert("Thanks for Subscribing!");
                return false; 

            }
        })
    })
   
    $("#registration").validate({
        rules: {

            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {

            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"    
            },
            password: {
                required: "Please enter a password",
                minlength: "Password must be at least 8 characters long"
            },
            confirmPassword: {
                required: "Please confirm your password",
                equalTo: "Passwords do not match"
            }
        },
        Error: function(error,element){
            $(element).addClass("error");

        },
        submitHandler: function (form) {
          
            alert("Form submitted successfully!");
            return false; 
        }
    });
});



