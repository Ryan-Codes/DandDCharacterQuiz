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
        let pfp, bio;
        res.render("profile", {
            username: req.cookies.username,
            pfp: pfp ?? "/images/default.jpg",
            bio: bio ?? "About Me..."
        });
    }
};
