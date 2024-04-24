// Import required modules
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 by default

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the Dungeons and Dragons web server!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// const pageFiles = fs.readdirSync('./pages/').filter(file => file.endsWith('.js'));
// for(const pageFile of pageFiles)
// {
//     if(pageFile.method == "get")
//     {
//         app.get('/', pageFile.execute(req, res));
//         const command = require(`./pages/${file}`);
//             pages.set(command.name, command);
//     }
//     else if(pageFile.method == "post")
//     {
//         app.post('/', pageFile.execute(req, res));
//     }
// }
