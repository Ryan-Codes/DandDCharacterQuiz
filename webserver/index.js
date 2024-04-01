// Import required modules
const express = require('express');
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
