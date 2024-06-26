const path = require("path");
const db = require(path.join(__dirname, "../database.cjs"));
/**
 * page used for processing data used for building the characters
 * @author Cory Lillis
 */
module.exports = {
    name: "/builder",
    method: "post",
    async execute(req, res)
    {
        if(!req.cookies.username)
        {
            res.redirect("/");
            return;
        }
        db.insertBuild({
            creator: req.cookies.username,
            name: req.body.name,
            level: req.body.level,
            str: req.body.str,
            dex: req.body.dex,
            con: req.body.con,
            int: req.body.int,
            wis: req.body.wis,
            cha: req.body.cha,
            class: req.body.class,
            Background: req.body.Background,
            Equipment: req.body.Equipment,
            Proficiencies: req.body.Proficiencies,
            Languages: req.body.Languages
        });
        db.resetUserStats(req.cookies.username);
        res.redirect("/profile");
    }
};
