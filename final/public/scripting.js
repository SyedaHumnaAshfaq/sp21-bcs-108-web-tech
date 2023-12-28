$(document).ready(function(){
    // Your jQuery code here
    console.log('jQuery is working!');
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
  });