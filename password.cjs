const bcrypt = require("bcrypt");
module.exports = {
    async password_hash(password)
    {
        try
        {
            return await bcrypt.hash(password, 10);
        }
        catch(error)
        {
            throw error;
        }
    },
    async password_verify(password, hashedPassword)
    {
        try
        {
            return await bcrypt.compare(password, hashedPassword);
        }
        catch(error)
        {
            throw error;
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
