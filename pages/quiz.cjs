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
        console.log(await db.insertUser({
            "username": "a",
            "password": "a",
            "hash": "a",
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
        }));
        console.log((await db.getUser(req.body.username)).question - 1);
        questions[(await db.getUser(req.body.username)).question - 1]
        res.render("quiz", (await db.getUser(req.body.username)).question);
        //res.send('Welcome to the Dungeons and Dragons web server!');
    }
};
