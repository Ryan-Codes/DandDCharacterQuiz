/**
 * Server logs out user and redirects to either profile or index page based on user's previous location
 */
module.exports = {
    name: "/logout",
    method: "get",
    execute(req, res)
    {
        res.clearCookie("username");
        res.redirect("/");
    }
};
