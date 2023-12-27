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
    // authToken = '';

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
                    // "Authorisation" : "Bearer " + authToken,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            }).then((res) => {
                if (res.status === 200) {
                    window.location.href = "http://localhost:3000/articlevariety.html";
                    // authToken = res.token;
                    // console.log(authToken);
                    // return res.json();
                } else {
                    alert("Invalid Credentials");
                }
            });

        },
    });

    $("#seeUsers").click(function () {
        // console.log('authtoken',authToken);
        // if (!authToken) {
            // console.error("User not an admin. Please log in as admin.");
            // return;
          
        fetch("http://localhost:3000/api/users", {
            method: "GET",
            headers: {
                // 'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
            },
        }).then((res)=>{
                if (res.status === 200) {
                console.log(res);
                return res.json();
            }

            })
        });



        
        $("#addProductID").click(function(){
            events.preventDefault();
            $("#productform").validate({
                rules: {
                    title: {
                        required: true,
                        },
                    description: {
                        required: true,
                    },
                    price: {
                        required: true,
                       
                    },
                },
                messages: {
                    title: {
                        required: "Please enter title",
                        
                    },
                    description: {
                        required: "Please enter product description",
                      
                    },
                    price: {
                        required: "Please enter product price",
                    },
                },
                errorElement: "span",
            submitHandler: function (form) {
                const title = $("#title").val();
                const description = $("#description").val();
                const price = $("#price").val();
                const data = {
                    title: title,
                    description: description,
                    price: price,
                };
    
            fetch("http://localhost:3000/api/addProduct", {
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
        
        }
    })
    });

    $("#patchProductBtn").click(function(){
        events.preventDefault();
        $("#patchProductForm").validate({
            rules: {
                id: {
                    required: true,
                    },
                title: {
                    required: true,
                    },
                description: {
                    required: true,
                },
                price: {
                    required: true,
                   
                },
            },
            messages: {
                id: {
                    required: "Please enter product id",
                    
                },
                title: {
                    required: "Please enter title",
                    
                },
                description: {
                    required: "Please enter product description",
                  
                },
                price: {
                    required: "Please enter product price",
                },
            },
            errorElement: "span",
            submitHandler: function (form) {
                const id = $("#id").val();
                const title = $("#title").val();
                const description = $("#description").val();
                const price = $("#price").val();
                const data = {
                    id: id,
                    title: title,
                    description: description,
                    price: price,
                };
                fetch("http://localhost:3000/api/patchProduct", {
                method: "PATCH",
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
        
        }


    });



});

});



