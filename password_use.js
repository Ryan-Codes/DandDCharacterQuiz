const { password_verify } = require("./password.js");
let username = "";//request
let password = "";//request
let users = {};//mongo

//login
var hash = users.findOne({username: username}).password;
if(await password_verify(password, hash))
{
    //
}

//create-account
const { password_hash } = require("./password.js");
var hash = await password_hash(password);
users.insertOne({username: username, password: hash});