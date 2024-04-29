const path = require("path");

const { getUser, insertUser, insertBuild, updateUserClassValues } = require(path.join(__dirname, "./database.js"));

// Get user by username
const username = 'John';
getUser(username).then(user => {
    console.log("User found:", user);
}).catch(error => {
    console.error("Error getting user:", error);
});

   // Usage example
const newUser = {
    username: 'newUser',
       // Other fields as needed
};
insertUser(newUser).then(user => {
    console.log("User inserted:", user);
}).catch(error => {
    console.error("Error inserting user:", error);
});

// Usage example
const newUsername = 'existingUser';
const newBuild = {
        // Build details
};
insertBuild(newUsername, newBuild).then(user => {
    console.log("Build inserted for user:", user);
}).catch(error => {
    console.error("Error inserting build:", error);
});


// Usage example
const updatedUsername = 'existingUser';
const classValuesToAdd = {
    barbarian: 1,
    wizard: 2,
        // Add other class values as needed
};
updateUserClassValues(updatedUsername, classValuesToAdd).then(user => {
    console.log("User class values updated:", user);
}).catch(error => {
    console.error("Error updating user class values:", error);
});
