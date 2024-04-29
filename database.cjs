const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DND").then(() => {
    // console.log("Database is connected successfully.");
}).catch((error) => console.log(error));

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    hash: String,
    question: Number,
    artificer: Number,
    barbarian: Number,
    bard: Number,
    cleric: Number,
    druid: Number,
    fighter: Number,
    monk: Number,
    paladin: Number,
    ranger: Number,
    rogue: Number,
    sorcerer: Number,
    warlock: Number,
    wizard: Number
});
const buildSchema = new mongoose.Schema({
    name: String,
    level: Number,
    str: Number,
    dex: Number,
    con: Number,
    int: Number,
    wis: Number,
    cha: Number,
    class: String
});

const UserModel = mongoose.model("users", userSchema);

// Get a user by username
async function getUser(username){
    try
    {
        return await UserModel.findOne({ username });
    }
    catch (error)
    {
        console.log(error);
        return 0;
    }
}

// Insert a new user into the database
async function insertUser(newUser) {
    try {
        const user = await UserModel.create(newUser);
        return user;
    } catch (error) {
        return null;
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
        return null;
    }
}

// Update user class values
async function updateUserValues(username, valuesToAdd)
{
    try
    {
        const user = await UserModel.findOneAndUpdate(
            { username },
            { $inc: valuesToAdd },
            { new: true }
        );
        return user;
    }
    catch(error)
    {
        return null;
    }
}

module.exports = {
    getUser,
    insertUser,
    insertBuild,
    updateUserValues
};

