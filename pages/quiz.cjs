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
        const questionNumber = (await db.getUser(req.cookies.username)).question;
        res.render("quiz", {
            question: (questionNumber + 1) + ". " + questions[questionNumber].question,
            answers: JSON.stringify(Object.keys(questions[questionNumber].answers)),
        });
        //res.send('Welcome to the Dungeons and Dragons web server!');
    }
};
