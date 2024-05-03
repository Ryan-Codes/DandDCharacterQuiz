const path = require("path");
const db = require(path.join(__dirname, "../database.cjs"));
const { rollStat } = require(path.join(__dirname, "../randomInt.cjs"));
const buildOptions = require(path.join(__dirname, "../buildOptions.json"));
const statModifiers = require(path.join(__dirname, "../statModifiers.json"));
/**
 * If account creation successful, server redirects to index page,
 * else renders create account page
 */
module.exports = {
    name: "/builder",
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
            res.redirect("/quiz");
        }
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
        res.render("builder", {
            job: index,
            stats: {
                str: rollStat(),
                dex: rollStat(),
                con: rollStat(),
                int: rollStat(),
                wis: rollStat(),
                cha: rollStat()    
            },
            buildOptions: buildOptions,
            statModifiers: statModifiers
        });
    }
};
