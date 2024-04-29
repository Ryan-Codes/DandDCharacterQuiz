/**
 * Server renders the index page
 */
module.exports = {
    name: "/",
    method: "get",
    execute(req, res)
    {
        res.render("index");
    }
};
