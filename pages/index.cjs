/**
 * Server renders the index page
 * @author Cory Lillis
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
