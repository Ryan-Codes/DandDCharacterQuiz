const path = require("path");
const db = require(path.join(__dirname, "../database.cjs"));
const questions = require(path.join(__dirname, "../questions"));
/**
 * Server processes quiz data and redirects to profile page
 */
module.exports = {
    name: "/quiz",
    method: "get",
    async execute(req, res)
    {
        if(!req.cookies.username)
        {
            res.redirect("/");
            return;
        }
        console.log((await db.getUser(req.cookies.username)).question + 1);
        questions[(await db.getUser(req.cookies.username)).question]
        res.render("quiz", (await db.getUser(req.cookies.username)).question);
        //res.send('Welcome to the Dungeons and Dragons web server!');
    }
};
