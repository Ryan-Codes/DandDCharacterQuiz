const path = require("path");
const db = require(path.join(__dirname, "../database.cjs"));
const statModifiers = require(path.join(__dirname, "../statModifiers.json"));
/**
 * Server renders the profile page
 * @author Cory Lillis
 */
module.exports = {
    name: "/profile",
    method: "get",
    async execute(req, res)
    {
        if(!req.cookies.username)
        {
            res.redirect("/");
            return;
        }
        const builds = await db.getBuilds(req.cookies.username);
        let pfp, bio;
        res.render("profile", {
            username: req.cookies.username,
            builds: builds,
            pfp: pfp ?? "/images/default.jpg",
            bio: bio ?? "About Me...",
            statModifiers: statModifiers
        });
    }
};
