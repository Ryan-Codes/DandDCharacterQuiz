const path = require("path");
const { password_hash } = require(path.join(__dirname, "../password.cjs"));
/**
 * If login successful, server redirects to profile page,
 * else renders
 */
module.exports = {
    name: "/login",
    method: "post",
    async execute(req, res)
    {

        const db = require(path.join(__dirname, "../database.cjs"));
        if(req.body.username && req.body.password)
        {
            console.log(await password_hash(req.body.password));
            res.redirect("/profile");
        }
        res.render("login");
    }
};
