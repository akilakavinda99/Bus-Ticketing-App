const getTicketPrice = require('../src/utils/getTicketPrice');

const prices = {
    ac: 200,
    luxury: 150,
    normal: 100,
};

test('get ticket price according to the bus type', () => {
    expect(getTicketPrice(prices, 'ac')).toBe(200);
    expect(getTicketPrice(prices, 'luxury')).toBe(150);
    expect(getTicketPrice(prices, 'normal')).toBe(100);
});
