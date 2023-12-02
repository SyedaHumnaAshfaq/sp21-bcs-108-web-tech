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
              email: true,
            },
            password: {
              required: true,
              minlength: 8,
            },
            confirmPassword: {
              required: true,
              equalTo: "#password",
            },
          },
          messages: {
            email: {
              required: "Please enter your email address",
              email: "Please enter a valid email address",
            },
            password: {
              required: "Please enter a password",
              minlength: "Password must be at least 8 characters long",
            },
            confirmPassword: {
              required: "Please confirm your password",
              equalTo: "Passwords do not match",
            },
          },
          errorElement: "span",
          submitHandler: function (form) {
            const email = $("#email").val();
            const password = $("#password").val();
            const data = {
              email: email,
              password: password,
            };
      
            fetch("http://localhost:3000/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((response) => response.json())
              .then((result) => {
                console.log(result);
                // Handle the result as needed
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          },
        });

        $("#loginform").validate({
            rules: {
                email: {
                required: true,
                email: true,
                },
                password: {
                required: true,
                },
            },
            messages: {
                email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address",
                },
                password: {
                required: "Please enter a password",
                },
            },
            errorElement: "span",
            submitHandler: function (form) {
                const email = $("#email").val();
                const password = $("#password").val();
                const data = {
                email: email,
                password: password,
                };
        
                fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if (res.status === 200) {
                window.location.href = "http://localhost:3000/articlevariety.html";
            } else {
                alert("Invalid Credentials");
            }
        });
            },
            });

        });
 




