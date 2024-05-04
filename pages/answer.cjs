const path = require("path");
const db = require(path.join(__dirname, "../database.cjs"));
const questions = require(path.join(__dirname, "../questions"));
/**
 * Server processes quiz data and redirects to profile page
 * @author Cory Lillis
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
        const user = await db.getUser(req.cookies.username);
        let values = {
            question: 1,
            artificer: 0,
            barbarian: 0,
            bard: 0,
            cleric: 0,
            druid: 0,
            fighter: 0,
            monk: 0,
            paladin: 0,
            ranger: 0,
            rogue: 0,
            sorcerer: 0,
            warlock: 0,
            wizard: 0
        };
        for(const entry of Object.entries(questions[user.question].answers[Object.keys(req.body)[0]]))
        {
            values[entry[0]] = entry[1];
        }
        db.updateUserValues(req.cookies.username, values);
        res.redirect("/quiz");
    }
};
