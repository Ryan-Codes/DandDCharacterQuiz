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
        const user = await db.getUser(req.cookies.username)
        const questionNumber = user.question;
        if(questionNumber < 15)
        {
            res.render("quiz", {
                question: (questionNumber + 1) + ". " + questions[questionNumber].question,
                answers: JSON.stringify(Object.keys(questions[questionNumber].answers)),
                result: ""
            });
        }
        else
        {
            let index = 0;
            let max = 0;
            for(const job of [ "artificer", "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"])
            {
                if(user[job] > max)
                {
                    index = job;
                    max = user[job];
                }
            }
            res.render("quiz", {
                question: "",
                answers: "",
                result: `You are a ${index}!`
            });
        }
        //res.send('Welcome to the Dungeons and Dragons web server!');
    }
};
