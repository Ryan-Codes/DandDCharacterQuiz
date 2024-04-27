/**
 * Server renders the profile page
 */
module.exports = {
    name: "/profile",
    method: "get",
    execute(req, res)
    {
        res.send('fu');
    }
};
