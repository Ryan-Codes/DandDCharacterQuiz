const bcrypt = require("bcrypt");
module.exports = {
    password_hash(password)
    {
        try
        {
            return bcrypt.hashSync(password, 10);
        }
        catch(error)
        {
            console.log(error)
        }
    },
    password_verify(password, hashedPassword)
    {
        try
        {
            return bcrypt.compareSync(password, hashedPassword);
        }
        catch(error)
        {
            console.log(error);
            return false;
        }
    }
};
