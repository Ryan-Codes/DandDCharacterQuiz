const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DND");//.then(() => {
    // console.log("Database is connected successfully.");
// }).catch((error) => {
    // console.log(error)
// });

const userSchema = new mongoose.Schema({
    username: String,
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
    creator: String,
    name: String,
    level: Number,
    str: Number,
    dex: Number,
    con: Number,
    int: Number,
    wis: Number,
    cha: Number,
    class: String,
    Background: {
        type: String,
        required: false
    },
    Equipment: {
        type: [String],
        required: false
    },
    Proficiencies: {
        type: [String],
        required: false
    },
    Languages: {
        type: [String],
        required: false
    }
});

const UserModel = mongoose.model("users", userSchema);
const BuildModel = mongoose.model("builds", buildSchema);

// Get a user by username
async function getUser(username)
{
    try
    {
        return await UserModel.findOne({ username });
    }
    catch(error)
    {
        // console.log(error);
        return 0;
    }
}

// Insert a new user into the database
async function insertUser(newUser)
{
    try
    {
        const user = await UserModel.create(newUser);
        return user;
    }
    catch(error)
    {
        // console.log(error)
        return null;
    }
}

// Insert a new build for a user
async function insertBuild(username, newBuild)
{
    try
    {
        const user = await UserModel.findOneAndUpdate(
            { username },
            { $push: { builds: newBuild } },
            { new: true }
        );
        return user;
    }
    catch(error)
    {
        // console.log(error)
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
        // console.log(error)
        return null;
    }
}

async function resetUserStats(username)
{
    try
    {
        const user = await UserModel.findOneAndUpdate(
            { username },
            {
                $set: {
                    question: 0,
                    artificer: 0,
                    barbarian: 0,
                    bard: 0,
                    cleric: 0,
                    druid: 0,
                    fighter: 0,
                    monk: 0,
                    paladin: 0,
                    ranger: 0,
                    rogue: 0,
                    sorcerer: 0,
                    warlock: 0,
                    wizard: 0
                }
            },
            { new: true }
        );
        return user;
    }
    catch(error)
    {
        // console.log(error)
    }
}

async function getBuilds(username)
{
    try
    {
        return await BuildModel.find({ creator: username });
    }
    catch(error)
    {
        // console.log(error);
        return 0;
    }
}

module.exports = {
    getUser,
    insertUser,
    insertBuild,
    updateUserValues,
    resetUserStats,
    getBuilds
};

