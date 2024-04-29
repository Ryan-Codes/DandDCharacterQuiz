const path = require("path");
const db = require(path.join(__dirname, "../database.cjs"));
const { password_hash } = require(path.join(__dirname, "../password.cjs"));
/**
 * If account creation successful, server redirects to index page,
 * else renders create account page
 */
module.exports = {
    name: "/create-account",
    method: "post",
    async execute(req, res)
    {
        if(req.body.username && req.body.password)
        {
            db.insertUser({
                "username": req.body.username,
                "password": req.body.password,
                "hash": password_hash(req.body.password),
                "question": 0,
                "artificer": 0,
                "barbarian": 0,
                "bard": 0,
                "cleric": 0,
                "druid": 0,
                "fighter": 0,
                "monk": 0,
                "paladin": 0,
                "ranger": 0,
                "rogue": 0,
                "sorcerer": 0,
                "warlock": 0,
                "wizard": 0
            });
            res.redirect("/");
            return;
        }
        res.render("signup", req.query);
    }
};
