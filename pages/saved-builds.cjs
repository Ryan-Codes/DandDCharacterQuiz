/**
 * Server retrieves saved builds and renders them on profile page
 */
module.exports = {
    name: "/saved-builds",
    method: "get",
    execute(req, res)
    {
        if(true || !req.cookies.username)
        {
            res.redirect("/");
            return;
        }
        //res.send('Welcome to the Dungeons and Dragons web server!');
    }
};
