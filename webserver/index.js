// Import required modules
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 by default

// Define routes
app.get("/", (req, res) => {
    res.send("Welcome to the Dungeons and Dragons web server!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
/*
route handler:
reads through all files in the pages/ folder,
where each module represents a page, containing the: name/route, request method, and response function
*/
for(const page of fs.readdirSync("./pages/"))
{
    app[page.method](page.name, page.execute(req, res));
}
