const path = require("path");
const db = require(path.join(__dirname, "../database.cjs"));
/**
 * Server renders the profile page
 */
module.exports = {
    name: "/profile",
    method: "get",
    execute(req, res)
    {
        if(!req.cookies.username)
        {
            res.redirect("/");
            return;
        }
        let user = req.query.username;
        let pfp, bio;
        res.render("profile", {
            pfp: pfp ?? "/images/default.jpg",
            bio: bio ?? "About Me..."
        });
    }
};
