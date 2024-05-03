const path = require("path");
// const db = require(path.join(__dirname, "../database.cjs"));
const backgrounds = require(path.join(__dirname, "../backgrounds.json"));
const buildOptions = require(path.join(__dirname, "../buildOptions.json"));
/**
 * If account creation successful, server redirects to index page,
 * else renders create account page
 */
module.exports = {
    name: "/builder",
    method: "get",
    async execute(req, res)
    {
        if(!req.cookies.username)
        {
            res.redirect("/");
            return;
        }
        res.render("builder", {
            backgrounds: backgrounds,
            buildOptions: buildOptions
        });
    }
};
