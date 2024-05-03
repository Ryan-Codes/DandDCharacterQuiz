const path = require("path");
// const db = require(path.join(__dirname, "../database.cjs"));
/**
 * If account creation successful, server redirects to index page,
 * else renders create account page
 */
module.exports = {
    name: "/builder",
    method: "post",
    async execute(req, res)
    {
        if(!req.cookies.username)
        {
            res.redirect("/");
            return;
        }
        console.log(req.body);
        res.redirect("/builder");
        // res.render("builder", {
        //     backgrounds: backgrounds,
        //     buildOptions: buildOptions
        // });
    }
};
