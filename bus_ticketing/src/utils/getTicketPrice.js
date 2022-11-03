// Function returning prices of the bus according to the bus type.
const getTicketPrice = (prices, busType) => {
  if (busType === 'ac') {
    return prices.ac;
  } else if (busType === 'luxury') {
    return prices.luxury;
  } else {
    return prices.normal;
  }
};

module.exports = getTicketPrice;
