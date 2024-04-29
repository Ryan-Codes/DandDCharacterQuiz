const path = require("path");
const { password_hash, password_verify } = require(path.join(__dirname, "../password.cjs"));
const db = require(path.join(__dirname, "../database.cjs"));
/**
 * If login successful, server redirects to profile page,
 * else renders
 */
module.exports = {
    name: "/login",
    method: "post",
    async execute(req, res)
    {

        if(req.body.username)
        {
            if(password_verify(req.body.password, (await db.getUser(req.body.username)).password))
            // if(password_verify(req.body.password, (await db.getUser(req.body.username)).hash))
            {
                res.cookie("username", req.body.username);
                res.redirect("/profile");
                return;
            }
        }
        res.render("login");
    }
};
