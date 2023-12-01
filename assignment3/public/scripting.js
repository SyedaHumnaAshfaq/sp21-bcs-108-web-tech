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
                // minlength: "Password must be at least 8 characters long"
            },
            confirmPassword: {
                required: "Please confirm your password",
                equalTo: "Passwords do not match"
            }
        },
        Error: function (error, element) {
            $(element).addClass("error");

        },
        submitHandler: function (form) {

            alert("Form submitted successfully!");
            return false;
        }
    });
    // $("#Addtocart").click(function () {
    //     alert("Please Log In First");
    // });

    // $(".loginbtn").click(function (event) {
    //     event.preventDefault(); // Prevent the default form submission behavior

    //     const email = $("#email").val(); // Replace with the actual ID of your email input
    //     const password = $("#password").val(); // Replace with the actual ID of your password input

    //     fetch("/login", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ email, password }),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.success) {
    //             window.location.pathname = "/articlevariety.html";
    //             console.log("Login successful:", data);
    //         } else {
    //             // Display error message to the user
    //             console.error("Login error:", data.error);
    //         }
    //     })
    //     .catch(error => console.log("Login error:", error))
    // });
});





