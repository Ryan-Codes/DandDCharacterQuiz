// Import required modules
// import express from "express"
// import mongoose from "mongoose"
const express = require("express");
const app = express();


// mongoose.connect("mongodb://localhost:27017/DND").then(() => {
//     console.log("Database is connected successfully.");
// })
// .catch((error)=>console.log(error));

// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
// });

// const UserModel = mongoose.model("users", userSchema);

app.get("/getUsers", async(req, res)=>{
// (async () => {
    // console.log(await UserModel.find());
   res.send("userData");
});

//const express = require("express");
//const fs = require("fs");
// Define routes
//app.get("/", (req, res) => {
//    res.send("Welcome to the Dungeons and Dragons web server!");
//});

// Start the server
app.listen(3000, () => {
   console.log(`Server is running on port ${3000}`);
});
const fs = require("fs");
const pageNames = fs.readdirSync("../pages/");
for(const pageName of pageNames)
{
    const page = require(`../pages/${pageName}`);
    app[page.method](page.name, (req, res) => {
        page.execute(req, res);
    });
    console.log(`${page.method}: ${page.name}`);
}