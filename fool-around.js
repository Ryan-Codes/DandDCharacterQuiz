const fs = require("fs");
fs.readFile("./templates/index.html", (err, data) => { console.log(data); });