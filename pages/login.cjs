/**
 * If login successful, server redirects to profile page,
 * else renders
 */
module.exports = {
    name: "/login",
    method: "post",
    execute(req, res)
    {
        res.render("login", req.query);
    }
};
