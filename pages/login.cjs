/**
 * If login successful, server redirects to profile page,
 * else renders
 */
module.exports = {
    name: "/login",
    method: "get",
    execute(req, res)
    {
        console.log(req.query);
        res.render("login", req.query);
    }
};
