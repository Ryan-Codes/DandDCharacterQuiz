// Import required modules
const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
require("colors");
const cookieParser = require('cookie-parser');

app.set("views", path.join(__dirname, "../templates"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Start the server
app.listen(3000, () => {
   console.log(`Server is running on port ${3000}`.green);
});
for(const file of fs.readdirSync(path.join(__dirname, "../pages/")))
{
    const page = require(path.join(__dirname, `../pages/${file}`));
    app[false ? "get" : page.method](page.name, (req, res) => {
        // console.log(page.method + " " + page.name);
        // console.log(req.body);
        page.execute(req, res);
    });
}
