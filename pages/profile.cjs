/**
 * Server renders the profile page
 */
module.exports = {
    name: "/profile",
    method: "get",
    execute(req, res)
    {
        const db = require("../database.js");
        let user = req.query.username
        res.render("profile", req.query);
    }
};
