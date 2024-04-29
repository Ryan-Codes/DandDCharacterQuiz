/**
 * Server processes quiz data and redirects to profile page
 */
module.exports = {
    name: "/quiz",
    method: "post",
    execute(req, res)
    {
        res.render("quiz", req.query);
        //res.send('Welcome to the Dungeons and Dragons web server!');
    }
};
