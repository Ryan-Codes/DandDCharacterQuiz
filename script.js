const {MongoClient} = require('mongodb')


//Connect to our database
async function main() {

}

let user = {};

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    var formData = new FormData(this);

    //Retrieve Username and password from form and store them
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    //Compare with username and password in database
    //If both match, redirect to dashboard or profile
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    // iterate through the fields of the form
    for(const prop of [ "firstName", "lastName", "email", "password", "userName" ])
    {
        //retrieve information from form
        const val = document.getElementById(prop).value;
        //Use the variables to define user fields
        user[prop] = val;
    }
    //Parse into JSON format
    JSON.stringify(user);
    //Store in database
    //redirect to dashboard or profile
});



