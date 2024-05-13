/**
 * Server logs out user and redirects to either profile or index page based on user's previous location
 * @author Cory Lillis
 */
module.exports = {
    name: "/logout",
    method: "post",
    execute(req, res)
    {
        res.clearCookie("username");
        res.redirect("/");
    }
};
