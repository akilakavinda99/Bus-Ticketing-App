const {
  default: getInitialLongitudeDelta,
} = require('../src/utils/getInitialLongitude');

test('check if the returned value is not geting undefined', () => {
  const value = getInitialLongitudeDelta();
  expect(typeof value === 'undefined').toBe(true);
  expect(typeof value === 'number').toBe(true);
});
