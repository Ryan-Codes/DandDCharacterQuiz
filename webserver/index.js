// Import required modules
// import express from "express"
// import mongoose from "mongoose"
const express = require("express");
const fs = require("fs");
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

//testing for mongo
// app.get("/getUsers", async(req, res)=>{
//    console.log(await UserModel.find());
//    res.send("userData");
// });

//const express = require("express");
//const fs = require("fs");
// Define routes
//app.get("/", (req, res) => {
//    res.send("Welcome to the Dungeons and Dragons web server!");
//});
const path = require("path");

app.set("views", path.join(__dirname, "../templates"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
// Start the server
app.listen(3000, () => {
   console.log(`Server is running on port ${3000}`);
});
for(const file of fs.readdirSync("../pages/"))
{
    const page = require(`../pages/${file}`);
    app[page.method](page.name, (req, res) => {
        page.execute(req, res);
    });
}