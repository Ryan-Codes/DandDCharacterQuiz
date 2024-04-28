/**
 * Server renders the index page
 */
module.exports = {
    name: "/",
    method: "get",
    execute(req, res)
    {
        res.render('index', req.query);
        // res.send('Welcome to the Dungeons and Dragons web server!');
    }
};
