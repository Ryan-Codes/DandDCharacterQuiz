module.exports = {
    name: "/index",
    method: "get",
    execute(req, res)
    {
        res.send('Welcome to the Dungeons and Dragons web server!');
    }
};
