module.exports = {
    getRandomInt(max)
    {
        return Math.floor(Math.random() * Math.floor(max));
    },
    rollStat()
    {
        let sum = 0;
        for(let i = 0; i < 4; i++)
        {
            sum += Math.floor(Math.random() * Math.floor(6)) + 1;
        }
        return sum;
    }
};