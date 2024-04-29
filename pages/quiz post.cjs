const path = require("path");
const db = require(path.join(__dirname, "../database.cjs"));
const questions = require(path.join(__dirname, "../questions"));
/**
 * Server processes quiz data and redirects to profile page
 */
module.exports = {
    name: "/quiz",
    method: "post",
    async execute(req, res)
    {
        if(!req.cookies.username)
        {
            res.redirect("/");
            return;
        }
        if(req.body.reset)
        {
            db.resetUserStats(req.cookies.username);
            res.redirect("/quiz");
            return;
        }
        let values = questions[(await db.getUser(req.cookies.username)).question].answers[Object.keys(req.body)[0]];
        values.question = 1;
        db.updateUserValues(req.cookies.username, values);
        res.redirect("/quiz");
        //res.send('Welcome to the Dungeons and Dragons web server!');
    }
};
