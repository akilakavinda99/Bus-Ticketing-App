
const getTicketPrice = (prices, busType) => {
    if (busType === 'ac') {
        return prices.ac;
    } else if (busType === 'luxury') {
        return prices.luxury;
    } else {
        return prices.normal;
    }
};

export default getTicketPrice;
