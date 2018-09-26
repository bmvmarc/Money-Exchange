
module.exports = function makeExchange(currency) {

    const curr = {};
    let amount = currency,
        count;

    if (amount > 0)
    {
        if (amount > 10000) {

            curr.error = "You are rich, my friend! We don't have so much coins for exchange";
        }
        else {

            count = (amount - amount % 50) / 50;

            if (count > 0){
                curr.H = count;
                amount = amount - count * 50;
            }
            
            count = (amount - amount % 25) / 25;

            if (count > 0){
                curr.Q = count;
                amount = amount - count * 25;
            }

            count = (amount - amount % 10) / 10;

            if (count > 0){
                curr.D = count;
                amount = amount - count * 10;
            }

            count = (amount - amount % 5) / 5;

            if (count > 0){
                curr.N = count;
                amount = amount - count * 5;
            }

            if (amount > 0){
                curr.P = amount;
            }

        }
    }
    return curr;
}

