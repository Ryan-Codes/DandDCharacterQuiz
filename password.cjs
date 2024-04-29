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
            throw error;
        }
    },
    password_verify(password, hashedPassword)
    {
        return password === hashedPassword;
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
    // (async () => {
    //     const password = "password123";
    //     const hashedPassword = await password_hash(password);
    //     console.log("Hashed password:", hashedPassword);

    //     const isMatch = await password_verify(password, hashedPassword);
    //     console.log("Password matches:", isMatch);
    // })();
};
