const path = require("path");
const db = require(path.join(__dirname, "../database.cjs"));
const questions = require(path.join(__dirname, "../questions"));
/**
 * Server processes quiz data and redirects to profile page
 * @author Cory Lillis
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
                answers: Object.keys(questions[questionNumber].answers),
                result: ""
            });
        }
        else
        {
            let index = " ";
            let max = 0;
            for(const job of [ "Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"])
            {
                if(user[job.toLowerCase()] > max)
                {
                    index = job;
                    max = user[job.toLowerCase()];
                }
            }
            res.render("quiz", {
                question: "",
                answers: "",
                result: `Results: You are a${index === "Artificer" ? "n" : ""} ${index}!`
            });
        }
    }
};
