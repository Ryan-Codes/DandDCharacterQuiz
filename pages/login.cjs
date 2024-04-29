const path = require("path");
const { password_hash, password_verify } = require(path.join(__dirname, "../password.cjs"));
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
        if(req.body.username)
        {
            let user = await db.getUser(req.body.username);
            console.log(user.password);
            if(password_verify(req.body.password, (await db.getUser(req.body.username)).password))
            // console.log(password_verify(req.body.password, (await db.getUser(req.body.username)).hash));
            {
                res.redirect("/profile");
                return;
            }
        }
        res.render("login");
    }
};
