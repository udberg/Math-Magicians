import operate from '../../logic/operate';

test('should add,divide,multiply,subtract and percentage of two numbers', () => {
  const add = operate('5', '10', '+');
  const minus = operate('15', '10', '-');
  const times = operate('5', '10', 'x');
  const divide = operate('5', '10', '/');
  const percent = operate('100', '10', '%');
  expect(add).toBe('15');
  expect(minus).toBe('5');
  expect(times).toBe('50');
  expect(divide).toBe('0.5');
  expect(percent).toBe('10');
});
