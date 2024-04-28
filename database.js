const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DND").then(() => {
    console.log("Database is connected successfully.");
}).catch((error) => console.log(error));

const userSchema = new mongoose.Schema({
    username: String,
    age: Number,
    // Other fields as needed
});

const UserModel = mongoose.model("users", userSchema);

// Get a user by username
async function getUser(username) {
    try {
        const user = await UserModel.findOne({ username });
        return user;
    } catch (error) {
        throw error;
    }
}

// Insert a new user into the database
async function insertUser(newUser) {
    try {
        const user = await UserModel.create(newUser);
        return user;
    } catch (error) {
        throw error;
    }
}

// Insert a new build for a user
async function insertBuild(username, newBuild) {
    try {
        const user = await UserModel.findOneAndUpdate(
            { username },
            { $push: { builds: newBuild } },
            { new: true }
        );
        return user;
    } catch (error) {
        throw error;
    }
}

// Update user class values
async function updateUserClassValues(username, classValuesToAdd) {
    try {
        const user = await UserModel.findOneAndUpdate(
            { username },
            { $inc: classValuesToAdd },
            { new: true }
        );
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUser,
    insertUser,
    insertBuild,
    updateUserClassValues
};

