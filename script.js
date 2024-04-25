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
    //retrieve information from form
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userName = document.getElementById('userName').value;
    //Use the variables to define user fields
    user.firstname = firstName;
    user.lastname = lastName;
    user.email = email;
    user.password = password;
    user.userName = userName;
    //Parse into JSON format
    JSON.stringify(user);
    //Store in database
    //redirect to dashboard or profile
});



