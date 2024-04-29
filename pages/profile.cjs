const path = require("path");
/**
 * Server renders the profile page
 */
module.exports = {
    name: "/profile",
    method: "get",
    execute(req, res)
    {
        const db = require(path.join(__dirname, "../database.js"));
        let user = req.query.username
        res.render("profile", req.query);
    }
};
