/**
 * If account creation successful, server redirects to index page,
 * else renders create account page
 */
module.exports = {
    name: "/create-account",
    method: "post",
    execute(req, res)
    {
        res.render("signup", req.query);
    }
};
