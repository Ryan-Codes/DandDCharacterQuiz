/**
 * Server renders the index page
 */
module.exports = {
    name: "/",
    method: "get",
    execute(req, res)
    {
        if(req.cookies.username)
        {
            res.redirect("/profile");
            return;
        }
        res.render("index");
    }
};
