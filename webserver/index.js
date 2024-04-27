// Import required modules
import express from "express"
import mongoose from "mongoose"

const app = express();


mongoose.connect("mongodb://localhost:27017/DND").then(() => {
    console.log("Database is connected successfully.");
    // app.listen(8000, () => {
    //     console.log(`Server is running on port 8000 `);
    // });  
})
.catch((error)=>console.log(error));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const UserModel = mongoose.model("users", userSchema);

//app.get("/getUsers", async(req, res)=>{
(async () => {
    console.log(await UserModel.find());
  //  res.json(userData);
})();


//const express = require("express");
//const fs = require("fs");
// Define routes
//app.get("/", (req, res) => {
//    res.send("Welcome to the Dungeons and Dragons web server!");
//});

// Start the server
//app.listen(PORT, () => {
 //   console.log(`Server is running on port ${PORT}`);
//});

//for(const page of fs.readdirSync("./pages/").filter(file => file.endsWith(".js")))
{
//    app[page.method](page.name, page.execute(req, res));
}