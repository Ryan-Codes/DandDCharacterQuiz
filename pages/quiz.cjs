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
        console.log(questions[(await db.getUser(req.cookies.username)).question].question);
        res.render("quiz", {
            question: questions[(await db.getUser(req.cookies.username)).question].question,
            a: Object.keys(questions[(await db.getUser(req.cookies.username)).question].answers).join(", ")
        });
        //res.send('Welcome to the Dungeons and Dragons web server!');
    }
};
