module.exports = {
    name: "/create-account",
    method: "post",
    execute(req, res)
    {
        res.send(require("../templates/signup.html"));
        //res.send('Welcome to the Dungeons and Dragons web server!');
    }
};
